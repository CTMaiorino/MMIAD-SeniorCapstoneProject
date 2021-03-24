const {Sequelize, DataTypes } = require('sequelize');

module.exports = (connection, Sequelize) => {
const Intron = connection.define("Intron", {
  intronId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true},
  intronType: {type: DataTypes.CHAR(3)},
  subtype: {type: DataTypes.CHAR(3)},
  intronStartCoord: {type: DataTypes.BIGINT},
  intronSequence: {type: DataTypes.CHAR(20000)},
  rank: {type: DataTypes.INTEGER},
  intronLength: {type: DataTypes.INTEGER},
  branchPoint: {type: DataTypes.CHAR},
  acceptorSpliceSite: {type: DataTypes.CHAR},
  strand: {type: DataTypes.BOOLEAN},
  cluster: {type: DataTypes.INTEGER},
  frame: {type: DataTypes.INTEGER},
  chromosome: {type: DataTypes.CHAR},
  intronEndCoord: {type: DataTypes.BIGINT},
  donorSpliceSite: {type: DataTypes.CHAR},
  createdAt: {type: DataTypes.DATE},
  updatedAt: {type: DataTypes.DATE}},
  {
  timestamps: false
  });
  return Intron;
};