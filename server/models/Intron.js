const Sequelize = require('sequelize');
const db = require('../database');

const Intron = db.define("intron", {
  intronId: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    allowNull: false 
  },
  intronType: { 
    type: Sequelize.CHAR(3), 
    allowNull: true 
  },
  subtype: { 
    type: Sequelize.CHAR(3), 
    allowNull: true 
  },
  intronStartCoord: { 
    type: Sequelize.BIGINT, 
    allowNull: true 
  },
  intronSequence: { 
    type: Sequelize.CHAR(20000), 
    allowNull: true 
  },
  rank: { 
    type: Sequelize.INTEGER, 
    allowNull: true 
  },
  intronLength: { 
    type: Sequelize.INTEGER, 
    allowNull: true 
  },
  branchPoint: { 
    type: Sequelize.CHAR, 
    allowNull: true 
  },
  acceptorSpliceSite: { 
    type: Sequelize.CHAR, 
    allowNull: true 
  },
  strand: { 
    type: DataTypes.BOOLEAN, 
    allowNull: true 
  },
  cluster: { 
    type: Sequelize.INTEGER, 
    allowNull: true 
  },
  frame: { 
    type: Sequelize.INTEGER, 
    allowNull: true 
  },
  chromosome: { 
    type: Sequelize.CHAR, 
    allowNull: true 
  },
  intronEndCoord: { 
    type: Sequelize.BIGINT, 
    allowNull: true 
  },
  donorSpliceSite: { 
    type: Sequelize.CHAR, 
    allowNull: true 
  },
});

//Export
module.exports = Intron;
