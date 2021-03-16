const Gene = sequelize.define("gene", {
  geneId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
  geneName: { type: DataTypes.CHAR, allowNull: true },
  ncbiGeneId: { type: DataTypes.CHAR, allowNull: true },
  ensemblGeneId: { type: DataTypes.CHAR, allowNull: true },
  geneType: { type: DataTypes.CHAR, allowNull: true },
  geneStartCoord: { type: DataTypes.BIGINT, allowNull: true },
  geneEndCoord: { type: DataTypes.BIGINT, allowNull: true },
  geneLength: { type: DataTypes.INTEGER, allowNull: true },
  geneSequence: { type: DataTypes.CHAR(20000), allowNull: true },
  ncbiGeneLink: { type: DataTypes.CHAR, allowNull: true },
  ensembleGeneLink: { type: DataTypes.CHAR, allowNull: true },
  ucscLink: { type: DataTypes.CHAR, allowNull: true },
  speciesId: { type: DataTypes.INTEGER, allowNull: true },
});

// Add foreign key (speciesId)
