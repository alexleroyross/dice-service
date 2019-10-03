"use strict";

const DiceRoll = require("./DiceRoll");

/**
 * Manage all dice rolls
 */
class DiceRolls {
  constructor() {
    // Array of consecutive dice rolls
    this._outcome = [];
  }

  /**
   * Roll specified dice
   * @param {string} what What type of die to roll
   */
  roll(what) {
    this._outcome.push(new DiceRoll(what));
  }

  /**
   * Convert dice roll data to JSON format
   */
  toJSON() {
    return { outcome: this._outcome };
  }
}

module.exports = DiceRolls;
