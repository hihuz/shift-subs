const {
  updateTime,
  getMilliseconds,
  getSeconds,
  getMinutes,
  getHours
} = require("./updateTime.js");

describe("getMilliseconds", () => {
  test("should return '000' as default", () => {
    expect(getMilliseconds()).toEqual("000");
  });

  test("should return formatted milliseconds", () => {
    expect(getMilliseconds(0)).toEqual("000");
    expect(getMilliseconds("0")).toEqual("000");
    expect(getMilliseconds(5)).toEqual("005");
    expect(getMilliseconds("5")).toEqual("005");
    expect(getMilliseconds(10)).toEqual("010");
    expect(getMilliseconds("10")).toEqual("010");
    expect(getMilliseconds(995)).toEqual("995");
    expect(getMilliseconds("995")).toEqual("995");
  });

  test("should return only the milliseconds to display", () => {
    expect(getMilliseconds("123456789")).toEqual("789");
    expect(getMilliseconds(987000654000321)).toEqual("321");
  });
});

describe("getSeconds", () => {
  test("should return '00' as default", () => {
    expect(getSeconds()).toEqual("00");
  });

  test("should return formatted seconds", () => {
    expect(getSeconds("20123")).toEqual("20");
    expect(getSeconds(20123)).toEqual("20");
    expect(getSeconds("1001")).toEqual("01");
    expect(getSeconds(1001)).toEqual("01");
  });

  test("should return only the seconds to display", () => {
    expect(getSeconds("123456789")).toEqual("36");
    expect(getSeconds("123464789")).toEqual("44");
    expect(getSeconds(987699321)).toEqual("39");
    expect(getSeconds("120120")).toEqual("00");
    expect(getSeconds("3398920")).toEqual("38");
  });
});

describe("getMinutes", () => {
  test("should return '00' as default", () => {
    expect(getMinutes()).toEqual("00");
  });

  test("should return formatted minutes", () => {
    expect(getMinutes("60123")).toEqual("01");
    expect(getMinutes(128123)).toEqual("02");
    expect(getMinutes(28 * 60 * 1000)).toEqual("28");
  });

  test("should return only the minutes to display", () => {
    expect(getMinutes("3398920")).toEqual("56");
    expect(getMinutes(3398920)).toEqual("56");
  });
});

describe("getHours", () => {
  test("should return '00' as default", () => {
    expect(getHours()).toEqual("00");
  });

  test("should return formatted hours", () => {
    expect(getHours(12 * 60 * 60 * 1000)).toEqual("12");
  });

  test("should return only the hours to display", () => {
    expect(getHours("3398920")).toEqual("00");
    expect(getHours(3398920)).toEqual("00");
  });
});

describe("updateTime", () => {
  test("should be a function", () => {
    expect(typeof updateTime).toEqual("function");
  });
});
