const Sequelize = require("sequelize");
const db = require("../database");
const Species = require("../models/Species");

const Gene = db.define("gene", {
  geneId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  geneName: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  ncbiGeneId: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  ensemblGeneId: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  geneType: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  geneStartCoord: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  geneEndCoord: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  geneLength: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  geneSequence: {
    type: Sequelize.CHAR(20000),
    allowNull: true,
  },
  ncbiGeneLink: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  ensembleGeneLink: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  ucscLink: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  speciesId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  },
});

// Add foreign key (speciesId)
Gene.hasMany(Species, { foreignKey: "speciesId" });

//Export
module.exports = Gene;
