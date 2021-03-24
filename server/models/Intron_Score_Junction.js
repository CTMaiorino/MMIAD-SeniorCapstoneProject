const {Sequelize, DataTypes } = require('sequelize');

module.exports = (connection, Sequelize) => {
const Intron_Score_Junction = connection.define("Intron_Score_Junction", {
  scoreId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true},
  intronId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true}},
  {
  timestamps: false
  });
  return Intron_Score_Junction;
};