# -*- coding: utf-8 -*-
"""
Created on Wed Mar  5 13:28:29 2025
@author: CHENGJUN
"""

from nt import read
import struct
import json
import re
from datetime import datetime, timedelta
import os
import glob
from multiprocessing import Pool, cpu_count


def read_day_file(file_path, today=None):
    """
    读取日线文件并解析数据，只返回指定日期的数据。

    参数：
    file_path (str): 日线文件的路径。
    today (str): 要过滤的日期，格式为"YYYY-MM-DD"。如果为None，则返回所有数据。

    返回值：
    list: 解析后的数据列表，每个元素是一个字典，包含日期、开盘价、最高价、最低价、收盘价、成交额和成交量。
    """
    # 列名列表
    cols = ["timestamps", "open", "high", "low", "close", "volume", "amount"]
    
    # 如果指定了日期，将其转换为整数格式以提高比较效率
    today_int = None
    if today:
        today_int = int(today.replace("-", ""))

    # 使用with语句打开文件，确保文件在读取后正确关闭
    with open(file_path, "rb") as ofile:
        # 读取文件内容
        buf = ofile.read()

    # 只解析和返回今日数据，避免处理整个文件
    items = []
    for record in struct.iter_unpack("IIIIIfII", buf):
        # 如果指定了日期，先检查日期是否匹配
        if today_int and record[0] != today_int:
            continue
        
        # 解析匹配的记录
        items.append({
            cols[0]: datetime.strptime(str(record[0]), "%Y%m%d").strftime(
                "%Y-%m-%d"
            ),  # 日期
            cols[1]: str(record[1] / 100.0),  # 开盘价（保留原始精度）
            cols[2]: str(record[2] / 100.0),  # 最高价（保留原始精度）
            cols[3]: str(record[3] / 100.0),  # 最低价（保留原始精度）
            cols[4]: str(record[4] / 100.0),  # 收盘价（保留原始精度）
            cols[5]: str(record[6] / 100.0),  # 成交量
            cols[6]: str(record[5]),  # 成交额
        })

    return items


def process_single_file(args):
    """
    处理单个文件并返回统计结果。
    
    参数：
    args: 包含day_file和today的元组
    
    返回：
    dict: 单个文件的统计结果
    """
    day_file, today, today_pre = args
    file_stats = {
        "total_stocks": 0,
        "skipped_stocks": 0,
        "up_3percent": 0,
        "down_3percent": 0,
        "limit_up": 0,
        "limit_down": 0,
        "limit_up_stocks": [],
        "limit_down_stocks": []
    }
    
    try:
        file_name = os.path.basename(day_file)
        stock_code = file_name.replace(".day", "")
        
        # 读取.day文件，同时过滤今日数据
        data = read_day_file(day_file, today)
        # 获取前一日数据
        data_pre1 = read_day_file(day_file, today_pre)

        if data and len(data) > 0:
            # 直接使用列表数据，避免创建DataFrame
            today_data = data[0]
            close_price = float(today_data["close"])
            
            # 前一日收盘价
            close_price_pre1 = float(data_pre1[0]["close"]) if data_pre1 and len(data_pre1) > 0 else 0

            # 计算涨跌幅 = （当前价 - 前收盘价） / 前收盘价 × 100%
            if close_price_pre1 > 0:
                change_percent = ((close_price - close_price_pre1) / close_price_pre1) * 100
            else:
                change_percent = 0
            if stock_code == 'sz002693':
                print(f'股票代码: {stock_code}, 今日收盘价: {close_price}, 前一日收盘价: {close_price_pre1}, 涨跌幅: {change_percent:.2f}%')

            # 跳过退市股票(400开头)
            if stock_code.startswith('400'):
                file_stats['skipped_stocks'] = 1
                return file_stats
            
            file_stats["total_stocks"] = 1

            # 判断是否达到3%涨跌幅
            if change_percent >= 3:
                file_stats["up_3percent"] = 1
            if change_percent <= -3:
                file_stats["down_3percent"] = 1

            # 获取股票类型(60、00、30、688、83、87、88、9开头，或ST类)
            limit_up_threshold = 10.0
            limit_down_threshold = -10.0

            # 检查是否为ST股票
            is_st = False
            if "st" in file_name.lower() or "*st" in file_name.lower():
                is_st = True

            if is_st:
                # ST类股票，涨跌幅限制5%
                limit_up_threshold = 5.0
                limit_down_threshold = -5.0
            elif stock_code.startswith(("bj83", "bj87", "bj88", "bj92")):
                # 北交所股票，涨跌幅限制30%
                limit_up_threshold = 30.0
                limit_down_threshold = -30.0
            elif stock_code.startswith(("sz30", "sh68")):
                # 创业板、科创板，涨跌幅限制20%
                limit_up_threshold = 20.0
                limit_down_threshold = -20.0
            elif stock_code.startswith(("sh60", "sz00")):
                # 主板股票，涨跌幅限制10%
                limit_up_threshold = 10.0
                limit_down_threshold = -10.0

            # 判断是否涨停或跌停
            if change_percent >= limit_up_threshold:
                file_stats["limit_up"] += 1
                file_stats["limit_up_stocks"].append(stock_code)
            if change_percent <= limit_down_threshold:
                file_stats["limit_down"] += 1
                file_stats["limit_down_stocks"].append(stock_code)

        return file_stats

    except Exception as e:
        print(f"  错误：处理文件 {os.path.basename(day_file)} 时出错: {str(e)}")
        return file_stats


