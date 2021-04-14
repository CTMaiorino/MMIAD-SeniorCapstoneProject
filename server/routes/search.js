var express = require("express");
var searchRouter = express.Router();
var bodyParser = require("body-parser");
const { text } = require("body-parser");
const nodemailer = require("nodemailer");
//Database and sequelize model imports
var connection = require("../database");
const sequelize = connection.sequelize;
const QueryTypes = require("sequelize");
const { Op } = require("sequelize");
const Intron = connection["Intron"];
const Species = connection["Species"];

var filteredCriteria = {}; // An object containing only non-empty search criteria values (Global variable)

// Test Objects
const sampleCriteria = {
  strand: "+",
  speciesName: ["Anopheles gambiae"],
  version: ["AgamP4"],
  relativeLength: 99,
};

// Species with two genome versions
const humanCriteria = {
  strand: "+",
  speciesName: ["Homo sapiens"],
  version: ["GRCh37"],
  relativeLength: 99,
};

// Test object for cross species selection
const crossSpeciesCriteria = {
  speciesName: ["Anopheles gambiae", "Apis mellifera", "Arabidopsis thaliana"],
  version: ["AgamP4", "Amel_4.5", "TAIR10"],
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
    if (
      filteredCriteria[key] === "" ||
      filteredCriteria[key] === null ||
      filteredCriteria[key].length === 0
    ) {
      delete filteredCriteria[key];
    }
  }
  console.log(filteredCriteria); // (DEBUGGING) Print filteredCriteria object. Should only contain non-empty key/value pairs (WORKING!)
};

// Step 2. This function takes in an object of non-empty search parameters and generates a string for a SQL query
const generateQuery = (filteredSearchParam) => {
  var count = 1; // Helps detertime andOperator variable
  var orCount = 1; // Helps determine orOperator
  var whereClause = "WHERE "; // Initiate the whereClause string. It will be added to the tableJoin string.
  var andOperator = ""; // Used in conjunction with counter variable for adding AND operators to whereClause
  var orOperator = ""; // Used when more than one species are selected
  var where = "";
  // TODO: Loop through the filteredCriteria object and create a string for each key/value pair. Add them after the tableJoin string
  for (const key in filteredSearchParam) {
    var keyValue = filteredSearchParam[key];
    if (count > 1) {
      andOperator = "AND ";
    }
    switch (key) {
      case "speciesName":
        var speciesArrLength = keyValue.length; // Length of the species array
        var whereEqualsOr = "";
        for (i = 0; i < speciesArrLength; i++) {
          if (orCount > 1) {
            orOperator = "OR ";
          }
          // console.log("This species is: " + keyValue[i]); // DEBUG: Print value of the each index in species array
          whereEquals =
            orOperator + "s.speciesName = " + "'" + keyValue[i] + "'" + " "; // Create the OR statements for the species
          whereEqualsOr = whereEqualsOr.concat(whereEquals);
          // console.log(whereEqualsOr); // DEBUG
          orCount++;
        }
        wrap = "(" + whereEqualsOr + ") "; // Wrap the species OR statements in parentheses: (s.speciesName = '' OR s.speciesName = '' OR ...)
        // where = andOperator + wrap; // Add an AND clause before orWrap
        where += wrap; // Add an AND clause before orWrap
        whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        // orCount = 1;
        break;

      case "version":
        var versionArrLength = keyValue.length; // Length of version array
        var whereEqualsOr = "";
        // console.log(orCount); // DEBUG
        for (i = 0; i < versionArrLength; i++) {
          if (orCount > 1) {
            orOperator = "OR ";
          }
          whereEquals =
            orOperator + "s.genomeVersion = " + "'" + keyValue[i] + "'" + " "; // Create the OR statements for the species
          whereEqualsOr = whereEqualsOr.concat(whereEquals);
          orCount++;
        }
        wrap = "(" + whereEqualsOr + ") "; // Wrap the species OR statements in parentheses: (s.speciesName = '' OR s.speciesName = '' OR ...)
        // where = andOperator + wrap; // Add an AND clause before orWrap
        where += wrap; // Add an AND clause before orWrap
        whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;

      case "ensembleGeneId":
        where =
          andOperator + "g.ensembleGeneId = " + "'" + keyValue + "'" + " "; // Create the WHERE statement
        whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      case "ensembleTranscriptId":
        where =
          andOperator + "t.transcriptomeId = " + "'" + keyValue + "'" + " "; // Create the WHERE statement
        whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      case "geneSymbol":
        // where = andOperator + "s.speciesName = " + "'" + keyValue + "'" + " "; // Create the WHERE statement
        // whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      case "intronClass":
        where = andOperator + "i.intronType = " + "'" + keyValue + "'" + " "; // Create the WHERE statement
        whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      case "exactLength":
        where = andOperator + "i.intronLength = " + "'" + keyValue + "'" + " "; // Create the WHERE statement
        whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      case "relativeLength":
        where = andOperator + "g.geneLength = " + "'" + keyValue + "'" + " "; // Create the WHERE statement
        whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      case "strand":
        where = andOperator + "i.strand = " + "'" + keyValue + "'" + " "; // Create the WHERE statement
        whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      case "coordinates":
        // where = andOperator + "s.species = " + "'" + keyValue + "'" + " "; // Create the WHERE statement
        // whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      case "relativeExonLength":
        // where = andOperator + "s.species = " + "'" + keyValue + "'" + " "; // Create the WHERE statement
        // whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      case "sequence":
        where =
          andOperator +
          "i.intronSequence = " +
          "'" +
          keyValue +
          "'" +
          " "; // Create the WHERE statement
        whereClause = whereClause.concat(where); // Add the where string to the whole whereClause
        break;
      default:
        break;
    }
    count++;
    orCount = 1; // Reset the count (other switch cases)
    orOperator = ""; // Reset the orOperator string for the next loop (other switch cases)
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
  console.log(req.body)
  const email = req.body.email;
  const exportOptions = req.body.emailFormatOptions
  delete req.body.email
  delete req.body.emailFormatOptions


  filterSearchCriteria(req.body);



  const sqlQuery = generateQuery(filteredCriteria);
  return sequelize
    .query(sqlQuery, {
      type: QueryTypes.SELECT,
    })
    .then((response) => {
      res.json(response);
      if (email != undefined) {
        emailUser(response, email, exportOptions)
      }
      return response;
    });
});

