import json
import os
import sys
from datetime import datetime

def update_data_js(data_js_path, json_path1, json_path2, json_path3):
    """
    从指定路径读取三个JSON文件，将内容替换到data.js的三个变量中
    
    参数：
    data_js_path: data.js文件的路径
    json_path1: 替换dailyChangeRateData的JSON文件路径
    json_path2: 替换stockResultsData的JSON文件路径
    json_path3: 替换aiData的JSON文件路径
    """
    
    # 添加调试信息
    print(f"在update_data_js函数中，data_js_path: {data_js_path}")
    
    # 读取三个JSON文件
    with open(json_path1, 'r', encoding='utf-8') as f1:
        daily_data = json.load(f1)
    
    with open(json_path2, 'r', encoding='utf-8') as f2:
        stock_data = json.load(f2)
    
    with open(json_path3, 'r', encoding='utf-8') as f3:
        ai_data = json.load(f3)
    
    # 使用更简单可靠的方法替换变量：直接构建新的文件内容
    new_content = ''
    
    # 构建新的文件内容
    new_content += '// 每日涨跌幅数据\n'
    new_content += f'const dailyChangeRateData = {json.dumps(daily_data, ensure_ascii=False, indent=2)}\n\n'
    new_content += '// 选股结果数据\n'
    new_content += f'const stockResultsData = {json.dumps(stock_data, ensure_ascii=False, indent=2)}\n\n'
    new_content += f'const aiData = {json.dumps(ai_data, ensure_ascii=False, indent=2)}\n'
    
    # 写回data.js文件
    with open(data_js_path, 'w', encoding='utf-8') as f:
        bytes_written = f.write(new_content)
    print(f"成功写入文件，写入了 {bytes_written} 字节")
    
    # 立即读取文件，验证是否写入成功
    with open(data_js_path, 'r', encoding='utf-8') as f:
        verify_content = f.read()
    print(f"写入后立即读取的内容前100个字符: {verify_content[:100]}")
    
    print(f"成功更新data.js文件，替换了三个变量的数据")
    print(f"dailyChangeRateData 来自: {json_path1}")
    print(f"stockResultsData 来自: {json_path2}")
    print(f"aiData 来自: {json_path3}")

if __name__ == "__main__":
    # 获取当前脚本所在目录
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # 默认路径设置为当前目录，可以根据需要修改
    data_js_path = os.path.join(current_dir, "data.js")
    
    # 添加调试信息
    print(f"当前脚本所在目录: {current_dir}")
    print(f"data.js文件路径: {data_js_path}")
    print(f"data.js文件是否存在: {os.path.exists(data_js_path)}")
    
    # 获取今天的日期，格式为YYYY-MM-DD
    today = datetime.now().strftime("%Y-%m-%d")
    print(f"今天的日期: {today}")
    
    # 固定路径模板
    base_path = "C:\\Users\\yuxi.wang\\Downloads\\"
    
    # 生成三个JSON文件的完整路径
    # 注意：根据用户要求，三个文件的映射关系如下：
    # AI预测数据 -> aiData
    # 每日涨跌幅数据 -> dailyChangeRateData
    # 选股结果数据 -> stockResultsData
    json_path3 = f"{base_path}AI预测数据_{today}.json"  # AI预测数据 -> aiData
    json_path1 = f"{base_path}每日涨跌幅数据_{today}.json"  # 每日涨跌幅数据 -> dailyChangeRateData
    json_path2 = f"{base_path}选股结果数据_{today}.json"  # 选股结果数据 -> stockResultsData
    
    # 添加调试信息
    print(f"AI预测数据文件路径: {json_path3}")
    print(f"AI预测数据文件是否存在: {os.path.exists(json_path3)}")
    print(f"每日涨跌幅数据文件路径: {json_path1}")
    print(f"每日涨跌幅数据文件是否存在: {os.path.exists(json_path1)}")
    print(f"选股结果数据文件路径: {json_path2}")
    print(f"选股结果数据文件是否存在: {os.path.exists(json_path2)}")
    
    # 检查文件是否存在
    if not os.path.exists(data_js_path):
        print(f"错误：找不到data.js文件，路径：{data_js_path}")
    elif not os.path.exists(json_path1):
        print(f"错误：找不到每日涨跌幅数据JSON文件，路径：{json_path1}")
    elif not os.path.exists(json_path2):
        print(f"错误：找不到选股结果数据JSON文件，路径：{json_path2}")
    elif not os.path.exists(json_path3):
        print(f"错误：找不到AI预测数据JSON文件，路径：{json_path3}")
    else:
        # 执行更新
        print("开始更新data.js文件...")
        update_data_js(data_js_path, json_path1, json_path2, json_path3)
        print("更新完成！")