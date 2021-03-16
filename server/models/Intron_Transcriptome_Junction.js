const Sequelize = require("sequelize");
const db = require("../database");
const Intron = require("../models/Intron");
const Transcriptome = require("../models/Transcriptome");

const Intron_Transcriptome_Junction = db.define(
  "intron_transcriptome_junction",
  {
    transcriptomeId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    intronId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
  }
);
//Add foreign keys
Intron_Transcriptome_Junction.belongsTo(Intron, { foreignKey: "intronId" });
Intron_Transcriptome_Junction.belongsTo(Transcriptome, {
  foreignKey: "transcriptomeId",
});

module.exports = Intron_Transcriptome_Junction;
