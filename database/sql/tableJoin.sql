SELECT *
FROM mmiadDB.Species;

SELECT *
FROM mmiadDB.Gene;

SELECT *
FROM mmiadDB.Transcriptome;

SELECT *
FROM mmiadDB.intron_transcriptome_junction;

SELECT *
FROM mmiadDB.Intron;

SELECT *
FROM mmiadDB.Exon;

-- Join all of the tables together to perform queries on all the data
SELECT *
FROM mmiadDB.Species s
INNER JOIN mmiadDB.Gene g
	ON s.speciesId = g.speciesId
INNER JOIN mmiadDB.Transcriptome t
	ON g.geneNumId = t.geneNumId
INNER JOIN mmiadDB.intron_transcriptome_junction itj
	ON t.transcriptomeNumId = itj.transcriptomeNumId
INNER JOIN mmiadDB.Intron i
	ON itj.intronNumId = i.intronNumId
INNER JOIN mmiadDB.Exon e
	ON i.intronNumId = e.intronNumId
INNER JOIN mmiadDB.intron_score_junction isj
	ON i.intronNumId = isj.intronNumId
INNER JOIN mmiadDB.Score score
	ON isj.scoreId = score.scoreId
-- WHERE CLAUSE
WHERE s.speciesName = 'Anopheles gambiae' AND s.genomeVersion = 'AgamP4' AND i.strand = '';


-- Testing with AND/OR CLAUSES

-- Using 'AND' for WHERE clauses. This query returns 12 records.
SELECT *
FROM mmiadDB.Species s
INNER JOIN mmiadDB.Gene g
	ON s.speciesId = g.speciesId
INNER JOIN mmiadDB.Transcriptome t
	ON g.geneNumId = t.geneNumId
INNER JOIN mmiadDB.intron_transcriptome_junction itj
	ON t.transcriptomeNumId = itj.transcriptomeNumId
INNER JOIN mmiadDB.Intron i
	ON itj.intronNumId = i.intronNumId
INNER JOIN mmiadDB.Exon e
	ON i.intronNumId = e.intronNumId
INNER JOIN mmiadDB.intron_score_junction isj
	ON i.intronNumId = isj.intronNumId
INNER JOIN mmiadDB.Score score
	ON isj.scoreId = score.scoreId
WHERE s.speciesName = 'Anopheles gambiae' AND s.genomeVersion = 'AgamP4' AND i.strand = '+';

-- Using 'OR' for WHERE clauses. This query returns more than 152 records (bad). (CANNOT USE ORs. DISREGARD)

-- TESTING WITH OR clauses (wrapped in parentheses)
SELECT *
FROM mmiadDB.Species s
INNER JOIN mmiadDB.Gene g
	ON s.speciesId = g.speciesId
INNER JOIN mmiadDB.Transcriptome t
	ON g.geneNumId = t.geneNumId
INNER JOIN mmiadDB.intron_transcriptome_junction itj
	ON t.transcriptomeNumId = itj.transcriptomeNumId
INNER JOIN mmiadDB.Intron i
	ON itj.intronNumId = i.intronNumId
INNER JOIN mmiadDB.Exon e
	ON i.intronNumId = e.intronNumId
INNER JOIN mmiadDB.intron_score_junction isj
	ON i.intronNumId = isj.intronNumId
INNER JOIN mmiadDB.Score score
	ON isj.scoreId = score.scoreId
WHERE (s.speciesName = 'Anopheles gambiae' OR s.speciesName = 'Apis mellifera') AND (s.genomeVersion = 'AgamP4' OR s.genomeVersion = 'Amel_4.5') AND i.strand = '+';