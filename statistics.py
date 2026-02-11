import json
import re
from collections import Counter

def extract_stock_results_data(file_path):
    """
    从 data.js 文件中提取 stockResultsData 数据
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_pattern = r'const stockResultsData\s*=\s*\['
    start_match = re.search(start_pattern, content)
    
    if not start_match:
        print("未找到 stockResultsData")
        return None
    
    start_pos = start_match.end() - 1
    
    bracket_count = 1
    end_pos = start_pos + 1
    
    while end_pos < len(content) and bracket_count > 0:
        char = content[end_pos]
        if char == '[':
            bracket_count += 1
        elif char == ']':
            bracket_count -= 1
        end_pos += 1
    
    data_str = content[start_pos:end_pos]
    
    try:
        data = json.loads(data_str)
        return data
    except json.JSONDecodeError as e:
        print(f"JSON 解析失败: {e}")
        print("尝试使用 eval 解析...")
        try:
            data = eval(data_str)
            return data
        except Exception as e2:
            print(f"eval 解析失败: {e2}")
            return None

def count_stock_occurrences(stock_results_data):
    """
    统计每个不同 stockCode 出现的次数
    """
    if not stock_results_data:
        return {}
    
    stock_codes = [item.get('stockCode') for item in stock_results_data if item.get('stockCode')]
    return Counter(stock_codes)

def sort_by_occurrence(stock_counts):
    """
    按照出现次数从大到小排序
    """
    return sorted(stock_counts.items(), key=lambda x: x[1], reverse=True)

def count_open_below_close(stock_results_data):
    """
    统计 open 价格低于 close 价格的股票数量
    过滤掉没有 close 价格或 open 价格的数据
    """
    if not stock_results_data:
        return []
    
    filtered_stocks = []
    for item in stock_results_data:
        open_price = item.get('open')
        close_price = item.get('close')
        
        if open_price is not None and close_price is not None:
            if open_price < close_price:
                filtered_stocks.append({
                    'stockCode': item.get('stockCode'),
                    'stockName': item.get('stockName'),
                    'open': open_price,
                    'close': close_price,
                    'date': item.get('date')
                })
    
    return filtered_stocks

def main():
    data_file = 'data.js'
    
    print("=" * 50)
    print("股票代码出现次数统计")
    print("=" * 50)
    
    stock_results_data = extract_stock_results_data(data_file)
    
    if stock_results_data:
        print(f"\n成功读取 stockResultsData，共 {len(stock_results_data)} 条记录\n")
        
        stock_counts = count_stock_occurrences(stock_results_data)
        sorted_results = sort_by_occurrence(stock_counts)
        
        filtered_results = [(stock_code, count) for stock_code, count in sorted_results if count > 1]
        
        print("股票代码出现次数统计（按出现次数降序排列，只显示出现次数>1的股票）：")
        print("-" * 50)
        print(f"{'排名':<6}{'股票代码':<12}{'股票名称':<12}{'出现次数':<10}")
        print("-" * 50)
        
        if filtered_results:
            for rank, (stock_code, count) in enumerate(filtered_results, 1):
                stock_name = next((item.get('stockName', '') for item in stock_results_data if item.get('stockCode') == stock_code), '')
                print(f"{rank:<6}{stock_code:<12}{stock_name:<12}{count:<10}")
        else:
            print("没有出现次数大于1的股票")
        
        print("-" * 50)
        print(f"\n总计：{len(sorted_results)} 个不同的股票代码")
        print(f"其中出现次数>1的股票：{len(filtered_results)} 个")
        
        print("\n" + "=" * 50)
        print("Open 价格低于 Close 价格的股票统计")
        print("=" * 50)
        
        open_below_close_stocks = count_open_below_close(stock_results_data)
        
        print(f"\nOpen 价格低于 Close 价格的股票数量：{len(open_below_close_stocks)} 条")
        
        if open_below_close_stocks:
            print("\n详细列表：")
            print("-" * 80)
            print(f"{'日期':<12}{'股票代码':<10}{'股票名称':<12}{'Open价格':<12}{'Close价格':<12}{'涨幅(%)':<10}")
            print("-" * 80)
            
            for stock in open_below_close_stocks:
                open_price = stock['open']
                close_price = stock['close']
                change_percent = ((close_price - open_price) / open_price) * 100
                print(f"{stock['date']:<12}{stock['stockCode']:<10}{stock['stockName']:<12}{open_price:<12.2f}{close_price:<12.2f}{change_percent:<10.2f}")
            
            print("-" * 80)
        
        return sorted_results
    else:
        print("未能读取数据")
        return None

if __name__ == "__main__":
    main()
