"use strict";

// Get router and controller
const diceRouter = require("express").Router();
const diceController = require("../controller/diceController");

// Max number of rolls before an extra query parameter is required
const MAX_ROLLS = 30;

/**
 * Roll default die (d6)
 */
diceRouter.get("/", (req, res) => {
  res.json(diceController.rollDefault());
});

/**
 * Roll specific type of die and check for errors
 */
diceRouter.get("/:type", (req, res) => {
  if (req.params.type.match("^[d]4|6|8|10|12|20$")) {
    res.json(diceController.roll(req.params.type));
  } else {
    res.status(400);
    res.send({
      error: "There's no such thing as a dice of type " + req.params.type
    });
  }
});

/**
 * Roll specific type of die a specific number of times and check for errors
 */
diceRouter.get("/:type/:count", (req, res) => {
  if (req.params.type.match("^[d]4|6|8|10|12|20$") && req.params.count > 0) {
    if (req.params.count < MAX_ROLLS || req.query.noLimit) {
      res.json(diceController.roll(req.params.type, req.params.count));
    } else {
      res.status(400);
      res.send({ error: "Number of rolls exceeds maximum of " + MAX_ROLLS });
    }
  } else {
    res.status(400);
    res.send({
      error: "Invalid dice type (d4-d20) or roll count (> 0)"
    });
  }
});

module.exports = diceRouter;
