// 每日涨跌幅数据
const dailyChangeRateData = [
  {
    "date": "2025-10-23",
    "value": 1.19,
    "upStockCount": 433,
    "downStockCount": 363,
    "limitUpCount": 72,
    "limitDownCount": 9,
    "volume": 16439.1
  },
  {
    "date": "2025-10-24",
    "value": 3.63,
    "upStockCount": 836,
    "downStockCount": 230,
    "limitUpCount": 71,
    "limitDownCount": 10,
    "volume": 19742.09
  },
  {
    "date": "2025-10-27",
    "value": 3.42,
    "upStockCount": 690,
    "downStockCount": 202,
    "limitUpCount": 63,
    "limitDownCount": 15,
    "volume": 23401.32
  },
  {
    "date": "2025-10-28",
    "value": 1.51,
    "upStockCount": 497,
    "downStockCount": 330,
    "limitUpCount": 71,
    "limitDownCount": 10,
    "volume": 21478.6
  },
  {
    "date": "2025-10-29",
    "value": 3.15,
    "upStockCount": 897,
    "downStockCount": 285,
    "limitUpCount": 66,
    "limitDownCount": 10,
    "volume": 22560.3
  },
  {
    "date": "2025-10-30",
    "value": 0.38,
    "upStockCount": 340,
    "downStockCount": 885,
    "limitUpCount": 61,
    "limitDownCount": 10,
    "volume": 24216.77
  },
  {
    "date": "2025-10-31",
    "value": 2.25,
    "upStockCount": 814,
    "downStockCount": 361,
    "limitUpCount": 76,
    "limitDownCount": 17,
    "volume": 23177.92
  },
  {
    "date": "2025-11-03",
    "value": 2.58,
    "upStockCount": 706,
    "downStockCount": 274,
    "limitUpCount": 90,
    "limitDownCount": 11,
    "volume": 21071.31
  },
  {
    "date": "2025-11-04",
    "value": 0.48,
    "upStockCount": 323,
    "downStockCount": 676,
    "limitUpCount": 67,
    "limitDownCount": 8,
    "volume": 19157.58
  },
  {
    "date": "2025-11-05",
    "value": 4.05,
    "upStockCount": 615,
    "downStockCount": 152,
    "limitUpCount": 83,
    "limitDownCount": 7,
    "volume": 18723.41
  },
  {
    "date": "2025-11-06",
    "value": 2.61,
    "upStockCount": 637,
    "downStockCount": 244,
    "limitUpCount": 72,
    "limitDownCount": 17,
    "volume": 20552.48
  },
  {
    "date": "2025-11-07",
    "value": 1.18,
    "upStockCount": 452,
    "downStockCount": 384,
    "limitUpCount": 63,
    "limitDownCount": 8,
    "volume": 19990.53
  },
  {
    "date": "2025-11-10",
    "value": 2.56,
    "upStockCount": 732,
    "downStockCount": 286,
    "limitUpCount": 92,
    "limitDownCount": 10,
    "volume": 21744.54
  },
  {
    "date": "2025-11-11",
    "value": 1.87,
    "upStockCount": 510,
    "downStockCount": 273,
    "limitUpCount": 82,
    "limitDownCount": 6,
    "volume": 19935.86
  },
  {
    "date": "2025-11-12",
    "value": 0.88,
    "upStockCount": 434,
    "downStockCount": 493,
    "limitUpCount": 77,
    "limitDownCount": 10,
    "volume": 19450.34
  },
  {
    "date": "2025-11-13",
    "value": 10.13,
    "upStockCount": 790,
    "downStockCount": 78,
    "limitUpCount": 104,
    "limitDownCount": 0,
    "volume": 20419.62
  },
  {
    "date": "2025-11-14",
    "value": 0.73,
    "upStockCount": 449,
    "downStockCount": 611,
    "limitUpCount": 89,
    "limitDownCount": 9,
    "volume": 19580.79
  },
  {
    "date": "2025-11-17",
    "value": 1.76,
    "upStockCount": 609,
    "downStockCount": 346,
    "limitUpCount": 100,
    "limitDownCount": 10,
    "volume": 19107.91
  },
  {
    "date": "2025-11-18",
    "value": 0.36,
    "upStockCount": 317,
    "downStockCount": 892,
    "limitUpCount": 62,
    "limitDownCount": 36,
    "volume": 19260.68
  },
  {
    "date": "2025-11-19",
    "value": 0.38,
    "upStockCount": 356,
    "downStockCount": 928,
    "limitUpCount": 64,
    "limitDownCount": 33,
    "volume": 17259.08
  },
  {
    "date": "2025-11-20",
    "value": 0.5,
    "upStockCount": 295,
    "downStockCount": 587,
    "limitUpCount": 49,
    "limitDownCount": 20,
    "volume": 17081.89
  },
  {
    "date": "2025-11-21",
    "value": 0.04,
    "upStockCount": 144,
    "downStockCount": 3756,
    "limitUpCount": 33,
    "limitDownCount": 99,
    "volume": 19656.61
  },
  {
    "date": "2025-11-24",
    "value": 5.28,
    "upStockCount": 1115,
    "downStockCount": 211,
    "limitUpCount": 79,
    "limitDownCount": 34,
    "volume": 17277.74
  },
  {
    "date": "2025-11-25",
    "value": 11.58,
    "upStockCount": 845,
    "downStockCount": 73,
    "limitUpCount": 95,
    "limitDownCount": 5,
    "volume": 18121.47
  },
  {
    "date": "2025-11-26",
    "value": 1.22,
    "upStockCount": 413,
    "downStockCount": 338,
    "limitUpCount": 76,
    "limitDownCount": 6,
    "volume": 17833.46
  },
  {
    "date": "2025-11-27",
    "value": 1.73,
    "upStockCount": 455,
    "downStockCount": 263,
    "limitUpCount": 63,
    "limitDownCount": 14,
    "volume": 17097.94
  },
  {
    "date": "2025-11-28",
    "value": 7.23,
    "upStockCount": 723,
    "downStockCount": 100,
    "limitUpCount": 81,
    "limitDownCount": 6,
    "volume": 15857.96
  },
  {
    "date": "2025-12-01",
    "value": 3.34,
    "upStockCount": 688,
    "downStockCount": 206,
    "limitUpCount": 76,
    "limitDownCount": 7,
    "volume": 18739.38
  },
  {
    "date": "2025-12-02",
    "value": 0.93,
    "upStockCount": 318,
    "downStockCount": 341,
    "limitUpCount": 54,
    "limitDownCount": 7,
    "volume": 15934.3
  },
  {
    "date": "2025-12-03",
    "value": 0.51,
    "upStockCount": 302,
    "downStockCount": 595,
    "limitUpCount": 54,
    "limitDownCount": 14,
    "volume": 16699.62
  },
  {
    "date": "2025-12-04",
    "value": 0.49,
    "upStockCount": 299,
    "downStockCount": 614,
    "limitUpCount": 39,
    "limitDownCount": 26,
    "volume": 15489.6
  },
  {
    "date": "2025-12-05",
    "value": 6.92,
    "upStockCount": 754,
    "downStockCount": 109,
    "limitUpCount": 80,
    "limitDownCount": 12,
    "volume": 17257.71
  },
  {
    "date": "2025-12-08",
    "value": 8.18,
    "upStockCount": 720,
    "downStockCount": 88,
    "limitUpCount": 78,
    "limitDownCount": 8,
    "volume": 20366.46
  },
  {
    "date": "2025-12-09",
    "value": 0.79,
    "upStockCount": 351,
    "downStockCount": 446,
    "limitUpCount": 54,
    "limitDownCount": 12,
    "volume": 19039.53
  },
  {
    "date": "2025-12-10",
    "value": 1.79,
    "upStockCount": 452,
    "downStockCount": 253,
    "limitUpCount": 60,
    "limitDownCount": 11,
    "volume": 17785.05
  },
  {
    "date": "2025-12-11",
    "value": 0.31,
    "upStockCount": 341,
    "downStockCount": 1088,
    "limitUpCount": 38,
    "limitDownCount": 29,
    "volume": 18571.13
  },
  {
    "date": "2025-12-12",
    "value": 1.88,
    "upStockCount": 630,
    "downStockCount": 336,
    "limitUpCount": 83,
    "limitDownCount": 26,
    "volume": 20922.06
  },
  {
    "date": "2025-12-15",
    "value": 0.91,
    "upStockCount": 464,
    "downStockCount": 512,
    "limitUpCount": 65,
    "limitDownCount": 24,
    "volume": 17734.39
  },
  {
    "date": "2025-12-16",
    "value": 0.24,
    "upStockCount": 297,
    "downStockCount": 1258,
    "limitUpCount": 46,
    "limitDownCount": 36,
    "volume": 17241.73
  },
  {
    "date": "2025-12-17",
    "value": 2.51,
    "upStockCount": 653,
    "downStockCount": 260,
    "limitUpCount": 57,
    "limitDownCount": 25,
    "volume": 18111.46
  },
  {
    "date": "2025-12-18",
    "value": 1.43,
    "upStockCount": 477,
    "downStockCount": 333,
    "limitUpCount": 73,
    "limitDownCount": 8,
    "volume": 16554.83
  },
  {
    "date": "2025-12-19",
    "value": 7.38,
    "upStockCount": 886,
    "limitUpCount": 82,
    "downStockCount": 120,
    "limitDownCount": 6,
    "volume": 17259.15
  }
]

