"use strict";

// Enum for dice possibilities
const RollType = { d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d20: 20 };

/**
 * Contains data for a single dice roll
 */
class DiceRoll {
  constructor(what) {
    this.type = what;

    this.roll();
  }

  /**
   * Perform random roll based on type of die
   */
  roll() {
    this.result = Math.floor(1 + Math.random() * RollType[this.type]);
  }

  /**
   * Transform roll data into JSON format
   */
  toJSON() {
    return { type: this.type, result: this.result };
  }
}

module.exports = DiceRoll;