function emailUser(introns, email, exportOps) {
  console.log("Email=" + email)
  var attachments = []
  console.log(exportOps);
  for (key in exportOps) {
    switch (key) {
      case 'Default':
        attachments.push(exportAsDefault(introns));
        console.log("Default")
        console.log(attachments);
        break;
      case 'Exon GTF':
        attachments.push(exportAsGtf(introns));
        console.log('Exon GTF')
        console.log(attachments);
        break;
      case 'Intron Bed':
        attachments.push(exportAsBed(introns));
        console.log('Intron Bed')
        console.log(attachments);
        break;
      case 'Upstream Exon Fasta':
        attachments.push(exportAsUpstreamFasta(introns));
        console.log('Upstream Exon Fasta')
        console.log(attachments);
        break;
      case 'Downstream Exon Fasta':
        attachments.push(exportAsDownstreamFasta(introns));
        console.log("Downstream Exon Fasta")
        console.log(attachments);
        break;
      default:
        break;
    }
  }
  console.log(attachments);

  const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: 'james101544@gmail.com',
      pass: 'nickydudes'
    },
    //secure: true,
  });

  const mailOptions = {
    from: "james101544@gmail.com",  // sender address
    to: email,   // list of receivers
    subject: 'MMIAD files',
    text: 'Here are your requested files',
    attachments: attachments


  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });



}
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

/* POST Route
 *  https://major-and-minor-intron-db.ue.r.appspot.com/search/email
 *  Reads intron data from front to email to user
 */
searchRouter.post("/email", async (req, res) => {
  const introns = req.body;
  const email = req.body.email
  const exportOptions = introns.emailFormatOptions
  delete req.body.email
  delete req.body.emailFormatOptions
  console.log(req.body)
  console.log(exportOptions)
  emailUser(introns, email, exportOptions)
});

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



