const frisby = require("frisby");
const Joi = frisby.Joi;

it("should return a 200 and roll a d6", function() {
  return frisby
    .get("http://localhost:5000/roll")
    .expect("status", 200)
    .expect("jsonTypes", "outcome.*", { result: Joi.number().required() });
});

it("should return a 200 and roll a d20", function() {
  return frisby
    .get("http://localhost:5000/roll/d20")
    .expect("status", 200)
    .expect("jsonTypes", "outcome.*", { result: Joi.number().required() });
});

it("should pass an invalid die", function() {
  return frisby.get("http://localhost:5000/roll/d50").expect("status", 400);
});

it("should pass an invalid number of rolls", function() {
  return frisby.get("http://localhost:5000/roll/d6/50").expect("status", 400);
});
