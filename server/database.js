const { Sequelize } = require("sequelize");
//Database connection for sequelize
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_INSTANCE_NAME = process.env.DB_INSTANCE_NAME;

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: "mysql",
  define: {
    timestamps: true,
    freezeTableName: true
  },
  host: "/cloudsql/major-and-minor-intron-db:us-east1:mmiad-db",
  timestamps: false,
  dialectOptions: {
    socketPath: "/cloudsql/major-and-minor-intron-db:us-east1:mmiad-db",
  },
});

connection.authenticate()
.then(function(err) {
console.log('Connection successful...Testing');
})
.catch(function (err) {
console.log('Unable to connect to the database:', err);
});

console.log("Connected to: " + connection.getDatabaseName());

const db = {};
db.Sequelize = Sequelize;
db.sequelize = connection;

db.Exon = require('./models/Exon')(connection, Sequelize);
db.Gene = require('./models/Gene')(connection, Sequelize);
db.Intron_Score_Junction = require('./models/Intron_Score_Junction')(connection, Sequelize);
db.Intron_Transcriptome_Junction = require('./models/Intron_Transcriptome_Junction')(connection, Sequelize);
db.Intron = require('./models/Intron')(connection, Sequelize);
db.Score = require('./models/Score')(connection, Sequelize);
db.Species = require('./models/Species')(connection, Sequelize);
db.Transcriptome = require('./models/Transcriptome')(connection, Sequelize);

console.log("Exon table is defined: " + connection.isDefined('Exon'));
console.log("Gene table is defined: " + connection.isDefined('Gene'));
console.log("Intron_Score_Juction table is defined: " + connection.isDefined('Intron_Score_Juction'));
console.log("Intron_Transcriptome_Junction table is defined: " + connection.isDefined('Intron_Transcriptome_Junction'));
console.log("Intron table is defined: " + connection.isDefined('Intron'));
console.log("Score table is defined: " + connection.isDefined('Score'));
console.log("Species table is defined: " + connection.isDefined('Species'));
console.log("Transcriptome table is defined: " + connection.isDefined('Transcriptome'));

module.exports = db;