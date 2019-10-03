"use strict";

const DiceRolls = require("../model/DiceRolls");

// dice rolls object
const DICE_ROLLS = new DiceRolls();

/**
 * Roll a D6 by default
 * @return JSON result of processing
 */
const rollDefault = () => {
  DICE_ROLLS.roll("d6");
  return DICE_ROLLS.toJSON();
};

/**
 * Rolls the specified die the specified number of times
 * @param {string} what What to roll (d6, d10, etc.)
 * @param {int} howMany How many times to roll (1 by default)
 * @return JSON result of processing
 */
const roll = (what, howMany = 1) => {
  for (let i = howMany; i > 0; i--) {
    DICE_ROLLS.roll(what);
  }
  return DICE_ROLLS.toJSON();
};

module.exports.rollDefault = rollDefault;
module.exports.roll = roll;
