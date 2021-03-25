const { Sequelize, DataTypes } = require("sequelize");

module.exports = (connection, Sequelize) => {
  const Gene = connection.define(
    "Gene",
    {
      geneId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
      ensemblGeneId: { type: DataTypes.CHAR },
      geneName: { type: DataTypes.CHAR },
      ncbiGeneId: { type: DataTypes.CHAR },
      geneType: { type: DataTypes.CHAR },
      geneStartCoord: { type: DataTypes.BIGINT },
      geneEndCoord: { type: DataTypes.BIGINT },
      geneLength: { type: DataTypes.INTEGER },
      geneSequence: { type: DataTypes.CHAR(20000) },
      ncbiGeneLink: { type: DataTypes.CHAR },
      ensembleGeneLink: { type: DataTypes.CHAR },
      ucscLink: { type: DataTypes.CHAR },
      speciesId: { type: DataTypes.CHAR, foreignKey: true, allowNull: false },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    },
    {
      timestamps: false,
    }
  );
  return Gene;
};

/* 
CHANGES MADE:
- Column geneId changed to "geneNumId"
 */
