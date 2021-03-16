const Sequelize = require("sequelize");
const db = require("../database");
const Gene = require("../models/Gene");

const Transcriptome = db.define("transcriptome", {
  transcriptomeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  transcriptomeEnsemblLink: {
    type: DataTypes.CHAR,
    allowNull: true,
  },
  transcriptomeStartCoord: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  transcriptomeEndCoord: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
  geneId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ensemblId: {
    type: DataTypes.CHAR,
    allowNull: true,
  },
});

// Foreign key (geneId)
Transcriptome.belongsTo(Gene, { foreignKey: "geneId" });

//Export
module.exports = Transcriptome;
