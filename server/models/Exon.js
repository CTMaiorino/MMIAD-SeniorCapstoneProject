const Sequelize = require('sequelize');
const db = require('../database');

const Exon = db.define("exon", {
  exonId: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    allowNull: false 
  },
  exonStartCoordUp: { 
    type: Sequelize.BIGINT, 
    allowNull: true 
  },
  exonEndCoordUp: { 
    type: Sequelize.BIGINT, 
    allowNull: true 
  },
  intronId: { 
    type: Sequelize.INTEGER, 
    allowNull: true 
  },
  exonStartCoordDown: { 
    type: Sequelize.BIGINT, 
    allowNull: true 
  },
  exonStartCoordDown: { 
    type: Sequelize.BIGINT, 
    allowNull: true 
  },
});

// Add foreign key (intronId)

//Export 
module.exports = Exon;
