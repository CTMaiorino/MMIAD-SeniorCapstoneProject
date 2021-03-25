const { Sequelize, DataTypes } = require("sequelize");

module.exports = (connection, Sequelize) => {
  const Intron_Transcriptome_Junction = connection.define(
    "Intron_Transcriptome_Junction",
    {
      transcriptomeNumId: {
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
  return Intron_Transcriptome_Junction;
};

/* 
CHANGES MADE:
- transcriptomeId renamed to "transcriptomeNumId"
- Column intronId renamed to "intronNumId"
- Columns "createdAt" and "updatedAt" added
 */
