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
  }
]