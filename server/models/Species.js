const {Sequelize, DataTypes } = require('sequelize');

module.exports = (connection, Sequelize) => {
const Species = connection.define("Species", {
  speciesId: {
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    allowNull: false, 
    unique: true
  },
  speciesName: {type: DataTypes.CHAR},
  commonName: {type: DataTypes.CHAR},
  genomeVersion: {type: DataTypes.CHAR},
  ensemblVersion: {type: DataTypes.CHAR},
  createdAt: {type: DataTypes.DATE},
  updatedAt: {type: DataTypes.DATE}},
  {
  timestamps: false
  });
  return Species;
};