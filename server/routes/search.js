var express = require("express");
var searchRouter = express.Router();
var bodyParser = require("body-parser");
var connection = require("../database");
const Species = require("../models/Species");
const Exon = require("../models/Exon");
const Gene = require("../models/Gene");
const Score = require("../models/Score");
const Transcriptome = require("../models/Transcriptome");
const Intron_Score_Junction = require("../models/Intron_Score_Junction");
const Intron_Transcriptome_Junction = require("../models/Intron_Transcriptome_Junction");
const Intron = require("../models/Intron");
const { Op } = require("sequelize");
const QueryTypes = require("sequelize");
const sequelize = connection.sequelize;

// Gene.belongsToMany(Species, { foreignKey: "speciesId"});
// Species.HasOne(Gene, { foreignKey: "speciesId"});

searchRouter.use(bodyParser.json());

////Test Code////

const getJoinData = (speciesId) => {
  return sequelize
    .query(
      "SELECT * FROM `Species` INNER JOIN `Gene` ON Species.speciesId = Gene.speciesId",
      {
        replacements: { id: speciesId },
        type: QueryTypes.SELECT,
      }
    )
    .then((response) => {
      console.log(response);
      return response;
    });
};
//findall subsections by sectionID
searchRouter.get("/new/:speciesId", async (req, res) => {
  getJoinData(req.params.speciesId).then((foundSection) => {
    console.log(foundSection);
    res.send(foundSection);
  });
  const foundSections = await sequelize.query(
    "SELECT * FROM `Species` INNER JOIN `Gene` ON Species.speciesId = Gene.speciesId",
    {
      replacements: { id: speciesId },
      type: QueryTypes.SELECT,
    }
  );
  res.json(foundSections);
});



/////////////////////////////
const getData = (searchCriteria) => {
  return sequelize
    .query(
      "SELECT * FROM Species s INNER JOIN Gene g ON s.speciesId = g.speciesId INNER JOIN Transcriptome t ON g.geneNumId = t.geneNumId INNER JOIN intron_transcriptome_junction itj ON t.transcriptomeNumId = itj.transcriptomeNumId INNER JOIN Intron i ON itj.intronNumId = i.intronNumId INNER JOIN Exon e ON i.intronNumId = e.intronNumId INNER JOIN intron_score_junction isj ON i.intronNumId = isj.intronNumId INNER JOIN Score score ON isj.scoreId = score.scoreId WHERE s.speciesName = :species AND s.genomeVersion = :version AND i.strand = :strand",
      {
        replacements: { 
          species: searchCriteria.speciesName,
          version: searchCriteria.version,
          ensembleGeneId: searchCriteria.ensembleGeneId,
          ensembleTranscriptId: searchCriteria.ensembleTranscriptId,
          geneSymbol: searchCriteria.geneSymbol,
          intronClass: searchCriteria.intronClass,
          exactLength: searchCriteria.exactLength,
          relativeLength: searchCriteria.relativeLength,
          strand: searchCriteria.strand,
          coordinates: searchCriteria.coordinates,
          exactExonRank: searchCriteria.exactExonRank,
          relativeExonLength: searchCriteria.relativeExonLength,
          sequence: searchCriteria.sequence
         },
        type: QueryTypes.SELECT,
      }
    )
    .then((response) => {
      console.log(response);
      return response;
    });
};
//findall subsections by sectionID
searchRouter.post("/new", async (req, res) => {
  getData(req.body).then((foundResult) => {
    console.log(foundResult);
    res.send(foundResult);
  });
  res.json(foundResult);
});

////////


//////   /////


searchRouter.post("/reqTest", (req, res) => {
  console.log(req.body);
  res.json(req.body.name + req.body.last);
  res.sendStatus(200);
});

////////////////////////////////////////////////////////////

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
  sequelize.query(
    "SELECT * FROM `Species` INNER JOIN `Gene` ON Species.speciesId = Gene.speciesId",
    function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
});

searchRouter.get("/:speciesId", async (req, res) => {
  //console.log(foundSections);
  getSpeciesGene(req.params.speciesId)
    .then((foundSection) => {
      console.log(foundSection);
      res.send(foundSection);
    })
    .catch((err) => console.log(err));
});

const getSpeciesGene = (speciesId) => {
  return sequelize
    .query(
      "SELECT * FROM `Species` INNER JOIN `Gene` ON Species.speciesId = Gene.speciesId",
      {
        replacements: { id: speciesId },
        type: QueryTypes.SELECT,
      }
    )
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.log(err));
};

// INNER JOIN QUERY (Species and Gene) - NOT WORKING - (ERROR) ASSOCIATION W/ INTRON
searchRouter.get("/test/:speciesId", function (req, res) {
  Species.findOne({
    include: {
      all: true,
      model: Gene,
      attributes: req.params.speciesId,
      as: "Gene",
      where: {
        speciesId: { [Op.and]: req.params.speciesId }, // was Op.and
      },
    },
  })
    .then((species) => {
      console.log(species);
      res.json(species);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

searchRouter.get("/test/join/:speciesId", function (req, res) {
  Species.findOne({
    include: {
      all: true,
      model: Gene,
      as: "Gene",
      where: {
        speciesId: req.params.speciesId,
      },
    },
  })
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
      [Op.and]: [{ intronId: req.params.intronId }],
    },
  })
    .then((intron) => {
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
  Species.findAll({ attributes: ["speciesName"] })
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
      ],
    },
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
      [Op.and]: [{ speciesName: req.params.speciesName }],
    },
  })
    .then((intron) => {
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
// FROM Species s
// INNER JOIN Gene g
// 	ON s.speciesId = g.speciesId
// INNER JOIN Transcriptome t
// 	ON g.geneNumId = t.geneNumId
// INNER JOIN intron_transcriptome_junction itj
// 	ON t.transcriptomeNumId = itj.transcriptomeNumId
// INNER JOIN Intron i
// 	ON itj.intronNumId = i.intronNumId
// INNER JOIN Exon e
// 	ON i.intronNumId = e.intronNumId
// INNER JOIN intron_score_junction isj
// 	ON i.intronNumId = isj.intronNumId
// INNER JOIN Score score
// 	ON isj.scoreId = score.scoreId;
// WHERE i.intronId = ? // Multiple WHERE clauses based on the selected criteria (WHERE... AND WHERE... AND WHERE...)