const Sequelize = require("sequelize");
const db = require("../database");
//const Species = require("../models/Species");

const Gene = db.define("Gene", {
  geneId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  geneName: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  ncbiGeneId: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  ensemblGeneId: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  geneType: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  geneStartCoord: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  geneEndCoord: {
    type: Sequelize.BIGINT,
    allowNull: true,
  },
  geneLength: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  geneSequence: {
    type: Sequelize.CHAR(20000),
    allowNull: true,
  },
  ncbiGeneLink: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  ensembleGeneLink: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  ucscLink: {
    type: Sequelize.CHAR,
    allowNull: true,
  },
  speciesId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  },
});

// Foreign keys (Association)



 Gene.associate = (models) => {
  Gene.belongsToMany(models.Species, {foreignKey: "speciesId"});
 };
 //Species.hasOne(models.Gene, { foreignKey: "speciesId"});
 //Gene.belongsToMany(models.Species, {foreignKey: 'speciesId'});
/*
 Species.associate = (models) => {
  //Species.hasOne(models.Gene, { foreignKey: "speciesId"});
 }
*/
// Gene.belongsToMany(Species, { foreignKey: "speciesId"});  

//Export
module.exports = Gene;


//Alt Method///
/*
"use strict";
const { Model } = require("sequelize");
const species = require("../models/Species");
const db = require("../database");
module.exports = (sequelize, DataTypes) => {
  class Gene extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*
    static associate(models) {
      // define association here
      Gene.belongsToMany(models.species);
      species.hasOne(models.Gene);
    }
  }
  db.define("Gene",
    {
      geneId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      geneName: {
        type: DataTypes.CHAR,
        allowNull: true,
      },
      ncbiGeneId: {
        type: DataTypes.CHAR,
        allowNull: true,
      },
      ensemblGeneId: {
        type: DataTypes.CHAR,
        allowNull: true,
      },
      geneType: {
        type: DataTypes.CHAR,
        allowNull: true,
      },
      geneStartCoord: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      geneEndCoord: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      geneLength: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      geneSequence: {
        type: DataTypes.CHAR(20000),
        allowNull: true,
      },
      ncbiGeneLink: {
        type: DataTypes.CHAR,
        allowNull: true,
      },
      ensembleGeneLink: {
        type: DataTypes.CHAR,
        allowNull: true,
      },
      ucscLink: {
        type: DataTypes.CHAR,
        allowNull: true,
      },
      speciesId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      },
    },
    {
      sequelize,
      modelName: "Gene",
    }
  );

  return Gene;
};
*/