import requests
import zipfile
import io
import json

# 使用示例
url = "https://data.tdx.com.cn/vipdoc/hsjday.zip"
download_path = "hsjday.zip"


def download_zip_with_requests(url, save_path=None):
    """
    下载 ZIP 包

    Args:
        url: ZIP 文件的 URL
        save_path: 保存路径，如果为 None 则不保存到文件
    """
    try:
        # accept
        accept_header = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
        headers = {
            "Referer": "https://www.tdx.com.cn/article/vipdata.html",
            "Sec-Ch-Ua": "\"Chromium\";v=\"142\", \"Google Chrome\";v=\"142\", \"Not_A Brand\";v=\"99\"",
            "Sec-Ch-Ua-Mobile": "?0",
            "Accept": accept_header,
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-site",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": "1",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Connection": "keep-alive",
            "Host": "data.tdx.com.cn",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        }

        # 发送 GET 请求
        print(f"正在下载: {url}")
        response = requests.get(url, stream=False, timeout=30, headers=headers)
        response.raise_for_status()  # 检查请求是否成功
        print(f"Response code: {response.status_code}")
        print(f"Response headers: {response.headers}")
        print(f"Response content: {response.content}")

        # 获取文件大小
        file_size = int(response.headers.get("Content-Length", 0))
        print(f"文件大小: {file_size / 1024 / 1024:.2f} MB")

        # 如果指定了保存路径
        if save_path:
            with open(save_path, "wb") as f:
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        f.write(chunk)
            print(f"文件已保存到: {save_path}")

            # 如果需要解压
            # with zipfile.ZipFile(save_path, 'r') as zip_ref:
            #     zip_ref.extractall('extracted_folder')

            return save_path
        else:
            # 直接返回二进制内容
            return response.content

    except requests.exceptions.RequestException as e:
        print(f"下载失败: {e}")
        return None


# 或者只获取内容
# zip_content = download_zip_with_requests(url)

# main
if __name__ == "__main__":
    # 下载并保存到文件
    download_zip_with_requests(url, download_path)
