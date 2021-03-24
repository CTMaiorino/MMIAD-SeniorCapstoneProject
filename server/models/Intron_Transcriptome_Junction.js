const {Sequelize, DataTypes } = require('sequelize');

module.exports = (connection, Sequelize) => {
const Intron_Transcriptome_Junction = connection.define("Intron_Transcriptome_Junction", {
  transcriptomeId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true},
  intronId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true}},
  {
  timestamps: false
  });
  return Intron_Transcriptome_Junction;
};