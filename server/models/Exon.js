const Exon = sequelize.define("exon", {
  exonId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
  exonStartCoordUp: { type: DataTypes.BIGINT, allowNull: true },
  exonEndCoordUp: { type: DataTypes.BIGINT, allowNull: true },
  intronId: { type: DataTypes.INTEGER, allowNull: true },
  exonStartCoordDown: { type: DataTypes.BIGINT, allowNull: true },
  exonStartCoordDown: { type: DataTypes.BIGINT, allowNull: true },
});

// Add foreign key (intronId)
