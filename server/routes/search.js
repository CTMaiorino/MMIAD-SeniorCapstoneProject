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

searchRouter.get("/species/:speciesName",function(req, res, next) {
  //Makes %20 back into spaces to fix URL
  if(req.params.speciesName.indexOf("%20")!=-1)
  {
    req.params.speciesName=req.params.speciesName.replace("%20"," ")
  }

  connection.query(
    "SELECT * FROM `Species`  WHERE speciesName = ? ", req.params.speciesName,
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
