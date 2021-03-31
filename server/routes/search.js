var express = require("express");
var searchRouter = express.Router();
var bodyParser = require("body-parser");
const { text } = require("body-parser");
//Database and sequelize model imports
var connection = require("../database");
const sequelize = connection.sequelize;
const QueryTypes = require("sequelize");
const { Op } = require("sequelize");
const Intron = connection['Intron'];
const Species = connection['Species'];

var filteredCriteria = {}; // An object containing only non-empty search criteria values (Global variable)

// Object for debugging
const sampleCriteria = {
  strand: "+",
  speciesName: "Anopheles gambiae",
  version: "AgamP4",
  relativeLength: 99,
};

searchRouter.use(bodyParser.json());

// Step 1. This function takes in the searchCriteria object and returns a filtered object that only includes non-empty criteria values
const filterSearchCriteria = (searchCriteria) => {
  // Copy the searchCriteria object to filteredCriteria global object
  filteredCriteria = searchCriteria;
  // Loop through the copied object
  for (const key in filteredCriteria) {
    // If value of key/value pair is empty ('') or null, then remove key from the object
    if (filteredCriteria[key] === "" || filteredCriteria[key] === null) {
      delete filteredCriteria[key];
    }
  }
  console.log(filteredCriteria); // (DEBUGGING) Print filteredCriteria object. Should only contain non-empty key/value pairs (WORKING!)
};

// Step 2. This function takes in an object of non-empty search parameters and generates a string for a SQL query
const generateQuery = (filteredSearchParam) => {
  var count = 1; // Helps detertime andOperator variable
  var andOperator = ""; // Used in conjunction with counter variable for adding AND operators to whereClause
  var whereClause = "WHERE "; // Initiate the whereClause string. It begins with a WHERE clause
  // Loop through the filteredCriteria object and create a string for each key/value pair. Add them after the tableJoin string
  for (const key in filteredSearchParam) {
    var keyValue = filteredSearchParam[key];
    if (count > 1) {
      andOperator = "AND ";
    }
    switch (key) {
      case "speciesName":
        where = andOperator + "s.speciesName = " + "'" + keyValue + "'" + " "; // Create the WHERE statement
        whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      case "version":
        where = andOperator + "s.genomeVersion = " + "'" + keyValue + "'" + " ";
        whereClause = whereClause.concat(where);
        break;
      case "ensembleGeneId":
        where =
          andOperator + "g.ensembleGeneId = " + "'" + keyValue + "'" + " ";
        whereClause = whereClause.concat(where);
        break;
      case "ensembleTranscriptId":
        where =
          andOperator + "t.transcriptomeId = " + "'" + keyValue + "'" + " ";
        whereClause = whereClause.concat(where);
        break;
      // Currently, there are no values for "geneSymbol" in the database
      case "geneSymbol":
        // where = andOperator + "s.speciesName = " + "'" + keyValue + "'" + " ";
        // whereClause = whereClause.concat(where);
        break;
      case "intronClass":
        where = andOperator + "i.intronType = " + "'" + keyValue + "'" + " ";
        whereClause = whereClause.concat(where);
        break;
      case "exactLength":
        where = andOperator + "i.intronLength = " + "'" + keyValue + "'" + " ";
        whereClause = whereClause.concat(where);
        break;
      case "relativeLength":
        where = andOperator + "g.geneLength = " + "'" + keyValue + "'" + " ";
        whereClause = whereClause.concat(where);
        break;
      case "strand":
        where = andOperator + "i.strand = " + "'" + keyValue + "'" + " ";
        whereClause = whereClause.concat(where);
        break;
      // Currently, there are no values for "coordinates" in the database
      case "coordinates":
        // where = andOperator + "s.species = " + "'" + keyValue + "'" + " ";
        // whereClause = whereClause.concat(where);
        break;
      // Currently, there are no values for "relativeExonLength" in the database
      case "relativeExonLength":
        // where = andOperator + "s.species = " + "'" + keyValue + "'" + " ";
        // whereClause = whereClause.concat(where);
        break;
      case "sequence":
        where = andOperator + "WHERE i.intronSequence = " + "'" + keyValue + "'" + " ";
        whereClause = whereClause.concat(where);
        break;
      default:
        break;
    }
    count++;
  }
  const tableJoin =
    "SELECT * FROM Species s INNER JOIN Gene g ON s.speciesId = g.speciesId INNER JOIN Transcriptome t ON g.geneNumId = t.geneNumId INNER JOIN intron_transcriptome_junction itj ON t.transcriptomeNumId = itj.transcriptomeNumId INNER JOIN Intron i ON itj.intronNumId = i.intronNumId INNER JOIN Exon e ON i.intronNumId = e.intronNumId INNER JOIN intron_score_junction isj ON i.intronNumId = isj.intronNumId INNER JOIN Score score ON isj.scoreId = score.scoreId ";
  var generatedQuery = tableJoin + whereClause; // The final SQL Query statement. Result of tableJoin + whereClause
  console.log("PRINTING whereClause PORTION: " + whereClause); // (DEBUGGING) Check the whereClause portion of the entire query
  console.log("PRINTING GENERATED QUERY: " + generatedQuery); // (DEBUGGING) Check the final SQL statement
  return generatedQuery;
};

