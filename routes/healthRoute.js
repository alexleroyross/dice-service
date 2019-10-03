"use strict";

const healthRouter = require("express").Router();
const pJson = require("../package.json");

/**
 * Check health of app
 */
healthRouter.get("/", (req, res) => {
  res.json({ name: "Dice Rolling Service", version: pJson.version });
});

module.exports = healthRouter;
