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

CREATE TABLE Exon(
	exonId INT NOT NULL,
	exonStartCoordup BIGINT NULL,
	exonEndCoordUp BIGINT NULL,
	intronId INT NULL,
	exonStartCoordDown BIGINT NULL,
	exonEndCoordDown BIGINT NULL,
	PRIMARY KEY (exonId),
    FOREIGN KEY (intronId) REFERENCES Intron(intronId)
);

CREATE TABLE Gene(
	geneId INT NOT NULL,
	geneName VARCHAR(255) NULL,
	ncbiGeneId VARCHAR(255) NULL,
	ensemblGeneId VARCHAR(255) NULL,
	geneType VARCHAR(255) NULL,
	geneStartCoord BIGINT NULL,
	geneEndCoord BIGINT NULL,
	geneLength INT NULL,
	geneSequence VARCHAR(20000) NULL,
	ncbiGeneLink NVARCHAR(255) NULL,
	ensemblGeneLink NVARCHAR(255) NULL,
	ucscLink NVARCHAR(255) NULL,
	speciesId INT NULL,
    PRIMARY KEY (geneId)
);

ALTER TABLE Gene
ADD FOREIGN KEY (speciesId) REFERENCES Species(speciesId);

CREATE TABLE Intron(
	intronId INT NOT NULL,
	intronType VARCHAR(3),
	subtype NCHAR(5) NULL,
	intronStartCoord BIGINT NULL,
	intronSequence VARCHAR(20000) NULL,
	rank INT NULL,
	intronLength INT NULL,
	branchPoint VARCHAR(255) NULL,
	acceptorSpliceSite VARCHAR(255) NULL,
	strand BIT NULL,
	cluster INT NULL,
	frame INT NULL,
	chromosome VARCHAR(255) NULL,
	intronEndCoord BIGINT NULL,
	donorSpliceSite VARCHAR(255) NULL,
    PRIMARY KEY (intronId)
);

ALTER TABLE Intron MODIFY intronType VARCHAR(3) NULL;

CREATE TABLE Species(
	speciesId INT NOT NULL,
	speciesName NVARCHAR(255) NULL,
	commonName NVARCHAR(255) NULL,
	genomeVersion NVARCHAR(255) NULL,
	ensemblVersion NVARCHAR(255) NULL,
    PRIMARY KEY (speciesId)
);

CREATE TABLE Transcriptome(
	transcriptomeId INT NOT NULL,
	transcriptomeEnsemblLink NVARCHAR(255) NULL,
	transcriptomeStartCoord BIGINT NULL,
	transcriptomeEndCoord BIGINT NULL,
	geneId INT NULL,
	ensemblId NVARCHAR(255) NULL,
    PRIMARY KEY (transcriptomeId),
    FOREIGN KEY (geneId) REFERENCES Gene(geneId)
);

CREATE TABLE Score(
	scoreId INT NOT NULL,
	overallScore FLOAT NULL,
	fiveScore FLOAT NULL,
	threeScore FLOAT NULL,
	breakPointScore FLOAT NULL,
	`type` VARCHAR(255) NULL,
    PRIMARY KEY (scoreId)
);

CREATE TABLE intron_score_junction(
	scoreId INT NOT NULL,
	intronId INT NOT NULL,
    FOREIGN KEY (scoreId) REFERENCES Score(scoreId),
    FOREIGN KEY (intronId) REFERENCES Intron(intronId)
);

ALTER TABLE intron_score_junction
ADD PRIMARY KEY (scoreId, intronId);

CREATE TABLE intron_transcriptome_junction(
	transcriptomeId INT NOT NULL,
	intronId INT NOT NULL,
    FOREIGN KEY (transcriptomeId) REFERENCES Transcriptome(transcriptomeId),
    FOREIGN KEY (intronId) REFERENCES Intron(intronId)
);

ALTER TABLE intron_transcriptome_junction
ADD PRIMARY KEY (transcriptomeId, intronId);

CREATE TABLE Admin(
    userId VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (userId)
);

ALTER TABLE Admin
ADD firstName VARCHAR(20) NOT NULL;

ALTER TABLE Admin
ADD lastName VARCHAR(20) NOT NULL;