var express = require("express");
var searchRouter = express.Router();
var bodyParser = require("body-parser");
var connection = require("../database");

searchRouter.use(bodyParser.json());

/* GET search listings. */
searchRouter.get("/",function(req, res, next) {
  connection.query(
    "SELECT * FROM `Species` ",
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

searchRouter.get("/species",function(req, res, next) {
  connection.query(
    "SELECT `speciesName` FROM `Species` ",
    
    function(error, results, fields) {
      if (error) throw error;
      
      res.json(results);
      
    })
  
});

searchRouter.get("/species/:speciesName/:genomeVersion",function(req, res, next) {
  
  connection.query(
    "SELECT * FROM `Species`  WHERE speciesName = ? ", req.params.speciesName,
    "AND genomeVersion = ?", req.params.genomeVersion,
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

//Current issue: JSON object is empty
searchRouter.post("/", function (req, res, next) {
  console.log("I got a request!");
  console.log(req.body); //Debugging (Print the JSON object)

  // res.send(req.body);
});

module.exports = searchRouter;
