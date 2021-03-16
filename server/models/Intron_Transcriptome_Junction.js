const Sequelize = require('sequelize');
const db = require('../database');

const Intron_Transcriptome_Junction = db.define('intron_transcriptome_junction', {
    transcriptomeId: {
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
module.exports = Intron_Transcriptome_Junction;