const sinon = require("sinon");
const chai = require("chai");
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require("./utils");

const expect = chai.expect;

describe("sendPaymentRequestToApi", function () {
  let consoleLogSpy;

  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, "log");
  });

  afterEach(function () {
    consoleLogSpy.restore();
  });

  it("should call sendPaymentRequestToApi with 100 and 20", function () {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith("The total is: 120")).to.be.true;
  });

  it("should call sendPaymentRequestToApi with 10 and 10", function () {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith("The total is: 20")).to.be.true;
  });
});
