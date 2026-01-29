// 每日涨跌幅数据
const dailyChangeRateData = [
  {
    "date": "2025-10-23",
    "value": 1.19,
    "upStockCount": 433,
    "downStockCount": 363,
    "limitUpCount": 72,
    "limitDownCount": 9,
    "volume": 16439.1,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 0,
    "totalStockCount": 0,
    "profitEffect": 0
  },
  {
    "date": "2025-10-24",
    "value": 3.63,
    "upStockCount": 836,
    "downStockCount": 230,
    "limitUpCount": 71,
    "limitDownCount": 10,
    "volume": 19742.09,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 0,
    "totalStockCount": 0,
    "profitEffect": 0
  },
  {
    "date": "2025-10-27",
    "value": 3.42,
    "upStockCount": 690,
    "downStockCount": 202,
    "limitUpCount": 63,
    "limitDownCount": 15,
    "volume": 23401.32,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 0,
    "totalStockCount": 0,
    "profitEffect": 0
  },
  {
    "date": "2025-10-28",
    "value": 1.51,
    "upStockCount": 497,
    "downStockCount": 330,
    "limitUpCount": 71,
    "limitDownCount": 10,
    "volume": 21478.6,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 0,
    "totalStockCount": 0,
    "profitEffect": 0
  },
  {
    "date": "2025-10-29",
    "value": 3.15,
    "upStockCount": 897,
    "downStockCount": 285,
    "limitUpCount": 66,
    "limitDownCount": 10,
    "volume": 22560.3,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 0,
    "totalStockCount": 0,
    "profitEffect": 0
  },
  {
    "date": "2025-10-30",
    "value": 0.38,
    "upStockCount": 340,
    "downStockCount": 885,
    "limitUpCount": 61,
    "limitDownCount": 10,
    "volume": 24216.77,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 0,
    "totalStockCount": 0,
    "profitEffect": 0
  },
  {
    "date": "2025-10-31",
    "value": 2.25,
    "upStockCount": 814,
    "downStockCount": 361,
    "limitUpCount": 76,
    "limitDownCount": 17,
    "volume": 23177.92,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 0,
    "totalStockCount": 0,
    "profitEffect": 0
  },
  {
    "date": "2025-11-03",
    "value": 2.58,
    "upStockCount": 706,
    "downStockCount": 274,
    "limitUpCount": 90,
    "limitDownCount": 11,
    "volume": 21071.31,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 0,
    "totalStockCount": 0,
    "profitEffect": 0
  },
  {
    "date": "2025-11-04",
    "value": 0.48,
    "upStockCount": 323,
    "downStockCount": 676,
    "limitUpCount": 67,
    "limitDownCount": 8,
    "volume": 19157.58,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 0,
    "totalStockCount": 0,
    "profitEffect": 0
  },
  {
    "date": "2025-11-05",
    "value": 4.05,
    "upStockCount": 615,
    "downStockCount": 152,
    "limitUpCount": 83,
    "limitDownCount": 7,
    "volume": 18723.41,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 0,
    "totalStockCount": 0,
    "profitEffect": 0
  },
  {
    "date": "2025-11-06",
    "value": 2.61,
    "upStockCount": 637,
    "downStockCount": 244,
    "limitUpCount": 72,
    "limitDownCount": 17,
    "volume": 20552.48,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 2880,
    "totalStockCount": 5434,
    "profitEffect": 0.5299963194700037
  },
  {
    "date": "2025-11-07",
    "value": 1.18,
    "upStockCount": 452,
    "downStockCount": 384,
    "limitUpCount": 63,
    "limitDownCount": 8,
    "volume": 19990.53,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 2101,
    "totalStockCount": 5436,
    "profitEffect": 0.3864974245768948
  },
  {
    "date": "2025-11-10",
    "value": 2.56,
    "upStockCount": 732,
    "downStockCount": 286,
    "limitUpCount": 92,
    "limitDownCount": 10,
    "volume": 21744.54,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 3376,
    "totalStockCount": 5439,
    "profitEffect": 0.6207023349880493
  },
  {
    "date": "2025-11-11",
    "value": 1.87,
    "upStockCount": 510,
    "downStockCount": 273,
    "limitUpCount": 82,
    "limitDownCount": 6,
    "volume": 19935.86,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 2785,
    "totalStockCount": 5439,
    "profitEffect": 0.5120426548997978
  },
  {
    "date": "2025-11-12",
    "value": 0.88,
    "upStockCount": 434,
    "downStockCount": 493,
    "limitUpCount": 77,
    "limitDownCount": 10,
    "volume": 19450.34,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 1758,
    "totalStockCount": 5441,
    "profitEffect": 0.3231023708877045
  },
  {
    "date": "2025-11-13",
    "value": 10.13,
    "upStockCount": 790,
    "downStockCount": 78,
    "limitUpCount": 104,
    "limitDownCount": 0,
    "volume": 20419.62,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 3952,
    "totalStockCount": 5440,
    "profitEffect": 0.7264705882352941
  },
  {
    "date": "2025-11-14",
    "value": 0.73,
    "upStockCount": 449,
    "downStockCount": 611,
    "limitUpCount": 89,
    "limitDownCount": 9,
    "volume": 19580.79,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 1961,
    "totalStockCount": 5438,
    "profitEffect": 0.3606105185730048
  },
  {
    "date": "2025-11-17",
    "value": 1.76,
    "upStockCount": 609,
    "downStockCount": 346,
    "limitUpCount": 100,
    "limitDownCount": 10,
    "volume": 19107.91,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 2584,
    "totalStockCount": 5437,
    "profitEffect": 0.4752620930660291
  },
  {
    "date": "2025-11-18",
    "value": 0.36,
    "upStockCount": 317,
    "downStockCount": 892,
    "limitUpCount": 62,
    "limitDownCount": 36,
    "volume": 19260.68,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 1277,
    "totalStockCount": 5440,
    "profitEffect": 0.2347426470588235
  },
  {
    "date": "2025-11-19",
    "value": 0.38,
    "upStockCount": 356,
    "downStockCount": 928,
    "limitUpCount": 64,
    "limitDownCount": 33,
    "volume": 17259.08,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 1200,
    "totalStockCount": 5442,
    "profitEffect": 0.2205071664829107
  },
  {
    "date": "2025-11-20",
    "value": 0.5,
    "upStockCount": 295,
    "downStockCount": 587,
    "limitUpCount": 49,
    "limitDownCount": 20,
    "volume": 17081.89,
    "maxConsecutive": 0,
    "limitUpRate": 0,
    "positiveStockCount": 1453,
    "totalStockCount": 5441,
    "profitEffect": 0.2670464988053667
  },
  {
    "date": "2025-11-21",
    "value": 0.04,
    "upStockCount": 144,
    "downStockCount": 3756,
    "limitUpCount": 33,
    "limitDownCount": 99,
    "volume": 19656.61,
    "maxConsecutive": 6,
    "limitUpRate": 0.58,
    "positiveStockCount": 354,
    "totalStockCount": 5444,
    "profitEffect": 0.065025716385011
  },
  {
    "date": "2025-11-24",
    "value": 5.28,
    "upStockCount": 1115,
    "downStockCount": 211,
    "limitUpCount": 79,
    "limitDownCount": 34,
    "volume": 17277.74,
    "maxConsecutive": 7,
    "limitUpRate": 0.77,
    "positiveStockCount": 4228,
    "totalStockCount": 5440,
    "profitEffect": 0.7772058823529412
  },
  {
    "date": "2025-11-25",
    "value": 11.58,
    "upStockCount": 845,
    "downStockCount": 73,
    "limitUpCount": 95,
    "limitDownCount": 5,
    "volume": 18121.47,
    "maxConsecutive": 5,
    "limitUpRate": 0.75,
    "positiveStockCount": 4300,
    "totalStockCount": 5438,
    "profitEffect": 0.7907318867230599
  },
  {
    "date": "2025-11-26",
    "value": 1.22,
    "upStockCount": 413,
    "downStockCount": 338,
    "limitUpCount": 76,
    "limitDownCount": 6,
    "volume": 17833.46,
    "maxConsecutive": 5,
    "limitUpRate": 0.75,
    "positiveStockCount": 1692,
    "totalStockCount": 5434,
    "profitEffect": 0.3113728376886272
  },
  {
    "date": "2025-11-27",
    "value": 1.73,
    "upStockCount": 455,
    "downStockCount": 263,
    "limitUpCount": 63,
    "limitDownCount": 14,
    "volume": 17097.94,
    "maxConsecutive": 4,
    "limitUpRate": 0.61,
    "positiveStockCount": 2790,
    "totalStockCount": 5434,
    "profitEffect": 0.513433934486566
  },
  {
    "date": "2025-11-28",
    "value": 7.23,
    "upStockCount": 723,
    "downStockCount": 100,
    "limitUpCount": 81,
    "limitDownCount": 6,
    "volume": 15857.96,
    "maxConsecutive": 5,
    "limitUpRate": 0.72,
    "positiveStockCount": 4122,
    "totalStockCount": 5433,
    "profitEffect": 0.7586968525676422
  },
  {
    "date": "2025-12-01",
    "value": 3.34,
    "upStockCount": 688,
    "downStockCount": 206,
    "limitUpCount": 76,
    "limitDownCount": 7,
    "volume": 18739.38,
    "maxConsecutive": 6,
    "limitUpRate": 0.7,
    "positiveStockCount": 3398,
    "totalStockCount": 5432,
    "profitEffect": 0.6255522827687776
  },
  {
    "date": "2025-12-02",
    "value": 0.93,
    "upStockCount": 318,
    "downStockCount": 341,
    "limitUpCount": 54,
    "limitDownCount": 7,
    "volume": 15934.3,
    "maxConsecutive": 7,
    "limitUpRate": 0.71,
    "positiveStockCount": 1544,
    "totalStockCount": 5436,
    "profitEffect": 0.2840323767476085
  },
  {
    "date": "2025-12-03",
    "value": 0.51,
    "upStockCount": 302,
    "downStockCount": 595,
    "limitUpCount": 54,
    "limitDownCount": 14,
    "volume": 16699.62,
    "maxConsecutive": 6,
    "limitUpRate": 0.66,
    "positiveStockCount": 1443,
    "totalStockCount": 5442,
    "profitEffect": 0.2651598676957001
  },
  {
    "date": "2025-12-04",
    "value": 0.49,
    "upStockCount": 299,
    "downStockCount": 614,
    "limitUpCount": 39,
    "limitDownCount": 26,
    "volume": 15489.6,
    "maxConsecutive": 4,
    "limitUpRate": 0.59,
    "positiveStockCount": 1455,
    "totalStockCount": 5440,
    "profitEffect": 0.2674632352941176
  },
  {
    "date": "2025-12-05",
    "value": 6.92,
    "upStockCount": 754,
    "downStockCount": 109,
    "limitUpCount": 80,
    "limitDownCount": 12,
    "volume": 17257.71,
    "maxConsecutive": 4,
    "limitUpRate": 0.78,
    "positiveStockCount": 4387,
    "totalStockCount": 5438,
    "profitEffect": 0.8067304155939684
  },
  {
    "date": "2025-12-08",
    "value": 8.18,
    "upStockCount": 720,
    "downStockCount": 88,
    "limitUpCount": 78,
    "limitDownCount": 8,
    "volume": 20366.46,
    "maxConsecutive": 5,
    "limitUpRate": 0.73,
    "positiveStockCount": 3409,
    "totalStockCount": 5440,
    "profitEffect": 0.6266544117647059
  },
  {
    "date": "2025-12-09",
    "value": 0.79,
    "upStockCount": 351,
    "downStockCount": 446,
    "limitUpCount": 54,
    "limitDownCount": 12,
    "volume": 19039.53,
    "maxConsecutive": 6,
    "limitUpRate": 0.7,
    "positiveStockCount": 1308,
    "totalStockCount": 5441,
    "profitEffect": 0.2403969858481897
  },
  {
    "date": "2025-12-10",
    "value": 1.79,
    "upStockCount": 452,
    "downStockCount": 253,
    "limitUpCount": 60,
    "limitDownCount": 11,
    "volume": 17785.05,
    "maxConsecutive": 6,
    "limitUpRate": 0.67,
    "positiveStockCount": 2435,
    "totalStockCount": 5438,
    "profitEffect": 0.4477749172489886
  },
  {
    "date": "2025-12-11",
    "value": 0.31,
    "upStockCount": 341,
    "downStockCount": 1088,
    "limitUpCount": 38,
    "limitDownCount": 29,
    "volume": 18571.13,
    "maxConsecutive": 5,
    "limitUpRate": 0.56,
    "positiveStockCount": 1032,
    "totalStockCount": 5442,
    "profitEffect": 0.1896361631753032
  },
  {
    "date": "2025-12-12",
    "value": 1.88,
    "upStockCount": 630,
    "downStockCount": 336,
    "limitUpCount": 83,
    "limitDownCount": 26,
    "volume": 20922.06,
    "maxConsecutive": 5,
    "limitUpRate": 0.87,
    "positiveStockCount": 2683,
    "totalStockCount": 5444,
    "profitEffect": 0.4928361498897869
  },
  {
    "date": "2025-12-15",
    "value": 0.91,
    "upStockCount": 464,
    "downStockCount": 512,
    "limitUpCount": 65,
    "limitDownCount": 24,
    "volume": 17734.39,
    "maxConsecutive": 6,
    "limitUpRate": 0.63,
    "positiveStockCount": 2314,
    "totalStockCount": 5443,
    "profitEffect": 0.4251331986037112
  },
  {
    "date": "2025-12-16",
    "value": 0.24,
    "upStockCount": 297,
    "downStockCount": 1258,
    "limitUpCount": 46,
    "limitDownCount": 36,
    "volume": 17241.73,
    "maxConsecutive": 4,
    "limitUpRate": 0.69,
    "positiveStockCount": 1091,
    "totalStockCount": 5445,
    "profitEffect": 0.2003673094582185
  },
  {
    "date": "2025-12-17",
    "value": 2.51,
    "upStockCount": 653,
    "downStockCount": 260,
    "limitUpCount": 57,
    "limitDownCount": 25,
    "volume": 18111.46,
    "maxConsecutive": 5,
    "limitUpRate": 0.71,
    "positiveStockCount": 3626,
    "totalStockCount": 5446,
    "profitEffect": 0.665809768637532
  },
  {
    "date": "2025-12-18",
    "value": 1.43,
    "upStockCount": 477,
    "downStockCount": 333,
    "limitUpCount": 73,
    "limitDownCount": 8,
    "volume": 16554.83,
    "maxConsecutive": 6,
    "limitUpRate": 0.76,
    "positiveStockCount": 2845,
    "totalStockCount": 5449,
    "profitEffect": 0.5221141493852083
  },
  {
    "date": "2025-12-19",
    "value": 7.38,
    "upStockCount": 886,
    "downStockCount": 120,
    "limitUpCount": 82,
    "limitDownCount": 6,
    "volume": 17259.15,
    "maxConsecutive": 6,
    "limitUpRate": 0.76,
    "positiveStockCount": 4477,
    "totalStockCount": 5448,
    "profitEffect": 0.821769456681351
  },
  {
    "date": "2025-12-22",
    "value": 4.24,
    "upStockCount": 700,
    "downStockCount": 165,
    "limitUpCount": 105,
    "limitDownCount": 8,
    "volume": 18619.4,
    "maxConsecutive": 7,
    "limitUpRate": 0.68,
    "positiveStockCount": 2984,
    "totalStockCount": 5444,
    "profitEffect": 0.5481263776634827
  },
  {
    "date": "2025-12-23",
    "value": 0.81,
    "upStockCount": 399,
    "downStockCount": 495,
    "limitUpCount": 68,
    "limitDownCount": 15,
    "volume": 18998.41,
    "maxConsecutive": 8,
    "limitUpRate": 0.72,
    "positiveStockCount": 1512,
    "totalStockCount": 5449,
    "profitEffect": 0.27748210680858876
  },
  {
    "date": "2025-12-24",
    "value": 9.29,
    "upStockCount": 799,
    "downStockCount": 86,
    "limitUpCount": 86,
    "limitDownCount": 6,
    "volume": 18802.68,
    "maxConsecutive": 9,
    "limitUpRate": 0.78,
    "positiveStockCount": 4128,
    "totalStockCount": 5451,
    "profitEffect": 0.7572922399559714
  },
  {
    "date": "2025-12-25",
    "value": 6.3,
    "upStockCount": 731,
    "downStockCount": 116,
    "limitUpCount": 93,
    "limitDownCount": 2,
    "volume": 19245.23,
    "maxConsecutive": 10,
    "limitUpRate": 0.76,
    "positiveStockCount": 3773,
    "totalStockCount": 5454,
    "profitEffect": 0.6917858452511918
  },
  {
    "date": "2025-12-26",
    "value": 2.71,
    "upStockCount": 532,
    "downStockCount": 196,
    "limitUpCount": 92,
    "limitDownCount": 3,
    "volume": 21601.91,
    "maxConsecutive": 11,
    "limitUpRate": 0.81,
    "positiveStockCount": 1866,
    "totalStockCount": 5453,
    "profitEffect": 0.3421969558041445
  },
  {
    "date": "2025-12-29",
    "value": 1.2,
    "upStockCount": 519,
    "downStockCount": 434,
    "limitUpCount": 87,
    "limitDownCount": 25,
    "volume": 21393.38,
    "maxConsecutive": 12,
    "limitUpRate": 0.74,
    "positiveStockCount": 1995,
    "totalStockCount": 5455,
    "profitEffect": 0.36571952337305225
  },
  {
    "date": "2025-12-30",
    "value": 1.29,
    "upStockCount": 489,
    "downStockCount": 380,
    "limitUpCount": 66,
    "limitDownCount": 19,
    "volume": 21426.19,
    "maxConsecutive": 10,
    "limitUpRate": 0.67,
    "positiveStockCount": 1840,
    "totalStockCount": 5457,
    "profitEffect": 0.3371816016126077
  },
  {
    "date": "2025-12-31",
    "value": 1.5,
    "upStockCount": 495,
    "downStockCount": 331,
    "limitUpCount": 63,
    "limitDownCount": 12,
    "volume": 20452.35,
    "maxConsecutive": 6,
    "limitUpRate": 0.76,
    "positiveStockCount": 2474,
    "totalStockCount": 5458,
    "profitEffect": 0.4532795895932576
  },
  {
    "date": "2026-01-05",
    "value": 7.45,
    "upStockCount": 1289,
    "downStockCount": 173,
    "limitUpCount": 127,
    "limitDownCount": 12,
    "volume": 25463.47,
    "maxConsecutive": 7,
    "limitUpRate": 0.8,
    "positiveStockCount": 4185,
    "totalStockCount": 5457,
    "profitEffect": 0.7669048927982408
  },
  {
    "date": "2026-01-06",
    "value": 8.34,
    "upStockCount": 951,
    "downStockCount": 114,
    "limitUpCount": 143,
    "limitDownCount": 2,
    "volume": 28065.75,
    "maxConsecutive": 13,
    "limitUpRate": 0.82,
    "positiveStockCount": 4108,
    "totalStockCount": 5459,
    "profitEffect": 0.7525187763326616
  },
  {
    "date": "2026-01-07",
    "value": 2.74,
    "upStockCount": 731,
    "downStockCount": 267,
    "limitUpCount": 97,
    "limitDownCount": 7,
    "volume": 28542.2,
    "maxConsecutive": 14,
    "limitUpRate": 0.65,
    "positiveStockCount": 2173,
    "totalStockCount": 5460,
    "profitEffect": 0.39798534798534796
  },
  {
    "date": "2026-01-08",
    "value": 4.53,
    "upStockCount": 896,
    "downStockCount": 198,
    "limitUpCount": 111,
    "limitDownCount": 6,
    "volume": 28003.85,
    "maxConsecutive": 10,
    "limitUpRate": 0.76,
    "positiveStockCount": 3731,
    "totalStockCount": 5459,
    "profitEffect": 0.6834585088844111
  },
  {
    "date": "2026-01-09",
    "value": 9.06,
    "upStockCount": 997,
    "downStockCount": 110,
    "limitUpCount": 109,
    "limitDownCount": 1,
    "volume": 31227.67,
    "maxConsecutive": 11,
    "limitUpRate": 0.67,
    "positiveStockCount": 3920,
    "totalStockCount": 5459,
    "profitEffect": 0.7180802344751787
  },
  {
    "date": "2026-01-12",
    "value": 11.87,
    "upStockCount": 1733,
    "downStockCount": 146,
    "limitUpCount": 201,
    "limitDownCount": 9,
    "volume": 36014.5,
    "maxConsecutive": 12,
    "limitUpRate": 0.8,
    "positiveStockCount": 4144,
    "totalStockCount": 5461,
    "profitEffect": 0.7588353781358725
  },
  {
    "date": "2026-01-13",
    "value": 0.38,
    "upStockCount": 504,
    "downStockCount": 1342,
    "limitUpCount": 75,
    "limitDownCount": 56,
    "volume": 36510.65,
    "maxConsecutive": 13,
    "limitUpRate": 0.53,
    "positiveStockCount": 1622,
    "totalStockCount": 5452,
    "profitEffect": 0.297505502567865
  },
  {
    "date": "2026-01-14",
    "value": 3.67,
    "upStockCount": 887,
    "downStockCount": 242,
    "limitUpCount": 110,
    "limitDownCount": 19,
    "volume": 39414.8,
    "maxConsecutive": 5,
    "limitUpRate": 0.63,
    "positiveStockCount": 2747,
    "totalStockCount": 5454,
    "profitEffect": 0.5036670333700036
  },
  {
    "date": "2026-01-16",
    "value": 1.09,
    "upStockCount": 720,
    "downStockCount": 658,
    "limitUpCount": 67,
    "limitDownCount": 57,
    "volume": 30263.22,
    "maxConsecutive": 5,
    "limitUpRate": 0.6,
    "positiveStockCount": 2371,
    "totalStockCount": 5460,
    "profitEffect": 0.43424908424908426
  },
  {
    "date": "2026-01-19",
    "value": 2.97,
    "upStockCount": 994,
    "downStockCount": 335,
    "limitUpCount": 103,
    "limitDownCount": 30,
    "volume": 27084.27,
    "maxConsecutive": 14,
    "limitUpRate": 0.81,
    "positiveStockCount": 3527,
    "totalStockCount": 5461,
    "profitEffect": 0.6458524079838858
  },
  {
    "date": "2026-01-20",
    "value": 0.6,
    "upStockCount": 467,
    "downStockCount": 776,
    "limitUpCount": 62,
    "limitDownCount": 23,
    "volume": 27777.99,
    "maxConsecutive": 15,
    "limitUpRate": 0.78,
    "positiveStockCount": 2233,
    "totalStockCount": 5467,
    "profitEffect": 0.4084507042253521
  },
  {
    "date": "2026-01-21",
    "value": 3.37,
    "upStockCount": 805,
    "downStockCount": 239,
    "limitUpCount": 88,
    "limitDownCount": 11,
    "volume": 26007.01,
    "maxConsecutive": 16,
    "limitUpRate": 0.76,
    "positiveStockCount": 3096,
    "totalStockCount": 5465,
    "profitEffect": 0.5665141811527905
  },
  {
    "date": "2026-01-22",
    "value": 3.6,
    "upStockCount": 771,
    "downStockCount": 214,
    "limitUpCount": 92,
    "limitDownCount": 5,
    "volume": 26917.33,
    "maxConsecutive": 17,
    "limitUpRate": 0.73,
    "positiveStockCount": 3577,
    "totalStockCount": 5466,
    "profitEffect": 0.6544090742773508
  },
  {
    "date": "2026-01-23",
    "value": 9.27,
    "upStockCount": 1149,
    "downStockCount": 124,
    "limitUpCount": 121,
    "limitDownCount": 2,
    "volume": 30852.24,
    "maxConsecutive": 18,
    "limitUpRate": 0.85,
    "positiveStockCount": 3941,
    "totalStockCount": 5467,
    "profitEffect": 0.7208706786171575
  },
  {
    "date": "2026-01-26",
    "value": 0.39,
    "upStockCount": 547,
    "downStockCount": 1407,
    "limitUpCount": 77,
    "limitDownCount": 40,
    "volume": 32482.03,
    "maxConsecutive": 5,
    "limitUpRate": 0.64,
    "positiveStockCount": 1604,
    "totalStockCount": 5463,
    "profitEffect": 0.2936115687351272
  },
  {
    "date": "2026-01-27",
    "value": 1.38,
    "upStockCount": 596,
    "downStockCount": 433,
    "limitUpCount": 59,
    "limitDownCount": 12,
    "volume": 28949.81,
    "maxConsecutive": 6,
    "limitUpRate": 0.75,
    "positiveStockCount": 1928,
    "totalStockCount": 5463,
    "profitEffect": 0.35291964122277136
  },
  {
    "date": "2026-01-28",
    "value": 0.81,
    "upStockCount": 610,
    "downStockCount": 752,
    "limitUpCount": 84,
    "limitDownCount": 28,
    "volume": 29654.1,
    "maxConsecutive": 7,
    "limitUpRate": 0.75,
    "positiveStockCount": 1739,
    "totalStockCount": 5464,
    "profitEffect": 0.3182650073206442
  },
  {
    "date": "2026-01-29",
    "value": 0.52,
    "upStockCount": 534,
    "limitUpCount": 86,
    "downStockCount": 1022,
    "limitDownCount": 35,
    "volume": 32300.08,
    "maxConsecutive": 8,
    "limitUpRate": 0.71,
    "positiveStockCount": 1803,
    "totalStockCount": 5465,
    "profitEffect": 0.32991765782250687
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
  },
  {
    "date": "2025-12-22",
    "stockCode": "002810",
    "stockName": "山东赫达",
    "prevClose": 13.22,
    "prevHigh": 13.4,
    "open": 14.08,
    "close": 14.54
  },
  {
    "date": "2025-12-22",
    "stockCode": "000625",
    "stockName": "长安汽车",
    "prevClose": 11.75,
    "prevHigh": 11.84,
    "open": 12.12,
    "close": 12.05
  },
  {
    "date": "2025-12-22",
    "stockCode": "002917",
    "stockName": "金奥博",
    "prevClose": 13.14,
    "prevHigh": 13.22,
    "open": 13.5,
    "close": 13.35
  },
  {
    "date": "2025-12-22",
    "stockCode": "600178",
    "stockName": "东安动力",
    "prevClose": 11.77,
    "prevHigh": 11.8,
    "open": 12.29,
    "close": 12.02
  },
  {
    "date": "2025-12-23",
    "stockCode": "003029",
    "stockName": "吉大正元",
    "prevClose": 26.87,
    "prevHigh": 27.22,
    "open": 29.56,
    "close": 27.37
  },
  {
    "date": "2025-12-23",
    "stockCode": "603076",
    "stockName": "乐惠国际",
    "prevClose": 23.86,
    "prevHigh": 24.15,
    "open": 24.81,
    "close": 24.01
  },
  {
    "date": "2025-12-23",
    "stockCode": "600882",
    "stockName": "妙可蓝多",
    "prevClose": 28.53,
    "prevHigh": 28.85,
    "open": 29.74,
    "close": 28.22
  },
  {
    "date": "2025-12-24",
    "stockCode": "002324",
    "stockName": "普利特",
    "prevClose": 13.11,
    "prevHigh": 13.21,
    "open": 13.51,
    "close": 14.42
  },
  {
    "date": "2025-12-24",
    "stockCode": "600962",
    "stockName": "国投中鲁",
    "prevClose": 21.3,
    "prevHigh": 21.78,
    "open": 23.08,
    "close": 23.43
  },
  {
    "date": "2025-12-24",
    "stockCode": "300351",
    "stockName": "永贵电器",
    "prevClose": 17.36,
    "prevHigh": 17.5,
    "open": 18.4,
    "close": 18.63
  },
  {
    "date": "2025-12-25",
    "stockCode": "000582",
    "stockName": "北部湾港",
    "prevClose": 9.75,
    "prevHigh": 9.96,
    "open": 10.56,
    "close": 10.17
  },
  {
    "date": "2025-12-25",
    "stockCode": "000532",
    "stockName": "华金资本",
    "prevClose": 16.04,
    "prevHigh": 16.39,
    "open": 17,
    "close": 16.76
  },
  {
    "date": "2025-12-25",
    "stockCode": "300900",
    "stockName": "广联航空",
    "prevClose": 26.01,
    "prevHigh": 26.39,
    "open": 28.58,
    "close": 31.21
  },
  {
    "date": "2025-12-25",
    "stockCode": "300553",
    "stockName": "集智股份",
    "prevClose": 38.14,
    "prevHigh": 28.25,
    "open": 39.4,
    "close": 40.98
  },
  {
    "date": "2025-12-26",
    "stockCode": "301079",
    "stockName": "邵阳液压",
    "prevClose": 30.47,
    "prevHigh": 31.52,
    "open": 33.65,
    "close": 31.87
  },
  {
    "date": "2025-12-26",
    "stockCode": "002759",
    "stockName": "天际股份",
    "prevClose": 45,
    "prevHigh": 46.33,
    "open": 49.5,
    "close": 49.5
  },
  {
    "date": "2025-12-26",
    "stockCode": "002192",
    "stockName": "融捷股份",
    "prevClose": 52.68,
    "prevHigh": 53.18,
    "open": 54.65,
    "close": 55.46
  },
  {
    "date": "2025-12-26",
    "stockCode": "600215",
    "stockName": "派斯林",
    "prevClose": 7.03,
    "prevHigh": 7.06,
    "open": 7.33,
    "close": 7.13
  },
  {
    "date": "2025-12-29",
    "stockCode": "600531",
    "stockName": "豫光金铅",
    "prevClose": 11.8,
    "prevHigh": 11.87,
    "open": 12.2,
    "close": 12.24
  },
  {
    "date": "2025-12-29",
    "stockCode": "000630",
    "stockName": "铜陵有色",
    "prevClose": 5.93,
    "prevHigh": 5.98,
    "open": 6.11,
    "close": 5.73
  },
  {
    "date": "2025-12-29",
    "stockCode": "003027",
    "stockName": "同兴科技",
    "prevClose": 22.45,
    "prevHigh": 22.68,
    "open": 24.7,
    "close": 23.15
  },
  {
    "date": "2025-12-29",
    "stockCode": "002261",
    "stockName": "拓维信息",
    "prevClose": 30.7,
    "prevHigh": 31.08,
    "open": 31.88,
    "close": 33.77
  },
  {
    "date": "2025-12-29",
    "stockCode": "002324",
    "stockName": "普利特",
    "prevClose": 14.81,
    "prevHigh": 15,
    "open": 15.66,
    "close": 15.42
  },
  {
    "date": "2025-12-29",
    "stockCode": "002843",
    "stockName": "泰嘉股份",
    "prevClose": 20.12,
    "prevHigh": 20.41,
    "open": 21,
    "close": 20.73
  },
  {
    "date": "2025-12-29",
    "stockCode": "002716",
    "stockName": "湖南白银",
    "prevClose": 6.79,
    "prevHigh": 6.9,
    "open": 7.2,
    "close": 7.28
  },
  {
    "date": "2025-12-29",
    "stockCode": "603186",
    "stockName": "华正新材",
    "prevClose": 47.01,
    "prevHigh": 47.96,
    "open": 49.21,
    "close": 50.69
  },
  {
    "date": "2025-12-29",
    "stockCode": "601212",
    "stockName": "白银有色",
    "prevClose": 5.87,
    "prevHigh": 6,
    "open": 6.2,
    "close": 6.24
  },
  {
    "date": "2025-12-29",
    "stockCode": "002866",
    "stockName": "传艺科技",
    "prevClose": 17.96,
    "prevHigh": 18.46,
    "open": 19.6,
    "close": 18.85
  },
  {
    "date": "2025-12-29",
    "stockCode": "002272",
    "stockName": "川润股份",
    "prevClose": 16.25,
    "prevHigh": 16.9,
    "open": 17.88,
    "close": 17.88
  },
  {
    "date": "2025-12-29",
    "stockCode": "300699",
    "stockName": "光威复材",
    "prevClose": 34.87,
    "prevHigh": 36.66,
    "open": 38.3,
    "close": 40.05
  },
  {
    "date": "2025-12-29",
    "stockCode": "300489",
    "stockName": "光智科技",
    "prevClose": 52.19,
    "prevHigh": 53.98,
    "open": 55.8,
    "close": 52.18
  },
  {
    "date": "2025-12-30",
    "stockCode": "003041",
    "stockName": "真爱美家",
    "prevClose": 46.55,
    "prevHigh": 48,
    "open": 49.5,
    "close": 48.84
  },
  {
    "date": "2025-12-31",
    "stockCode": "301101",
    "stockName": "明月镜片",
    "prevClose": 39.99,
    "prevHigh": 40.21,
    "open": 41.92,
    "close": 41.43
  },
  {
    "date": "2025-12-31",
    "stockCode": "002943",
    "stockName": "宇晶股份",
    "prevClose": 37.38,
    "prevHigh": 37.8,
    "open": 39.23,
    "close": 39.6
  },
  {
    "date": "2025-12-31",
    "stockCode": "301383",
    "stockName": "天键股份",
    "prevClose": 35.26,
    "prevHigh": 35.95,
    "open": 37.17,
    "close": 35.64
  },
  {
    "date": "2025-12-31",
    "stockCode": "300695",
    "stockName": "兆丰股份",
    "prevClose": 93.69,
    "prevHigh": 95.5,
    "open": 98.5,
    "close": 100.06
  },
  {
    "date": "2026-01-05",
    "stockCode": "300986",
    "stockName": "志特新材",
    "prevClose": 11.18,
    "prevHigh": 11.33,
    "open": 12.31,
    "close": 13.42
  },
  {
    "date": "2026-01-05",
    "stockCode": "300955",
    "stockName": "嘉亨家化",
    "prevClose": 41.51,
    "prevHigh": 43.45,
    "open": 49.81,
    "close": 45.13
  },
  {
    "date": "2026-01-05",
    "stockCode": "300894",
    "stockName": "火星人",
    "prevClose": 11.79,
    "prevHigh": 12.1,
    "open": 12.99,
    "close": 12.5
  },
  {
    "date": "2026-01-05",
    "stockCode": "300337",
    "stockName": "银邦股份",
    "prevClose": 15.51,
    "prevHigh": 15.99,
    "open": 16.68,
    "close": 16.2
  },
  {
    "date": "2026-01-05",
    "stockCode": "002202",
    "stockName": "金风科技",
    "prevClose": 20.4,
    "prevHigh": 20.88,
    "open": 22.44,
    "close": 21.82
  },
  {
    "date": "2026-01-05",
    "stockCode": "603859",
    "stockName": "能科科技",
    "prevClose": 42.05,
    "prevHigh": 42.79,
    "open": 43.98,
    "close": 44.22
  },
  {
    "date": "2026-01-05",
    "stockCode": "001339",
    "stockName": "智微智能",
    "prevClose": 51.11,
    "prevHigh": 52,
    "open": 53.2,
    "close": 53.13
  },
  {
    "date": "2026-01-05",
    "stockCode": "002324",
    "stockName": "普利特",
    "prevClose": 15.99,
    "prevHigh": 16.24,
    "open": 16.7,
    "close": 17.59
  },
  {
    "date": "2026-01-05",
    "stockCode": "601600",
    "stockName": "中国铝业",
    "prevClose": 12.22,
    "prevHigh": 12.38,
    "open": 12.72,
    "close": 13.02
  },
  {
    "date": "2026-01-05",
    "stockCode": "002195",
    "stockName": "岩山科技",
    "prevClose": 7.09,
    "prevHigh": 7.18,
    "open": 7.8,
    "close": 7.8
  },
  {
    "date": "2026-01-05",
    "stockCode": "002709",
    "stockName": "天赐材料",
    "prevClose": 46.33,
    "prevHigh": 46.83,
    "open": 48.6,
    "close": 48.04
  },
  {
    "date": "2026-01-05",
    "stockCode": "600562",
    "stockName": "国睿科技",
    "prevClose": 28.26,
    "prevHigh": 28.49,
    "open": 29.5,
    "close": 28.88
  },
  {
    "date": "2026-01-05",
    "stockCode": "000933",
    "stockName": "神火股份",
    "prevClose": 27.47,
    "prevHigh": 27.68,
    "open": 28.55,
    "close": 28.47
  },
  {
    "date": "2026-01-06",
    "stockCode": "603014",
    "stockName": "威高血净",
    "prevClose": 41.49,
    "prevHigh": 41.5,
    "open": 43.55,
    "close": 41.98
  },
  {
    "date": "2026-01-06",
    "stockCode": "301606",
    "stockName": "绿联科技",
    "prevClose": 60.71,
    "prevHigh": 61.12,
    "open": 65,
    "close": 63.45
  },
  {
    "date": "2026-01-06",
    "stockCode": "301099",
    "stockName": "雅创电子",
    "prevClose": 45.3,
    "prevHigh": 45.39,
    "open": 47.7,
    "close": 48.86
  },
  {
    "date": "2026-01-06",
    "stockCode": "600589",
    "stockName": "大位科技",
    "prevClose": 7.39,
    "prevHigh": 7.49,
    "open": 7.97,
    "close": 7.98
  },
  {
    "date": "2026-01-07",
    "stockCode": "301611",
    "stockName": "珂玛科技",
    "prevClose": 99.81,
    "prevHigh": 100.88,
    "open": 109,
    "close": 109.34
  },
  {
    "date": "2026-01-07",
    "stockCode": "300806",
    "stockName": "斯迪克",
    "prevClose": 31.13,
    "prevHigh": 31.52,
    "open": 32.5,
    "close": 35.17
  },
  {
    "date": "2026-01-07",
    "stockCode": "300748",
    "stockName": "金力永磁",
    "prevClose": 35.51,
    "prevHigh": 35.62,
    "open": 36.86,
    "close": 36.51
  },
  {
    "date": "2026-01-07",
    "stockCode": "300576",
    "stockName": "容大感光",
    "prevClose": 40.61,
    "prevHigh": 40.83,
    "open": 43,
    "close": 44.57
  },
  {
    "date": "2026-01-07",
    "stockCode": "003020",
    "stockName": "立方制药",
    "prevClose": 27.53,
    "prevHigh": 27.6,
    "open": 28.85,
    "close": 27.57
  },
  {
    "date": "2026-01-07",
    "stockCode": "002409",
    "stockName": "雅克科技",
    "prevClose": 82.03,
    "prevHigh": 84.43,
    "open": 87.01,
    "close": 88.63
  },
  {
    "date": "2026-01-07",
    "stockCode": "001309",
    "stockName": "德明利",
    "prevClose": 255.48,
    "prevHigh": 261,
    "open": 279.98,
    "close": 250
  },
  {
    "date": "2026-01-07",
    "stockCode": "002582",
    "stockName": "好想你",
    "prevClose": 11.76,
    "prevHigh": 11.97,
    "open": 12.94,
    "close": 11.26
  },
  {
    "date": "2026-01-07",
    "stockCode": "600667",
    "stockName": "太极实业",
    "prevClose": 8.58,
    "prevHigh": 8.7,
    "open": 8.89,
    "close": 8.56
  },
  {
    "date": "2026-01-07",
    "stockCode": "000021",
    "stockName": "深科技",
    "prevClose": 26.89,
    "prevHigh": 27.2,
    "open": 27.91,
    "close": 26.75
  },
  {
    "date": "2026-01-07",
    "stockCode": "002654",
    "stockName": "万润科技",
    "prevClose": 15.08,
    "prevHigh": 15.25,
    "open": 15.58,
    "close": 15.28
  },
  {
    "date": "2026-01-07",
    "stockCode": "600637",
    "stockName": "东方明珠",
    "prevClose": 10.01,
    "prevHigh": 10.1,
    "open": 10.54,
    "close": 11.01
  },
  {
    "date": "2026-01-07",
    "stockCode": "002319",
    "stockName": "乐通股份",
    "prevClose": 13.09,
    "prevHigh": 13.18,
    "open": 13.61,
    "close": 12.82
  },
  {
    "date": "2026-01-07",
    "stockCode": "001298",
    "stockName": "好上好",
    "prevClose": 30.71,
    "prevHigh": 30.87,
    "open": 31.58,
    "close": 30.63
  },
  {
    "date": "2026-01-07",
    "stockCode": "002340",
    "stockName": "格林美",
    "prevClose": 8.64,
    "prevHigh": 8.68,
    "open": 8.87,
    "close": 9.33
  },
  {
    "date": "2026-01-08",
    "stockCode": "301556",
    "stockName": "托普云农",
    "prevClose": 104.26,
    "prevHigh": 105.33,
    "open": 109.03,
    "close": 112.08
  },
  {
    "date": "2026-01-08",
    "stockCode": "002971",
    "stockName": "和远气体",
    "prevClose": 30.57,
    "prevHigh": 31.76,
    "open": 33.63,
    "close": 33.63
  },
  {
    "date": "2026-01-08",
    "stockCode": "600477",
    "stockName": "杭萧钢构",
    "prevClose": 2.97,
    "prevHigh": 3.11,
    "open": 3.27,
    "close": 3.27
  },
  {
    "date": "2026-01-08",
    "stockCode": "000880",
    "stockName": "潍柴重机",
    "prevClose": 29.53,
    "prevHigh": 30.19,
    "open": 31.03,
    "close": 30.7
  },
  {
    "date": "2026-01-08",
    "stockCode": "603588",
    "stockName": "高能环境",
    "prevClose": 8.28,
    "prevHigh": 8.39,
    "open": 8.6,
    "close": 9.08
  },
  {
    "date": "2026-01-08",
    "stockCode": "603590",
    "stockName": "康辰药业",
    "prevClose": 41.88,
    "prevHigh": 42.36,
    "open": 43.98,
    "close": 44.39
  },
  {
    "date": "2026-01-09",
    "stockCode": "300747",
    "stockName": "锐科激光",
    "prevClose": 32,
    "prevHigh": 32.35,
    "open": 34.52,
    "close": 33.91
  },
  {
    "date": "2026-01-09",
    "stockCode": "300072",
    "stockName": "海新能科",
    "prevClose": 4.95,
    "prevHigh": 5.08,
    "open": 5.27,
    "close": 5.29
  },
  {
    "date": "2026-01-09",
    "stockCode": "300051",
    "stockName": "琏升科技",
    "prevClose": 7.23,
    "prevHigh": 7.48,
    "open": 7.81,
    "close": 8.68
  },
  {
    "date": "2026-01-09",
    "stockCode": "601615",
    "stockName": "明阳智能",
    "prevClose": 16.75,
    "prevHigh": 17.3,
    "open": 18.42,
    "close": 17.89
  },
  {
    "date": "2026-01-09",
    "stockCode": "000987",
    "stockName": "越秀资本",
    "prevClose": 9.21,
    "prevHigh": 9.49,
    "open": 10.13,
    "close": 10.13
  },
  {
    "date": "2026-01-09",
    "stockCode": "600151",
    "stockName": "航天机电",
    "prevClose": 20.35,
    "prevHigh": 20.78,
    "open": 21.5,
    "close": 20.72
  },
  {
    "date": "2026-01-09",
    "stockCode": "603159",
    "stockName": "上海亚虹",
    "prevClose": 26.47,
    "prevHigh": 26.98,
    "open": 27.75,
    "close": 26.46
  },
  {
    "date": "2026-01-09",
    "stockCode": "600871",
    "stockName": "石化油服",
    "prevClose": 2.2,
    "prevHigh": 2.22,
    "open": 2.29,
    "close": 2.33
  },
  {
    "date": "2026-01-09",
    "stockCode": "600571",
    "stockName": "信雅达",
    "prevClose": 16.01,
    "prevHigh": 16.13,
    "open": 16.5,
    "close": 16.61
  },
  {
    "date": "2026-01-09",
    "stockCode": "002911",
    "stockName": "佛燃能源",
    "prevClose": 12.28,
    "prevHigh": 12.36,
    "open": 12.83,
    "close": 12.44
  },
  {
    "date": "2026-01-09",
    "stockCode": "000531",
    "stockName": "穗恒运A",
    "prevClose": 6.65,
    "prevHigh": 6.68,
    "open": 6.92,
    "close": 6.87
  },
  {
    "date": "2026-01-09",
    "stockCode": "000852",
    "stockName": "石化机械",
    "prevClose": 7.45,
    "prevHigh": 7.48,
    "open": 7.99,
    "close": 7.75
  },
  {
    "date": "2026-01-09",
    "stockCode": "600703",
    "stockName": "三安光电",
    "prevClose": 14.87,
    "prevHigh": 14.92,
    "open": 15.29,
    "close": 15.39
  },
  {
    "date": "2026-01-09",
    "stockCode": "000554",
    "stockName": "泰山石油",
    "prevClose": 6.61,
    "prevHigh": 6.63,
    "open": 6.94,
    "close": 6.81
  },
  {
    "date": "2026-01-12",
    "stockCode": "300045",
    "stockName": "华力创通",
    "prevClose": 31.18,
    "prevHigh": 31.59,
    "open": 32.99,
    "close": 37.42
  },
  {
    "date": "2026-01-12",
    "stockCode": "300058",
    "stockName": "蓝色光标",
    "prevClose": 17.18,
    "prevHigh": 17.44,
    "open": 17.98,
    "close": 20.62
  },
  {
    "date": "2026-01-12",
    "stockCode": "300071",
    "stockName": "福石控股",
    "prevClose": 7.44,
    "prevHigh": 7.51,
    "open": 7.8,
    "close": 8.93
  },
  {
    "date": "2026-01-12",
    "stockCode": "300229",
    "stockName": "拓尔思",
    "prevClose": 22.03,
    "prevHigh": 22.12,
    "open": 23.01,
    "close": 26.44
  },
  {
    "date": "2026-01-12",
    "stockCode": "300248",
    "stockName": "新开普",
    "prevClose": 12.92,
    "prevHigh": 12.94,
    "open": 13.46,
    "close": 15.2
  },
  {
    "date": "2026-01-12",
    "stockCode": "300253",
    "stockName": "卫宁健康",
    "prevClose": 10.81,
    "prevHigh": 10.97,
    "open": 11.52,
    "close": 12.97
  },
  {
    "date": "2026-01-12",
    "stockCode": "300349",
    "stockName": "金卡智能",
    "prevClose": 16.57,
    "prevHigh": 16.67,
    "open": 17.35,
    "close": 19.88
  },
  {
    "date": "2026-01-12",
    "stockCode": "300364",
    "stockName": "中文在线",
    "prevClose": 29.15,
    "prevHigh": 29.28,
    "open": 30.96,
    "close": 34.98
  },
  {
    "date": "2026-01-12",
    "stockCode": "300454",
    "stockName": "深信服",
    "prevClose": 133.4,
    "prevHigh": 134,
    "open": 139.9,
    "close": 152
  },
  {
    "date": "2026-01-12",
    "stockCode": "300491",
    "stockName": "通合科技",
    "prevClose": 28.23,
    "prevHigh": 28.73,
    "open": 29.9,
    "close": 28.7
  },
  {
    "date": "2026-01-12",
    "stockCode": "300550",
    "stockName": "和仁科技",
    "prevClose": 15.4,
    "prevHigh": 15.49,
    "open": 15.96,
    "close": 15.88
  },
  {
    "date": "2026-01-12",
    "stockCode": "300592",
    "stockName": "华凯易佰",
    "prevClose": 12.15,
    "prevHigh": 12.51,
    "open": 12.99,
    "close": 13.22
  },
  {
    "date": "2026-01-12",
    "stockCode": "300612",
    "stockName": "宣亚国际",
    "prevClose": 20.34,
    "prevHigh": 20.61,
    "open": 21.36,
    "close": 23.06
  },
  {
    "date": "2026-01-12",
    "stockCode": "300725",
    "stockName": "药石科技",
    "prevClose": 43.35,
    "prevHigh": 43.67,
    "open": 45.03,
    "close": 45.52
  },
  {
    "date": "2026-01-12",
    "stockCode": "300785",
    "stockName": "值得买",
    "prevClose": 52.2,
    "prevHigh": 54.58,
    "open": 58.82,
    "close": 62.64
  },
  {
    "date": "2026-01-12",
    "stockCode": "000803",
    "stockName": "山高环能",
    "prevClose": 8.19,
    "prevHigh": 8.61,
    "open": 9,
    "close": 9.01
  },
  {
    "date": "2026-01-12",
    "stockCode": "600498",
    "stockName": "烽火通信",
    "prevClose": 38.93,
    "prevHigh": 40.45,
    "open": 42.3,
    "close": 42.82
  },
  {
    "date": "2026-01-12",
    "stockCode": "600118",
    "stockName": "中国卫星",
    "prevClose": 106.05,
    "prevHigh": 109,
    "open": 112,
    "close": 116.66
  },
  {
    "date": "2026-01-12",
    "stockCode": "600850",
    "stockName": "电科数字",
    "prevClose": 32.77,
    "prevHigh": 33.54,
    "open": 34.96,
    "close": 35.38
  },
  {
    "date": "2026-01-12",
    "stockCode": "600345",
    "stockName": "长江通信",
    "prevClose": 39.97,
    "prevHigh": 40.79,
    "open": 41.68,
    "close": 41.98
  },
  {
    "date": "2026-01-12",
    "stockCode": "603918",
    "stockName": "金桥信息",
    "prevClose": 18.09,
    "prevHigh": 18.35,
    "open": 18.81,
    "close": 19.28
  },
  {
    "date": "2026-01-12",
    "stockCode": "600259",
    "stockName": "中稀有色",
    "prevClose": 64.22,
    "prevHigh": 64.97,
    "open": 66.6,
    "close": 70.64
  },
  {
    "date": "2026-01-12",
    "stockCode": "600489",
    "stockName": "中金黄金",
    "prevClose": 24.93,
    "prevHigh": 25.15,
    "open": 25.7,
    "close": 25.02
  },
  {
    "date": "2026-01-12",
    "stockCode": "002555",
    "stockName": "三七互娱",
    "prevClose": 27.29,
    "prevHigh": 27.49,
    "open": 28.39,
    "close": 29.76
  },
  {
    "date": "2026-01-12",
    "stockCode": "002379",
    "stockName": "宏创控股",
    "prevClose": 27.7,
    "prevHigh": 27.88,
    "open": 30.47,
    "close": 28.37
  },
  {
    "date": "2026-01-12",
    "stockCode": "600825",
    "stockName": "新华传媒",
    "prevClose": 6.91,
    "prevHigh": 6.95,
    "open": 7.09,
    "close": 7.29
  },
  {
    "date": "2026-01-12",
    "stockCode": "603000",
    "stockName": "人民网",
    "prevClose": 21.05,
    "prevHigh": 21.17,
    "open": 23.16,
    "close": 23.16
  },
  {
    "date": "2026-01-12",
    "stockCode": "601858",
    "stockName": "中国科传",
    "prevClose": 19.52,
    "prevHigh": 19.63,
    "open": 20.1,
    "close": 21.47
  },
  {
    "date": "2026-01-12",
    "stockCode": "000612",
    "stockName": "焦作万方",
    "prevClose": 12.1,
    "prevHigh": 12.16,
    "open": 12.44,
    "close": 13.31
  },
  {
    "date": "2026-01-12",
    "stockCode": "002230",
    "stockName": "科大讯飞",
    "prevClose": 55.6,
    "prevHigh": 55.85,
    "open": 57.5,
    "close": 59.6
  },
  {
    "date": "2026-01-12",
    "stockCode": "603078",
    "stockName": "江化微",
    "prevClose": 19.47,
    "prevHigh": 19.55,
    "open": 20,
    "close": 21.42
  },
  {
    "date": "2026-01-12",
    "stockCode": "603888",
    "stockName": "新华网",
    "prevClose": 22.24,
    "prevHigh": 22.31,
    "open": 24.46,
    "close": 24.46
  },
  {
    "date": "2026-01-12",
    "stockCode": "002881",
    "stockName": "美格智能",
    "prevClose": 46.7,
    "prevHigh": 46.8,
    "open": 48.55,
    "close": 51.37
  },
  {
    "date": "2026-01-13",
    "stockCode": "002179",
    "stockName": "中航光电",
    "prevClose": 40.58,
    "prevHigh": 40.97,
    "open": 41.94,
    "close": 38.18
  },
  {
    "date": "2026-01-13",
    "stockCode": "600570",
    "stockName": "恒生电子",
    "prevClose": 33.42,
    "prevHigh": 33.64,
    "open": 34.39,
    "close": 32.89
  },
  {
    "date": "2026-01-15",
    "stockCode": "002212",
    "stockName": "天融信",
    "prevClose": 10.13,
    "prevHigh": 10.44,
    "open": 10.67,
    "close": 9.96
  },
  {
    "date": "2026-01-15",
    "stockCode": "002439",
    "stockName": "启明星辰",
    "prevClose": 15.58,
    "prevHigh": 15.95,
    "open": 16.5,
    "close": 15.76
  },
  {
    "date": "2026-01-15",
    "stockCode": "001260",
    "stockName": "坤泰股份",
    "prevClose": 23.86,
    "prevHigh": 24.2,
    "open": 26.25,
    "close": 26.25
  },
  {
    "date": "2026-01-15",
    "stockCode": "600654",
    "stockName": "锦江酒店",
    "prevClose": 26.44,
    "prevHigh": 26.75,
    "open": 27.38,
    "close": 26.65
  },
  {
    "date": "2026-01-16",
    "stockCode": "002452",
    "stockName": "长高电新",
    "prevClose": 8.95,
    "prevHigh": 8.97,
    "open": 9.67,
    "close": 9.5
  },
  {
    "date": "2026-01-16",
    "stockCode": "601126",
    "stockName": "四方股份",
    "prevClose": 35.32,
    "prevHigh": 36.2,
    "open": 37.6,
    "close": 35.6
  },
  {
    "date": "2026-01-16",
    "stockCode": "603191",
    "stockName": "望变电气",
    "prevClose": 17.98,
    "prevHigh": 18.29,
    "open": 19,
    "close": 17.69
  },
  {
    "date": "2026-01-16",
    "stockCode": "603530",
    "stockName": "神马电力",
    "prevClose": 46.7,
    "prevHigh": 47.68,
    "open": 49.59,
    "close": 46.82
  },
  {
    "date": "2026-01-16",
    "stockCode": "002533",
    "stockName": "金杯电工",
    "prevClose": 13.15,
    "prevHigh": 13.23,
    "open": 13.56,
    "close": 13.56
  },
  {
    "date": "2026-01-16",
    "stockCode": "001267",
    "stockName": "汇绿生态",
    "prevClose": 24.61,
    "prevHigh": 25,
    "open": 25.5,
    "close": 25.75
  },
  {
    "date": "2026-01-16",
    "stockCode": "600131",
    "stockName": "国网信通",
    "prevClose": 17.75,
    "prevHigh": 17.93,
    "open": 19.53,
    "close": 18.21
  },
  {
    "date": "2026-01-16",
    "stockCode": "000682",
    "stockName": "东方电子",
    "prevClose": 12.79,
    "prevHigh": 12.89,
    "open": 13.26,
    "close": 13.18
  },
  {
    "date": "2026-01-16",
    "stockCode": "000400",
    "stockName": "许继电子",
    "prevClose": 28.77,
    "prevHigh": 29.15,
    "open": 31,
    "close": 29.45
  },
  {
    "date": "2026-01-16",
    "stockCode": "600406",
    "stockName": "国电南瑞",
    "prevClose": 23.8,
    "prevHigh": 24.18,
    "open": 25.65,
    "close": 24.4
  },
  {
    "date": "2026-01-16",
    "stockCode": "600312",
    "stockName": "平高电气",
    "prevClose": 19.87,
    "prevHigh": 20.13,
    "open": 21.86,
    "close": 20.69
  },
  {
    "date": "2026-01-19",
    "stockCode": "603286",
    "stockName": "日盈电子",
    "prevClose": 70.31,
    "prevHigh": 73.3,
    "open": 75.86,
    "close": 77.34
  },
  {
    "date": "2026-01-19",
    "stockCode": "000636",
    "stockName": "风华高科",
    "prevClose": 18.84,
    "prevHigh": 19.33,
    "open": 19.8,
    "close": 19.92
  },
  {
    "date": "2026-01-19",
    "stockCode": "605488",
    "stockName": "福莱新材",
    "prevClose": 39.11,
    "prevHigh": 40.05,
    "open": 40.91,
    "close": 43.02
  },
  {
    "date": "2026-01-19",
    "stockCode": "600487",
    "stockName": "亨通光电",
    "prevClose": 25.63,
    "prevHigh": 26,
    "open": 26.91,
    "close": 27.08
  },
  {
    "date": "2026-01-19",
    "stockCode": "300316",
    "stockName": "晶盛机电",
    "prevClose": 42.1,
    "prevHigh": 42.5,
    "open": 43.8,
    "close": 42.5
  },
  {
    "date": "2026-01-19",
    "stockCode": "300916",
    "stockName": "朗特智能",
    "prevClose": 34.6,
    "prevHigh": 34.88,
    "open": 36.02,
    "close": 35.53
  },
  {
    "date": "2026-01-19",
    "stockCode": "601869",
    "stockName": "长飞光纤",
    "prevClose": 114.4,
    "prevHigh": 116.86,
    "open": 124.79,
    "close": 117.83
  },
  {
    "date": "2026-01-20",
    "stockCode": "603103",
    "stockName": "横店影视",
    "prevClose": 18.88,
    "prevHigh": 19.16,
    "open": 19.97,
    "close": 18.92
  },
  {
    "date": "2026-01-20",
    "stockCode": "301358",
    "stockName": "湖南裕能",
    "prevClose": 62.88,
    "prevHigh": 64.88,
    "open": 66.88,
    "close": 64.62
  },
  {
    "date": "2026-01-20",
    "stockCode": "300012",
    "stockName": "华测检测",
    "prevClose": 15.21,
    "prevHigh": 15.36,
    "open": 16.29,
    "close": 16.41
  },
  {
    "date": "2026-01-21",
    "stockCode": "300139",
    "stockName": "晓程科技",
    "prevClose": 40.95,
    "prevHigh": 42.32,
    "open": 42.1,
    "close": 46.37
  },
  {
    "date": "2026-01-21",
    "stockCode": "600158",
    "stockName": "中体产业",
    "prevClose": 9.18,
    "prevHigh": 9.25,
    "open": 9.53,
    "close": 9.71
  },
  {
    "date": "2026-01-21",
    "stockCode": "603566",
    "stockName": "普莱柯",
    "prevClose": 13.36,
    "prevHigh": 13.47,
    "open": 13.77,
    "close": 13.78
  },
  {
    "date": "2026-01-22",
    "stockCode": "300480",
    "stockName": "光力科技",
    "prevClose": 21.09,
    "prevHigh": 21.68,
    "open": 22.92,
    "close": 22.4
  },
  {
    "date": "2026-01-22",
    "stockCode": "002636",
    "stockName": "金安国纪",
    "prevClose": 21.18,
    "prevHigh": 21.65,
    "open": 23.3,
    "close": 23.3
  },
  {
    "date": "2026-01-22",
    "stockCode": "002824",
    "stockName": "和胜股份",
    "prevClose": 22.12,
    "prevHigh": 22.61,
    "open": 23.44,
    "close": 23.64
  },
  {
    "date": "2026-01-22",
    "stockCode": "001287",
    "stockName": "中电港",
    "prevClose": 26.26,
    "prevHigh": 26.78,
    "open": 27.5,
    "close": 26.05
  },
  {
    "date": "2026-01-22",
    "stockCode": "603019",
    "stockName": "中科曙光",
    "prevClose": 98.23,
    "prevHigh": 98.88,
    "open": 101,
    "close": 96.95
  },
  {
    "date": "2026-01-23",
    "stockCode": "300751",
    "stockName": "迈为股份",
    "prevClose": 270.3,
    "prevHigh": 273.6,
    "open": 300.04,
    "close": 324.36
  },
  {
    "date": "2026-01-23",
    "stockCode": "000059",
    "stockName": "华锦股份",
    "prevClose": 5.71,
    "prevHigh": 5.73,
    "open": 5.92,
    "close": 6.08
  },
  {
    "date": "2026-01-23",
    "stockCode": "002408",
    "stockName": "齐翔腾达",
    "prevClose": 5.69,
    "prevHigh": 5.84,
    "open": 6.11,
    "close": 6.09
  },
  {
    "date": "2026-01-23",
    "stockCode": "600929",
    "stockName": "雪天盐业",
    "prevClose": 6.04,
    "prevHigh": 6.18,
    "open": 6.34,
    "close": 6.1
  },
  {
    "date": "2026-01-23",
    "stockCode": "600531",
    "stockName": "豫光金铅",
    "prevClose": 15.4,
    "prevHigh": 15.69,
    "open": 16.1,
    "close": 16.94
  },
  {
    "date": "2026-01-23",
    "stockCode": "001337",
    "stockName": "四川黄金",
    "prevClose": 45.66,
    "prevHigh": 46.5,
    "open": 47.7,
    "close": 50.23
  },
  {
    "date": "2026-01-23",
    "stockCode": "600489",
    "stockName": "中金黄金",
    "prevClose": 29.18,
    "prevHigh": 29.65,
    "open": 30.97,
    "close": 30
  },
  {
    "date": "2026-01-23",
    "stockCode": "600988",
    "stockName": "赤峰黄金",
    "prevClose": 37.33,
    "prevHigh": 37.87,
    "open": 38.68,
    "close": 38.82
  },
  {
    "date": "2026-01-23",
    "stockCode": "000065",
    "stockName": "北方国际",
    "prevClose": 12.96,
    "prevHigh": 13.03,
    "open": 13.3,
    "close": 12.98
  },
  {
    "date": "2026-01-23",
    "stockCode": "002493",
    "stockName": "荣盛石化",
    "prevClose": 13.53,
    "prevHigh": 13.59,
    "open": 14.02,
    "close": 13.72
  },
  {
    "date": "2026-01-26",
    "stockCode": "603578",
    "stockName": "三星新材",
    "prevClose": 13.62,
    "prevHigh": 13.78,
    "open": 14.3,
    "close": 14.98
  },
  {
    "date": "2026-01-26",
    "stockCode": "603045",
    "stockName": "福达合金",
    "prevClose": 26.3,
    "prevHigh": 26.5,
    "open": 28.93,
    "close": 28.93
  },
  {
    "date": "2026-01-26",
    "stockCode": "301636",
    "stockName": "泽润新能",
    "prevClose": 59.96,
    "prevHigh": 62.69,
    "open": 65,
    "close": 71.83
  },
  {
    "date": "2026-01-26",
    "stockCode": "301207",
    "stockName": "华兰疫苗",
    "prevClose": 19.45,
    "prevHigh": 19.7,
    "open": 20.32,
    "close": 23.34
  },
  {
    "date": "2026-01-26",
    "stockCode": "301066",
    "stockName": "万事利",
    "prevClose": 20.96,
    "prevHigh": 21.67,
    "open": 22.51,
    "close": 21.95
  },
  {
    "date": "2026-01-26",
    "stockCode": "300938",
    "stockName": "信测标准",
    "prevClose": 33.91,
    "prevHigh": 34.58,
    "open": 35.65,
    "close": 30.18
  },
  {
    "date": "2026-01-26",
    "stockCode": "300846",
    "stockName": "首都在线",
    "prevClose": 24.73,
    "prevHigh": 24.86,
    "open": 26.52,
    "close": 25.76
  },
  {
    "date": "2026-01-26",
    "stockCode": "300837",
    "stockName": "浙矿股份",
    "prevClose": 57.21,
    "prevHigh": 58.51,
    "open": 61.92,
    "close": 66
  },
  {
    "date": "2026-01-26",
    "stockCode": "300772",
    "stockName": "运达股份",
    "prevClose": 20.3,
    "prevHigh": 20.33,
    "open": 21.51,
    "close": 21.47
  },
  {
    "date": "2026-01-26",
    "stockCode": "300763",
    "stockName": "锦浪科技",
    "prevClose": 84.7,
    "prevHigh": 85.5,
    "open": 94.34,
    "close": 85.54
  },
  {
    "date": "2026-01-26",
    "stockCode": "300695",
    "stockName": "兆丰股份",
    "prevClose": 92.4,
    "prevHigh": 93.9,
    "open": 97.93,
    "close": 90.15
  },
  {
    "date": "2026-01-26",
    "stockCode": "300463",
    "stockName": "迈克生物",
    "prevClose": 11.83,
    "prevHigh": 11.85,
    "open": 13.2,
    "close": 14.2
  },
  {
    "date": "2026-01-26",
    "stockCode": "300461",
    "stockName": "田中精机",
    "prevClose": 27.32,
    "prevHigh": 27.68,
    "open": 29.39,
    "close": 32.32
  },
  {
    "date": "2026-01-26",
    "stockCode": "300450",
    "stockName": "先导智能",
    "prevClose": 63.15,
    "prevHigh": 63.62,
    "open": 66.93,
    "close": 61.89
  },
  {
    "date": "2026-01-26",
    "stockCode": "300263",
    "stockName": "隆华科技",
    "prevClose": 10.54,
    "prevHigh": 10.68,
    "open": 11.7,
    "close": 10.61
  },
  {
    "date": "2026-01-26",
    "stockCode": "002155",
    "stockName": "湖南黄金",
    "prevClose": 22.97,
    "prevHigh": 23.05,
    "open": 25.27,
    "close": 25.27
  },
  {
    "date": "2026-01-26",
    "stockCode": "002009",
    "stockName": "天奇股份",
    "prevClose": 23.74,
    "prevHigh": 24.68,
    "open": 26.11,
    "close": 26.11
  },
  {
    "date": "2026-01-26",
    "stockCode": "002534",
    "stockName": "西子洁能",
    "prevClose": 18.94,
    "prevHigh": 19.39,
    "open": 19.88,
    "close": 18.87
  },
  {
    "date": "2026-01-26",
    "stockCode": "600490",
    "stockName": "鹏欣资源",
    "prevClose": 9.55,
    "prevHigh": 9.74,
    "open": 10,
    "close": 10.29
  },
  {
    "date": "2026-01-26",
    "stockCode": "002237",
    "stockName": "恒邦股份",
    "prevClose": 17.2,
    "prevHigh": 17.48,
    "open": 18.3,
    "close": 18.92
  },
  {
    "date": "2026-01-26",
    "stockCode": "002860",
    "stockName": "星帅尔",
    "prevClose": 14.92,
    "prevHigh": 15.1,
    "open": 16.4,
    "close": 14.94
  },
  {
    "date": "2026-01-26",
    "stockCode": "605117",
    "stockName": "德业股份",
    "prevClose": 88.52,
    "prevHigh": 89.44,
    "open": 91.57,
    "close": 93.93
  },
  {
    "date": "2026-01-26",
    "stockCode": "600338",
    "stockName": "西藏珠峰",
    "prevClose": 20.98,
    "prevHigh": 21.16,
    "open": 21.88,
    "close": 21.05
  },
  {
    "date": "2026-01-26",
    "stockCode": "603271",
    "stockName": "永杰新材",
    "prevClose": 42.85,
    "prevHigh": 42.93,
    "open": 47.14,
    "close": 47.14
  },
  {
    "date": "2026-01-27",
    "stockCode": "300209",
    "stockName": "有棵树",
    "prevClose": 7.23,
    "prevHigh": 7.27,
    "open": 7.61,
    "close": 7.26
  },
  {
    "date": "2026-01-28",
    "stockCode": "301071",
    "stockName": "力量钻石",
    "prevClose": 42.79,
    "prevHigh": 43.8,
    "open": 45.15,
    "close": 43.13
  },
  {
    "date": "2026-01-28",
    "stockCode": "301500",
    "stockName": "飞南资源",
    "prevClose": 17.59,
    "prevHigh": 17.98,
    "open": 18.53,
    "close": 21.11
  },
  {
    "date": "2026-01-28",
    "stockCode": "300661",
    "stockName": "圣邦股份",
    "prevClose": 77.07,
    "prevHigh": 78.77,
    "open": 80.92,
    "close": 78.33
  },
  {
    "date": "2026-01-28",
    "stockCode": "301606",
    "stockName": "绿联科技",
    "prevClose": 70,
    "prevHigh": 72,
    "open": 78,
    "close": 76.52
  },
  {
    "date": "2026-01-28",
    "stockCode": "300671",
    "stockName": "富满微",
    "prevClose": 51.27,
    "prevHigh": 52.48,
    "open": 54.25,
    "close": 56
  },
  {
    "date": "2026-01-28",
    "stockCode": "300509",
    "stockName": "新美星",
    "prevClose": 15.61,
    "prevHigh": 16.08,
    "open": 16.6,
    "close": 14.97
  },
  {
    "date": "2026-01-28",
    "stockCode": "300179",
    "stockName": "四方达",
    "prevClose": 22.2,
    "prevHigh": 23.2,
    "open": 24,
    "close": 20.97
  },
  {
    "date": "2026-01-28",
    "stockCode": "600761",
    "stockName": "安徽合力",
    "prevClose": 22.92,
    "prevHigh": 23.45,
    "open": 23.93,
    "close": 23.6
  },
  {
    "date": "2026-01-29",
    "stockCode": "305126",
    "stockName": "国际复材",
    "prevClose": 8.33,
    "prevHigh": 8.56,
    "open": 8.82,
    "close": 8.66
  }
]