def process_all_exchanges(root_dir):
    """
    遍历三个交易所目录(sh、sz、bj)并处理所有day文件。

    参数：
    root_dir (str): 包含交易所目录的根目录路径。
    """
    # 初始化统计数据
    stats = {
        "up_3percent": 0,  # 收盘价大于等于开盘价3%
        "down_3percent": 0,  # 收盘价小于等于开盘价-3%
        "limit_up": 0,  # 涨停家数
        "limit_down": 0,  # 跌停家数
        "total_stocks": 0,  # 总统计股票数
        "skipped_stocks": 0,  # 跳过的股票数(退市)
        "limit_up_stocks": [],  # 涨停股票列表
        "limit_down_stocks": [],  # 跌停股票列表
    }

    # 创建输出目录
    output_dir = os.path.join(root_dir, "output")
    os.makedirs(output_dir, exist_ok=True)

    # 遍历每个交易所目录
    exchanges = ["sh", "sz", "bj"]
    today = "2025-12-03"
    today_pre = "2025-12-02"
    print(f"今日日期: {today}, 前一日日期: {today_pre}")
    
    # 收集所有需要处理的文件
    all_day_files = []
    valid_prefixes = {'sh60', 'sz00', 'bj92', 'sh688', 'bj83', 'bj87', 'bj88', 'sz30'}
    
    for exchange in exchanges:
        exchange_dir = os.path.join(root_dir, exchange)
        if not os.path.exists(exchange_dir):
            print(f"警告：交易所目录 {exchange_dir} 不存在，跳过处理。")
            continue

        print(f"正在处理 {exchange.upper()} 交易所目录: {exchange_dir}")

        # 查找所有.day文件
        day_files = glob.glob(os.path.join(exchange_dir, "**", "*.day"), recursive=True)

        if not day_files:
            print(f"警告：在 {exchange_dir} 中未找到.day文件。")
            continue

        print(f"找到 {len(day_files)} 个.day文件")
        
        # 过滤有效文件
        for day_file in day_files:
            file_name = os.path.basename(day_file)
            if file_name[:4] in valid_prefixes:
                all_day_files.append(day_file)
    
    print(f"\n总共找到 {len(all_day_files)} 个有效.day文件需要处理")
    
    # 使用多进程并行处理文件
    num_processes = cpu_count()  # 获取CPU核心数
    print(f"使用 {num_processes} 个进程并行处理")
    
    with Pool(num_processes) as pool:
        # 准备参数列表
        args_list = [(file, today, today_pre) for file in all_day_files]
        
        # 并行处理所有文件
        results = pool.map(process_single_file, args_list)
    
    # 合并所有结果
    for result in results:
        stats["total_stocks"] += result["total_stocks"]
        stats["skipped_stocks"] += result["skipped_stocks"]
        stats["up_3percent"] += result["up_3percent"]
        stats["down_3percent"] += result["down_3percent"]
        stats["limit_up"] += result["limit_up"]
        stats["limit_down"] += result["limit_down"]
        stats["limit_up_stocks"].extend(result["limit_up_stocks"])
        stats["limit_down_stocks"].extend(result["limit_down_stocks"])

    # 打印统计结果
    print("\n" + "=" * 50)
    print(f"今日({today})股票数据统计结果")
    print("=" * 50)
    print(f"总统计股票数: {stats['total_stocks']}")
    print(f"跳过的退市股票数: {stats['skipped_stocks']}")
    print(f"收盘价大于等于开盘价3%的股票数: {stats['up_3percent']}")
    print(f"收盘价小于等于开盘价-3%的股票数: {stats['down_3percent']}")
    print(f"涨停家数: {stats['limit_up']}")
    print(f"跌停家数: {stats['limit_down']}")
    print(f"涨停股票列表: {stats['limit_up_stocks']}")
    print(f"跌停股票列表: {stats['limit_down_stocks']}")
    print("=" * 50)

    # 将统计结果保存为JSON文件，供图表使用
    chart_data = {
        "date": today,
        "value": 0,  # 涨跌幅比例，后续会计算
        "upStockCount": stats["up_3percent"],
        "downStockCount": stats["down_3percent"],
        "limitUpCount": stats["limit_up"],
        "limitDownCount": stats["limit_down"],
    }

    # 计算涨跌幅比例
    if stats["down_3percent"] > 0:
        chart_data["value"] = round(stats["up_3percent"] / stats["down_3percent"], 2)
    else:
        chart_data["value"] = 999.99

    # 保存到JSON文件
    output_file = os.path.join(output_dir, f"daily_stats_{today}.json")
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(chart_data, f, ensure_ascii=False, indent=2)

    print(f"\n统计结果已保存到: {output_file}")

    # 如果存在历史统计文件，合并数据
    history_file = os.path.join(output_dir, "all_daily_stats.json")
    if os.path.exists(history_file):
        with open(history_file, "r", encoding="utf-8") as f:
            all_stats = json.load(f)
    else:
        all_stats = []

    # 更新或添加今日数据
    existing_index = next(
        (i for i, item in enumerate(all_stats) if item["date"] == today), -1
    )
    if existing_index != -1:
        all_stats[existing_index] = chart_data
    else:
        all_stats.append(chart_data)

    # 按日期排序
    all_stats.sort(key=lambda x: x["date"])

    # 保存合并后的数据
    with open(history_file, "w", encoding="utf-8") as f:
        json.dump(all_stats, f, ensure_ascii=False, indent=2)

    print(f"历史统计数据已更新到: {history_file}")


if __name__ == "__main__":
    # 设置根目录，默认为当前目录
    root_dir = r"C:\Users\yuxi.wang\Downloads\hsjday"
    print(f"开始处理，根目录: {root_dir}")
    process_all_exchanges(root_dir)
