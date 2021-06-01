CREATE DATABASE  IF NOT EXISTS `mmiadDB` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `mmiadDB`;
-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 34.73.36.95    Database: mmiadDB
-- ------------------------------------------------------
-- Server version	5.7.33-google-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '676c908e-6a7e-11eb-8926-42010a8e00ce:1-1564126';

--
-- Table structure for table `Species`
--

DROP TABLE IF EXISTS `Species`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Species` (
  `speciesId` int(11) NOT NULL,
  `speciesName` varchar(255) DEFAULT NULL,
  `commonName` varchar(255) DEFAULT NULL,
  `genomeVersion` varchar(255) DEFAULT NULL,
  `ensemblVersion` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`speciesId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Species`
--

LOCK TABLES `Species` WRITE;
/*!40000 ALTER TABLE `Species` DISABLE KEYS */;
INSERT INTO `Species` VALUES (1,'Anopheles gambiae','African malaria mosquito','AgamP4','AGAP006046-RA','2021-03-16 18:52:59','2021-03-16 18:52:59'),(2,'Apis mellifera','Western honey bee','Amel_4.5','GB40113-RA','2021-03-16 18:52:59','2021-03-16 18:52:59'),(3,'Arabidopsis thaliana','Thale cress','TAIR10','AT1G67500.2','2021-03-16 18:52:59','2021-03-16 18:52:59'),(4,'Bos taurus','Cattle','UMD3.1','ENSBTAT00000009338','2021-03-16 18:52:59','2021-03-16 18:52:59'),(5,'Caenorhabditis elegans','Roundworm','WBcel235',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(6,'Canis familiaris','Dog','CanFam3.1','ENSCAFT00000006559','2021-03-16 18:52:59','2021-03-16 18:52:59'),(7,'Ciona intestinalis','Vase tunicate','KH',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(8,'Danio rerio','Zebrafish','GRCz11',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(9,'Drosophila melanogaster','Fruit fly','BDGP6',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(10,'Gallus gallus','Chicken','Galgal5',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(11,'Glycine max','Soybean','Gm02',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(12,'Homo sapiens','Human','GRCh37',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(13,'Homo sapiens','Human','GRCh38',NULL,'2021-03-16 18:52:59','2021-03-28 18:56:02'),(14,'Macaca mulatta','Rhesus macaque','Mmul_8.0.1',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(15,'Monodelphis domestica','Gray short-tailed opossum','monDom5',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(16,'Mus musculus','House mouse','GRCm38',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(17,'Oryza sativa','Rice','IRGSP-1.0',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(18,'Pan troglodytes','Chimpanzee','Pan_tro_3.0',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(19,'Rattus norvegicus','Brown rat','Rnor_6.0',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(20,'Saccharomyces cerevisiae','Brewer\'s yeast','R64-1-1',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(21,'Schizosaccharomyces pombe','Fission yeast','ASM294v2',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(22,'Takifugu rubripes','Pufferfish','FUGU5',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(23,'Tetraodon nigroviridis','Spotted green pufferfish','TETRAODON8',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(24,'Xenopus tropicalis','Western clawed frog','JGI_4.2',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59'),(25,'Zea mays','Corn','AGPv4',NULL,'2021-03-16 18:52:59','2021-03-16 18:52:59');
/*!40000 ALTER TABLE `Species` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-06 14:37:57
