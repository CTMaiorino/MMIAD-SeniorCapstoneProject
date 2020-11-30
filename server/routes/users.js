var express = require("express");
var router = express.Router();

/* GET users listing. */
router
  .get("/", function (req, res, next) {
    console.log("TESTING");
    res.send("respond with a resource");
  })

  .get("/phil", function (req, res, next) {
    console.log("Test");
    res.send("hello phil");
  })

  .get("/phil/nam", function (req, res, next) {
    console.log("Test");
    res.send("hello phil nam");
  });

module.exports = router;