/* POST Route 
 *  https://major-and-minor-intron-db.ue.r.appspot.com/search/
 *  Main search route. Uses both the filterSearchCriteria, and generateQuery methods 
 *  to generate a relevant qurey string to pull results from the database based on user input.
 */
searchRouter.post("/", async (req, res) => {
  filterSearchCriteria(req.body);
  const sqlQuery = generateQuery(filteredCriteria);
  return sequelize
    .query(sqlQuery, {
      type: QueryTypes.SELECT,
    })
    .then((response) => {
      console.log(response);
      res.json(response);
      return response;
    });
});

/* GET Route 
 *  https://major-and-minor-intron-db.ue.r.appspot.com/search/intron
 *  Intron route. Returns all introns currently in the database.
 */
searchRouter.get("/intron", function (req, res) {
   Intron.findAll()
    .then((intron) => {
      console.log(intron);
      res.json(intron);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

<<<<<<< HEAD
searchRouter.get("/intron",function(req, res, next) {
  connection.query(
    "SELECT * FROM `Intron`",
    
    function(error, results, fields) {
      if (error) throw error;
      
      res.json(results);
      
    })
  
});

searchRouter.get("/intron/:intronId",function(req, res, next) {

  var intronId=req.params.intronId;

  connection.query(

    
    "SELECT * FROM `Intron` WHERE  intronId = '" + intronId + "'",
    
    function(error, results, fields) {
      if (error) throw error;
      
      res.json(results);
      
    })
  
});


searchRouter.get("/species/:speciesName/:genomeVersion",function(req, res, next) {
  
  var species=req.params.speciesName
  var version=req.params.genomeVersion

  connection.query(
    "SELECT * FROM `Species`  WHERE speciesName = '" + species + "' AND genomeVersion = '" + version + "'" ,
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );

});






searchRouter.get("/species/:speciesName",function(req, res, next) {
  connection.query(
    "SELECT * FROM `Species`  WHERE speciesName = ?",
    req.params.speciesName,
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    }
  );
=======
/* GET Route 
 *  https://major-and-minor-intron-db.ue.r.appspot.com/search/intron/:intronNumId
 *  Intron ID search route. Returns a single intron based on the requested ID value 
 */
searchRouter.get("/intron/:intronNumId", function (req, res) {
  Intron.findAll({
    where: {
      [Op.and]: [{ intronNumId: req.params.intronNumId }],
    },
  })
    .then((intron) => {
      console.log(intron);
      res.json(intron);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});

/* GET Route 
 *  https://major-and-minor-intron-db.ue.r.appspot.com/search/species/:speciesName/:genomeVersion
 *  Species search route. Returns all species filtered by speciesName and genmeVersion currently in the database.
 */
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
>>>>>>> Sequelize
});

/* GET Route 
 *  https://major-and-minor-intron-db.ue.r.appspot.com/search/species/:speciesName
 *  Species search route. Returns all species filtered by speciesName currently in the database.
 */
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

/* GET Route 
 *  https://major-and-minor-intron-db.ue.r.appspot.com/search/species
 *  Species route. Returns all species currently in the database.
 */
searchRouter.get("/species", function (req, res) {
  Species.findAll()
    .then((species) => {
      console.log(species);
      res.json(species);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err));
});


module.exports = searchRouter;


