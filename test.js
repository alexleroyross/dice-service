"use strict";
const controller = require("./controller/diceController");
const expect = require("chai").expect;

describe("Dice rolling endpoint functionality", function() {
  it("should roll a d6", function() {
    const response = controller.rollDefault().outcome;
    expect(response).to.not.equal(undefined);
    expect(response[0]).to.not.equal(undefined);
    expect(response[0].result)
      .to.be.above(0)
      .and.to.be.below(7);
  });
  it("should roll a d4 once", function() {
    const response = controller.roll("d4").outcome;
    expect(response).to.not.equal(null);
    expect(response[0]).to.not.equal(null);
    expect(response[0].result)
      .to.be.above(0)
      .and.to.be.below(5);
  });
  it("should roll a d8 once", function() {
    const response = controller.roll("d8").outcome;
    expect(response).to.not.equal(null);
    expect(response[0]).to.not.equal(null);
    expect(response[0].result)
      .to.be.above(0)
      .and.to.be.below(9);
  });
  it("should roll a d10 once", function() {
    const response = controller.roll("d10").outcome;
    expect(response).to.not.equal(null);
    expect(response[0]).to.not.equal(null);
    expect(response[0].result)
      .to.be.above(0)
      .and.to.be.below(11);
  });
  it("should roll a d12 once", function() {
    const response = controller.roll("d12").outcome;
    expect(response).to.not.equal(null);
    expect(response[0]).to.not.equal(null);
    expect(response[0].result)
      .to.be.above(0)
      .and.to.be.below(13);
  });
  it("should roll a d20 once", function() {
    const response = controller.roll("d20").outcome;
    expect(response).to.not.equal(null);
    expect(response[0]).to.not.equal(null);
    expect(response[0].result)
      .to.be.above(0)
      .and.to.be.below(21);
  });
  it("should roll a d20 five times", function() {
    const response = controller.roll("d20", 5).outcome;
    expect(response).to.not.equal(null);
    expect(response[0]).to.not.equal(null);
    expect(response[0].result)
      .to.be.above(0)
      .and.to.be.below(21);
  });
});
