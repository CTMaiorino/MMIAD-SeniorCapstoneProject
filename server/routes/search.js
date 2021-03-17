var express = require("express");
var searchRouter = express.Router();
var bodyParser = require("body-parser");
var connection = require("../database");
const Species = require("../models/Species");
const Exon = require("../models/Exon");
const  Gene  = require("../models/Gene");
const Score = require("../models/Score");
const Transcriptome = require("../models/Transcriptome");
const Intron_Score_Junction = require("../models/Intron_Score_Junction");
const Intron_Transcriptome_Junction = require("../models/Intron_Transcriptome_Junction");
const Intron = require("../models/Intron");
const { Op } = require("sequelize");

// Gene.belongsToMany(Species, { foreignKey: "speciesId"});
// Species.HasOne(Gene, { foreignKey: "speciesId"});

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

// Raw SQL Query
searchRouter.get("/test/sql", function (req, res) {
  connection.query("SELECT * FROM `Species` INNER JOIN `Gene` ON Species.speciesId = Gene.speciesId",
  function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  }
)});

// INNER JOIN QUERY (Species and Gene) - NOT WORKING - (ERROR) ASSOCIATION W/ INTRON
searchRouter.get("/test/:speciesId", function (req, res) {
  Species.findOne({
    include: {
      model: Gene,
      as: 'Gene',
      where: {
        speciesId: { [Op.and]: req.params.speciesId }
      }
    }
  }).then((species) => {
      console.log(species);
      res.json(species);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

searchRouter.get("/test/join/:speciesId", function (req, res) {
  Gene.findOne({ 
    include: { 
      model: Species,
      as: 'Species',
      where: { 
    speciesId: req.params.speciesId,
   }}})
  .then((species) => {
      console.log(species);
      res.json(species);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

searchRouter.get("/intron", function (req, res) {
  Intron.findAll()
  .then((intron) => {
      console.log(intron);
      res.json(intron);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

searchRouter.get("/intron/:intronId", function (req, res) {
  Intron.findAll({
    where: {
      [Op.and]: [
        { intronId: req.params.intronId },
      ]
    }
  }).then((intron) => {
      console.log(intron);
      res.json(intron);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

/*
searchRouter.get("/Intron/:subtype", function (req, res) {
  await Intron.findOne({ where: { title: 'My Title' } });
    
});
*/

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

// GET all species
searchRouter.get("/species", function (req, res, next) {
  Species.findAll({ attributes: ['speciesName'] })
  .then((intron) => {
      console.log(intron);
      res.json(intron);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

// GET Species Name and Genome Version
// searchRouter.get(
//   "/species/:speciesName/:genomeVersion",
//   function (req, res, next) {
//     connection.query(
//       "SELECT * FROM `Species`  WHERE speciesName = ? AND genomeVersion = ?",
//       req.params.speciesName,
//       req.params.genomeVersion,
//       function (error, results, fields) {
//         if (error) throw error;
//         res.json(results);
//       }
//     );
//   }
// );

// GET Species Name and Genome Version (Sequelize)
searchRouter.get("/species/:speciesName/:genomeVersion", function (req, res) {
  Species.findAll({
    where: {
      [Op.and]: [
        { speciesName: req.params.speciesName },
        { genomeVersion: req.params.genomeVersion },
      ]
    }
  })
    .then((species) => {
      console.log(species);
      res.json(species);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

// GET Species by speciesName
searchRouter.get("/species/:speciesName", function (req, res, next) {
  Species.findAll({
    where: {
      [Op.and]: [
        { speciesName: req.params.speciesName },
      ]
    }
  }).then((intron) => {
      console.log(intron);
      res.json(intron);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

//Current issue: JSON object is empty
searchRouter.post("/", function (req, res, next) {
  console.log("I got a request!");
  console.log(req.body); //Debugging (Print the JSON object)

  // res.send(req.body);
});

module.exports = searchRouter;


// SELECT *
// FROM mmiadDB.Species s
// INNER JOIN mmiadDB.Gene g
// 	ON s.speciesId = g.speciesId
// INNER JOIN mmiadDB.Transcriptome t
// 	ON g.geneId = t.geneId
// INNER JOIN mmiadDB.intron_transcriptome_junction itj
// 	ON t.transcriptomeId = itj.transcriptomeId
// INNER JOIN mmiadDB.Intron i
// 	ON itj.intronId = i.intronId
// INNER JOIN mmiadDB.Exon e
// 	ON i.intronId = e.intronId
// INNER JOIN mmiadDB.intron_score_junction isj
// 	ON i.intronId = isj.intronId
// INNER JOIN mmiadDB.Score score
// 	ON isj.scoreId = score.scoreId;
// WHERE i.intronId = ?