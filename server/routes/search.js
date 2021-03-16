var express = require("express");
var searchRouter = express.Router();
var bodyParser = require("body-parser");
var connection = require("../database");
const Species = require("../models/Species");
const Exon = require("../models/Exon");
const Gene = require("../models/Intron");
const Score = require("../models/Score");
const Transcriptome = require("../models/Transcriptome");
const Intron_Score_Junction = require("../models/Intron_Score_Junction");
const Intron_Transcriptome_Junction = require("../models/Intron_Transcriptome_Junction");

searchRouter.use(bodyParser.json());

searchRouter.get("/test", function (req, res) {
  Species.findAll()
    .then((species) => {
      console.log(species);
      res.json(species);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

/* GET search listings. */
searchRouter.get("/", function (req, res, next) {
  connection.query(
    "SELECT * FROM `Species` ",
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

searchRouter.get("/species", function (req, res, next) {
  connection.query(
    "SELECT `speciesName` FROM `Species` ",

    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

searchRouter.get(
  "/species/:speciesName/:genomeVersion",
  function (req, res, next) {
    connection.query(
      "SELECT * FROM `Species`  WHERE speciesName = ? AND genomeVersion = ?",
      req.params.speciesName,
      req.params.genomeVersion,
      function (error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  }
);

searchRouter.get("/species/:speciesName", function (req, res, next) {
  connection.query(
    "SELECT * FROM `Species`  WHERE speciesName = ?",
    req.params.speciesName,
    function (error, results, fields) {
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
