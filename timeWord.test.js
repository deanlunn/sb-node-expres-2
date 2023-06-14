const timeToWord = require("./timeWord");

describe("timeToWord", () => {
  it("should convert time to words", () => {
    expect(timeToWord("00:00")).toBe("midnight");
    expect(timeToWord("00:12")).toBe("twelve twelve am");
    expect(timeToWord("01:00")).toBe("one o'clock am");
    expect(timeToWord("06:01")).toBe("six oh one am");
    expect(timeToWord("06:10")).toBe("six ten am");
    expect(timeToWord("06:18")).toBe("six eighteen am");
    expect(timeToWord("06:30")).toBe("six thirty am");
    expect(timeToWord("10:34")).toBe("ten thirty four am");
    expect(timeToWord("12:00")).toBe("noon");
    expect(timeToWord("12:09")).toBe("twelve oh nine pm");
    expect(timeToWord("23:23")).toBe("eleven twenty three pm");
  });
});
