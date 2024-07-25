const chai = require("chai");
const calculateNumber = require("./2-calcul_chai");

const expect = chai.expect;

describe("calculateNumber", function () {
  describe("SUM", function () {
    it("should return 6 when inputs are 1.4 and 4.5", function () {
      expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
    });
  });

  describe("SUBTRACT", function () {
    it("should return -4 when inputs are 1.4 and 4.5", function () {
      expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
    });
  });

  describe("DIVIDE", function () {
    it("should return 0.2 when inputs are 1.4 and 4.5", function () {
      expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0', function () {
      expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
    });

    it("should return 2 when inputs are 4 and 2", function () {
      expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
    });

    it('should return "Error" when inputs are 4 and 0', function () {
      expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
    });
  });
});
