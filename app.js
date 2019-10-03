/**
 * Name: Alex Ross
 * Date: 9/25/19
 * App: Dice Rolling Service
 * Description: Service for someone who wants to roll a dice but can't afford one
 */

"use strict";

// express app dependencies
const express = require("express");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;

// declare routers
const healthRouter = require("./routes/healthRoute");
const diceRouter = require("./routes/diceRoute");

// declare routes
app.use("/health", healthRouter);
app.use("/roll", diceRouter);

// using morgan logger
app.use(morgan("dev"));

// listen on specified port
app.listen(PORT, () =>
  console.log("Welcome to my Dice Rolling service on port: " + PORT)
);
