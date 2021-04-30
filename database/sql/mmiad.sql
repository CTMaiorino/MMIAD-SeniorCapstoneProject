DROP DATABASE IF EXISTS mmiadDB;
CREATE DATABASE mmiadDB;

USE mmiadDB;

DROP TABLE IF EXISTS Exon;
DROP TABLE IF EXISTS Gene;
DROP TABLE IF EXISTS Intron;
DROP TABLE IF EXISTS Species;
DROP TABLE IF EXISTS Transcriptome;
DROP TABLE IF EXISTS Score;
DROP TABLE IF EXISTS IntronScoreJunction;
DROP TABLE IF EXISTS IntronTranscriptomeJunction;
DROP TABLE IF EXISTS Admin;

-- SET UP ALL TABLES FOR THE DATABASE

CREATE TABLE Exon(
	exonId INT NOT NULL,
	exonStartCoordup BIGINT NULL,
	exonEndCoordUp BIGINT NULL,
	intronNumId INT NULL,
	exonStartCoordDown BIGINT NULL,
	exonEndCoordDown BIGINT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (exonId),
    FOREIGN KEY (intronNumId) REFERENCES Intron(intronNumId)
);
-- DROP TABLE IF EXISTS Exon;


CREATE TABLE Gene(
	geneNumId INT NOT NULL,
    ensemblGeneId VARCHAR(255) NULL,
    geneName VARCHAR(255) NULL,
	ncbiGeneId VARCHAR(255) NULL,
	geneType VARCHAR(255) NULL,
	geneStartCoord BIGINT NULL,
	geneEndCoord BIGINT NULL,
	geneLength INT NULL,
	geneSequence VARCHAR(20000) NULL,
	ncbiGeneLink NVARCHAR(255) NULL,
	ensemblGeneLink NVARCHAR(255) NULL,
	ucscLink NVARCHAR(255) NULL,
	speciesId INT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (geneId),
    FOREIGN KEY (speciesId) REFERENCES Species(speciesId)
);

-- ALTER TABLE Gene
-- ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- ADD COLUMN updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;


CREATE TABLE Intron(
	intronNumId INT NOT NULL,
    intronId NVARCHAR(100) NOT NULL,
	intronType VARCHAR(3) NULL,
	subtype NCHAR(5) NULL,
	intronStartCoord BIGINT NULL,
	intronSequence VARCHAR(20000) NULL,
	rank INT NULL,
	intronLength INT NULL,
	branchPoint VARCHAR(255) NULL,
	acceptorSpliceSite VARCHAR(255) NULL,
	strand VARCHAR(1) NULL,
	cluster INT NULL,
	frame INT NULL,
	chromosome VARCHAR(255) NULL,
	intronEndCoord BIGINT NULL,
	donorSpliceSite VARCHAR(255) NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (intronNumId)
);
-- DROP TABLE IF EXISTS Intron;
-- ALTER TABLE Intron
-- MODIFY strand VARCHAR(1) NULL;


CREATE TABLE Species(
	speciesId INT NOT NULL,
	speciesName NVARCHAR(255) NULL,
	commonName NVARCHAR(255) NULL,
	genomeVersion NVARCHAR(255) NULL,
	ensemblVersion NVARCHAR(255) NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (speciesId)
);

-- ALTER TABLE Species
-- ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- ADD COLUMN updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

CREATE TABLE Transcriptome(
	transcriptomeNumId INT NOT NULL,
    transcriptomeId VARCHAR(20) NOT NULL,
	transcriptomeEnsemblLink NVARCHAR(255) NULL,
	transcriptomeStartCoord BIGINT NULL,
	transcriptomeEndCoord BIGINT NULL,
	geneNumId INT NULL,
	ensemblId NVARCHAR(255) NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (transcriptomeNumId),
    FOREIGN KEY (geneNumId) REFERENCES Gene(geneNumId)
);
-- ALTER TABLE Transcriptome
-- MODIFY COLUMN ;
-- ALTER TABLE Transcriptome DROP FOREIGN KEY foreign_key_id_goes_here;
-- ALTER TABLE Transcriptome ADD CONSTRAINT fk_gene_num_id FOREIGN KEY (geneNumId) REFERENCES mmiadDB.Gene(geneNumId);


CREATE TABLE Score(
	scoreId INT NOT NULL,
	overallScore FLOAT NULL,
	fiveScore FLOAT NULL,
	threeScore FLOAT NULL,
	breakPointScore FLOAT NULL,
	`type` VARCHAR(255) NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (scoreId)
);

-- ALTER TABLE Score
-- ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- ADD COLUMN updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

CREATE TABLE intron_score_junction(
	scoreId INT NOT NULL,
	intronNumId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (scoreId, intronNumId),
    FOREIGN KEY (scoreId) REFERENCES Score(scoreId),
    FOREIGN KEY (intronNumId) REFERENCES Intron(intronNumId)
);
-- ALTER TABLE intron_score_junction DROP FOREIGN KEY intron_score_junction_ibfk_1;
-- ALTER TABLE intron_score_junction DROP FOREIGN KEY intron_score_junction_ibfk_2;
-- ALTER TABLE intron_score_junction ADD CONSTRAINT fk_score_id FOREIGN KEY (scoreId) REFERENCES mmiadDB.Score(scoreId);
-- ALTER TABLE intron_score_junction ADD CONSTRAINT fk_intron_num_id FOREIGN KEY (intronNumId) REFERENCES mmiadDB.Intron(intronNumId);


CREATE TABLE intron_transcriptome_junction(
	transcriptomeNumId INT NOT NULL,
	intronNumId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (transcriptomeNumId, intronNumId),
    FOREIGN KEY (transcriptomeNumId) REFERENCES Transcriptome(transcriptomeNumId),
    FOREIGN KEY (intronNumId) REFERENCES Intron(intronNumId)
);
-- DROP TABLE IF EXISTS intron_transcriptome_junction;
-- ALTER TABLE intron_transcriptome_junction DROP FOREIGN KEY intron_transcriptome_junction_ibfk_1;
-- ALTER TABLE intron_transcriptome_junction DROP FOREIGN KEY intron_transcriptome_junction_ibfk_2;
-- ALTER TABLE intron_transcriptome_junction ADD CONSTRAINT fk_transcriptome_num_id FOREIGN KEY (transcriptomeNumId) REFERENCES mmiadDB.Transcriptome(transcriptomeNumId);
-- ALTER TABLE intron_transcriptome_junction ADD CONSTRAINT fk_itj_intron_num_id FOREIGN KEY (intronNumId) REFERENCES mmiadDB.Intron(intronNumId);


CREATE TABLE Admin(
    userId VARCHAR(30) NOT NULL,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (userId)
);
