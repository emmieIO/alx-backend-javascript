const sinon = require("sinon");
const chai = require("chai");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

const expect = chai.expect;

describe("sendPaymentRequestToApi", function () {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function () {
    calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
    consoleLogSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it("should call Utils.calculateNumber with SUM, 100, and 20", function () {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith("SUM", 100, 20)).to.be.true;
    expect(consoleLogSpy.calledWith("The total is: 10")).to.be.true;
  });
});
