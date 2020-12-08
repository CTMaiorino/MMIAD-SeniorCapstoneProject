var express = require("express");
var searchRouter = express.Router();
var bodyParser = require("body-parser");

searchRouter.use(bodyParser.json());

/* GET search listings. */
searchRouter.get("/", function (req, res, next) {
  console.log("Search page accessed."); //Debugging
  // console.log(req.body); //Debug (Print Search Paramters)
  res.send("This is the search page");
});

//Current issue: JSON object is empty
searchRouter.post("/", function (req, res, next) {
  console.log("I got a request!");
  console.log(req.body); //Debugging (Print the JSON object)

  // res.send(req.body);
});

module.exports = searchRouter;
