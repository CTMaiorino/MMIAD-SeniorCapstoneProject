const Sequelize = require("sequelize");
const db = require("../database");
const Gene = require("../models/Gene");

const Transcriptome = db.define("transcriptome", {
  transcriptomeId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  transcriptomeEnsemblLink: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  transcriptomeStartCoord: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  transcriptomeEndCoord: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  geneId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  ensemblId: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  },
});

// Foreign key (geneId)
Transcriptome.belongsTo(Gene, { foreignKey: "geneId" });

//Export
module.exports = Transcriptome;
