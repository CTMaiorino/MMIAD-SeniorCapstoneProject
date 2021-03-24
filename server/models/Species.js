const Sequelize = require("sequelize");
const db = require("../database");
//const Gene = require("../models/Gene");


const Species = db.define("Species", {
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
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

// Foreign keys (Association)



 Species.associate = (models) => {
  Species.hasOne(models.Gene, { foreignKey: "speciesId"});
 };
 //Gene.belongsToMany(models.Species, { foreignKey: "speciesId"});
 //Species.hasOne(models.Gene, { foreignKey: "speciesId"});
/*
Gene.associate = (models) => {
  //Gene.belongsToMany(models.Species, { foreignKey: "speciesId"});
}
*/

//Species.hasOne(models.Gene, {foreignKey: 'speciesId'});

module.exports = Species;


//Alt Method///

/** 

"use strict";
const { Model } = require("sequelize");
const gene = require("../models/Gene");
const db = require("../database");
module.exports = (sequelize, DataTypes) => {
  */
  //class Species extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
/*
     static associate(models) {
      // define association here
      Species.hasOne(models.gene);
      gene.belongsToMany(models.Species);
    }
  }
  db.define("Species",
    {
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
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    },
    {
      sequelize,
      modelName: "Species",
    }
  );

  return Species;
};
*/
