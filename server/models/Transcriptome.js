const {Sequelize, DataTypes } = require('sequelize');

module.exports = (connection, Sequelize) => {
const Transcriptome = connection.define("Transcriptome", {
  transcriptomeId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true},
  transcriptomeEnsemblLink: {type: DataTypes.CHAR},
  transcriptomeStartCoord: {type: DataTypes.BIGINT},
  transcriptomeEndCoord: {type: DataTypes.BIGINT},
  geneId: {type: DataTypes.INTEGER},
  ensemblId: {type: DataTypes.CHAR},
  createdAt: {type: DataTypes.DATE},
  updatedAt: {type: DataTypes.DATE}},
  {
  timestamps: false
  });
  return Transcriptome;
};