// 选股结果数据
const stockResultsData = [
  {
    "date": "2025-12-09",
    "stockCode": "000977",
    "stockName": "浪潮信息",
    "prevClose": 62.69,
    "prevHigh": 64.3,
    "open": 66
  },
  {
    "date": "2025-12-09",
    "stockCode": "001287",
    "stockName": "中电港",
    "prevClose": 22.89,
    "prevHigh": 23.07,
    "open": 24.38
  },
  {
    "date": "2025-12-10",
    "stockCode": "603101",
    "stockName": "汇嘉时代",
    "prevClose": 9.63,
    "prevHigh": 9.78,
    "open": 10.59
  },
  {
    "date": "2025-12-10",
    "stockCode": "600196",
    "stockName": "复星医药",
    "prevClose": 27.45,
    "prevHigh": 27.77,
    "open": 28.45
  },
  {
    "date": "2025-12-10",
    "stockCode": "605376",
    "stockName": "博迁新材",
    "prevClose": 53.95,
    "prevHigh": 54.78,
    "open": 55.58
  },
  {
    "date": "2025-12-10",
    "stockCode": "603681",
    "stockName": "永冠新材",
    "prevClose": 19.22,
    "prevHigh": 19.54,
    "open": 19.94
  },
  {
    "date": "2025-12-10",
    "stockCode": "603518",
    "stockName": "锦泓集团",
    "prevClose": 10.25,
    "prevHigh": 10.35,
    "open": 10.58
  },
  {
    "date": "2025-12-10",
    "stockCode": "601086",
    "stockName": "国芳集团",
    "prevClose": 10.55,
    "prevHigh": 10.7,
    "open": 10.88
  },
  {
    "date": "2025-12-10",
    "stockCode": "300567",
    "stockName": "精测电子",
    "prevClose": 72.77,
    "prevHigh": 73.43,
    "open": 74.99
  },
  {
    "date": "2025-12-10",
    "stockCode": "002251",
    "stockName": "步步高",
    "prevClose": 5.23,
    "prevHigh": 5.33,
    "open": 5.66
  },
  {
    "date": "2025-12-10",
    "stockCode": "000759",
    "stockName": "中百集团",
    "prevClose": 7.72,
    "prevHigh": 7.85,
    "open": 8.02
  },
  {
    "date": "2025-12-11",
    "stockCode": "603135",
    "stockName": "中重科技",
    "prevClose": 9.48,
    "prevHigh": 9.53,
    "open": 9.86
  },
  {
    "date": "2025-12-11",
    "stockCode": "600156",
    "stockName": "华升股份",
    "prevClose": 9.05,
    "prevHigh": 9.38,
    "open": 9.96
  },
  {
    "date": "2025-12-11",
    "stockCode": "002838",
    "stockName": "道恩股份",
    "prevClose": 25.58,
    "prevHigh": 25.68,
    "open": 26
  },
  {
    "date": "2025-12-11",
    "stockCode": "000700",
    "stockName": "模塑科技",
    "prevClose": 11.08,
    "prevHigh": 11.28,
    "open": 11.59
  },
  {
    "date": "2025-12-12",
    "stockCode": "002256",
    "stockName": "兆新股份",
    "prevClose": 3.55,
    "prevHigh": 3.62,
    "open": 3.91
  },
  {
    "date": "2025-12-12",
    "stockCode": "600416",
    "stockName": "湘电股份",
    "prevClose": 14.19,
    "prevHigh": 14.39,
    "open": 14.57
  },
  {
    "date": "2025-12-15",
    "stockCode": "300423",
    "stockName": "昇辉科技",
    "prevClose": 8.55,
    "prevHigh": 8.74,
    "open": 8.84
  },
  {
    "date": "2025-12-15",
    "stockCode": "300141",
    "stockName": "和顺电气",
    "prevClose": 12.17,
    "prevHigh": 12.32,
    "open": 12.45
  },
  {
    "date": "2025-12-15",
    "stockCode": "300138",
    "stockName": "晨光生物",
    "prevClose": 12.68,
    "prevHigh": 12.82,
    "open": 12.98
  },
  {
    "date": "2025-12-15",
    "stockCode": "002389",
    "stockName": "航天彩虹",
    "prevClose": 22.76,
    "prevHigh": 23.13,
    "open": 23.4
  },
  {
    "date": "2025-12-15",
    "stockCode": "301548",
    "stockName": "崇德科技",
    "prevClose": 53,
    "prevHigh": 54,
    "open": 54.6
  },
  {
    "date": "2025-12-15",
    "stockCode": "301232",
    "stockName": "飞沃科技",
    "prevClose": 109.5,
    "prevHigh": 110.81,
    "open": 112.28
  },
  {
    "date": "2025-12-15",
    "stockCode": "300118",
    "stockName": "东方日升",
    "prevClose": 11.14,
    "prevHigh": 11.45,
    "open": 12.18
  },
  {
    "date": "2025-12-15",
    "stockCode": "301306",
    "stockName": "西测测试",
    "prevClose": 78.65,
    "prevHigh": 80,
    "open": 83.33
  },
  {
    "date": "2025-12-15",
    "stockCode": "603058",
    "stockName": "永吉分股",
    "prevClose": 9.2,
    "prevHigh": 9.59,
    "open": 10.12
  },
  {
    "date": "2025-12-16",
    "stockCode": "600686",
    "stockName": "金龙汽车",
    "prevClose": 17.21,
    "prevHigh": 17.75,
    "open": 18,
    "close": 16.1
  },
  {
    "date": "2025-12-16",
    "stockCode": "300698",
    "stockName": "万马科技",
    "prevClose": 39.69,
    "prevHigh": 40.57,
    "open": 42.32,
    "close": 40.79
  },
  {
    "date": "2025-12-17",
    "stockCode": "002536",
    "stockName": "飞龙股份",
    "prevClose": 25.08,
    "prevHigh": 25.39,
    "open": 27.58,
    "close": 27.59
  },
  {
    "date": "2025-12-17",
    "stockCode": "002969",
    "stockName": "嘉美包装",
    "prevClose": 4.56,
    "prevHigh": 4.65,
    "open": 5.02,
    "close": 5.02
  },
  {
    "date": "2025-12-18",
    "stockCode": "301421",
    "stockName": "波长光电",
    "prevClose": 112.29,
    "prevHigh": 114.3,
    "open": 119,
    "close": 106.41
  },
  {
    "date": "2025-12-18",
    "stockCode": "301392",
    "stockName": "汇成真空",
    "prevClose": 140.91,
    "prevHigh": 142.5,
    "open": 147,
    "close": 137.12
  },
  {
    "date": "2025-12-18",
    "stockCode": "601198",
    "stockName": "东兴证券",
    "prevClose": 13.13,
    "prevHigh": 13.6,
    "open": 14.44,
    "close": 14.44
  },
  {
    "date": "2025-12-18",
    "stockCode": "301133",
    "stockName": "金钟股份",
    "prevClose": 33.88,
    "prevHigh": 33.94,
    "open": 35.68,
    "close": 37.2
  },
  {
    "date": "2025-12-18",
    "stockCode": "301408",
    "stockName": "华人健康",
    "prevClose": 18.2,
    "prevHigh": 19.31,
    "open": 20.35,
    "close": 21.84
  },
  {
    "date": "2025-12-19",
    "stockCode": "603977",
    "stockName": "国泰集团",
    "prevClose": 12.92,
    "prevHigh": 13.28,
    "open": 13.56,
    "close": 14.21
  }
]

