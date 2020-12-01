var express = require("express");
var router = express.Router();

/* GET search listings. */
router.get("/", function (req, res, next) {
  console.log("Search page accessed."); //Debugging
  res.send("This is the search page");
});

module.exports = router;
