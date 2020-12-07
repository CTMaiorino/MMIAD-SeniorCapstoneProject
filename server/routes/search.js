var express = require("express");
var router = express.Router();

/* GET search listings. */
router.get("/", function (req, res, next) {
  console.log("Search page accessed."); //Debugging
  res.send("This is the search page");
});

router.post("/", function (req, res, next) {
  console.log(req.body); //Debugging
  res.send(req.body);
});

module.exports = router;
