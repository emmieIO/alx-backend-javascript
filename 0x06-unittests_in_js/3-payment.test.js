const sinon = require("sinon");
const chai = require("chai");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

const expect = chai.expect;

describe("sendPaymentRequestToApi", function () {
  let spy;

  beforeEach(function () {
    spy = sinon.spy(Utils, "calculateNumber");
  });

  afterEach(function () {
    spy.restore();
  });

  it("should call Utils.calculateNumber with SUM, 100, and 20", function () {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith("SUM", 100, 20)).to.be.true;
  });
});
