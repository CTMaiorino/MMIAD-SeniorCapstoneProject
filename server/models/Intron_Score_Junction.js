const Sequelize = require('sequelize');
const db = require('../database');

const Intron_Score_Junction = db.define('intron_score_junction', {
    scoreId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        unique: true
    },
    intronId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        unique: true
    },
})
//Add foreign keys
//
module.exports = Intron_Score_Junction;