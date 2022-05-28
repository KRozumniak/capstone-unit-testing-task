const unitTestingTask = require("./unitTestingTask");

const mockDate = new Date(1653598574544);
const mockParams = ['ISODate', 'YYYY-MM-dd'];

describe("Unit Testing Task", () => {

  it("function leadingZeroes returns string padded with zero", () => {
    expect(unitTestingTask.leadingZeroes(2, 4)).toBe("02");
  });

  it("noConflict return value should be equal the unitTestingTask", () => {
    expect(unitTestingTask.noConflict()).toEqual(unitTestingTask);
  });

  it('lang function returns english language', () => {
    expect(unitTestingTask.lang('en')).toEqual(unitTestingTask.languages.current);
  });

  it('formatters function returns array', () => {
    expect(Array.isArray(unitTestingTask.formatters())).toBe(true);
  });

  describe("when unitTestingTask does not receive arguments", () => {
    it("should throw error", () => {
        expect(() => unitTestingTask()).toThrowError();
      });
  });

  describe("createFormatter", () => {
    const libReturnMock = '2022-05-26';

    it("returns correct formatted date", () => {
        expect(unitTestingTask.createFormatter(mockParams[1])(mockDate)).toEqual(libReturnMock);
    });
  });

  describe("Tokens", () => {
    it("'YYYY' returns correct 4-digit year", () => {
      expect(getToken("YYYY", mockDate)).toBe(2022);
    });

    it("'YY' returns correct last 2 digit of year", () => {
      expect(getToken("YY", mockDate)).toBe("22");
    });

    it("'MMMM' returns correct full name of month", () => {
      expect(getToken("MMMM", mockDate)).toBe("May");
    });

    it("'MMM' returns correct short name of month", () => {
        expect(getToken("MMM", mockDate)).toBe("May");
      });

    it("'MM' returns correct zero-padded number of month", () => {
      expect(getToken("MM", mockDate)).toBe("05");
    });

    it("'M' returns correct number of month", () => {
      expect(getToken("M", mockDate)).toBe(5);
    });

    it("'DDD' returns correct full name of day", () => {
      expect(getToken("DDD", mockDate)).toBe("Thursday");
    });

    it("'DD' returns correct short name of day", () => {
      expect(getToken("DD", mockDate)).toBe("Thu");
    });

    it("'D' returns correct min name of day", () => {
      expect(getToken("D", mockDate)).toBe("Th");
    });

    it("'dd' returns correct zero-padded number of day in month", () => {
      expect(getToken("dd", mockDate)).toBe("26");
    });

    it("'d' returns correct number of day in month", () => {
      expect(getToken("d", mockDate)).toBe(26);
    });

    it("'HH' returns correct zero-padded hour in 24-hr format", () => {
      expect(getToken("HH", mockDate)).toBe("16");
    });

    it("'H' returns correct hour in 24-hr format", () => {
        expect(getToken("H", mockDate)).toBe(16);
      });

    it("'hh' returns correct zero-padded hour in 12-hr format", () => {
      expect(getToken("hh", mockDate)).toBe("04");
    });

    it("'h' returns correct hour in 12-hr format", () => {
      expect(getToken("h", mockDate)).toBe(4);
    });

    it("'mm' returns correct zero-padded minutes", () => {
      expect(getToken("mm", mockDate)).toBe("56");
    });

    it("'m' returns correct minutes", () => {
      expect(getToken("m", mockDate)).toBe(56);
    });

    it("'ss' returns correct zero-padded seconds", () => {
      expect(getToken("ss", mockDate)).toBe("14");
    });

    it("'s' returns correct seconds", () => {
      expect(getToken("s", mockDate)).toBe(14);
    });

    it("'ff' returns correct zero-padded milliseconds", () => {
      expect(getToken("ff", mockDate)).toBe("544");
    });

    it("'f' returns correct milliseconds", () => {
      expect(getToken("f", mockDate)).toBe(544);
    });

    it("'A' returns correct AM/PM", () => {
      expect(getToken("A", mockDate)).toBe("PM");
    });

    it("'a' returns correct am/pm", () => {
      expect(getToken("a", mockDate)).toBe("pm");
    });

    it("'ZZ' returns correct time-zone in ISO8601-compatible basic format", () => {
      expect(getToken("ZZ", mockDate)).toBe("-0400");
    });

    it("'Z' returns correct time-zone in ISO8601-compatible extended format", () => {
      expect(getToken("Z", mockDate)).toBe("-04:00");
    });
  });


});

function getToken(key, date) {
  return unitTestingTask.tokens[`${key}`](date);
}
