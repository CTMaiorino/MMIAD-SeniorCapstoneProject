const Sequelize = require("sequelize");
const db = require("../database");
const Intron = require("../models/Intron");
const Score = require("../models/Score");

const Intron_Score_Junction = db.define("intron_score_junction", {
  scoreId: {
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
});
//Add foreign keys
Intron_Score_Junction.belongsTo(Intron, { foreignKey: "intronId" });
Intron_Score_Junction.belongsTo(Score, { foreignKey: "scoreId" });

module.exports = Intron_Score_Junction;
