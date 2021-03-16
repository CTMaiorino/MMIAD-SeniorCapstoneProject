const Sequelize = require("sequelize");
const db = require("../database");
const Intron = require("../models/Intron");

const Exon = db.define("exon", {
  exonId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  exonStartCoordUp: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  exonEndCoordUp: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  intronId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  exonStartCoordDown: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  exonStartCoordDown: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  },
});

// Foreign key (intronId)
Intron.hasMany(Exon, { foreignKey: "intronId" });

//Export
module.exports = Exon;
