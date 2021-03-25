const { Sequelize, DataTypes } = require("sequelize");

module.exports = (connection, Sequelize) => {
  const Intron = connection.define(
    "Intron",
    {
      intronNumId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      intronId: { type: DataTypes.CHAR(100), allowNull: false },
      intronType: { type: DataTypes.CHAR(3) },
      subtype: { type: DataTypes.CHAR(3) },
      intronStartCoord: { type: DataTypes.BIGINT },
      intronSequence: { type: DataTypes.CHAR(20000) },
      rank: { type: DataTypes.INTEGER },
      intronLength: { type: DataTypes.INTEGER },
      branchPoint: { type: DataTypes.CHAR },
      acceptorSpliceSite: { type: DataTypes.CHAR },
      strand: { type: DataTypes.CHAR(1) },
      cluster: { type: DataTypes.INTEGER },
      frame: { type: DataTypes.INTEGER },
      chromosome: { type: DataTypes.CHAR },
      intronEndCoord: { type: DataTypes.BIGINT },
      donorSpliceSite: { type: DataTypes.CHAR },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    },
    {
      timestamps: false,
    }
  );
  return Intron;
};

/* 
CHANGES MADE:
- strand datatype changed from BOOLEAN to CHAR(1)
- Column intronId was renamed to "intronNumId"
- Column "intronId" added (datatype CHAR(100))
 */
