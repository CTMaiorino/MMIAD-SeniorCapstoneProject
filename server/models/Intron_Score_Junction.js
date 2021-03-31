const { Sequelize, DataTypes } = require("sequelize");

module.exports = (connection, Sequelize) => {
  const Intron_Score_Junction = connection.define(
    "Intron_Score_Junction",
    {
      scoreId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      intronNumId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    },

    {
      timestamps: false,
    }
  );
  return Intron_Score_Junction;
};

/* 
CHANGES MADE:
- Column intronId renamed to "intronNumId"
- Columns "createdAt" and "updatedAt" added
 */
