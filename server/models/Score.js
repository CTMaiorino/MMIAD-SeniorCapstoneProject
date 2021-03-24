const {Sequelize, DataTypes } = require('sequelize');

module.exports = (connection, Sequelize) => {
const Score = connection.define("Score", {
  scoreId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true},
  overallScore: {type: DataTypes.FLOAT},
  fiveScore: {type: DataTypes.FLOAT},
  threeScore: {type: DataTypes.FLOAT},
  breakpointScore: {type: DataTypes.FLOAT},
  type: {type: DataTypes.CHAR},
  createdAt: {type: DataTypes.DATE},
  updatedAt: {type: DataTypes.DATE}},
  {
  timestamps: false
  });
  return Score;
};