const exportAsGtf = (introns) => {
  var geneString = ""
  var transcriptString = ""
  var totalString = ""
  introns.forEach((intron) => {
    //Here, it grabs information about the intron that is needed for the file. You will need to do this as well for different properties
    const sequence = intron.sequence
    const geneId = intron.ensemblGeneId
    const start = intron.intronStartCoord
    const end = intron.intronStartCoord
    const score = intron.overallScore
    const strand = intron.strand
    const transcriptomeId = intron.transcriptomeId
    //Following data points do not currently exist in the DB
    //Replace at later date when data is supported 
    const geneSource = "N/A"
    const geneName = "N/A" // intron.geneName is currently null in DB
    const geneBioType = "transcribed_unprocessed_pseudogene"
    //GTF format has these properties separated by tabs, followed by a new line
    geneString = "transcribed_unprocessed_pseudogene  gene " + "   " + "gene_id: " + geneId + "   " + "gene_name: " + geneName + "   " + "gene_source: " + geneSource + "   " + "gene_start: " + start + "   " + "gene_end: " + end + "   " + "gene_score: " + score + "   " + "gene_strand: " + strand + "   " + "gene_sequence: " + sequence + "   " + "gene_bioType: " + geneBioType + "\n"
    transcriptString = "processed_transcript                transcript " + "   " + "gene_id: " + geneId + "   " + "transcript_id: " + transcriptomeId + "   " + "gene_name: " + geneName + "   " + "gene_source: " + geneSource + "   " + "gene_bioType: " + geneBioType + "   " + "gene_name: " + geneName + "\n"
    totalString += geneString + transcriptString + "\n"
  })
  return downloadFile(totalString, "gtf");
}

//Using this function as an example of how to code the rest
const exportAsBed = (introns) => {
  var totalString = ""//Your entire file must be saved as 1 string. TotalString will be this string
  console.log(introns);
  introns.forEach((intron) => {//Add to the string for every intron
    //console.log(intron)

    //Here, it grabs information about the intron that is needed for the file. You will need to do this as well for different properties
    const chromosome = intron.chromosome
    const start = intron.intronStartCoord
    const end = intron.intronStartCoord
    const intronId = intron.intronId
    const score = intron.overallScore
    const strand = intron.strand
    //Bed format has these properties separated by tabs, followed by a new line
    //You might need to do more complecated string stuff. I know for Fasta, I would need to have 2 \n's"
    totalString += chromosome + "   " + start + "   " + end + "   " + intronId + "   " + score + "   " + strand + "\n"

  })
  return downloadFile(totalString, "bed");//This function gets your data, with a speficied type(Which could be wrong but I guessed) and  will download the file


}

const exportAsDefault = (introns) => {
  console.log("Exporting as default")
  var totalString = ""
  introns.forEach((intron) => {
    delete intron.speciesId

    delete intron.geneId
    delete intron.intronId
    delete intron.scoreId
    totalString += Object.values(intron).toString() + "\n"
  })
  var headerString = Object.keys(introns[0]).toString() + "\n"
  totalString = headerString + totalString
  return downloadFile(totalString, "csv");
}


const exportAsDownstreamFasta = (introns) => {
  var totalString = ""
  console.log(introns);
  introns.forEach((intron) => {
    const id = intron.intronId;
    const speciesName = intron.speciesName;
    const chromosome = intron.chromosome;
    const strand = intron.strand;
    const start = intron.geneStartCoord;
    const end = intron.geneEndCoord;
    const geneLength = intron.geneLength;
    const score = intron.scoreId;
    const rank = intron.rank;
    const sequence = intron.intronSequence;
    totalString += ">" + id + "|" + speciesName + "|" + chromosome + "|" + strand + "|" + start
      + "|" + end + "|" + geneLength + "|" + score + "|" + rank + "\n"
      + sequence + "\n";
  })
  return downloadFile(totalString, "dwnfasta");


}

const exportAsUpstreamFasta = (introns) => {
  var totalString = ""
  console.log(introns);
  introns.forEach((intron) => {
    const id = intron.intronId;
    const speciesName = intron.speciesName;
    const chromosome = intron.chromosome;
    const strand = intron.strand;
    const start = intron.geneStartCoord;
    const end = intron.geneEndCoord;
    const geneLength = intron.geneLength;
    const score = intron.scoreId;
    const rank = intron.rank;
    const sequence = intron.intronSequence;
    totalString += ">" + id + "|" + speciesName + "|" + chromosome + "|" + strand + "|" + start
      + "|" + end + "|" + geneLength + "|" + score + "|" + rank + "\n"
      + sequence + "\n";
  })
  return downloadFile(totalString, "upfasta");


}

// Downloads the file
const downloadFile = (data, type) => {
  var email = {
    fileName: "MMIAD" + type + "." + type,
    content: data
  }
  return email
}






module.exports = searchRouter;
