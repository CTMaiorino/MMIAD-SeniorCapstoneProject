var express = require("express");
var router = express.Router();

/* GET users listing. */
router
  .get("/", function (req, res, next) {
    console.log("TESTING");
    res.send("respond with a resource");
  })

  //Testing
  .get("/test", function (req, res, next) {
    console.log("Test");
    res.send("hello test");
  });

module.exports = router;
