const Discord = require("discord.js");

resltados= [
    {
      "index": 0,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 1,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 2,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 3,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 4,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 5,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 6,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 7,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 8,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 9,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 10,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 11,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 12,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 13,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 14,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 15,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 16,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 17,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 18,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 19,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 20,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 21,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 22,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 23,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 24,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 25,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 26,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 27,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 28,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 29,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 30,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 31,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 32,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 33,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 34,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 35,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 36,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 37,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 38,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 39,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 40,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 41,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 42,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 43,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 44,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 45,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 46,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 47,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 48,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 49,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 50,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 51,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 52,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 53,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 54,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 55,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 56,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 57,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 58,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 59,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 60,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 61,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 62,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 63,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 64,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 65,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 66,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 67,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 68,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 69,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 70,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 71,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 72,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 73,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 74,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 75,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 76,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 77,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 78,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 79,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 80,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 81,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 82,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 83,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 84,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 85,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 86,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 87,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 88,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 89,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 90,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 91,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 92,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 93,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 94,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 95,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 96,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 97,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 98,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 99,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 100,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 101,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 102,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 103,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 104,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 105,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 106,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 107,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 108,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 109,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 110,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 111,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 112,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 113,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 114,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 115,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 116,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 117,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 118,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 119,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 120,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 121,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 122,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 123,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 124,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 125,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 126,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 127,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 128,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 129,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 130,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 131,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 132,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 133,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 134,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 135,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 136,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 137,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 138,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 139,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 140,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 141,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 142,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 143,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 144,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 145,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 146,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 147,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 148,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 149,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 150,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 151,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 152,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 153,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 154,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 155,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 156,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 157,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 158,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 159,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 160,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 161,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 162,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 163,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 164,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 165,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 166,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 167,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 168,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 169,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 170,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 171,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 172,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 173,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 174,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 175,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 176,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 177,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 178,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 179,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 180,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 181,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 182,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 183,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 184,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 185,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 186,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 187,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 188,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 189,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 190,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 191,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 192,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 193,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 194,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 195,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 196,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 197,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 198,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 199,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 200,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 201,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 202,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 203,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 204,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 205,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 206,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 207,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 208,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 209,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 210,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 211,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 212,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 213,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 214,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 215,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 216,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 217,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 218,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 219,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 220,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 221,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 222,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 223,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 224,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 225,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 226,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 227,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 228,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 229,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 230,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 231,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 232,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 233,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 234,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 235,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 236,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 237,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 238,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 239,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 240,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 241,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 242,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 243,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 244,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":lemon:"
    },
    {
      "index": 245,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 246,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 247,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 248,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 249,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 250,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":apple:"
    },
    {
      "index": 251,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 252,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 253,
      "valor1": ":eggplant:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 254,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 255,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 256,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 257,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 258,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 259,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 260,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 261,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 262,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 263,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 264,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 265,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 266,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 267,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 268,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 269,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 270,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 271,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 272,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 273,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 274,
      "valor1": ":banana:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 275,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 276,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 277,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 278,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 279,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 280,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":apple:"
    },
    {
      "index": 281,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":apple:"
    },
    {
      "index": 282,
      "valor1": ":cherries:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 283,
      "valor1": ":strawberry:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 284,
      "valor1": ":banana:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 285,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":eggplant:"
    },
    {
      "index": 286,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":banana:"
    },
    {
      "index": 287,
      "valor1": ":apple:",
      "valor2": ":apple:",
      "valor3": ":eggplant:"
    },
    {
      "index": 288,
      "valor1": ":strawberry:",
      "valor2": ":apple:",
      "valor3": ":strawberry:"
    },
    {
      "index": 289,
      "valor1": ":banana:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 290,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 291,
      "valor1": ":cherries:",
      "valor2": ":apple:",
      "valor3": ":watermelon:"
    },
    {
      "index": 292,
      "valor1": ":apple:",
      "valor2": ":strawberry:",
      "valor3": ":watermelon:"
    },
    {
      "index": 293,
      "valor1": ":lemon:",
      "valor2": ":strawberry:",
      "valor3": ":strawberry:"
    },
    {
      "index": 294,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":banana:"
    },
    {
      "index": 295,
      "valor1": ":lemon:",
      "valor2": ":apple:",
      "valor3": ":banana:"
    },
    {
      "index": 296,
      "valor1": ":cherries:",
      "valor2": ":strawberry:",
      "valor3": ":eggplant:"
    },
    {
      "index": 297,
      "valor1": ":apple:",
      "valor2": ":banana:",
      "valor3": ":strawberry:"
    },
    {
      "index": 298,
      "valor1": ":lemon:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    },
    {
      "index": 299,
      "valor1": ":strawberry:",
      "valor2": ":banana:",
      "valor3": ":watermelon:"
    }
  ]

/*
const valor_principal = (Math.floor(Math.random()*297)+1);
console.log(valor_principal);
function valor1(){
  const resultado01 = resltados[valor_principal-1];
    return resultado01;
}

function valor2(){
  const resultado02 = resltados[valor_principal];
    return resultado02;
}

function valor3(){
  const resultado03 = resltados[valor_principal+1];
    return resultado03;
}*/
/*
    const val1 = valor1();
    const val2 = valor2();
    const val3 = valor3();

    global.verifica = 0;

    if(val2.valor1 == val2.valor2){
      if(val2.valor2 == val2.valor3){
        verifica = 1;
      }
    }

    if(verifica == 1){
      database
    }

console.log(verifica);
*/

exports.run = async (bot, message, args, level) => {

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


  global.pagamento = '';
  global.novoValor = '';

  if (!args[0]) return message.channel.send("infome uma quantia!");
  
  if(isNumber(args[0]) == false){
    return message.reply("Informe um valor válido.")
  }

  await database.ref(`Servidores/${message.guild.id}/membros/${message.author.id}`)
        .once('value').then(async function (snap) {
            if (snap.val().coins !== 0) {
                if (snap.val().coins > args[1]) {
                    novoValor = snap.val().coins - args[1];

                    database.ref(`Servidores/${message.guild.id}/membros/${message.author.id}`)
                    .update({
                        coins: novoValor
                    });
                } else {
                    if (snap.val().coins == args[1]) {
                        novoValor = snap.val().coins - args[1];
                        
                        database.ref(`Servidores/${message.guild.id}/membros/${message.author.id}`)
                        .update({
                        coins: novoValor
                    });
                    }
                }
            } else return message.channel.send('Você não tem saldo suficiente para apostar esta quantia.');
        });
  
  const valor_principal = (Math.floor(Math.random()*297)+1);

  console.log(valor_principal);
  
  function valor1(){
    const resultado01 = resltados[valor_principal-1];
      return resultado01;
  }
  
  function valor2(){
    const resultado02 = resltados[valor_principal];
      return resultado02;
  }
  
  function valor3(){
    const resultado03 = resltados[valor_principal+1];
      return resultado03;
  }
  const val1 = valor1();
  const val2 = valor2();
  const val3 = valor3();

  global.verifica = 0;

  if(val2.valor1 == val2.valor2){
    if(val2.valor2 == val2.valor3){
      verifica = 1;
    }
  }

  if(verifica == 1){
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#000000")
    .setDescription(`󠀀󠀀󠀀󠀀󠀀     ${val1.valor1} ${val1.valor2} ${val1.valor3} \n **> **${val2.valor1} ${val2.valor2} ${val2.valor3}**<** \n  󠀀   ${val3.valor1} ${val3.valor2} ${val3.valor3}\n você ganhou!`, `** **`)
    //.setDescription(`${resultado01}\n${resultado02}\n${resultado03}\n`)
    message.channel.send(embed);

    await database.ref(`Servidores/${message.guild.id}/membros/${message.author.id}`)
    .once('value').then(async function (snap) {
        if (snap.val() == 0) {
            pagamento = args[0];
            let dinheiroRecebido = parseInt(pagamento);
            database.ref(`Servidores/${message.guild.id}/membros/${message.author.id}`)
                .set({
                    coins: dinheiroRecebido
                });
        } else {
            pagamento = args[0];
            let dinheiroRecebido = parseInt(pagamento) + parseInt(snap.val().coins);
            database.ref(`Servidores/${message.guild.id}/membros/${message.author.id}`)
                .update({
                    coins: dinheiroRecebido
                });
        }
    });

  }else{
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#000000")
    .setDescription(`󠀀󠀀󠀀󠀀󠀀-       ${val1.valor1} ${val1.valor2} ${val1.valor3} \n **> **${val2.valor1} ${val2.valor2} ${val2.valor3}**<** \n   󠀀    ${val3.valor1} ${val3.valor2} ${val3.valor3}\n você perdeu!`, `** **`)
    //.setDescription(`${resultado01}\n${resultado02}\n${resultado03}\n`)
    message.channel.send(embed);
  }
    
  }//fecha
  
exports.help = {
    name: "rolet2",
  };
