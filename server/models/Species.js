const Sequelize = require('sequelize');
const db = require('../database');

const Species = db.define('species', {
    speciesId: {
        type: Sequelize.INTEGER
    },
    speciesName: {
        type: Sequelize.STRING
    },
    commonName: {
        type: Sequelize.STRING
    },
    genomeVersion: {
        type: Sequelize.STRING
    },
    ensemblVersion: {
        type: Sequelize.STRING
    },
})

module.exports = Species;