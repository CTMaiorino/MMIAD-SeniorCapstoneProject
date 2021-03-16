const Sequelize = require('sequelize');
const db = require('../database');

const Score = db.define('score', {
    scoreId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false, 
        unique: true
    },
    overallScore: {
        type: Sequelize.FLOAT
    },
    fiveScore: {
        type: Sequelize.FLOAT
    },
    threeScore: {
        type: Sequelize.FLOAT
    },
    breakpointScore: {
        type: Sequelize.FLOAT
    },
    type: {
        type: Sequelize.CHAR
    }
})

module.exports = Score;