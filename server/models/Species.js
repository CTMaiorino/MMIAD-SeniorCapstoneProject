const Sequelize = require("sequelize");
const db = require("../database");

const Species = db.define("species", {
  speciesId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  speciesName: {
    type: Sequelize.CHAR,
  },
  commonName: {
    type: Sequelize.CHAR,
  },
  genomeVersion: {
    type: Sequelize.CHAR,
  },
  ensemblVersion: {
    type: Sequelize.CHAR,
  },
});

module.exports = Species;