const aiData = [
  {
    "date": "2025-12-15",
    "deepseek": {
      "upStockCount": "620",
      "downStockCount": "320",
      "limitUpCount": "88",
      "limitDownCount": "16",
      "volume": "20500"
    },
    "gpt": {
      "upStockCount": "520",
      "downStockCount": "405",
      "limitUpCount": "48",
      "limitDownCount": "18",
      "volume": "18300"
    },
    "grok": {
      "upStockCount": "812",
      "downStockCount": "178",
      "limitUpCount": "96",
      "limitDownCount": "14",
      "volume": "21780"
    },
    "gemini": {
      "upStockCount": "450",
      "downStockCount": "350",
      "limitUpCount": "70",
      "limitDownCount": "20",
      "volume": "18500"
    },
    "doubao": {
      "upStockCount": "520",
      "downStockCount": "350",
      "limitUpCount": "65",
      "limitDownCount": "18",
      "volume": "19500"
    },
    "yuanbao": {
      "upStockCount": "",
      "downStockCount": "",
      "limitUpCount": "",
      "limitDownCount": "",
      "volume": ""
    },
    "scores": {
      "deepseek": 72.88,
      "gpt": 82.82,
      "grok": 59.88,
      "gemini": 87.48,
      "doubao": 84.71,
      "yuanbao": 0
    }
  },
  {
    "date": "2025-12-16",
    "deepseek": {
      "upStockCount": "560",
      "downStockCount": "438",
      "limitUpCount": "75",
      "limitDownCount": "19",
      "volume": "18500"
    },
    "gpt": {
      "upStockCount": "561",
      "downStockCount": "340",
      "limitUpCount": "72",
      "limitDownCount": "16",
      "volume": "18650"
    },
    "grok": {
      "upStockCount": "580",
      "downStockCount": "420",
      "limitUpCount": "75",
      "limitDownCount": "15",
      "volume": "19500"
    },
    "gemini": {
      "upStockCount": "750",
      "downStockCount": "850",
      "limitUpCount": "70",
      "limitDownCount": "8",
      "volume": "18500"
    },
    "doubao": {
      "upStockCount": "428",
      "downStockCount": "576",
      "limitUpCount": "59",
      "limitDownCount": "22",
      "volume": "18650.2"
    },
    "yuanbao": {
      "upStockCount": "720",
      "downStockCount": "420",
      "limitUpCount": "95",
      "limitDownCount": "22",
      "volume": "20500"
    },
    "scores": {
      "deepseek": 59.03,
      "gpt": 56.15,
      "grok": 55.2,
      "gemini": 57.66,
      "doubao": 69.34,
      "yuanbao": 53.65
    }
  },
  {
    "date": "2025-12-17",
    "deepseek": {
      "upStockCount": "520",
      "downStockCount": "480",
      "limitUpCount": "62",
      "limitDownCount": "18",
      "volume": "17800"
    },
    "gpt": {
      "upStockCount": "420",
      "downStockCount": "620",
      "limitUpCount": "52",
      "limitDownCount": "18",
      "volume": "17800"
    },
    "grok": {
      "upStockCount": "580",
      "downStockCount": "420",
      "limitUpCount": "72",
      "limitDownCount": "18",
      "volume": "19200"
    },
    "gemini": {
      "upStockCount": "420",
      "downStockCount": "380",
      "limitUpCount": "52",
      "limitDownCount": "15",
      "volume": "16800"
    },
    "doubao": {
      "upStockCount": "320",
      "downStockCount": "750",
      "limitUpCount": "55",
      "limitDownCount": "12",
      "volume": "17000"
    },
    "yuanbao": {
      "upStockCount": "215",
      "downStockCount": "1082",
      "limitUpCount": "43",
      "limitDownCount": "22",
      "volume": "17532.45"
    },
    "scores": {
      "deepseek": 79.2,
      "gpt": 73.55,
      "grok": 79.24,
      "gemini": 75.35,
      "doubao": 64.41,
      "yuanbao": 63.44
    }
  },
  {
    "date": "2025-12-18",
    "deepseek": {
      "upStockCount": "580",
      "downStockCount": "320",
      "limitUpCount": "52",
      "limitDownCount": "18",
      "volume": "18500"
    },
    "gpt": {
      "upStockCount": "520",
      "downStockCount": "380",
      "limitUpCount": "60",
      "limitDownCount": "22",
      "volume": "18000"
    },
    "grok": {
      "upStockCount": "580",
      "downStockCount": "380",
      "limitUpCount": "68",
      "limitDownCount": "18",
      "volume": "18800"
    },
    "gemini": {
      "upStockCount": "480",
      "downStockCount": "380",
      "limitUpCount": "62",
      "limitDownCount": "18",
      "volume": "17500"
    },
    "doubao": {
      "upStockCount": "590",
      "downStockCount": "320",
      "limitUpCount": "56",
      "limitDownCount": "27",
      "volume": "18650"
    },
    "yuanbao": {
      "upStockCount": "543",
      "downStockCount": "300",
      "limitUpCount": "41",
      "limitDownCount": "32",
      "volume": "18150.2"
    },
    "scores": {
      "deepseek": 76.7,
      "gpt": 77.98,
      "grok": 79.11,
      "gemini": 82.2,
      "doubao": 74.41,
      "yuanbao": 70.06
    }
  },
  {
    "date": "2025-12-19",
    "deepseek": {
      "upStockCount": "520",
      "downStockCount": "280",
      "limitUpCount": "68",
      "limitDownCount": "10",
      "volume": "17300"
    },
    "gpt": {
      "upStockCount": "420",
      "downStockCount": "430",
      "limitUpCount": "60",
      "limitDownCount": "14",
      "volume": "16000"
    },
    "grok": {
      "upStockCount": "420",
      "downStockCount": "390",
      "limitUpCount": "62",
      "limitDownCount": "12",
      "volume": "16200"
    },
    "gemini": {
      "upStockCount": "320",
      "downStockCount": "580",
      "limitUpCount": "55",
      "limitDownCount": "15",
      "volume": "17100"
    },
    "doubao": {
      "upStockCount": "445",
      "downStockCount": "360",
      "limitUpCount": "71",
      "limitDownCount": "9",
      "volume": "17200"
    },
    "yuanbao": {
      "upStockCount": "492",
      "downStockCount": "328",
      "limitUpCount": "68",
      "limitDownCount": "12",
      "volume": "16872.4"
    },
    "scores": {
      "deepseek": 68.85,
      "gpt": 56.81,
      "grok": 59.53,
      "gemini": 52.59,
      "doubao": 67.29,
      "yuanbao": 64.56
    }
  },
  {
    "date": "2025-12-22",
    "deepseek": {
      "upStockCount": "620",
      "downStockCount": "240",
      "limitUpCount": "70",
      "limitDownCount": "12",
      "volume": "17800"
    },
    "gpt": {
      "upStockCount": "680",
      "downStockCount": "260",
      "limitUpCount": "78",
      "limitDownCount": "12",
      "volume": "17800"
    },
    "grok": {
      "upStockCount": "620",
      "downStockCount": "280",
      "limitUpCount": "75",
      "limitDownCount": "10",
      "volume": "17800"
    },
    "gemini": {
      "upStockCount": "520",
      "downStockCount": "340",
      "limitUpCount": "78",
      "limitDownCount": "11",
      "volume": "19200"
    },
    "doubao": {
      "upStockCount": "445",
      "downStockCount": "360",
      "limitUpCount": "71",
      "limitDownCount": "9",
      "volume": "17200"
    },
    "yuanbao": {
      "upStockCount": "683",
      "downStockCount": "247",
      "limitUpCount": "59",
      "limitDownCount": "14",
      "volume": "17189.2"
    },
    "scores": {
      "deepseek": 0,
      "gpt": 0,
      "grok": 0,
      "gemini": 0,
      "doubao": 0,
      "yuanbao": 0
    }
  }
]
