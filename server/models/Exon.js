const { Sequelize, DataTypes } = require("sequelize");

module.exports = (connection, Sequelize) => {
  const Exon = connection.define(
    "Exon",
    {
      exonId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      exonStartCoordUp: { type: DataTypes.BIGINT },
      exonEndCoordUp: { type: DataTypes.BIGINT },
      intronNumId: { type: DataTypes.INTEGER, foreignKey: true },
      exonStartCoordDown: { type: DataTypes.BIGINT },
      exonStartCoordDown: { type: DataTypes.BIGINT },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    },
    {
      timestamps: false,
    }
  );
  return Exon;
};

/* 
CHANGES MADE:
- intronId changed to "intronNumId"
 */
