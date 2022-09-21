CREATE DATABASE  IF NOT EXISTS `hospital_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hospital_management`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: hospital_management
-- ------------------------------------------------------
-- Server version	8.0.29

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

--
-- Table structure for table `admission_table`
--

DROP TABLE IF EXISTS `admission_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admission_table` (
  `admission_id` int NOT NULL AUTO_INCREMENT,
  `admited_date` date NOT NULL,
  `patient_id` int NOT NULL,
  `doctor_id` int NOT NULL,
  `bed_id` int NOT NULL,
  `dept_id` int NOT NULL,
  PRIMARY KEY (`admission_id`),
  UNIQUE KEY `admission_id_UNIQUE` (`admission_id`),
  KEY `patient_id_idx` (`patient_id`),
  KEY `doctor_id_idx` (`doctor_id`),
  KEY `bed_id_idx` (`bed_id`),
  KEY `FKo4yhdjfugpuqx31p49y5kpq79` (`dept_id`),
  CONSTRAINT `bed_id` FOREIGN KEY (`bed_id`) REFERENCES `bed_master` (`bed_id`),
  CONSTRAINT `doctor_id` FOREIGN KEY (`doctor_id`) REFERENCES `doctor_table` (`doctor_id`),
  CONSTRAINT `FKo4yhdjfugpuqx31p49y5kpq79` FOREIGN KEY (`dept_id`) REFERENCES `department_table` (`dept_id`),
  CONSTRAINT `patient_id` FOREIGN KEY (`patient_id`) REFERENCES `patient_table` (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admission_table`
--

LOCK TABLES `admission_table` WRITE;
/*!40000 ALTER TABLE `admission_table` DISABLE KEYS */;
INSERT INTO `admission_table` VALUES (1,'2022-08-12',1,1,1,1),(4,'2024-06-11',1,1,1,1),(5,'2024-06-10',1,1,1,1),(6,'2024-06-10',9,1,1,1),(7,'2024-06-10',11,3,3,3),(8,'2024-06-10',11,3,3,3),(9,'2024-06-10',11,3,4,3);
/*!40000 ALTER TABLE `admission_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bed_master`
--

DROP TABLE IF EXISTS `bed_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bed_master` (
  `bed_id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  `charges` double NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  PRIMARY KEY (`bed_id`),
  UNIQUE KEY `bed_id_UNIQUE` (`bed_id`),
  KEY `FK3w6lb538cw6qesmr4m0k61td2` (`dept_id`),
  CONSTRAINT `FK3w6lb538cw6qesmr4m0k61td2` FOREIGN KEY (`dept_id`) REFERENCES `department_table` (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bed_master`
--

LOCK TABLES `bed_master` WRITE;
/*!40000 ALTER TABLE `bed_master` DISABLE KEYS */;
INSERT INTO `bed_master` VALUES (1,'general',200,'free',1),(2,'gold',800,'free',2),(3,'gold',800,'book',1),(4,'general',200,'book',3),(5,'silver',500,'free',1),(6,'silver',500,'book',2);
/*!40000 ALTER TABLE `bed_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billing_table`
--

DROP TABLE IF EXISTS `billing_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billing_table` (
  `billing_id` int NOT NULL AUTO_INCREMENT,
  `Admission_id` int NOT NULL,
  `test_cost` double NOT NULL,
  `medicine_cost` double DEFAULT NULL,
  `bed_id` int DEFAULT NULL,
  `consultation_fees` int DEFAULT NULL,
  PRIMARY KEY (`billing_id`),
  KEY `FKak350ceu02obj2vp7u1o1xgly` (`Admission_id`),
  KEY `FK7f7joel2yna5o1iesajv1a6nd` (`bed_id`),
  CONSTRAINT `FK7f7joel2yna5o1iesajv1a6nd` FOREIGN KEY (`bed_id`) REFERENCES `bed_master` (`bed_id`),
  CONSTRAINT `FKak350ceu02obj2vp7u1o1xgly` FOREIGN KEY (`Admission_id`) REFERENCES `admission_table` (`admission_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing_table`
--

LOCK TABLES `billing_table` WRITE;
/*!40000 ALTER TABLE `billing_table` DISABLE KEYS */;
INSERT INTO `billing_table` VALUES (1,1,500,200,1,150);
/*!40000 ALTER TABLE `billing_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department_table`
--

DROP TABLE IF EXISTS `department_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department_table` (
  `dept_id` int NOT NULL AUTO_INCREMENT,
  `dept_name` varchar(45) NOT NULL,
  PRIMARY KEY (`dept_id`),
  UNIQUE KEY `dept_id_UNIQUE` (`dept_id`),
  UNIQUE KEY `dept_name_UNIQUE` (`dept_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department_table`
--

LOCK TABLES `department_table` WRITE;
/*!40000 ALTER TABLE `department_table` DISABLE KEYS */;
INSERT INTO `department_table` VALUES (3,'medicine department'),(4,'orthology'),(1,'Outpatient Department (OPD)'),(2,'Radiology Department');
/*!40000 ALTER TABLE `department_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_table`
--

DROP TABLE IF EXISTS `doctor_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_table` (
  `doctor_id` int NOT NULL AUTO_INCREMENT,
  `doctor_name` varchar(45) NOT NULL,
  `doctor_contact` varchar(45) NOT NULL,
  `qualifications` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `login` int DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  `user_email` varchar(255) NOT NULL,
  `picture` tinyblob,
  PRIMARY KEY (`doctor_id`),
  UNIQUE KEY `doctor_id_UNIQUE` (`doctor_id`),
  KEY `login1_idx` (`login`),
  KEY `FK6mel46uabuewl4jxueybelvly` (`dept_id`),
  CONSTRAINT `FK6mel46uabuewl4jxueybelvly` FOREIGN KEY (`dept_id`) REFERENCES `department_table` (`dept_id`),
  CONSTRAINT `login1` FOREIGN KEY (`login`) REFERENCES `login_table` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_table`
--

LOCK TABLES `doctor_table` WRITE;
/*!40000 ALTER TABLE `doctor_table` DISABLE KEYS */;
INSERT INTO `doctor_table` VALUES (1,'vikash','7894561235','mbbs','vikash11@',1,1,'vikash@gmail.com',NULL),(2,'ram','8956231478','mbbs,md','ram11@',3,2,'ram@gmail.com',NULL),(3,'ikash','7894561235','mbbs,pg','ikash11@',14,3,'ikas@gmail.com',NULL),(4,'anita','8995689547','mbbs,pg','anita11@',17,4,'anita@gmail.com',NULL);
/*!40000 ALTER TABLE `doctor_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_table`
--

DROP TABLE IF EXISTS `login_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_table` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(15) NOT NULL,
  `role` varchar(20) NOT NULL,
  `user_id` varchar(55) NOT NULL,
  PRIMARY KEY (`login_id`),
  UNIQUE KEY `login_id_UNIQUE` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_table`
--

LOCK TABLES `login_table` WRITE;
/*!40000 ALTER TABLE `login_table` DISABLE KEYS */;
INSERT INTO `login_table` VALUES (1,'vikky11@','doctor','vikas@gmail.com'),(2,'sonal11@','Patient','sonal@gmail.com'),(3,'ram@11','doctor','ram@gmail.com'),(4,'rakesh11@','staff','rak@gmil.com'),(5,'harsh1@','staff','harsh@gmail'),(11,'suresh11@','patient','suresh11@gmail.com'),(12,'patient','resh11@','resh11@gmail.com'),(13,'resh11@','patient','resh11@gmail.com'),(14,'ikash11@','doctor','ikas@gmail.com'),(15,'kash11@','staff','kas@gmail.com'),(16,'kash11@','staff','kas@gmail.com'),(17,'anita11@','doctor','anita@gmail.com'),(18,'rakt122@','patient','rksgh@gmail.com'),(19,'amit12@','patient','amit@gmail.com'),(20,'amit12@','patient','amit@gmail.com'),(21,'amit12@','patient','dachospitalknowit@gmail.com'),(22,'hramit12@','patient','dachospitalknowit@gmail.com'),(23,'hrmt12@','patient','dachospitalknowit@gmail.com'),(24,'ddhrmt12@','patient','dachospitalknowit@gmail.com'),(25,'sumit12@','patient','dachospitalknowit@gmail.com'),(26,'nsumit12@','patient','dachospitalknowit@gmail.com'),(27,'nsumit12@','patient','dachospitalknowit@gmail.com'),(28,'ravi11@','staff','ravi@gmail.com'),(29,'aravi11@','staff','aravi@gmail.com'),(30,'1lalit122@','patient','1sgh@gmail.com'),(31,'1lalit122@','patient','g1sgh@gmail.com'),(32,'1lalit122@','patient','g1sgh@gmail.com'),(33,'1lalit122@','patient','g1sgh@gmail.com'),(34,'1lalit122@','patient','g1sgh@gmail.com');
/*!40000 ALTER TABLE `login_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_table`
--

DROP TABLE IF EXISTS `patient_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_table` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `patient_name` varchar(20) NOT NULL,
  `patient_contact1` varchar(10) NOT NULL,
  `patient_bdate` date NOT NULL,
  `patient_bloodgroup` varchar(5) NOT NULL,
  `patient_history` varchar(250) DEFAULT NULL,
  `patient_height` float DEFAULT NULL,
  `patient_weight` float DEFAULT NULL,
  `patient_gender` varchar(8) NOT NULL,
  `patient_contact2` varchar(10) DEFAULT NULL,
  `form_fill` varchar(45) NOT NULL,
  `login` int NOT NULL,
  `password` varchar(15) NOT NULL,
  `user_email` varchar(55) NOT NULL,
  `picture` tinyblob,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `patient_id_UNIQUE` (`patient_id`),
  KEY `login_idx` (`login`),
  CONSTRAINT `loginid` FOREIGN KEY (`login`) REFERENCES `login_table` (`login_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_table`
--

LOCK TABLES `patient_table` WRITE;
/*!40000 ALTER TABLE `patient_table` DISABLE KEYS */;
INSERT INTO `patient_table` VALUES (1,'lalit','8958965889','1994-01-24','o+','nothing',126,65,'male','568956895','brother',1,'lalit122@','sgh@gmail.com',NULL),(9,'suresh','8958965889','2022-01-11','o+','nothing',126,65,'male','568956895','brother',11,'trhht','rgg@gmail.com',NULL),(10,'resh','8958965889','2024-06-11','o+','nothing',126,65,'male','568956895','brother',12,'resh11@','resh11@gmail.com',NULL),(11,'resh','8958965889','2024-06-11','o+','nothing',126,65,'male','568956895','brother',13,'resh11@','resh11@gmail.com',NULL),(12,'rakesh','5889','1992-01-06','ab+','nothing',146,56,'male','568','brother',18,'rakt122@','rksgh@gmail.com',NULL),(13,'amit','845895889','1982-01-06','ab+','',172,85,'male','89574568','father',20,'amit12@','amit@gmail.com',NULL),(14,'raoamit','8895889','1962-01-06','b+','',162,95,'male','8974568','father',21,'amit12@','dachospitalknowit@gmail.com',NULL),(15,'hraoamit','89895889','1962-01-06','b+','',162,95,'male','98974568','father',22,'hramit12@','dachospitalknowit@gmail.com',NULL),(16,'hrmit','895889','1902-01-06','b+','',162,95,'male','974568','father',23,'hrmt12@','dachospitalknowit@gmail.com',NULL),(17,'ddhrmit','895889','1902-01-06','b+','',162,95,'male','974568','father',24,'ddhrmt12@','dachospitalknowit@gmail.com',NULL),(18,'sumit','789895889','1902-01-06','b+','',162,95,'male','789974568','father',25,'sumit12@','dachospitalknowit@gmail.com',NULL),(19,'newsumit','789895889','1902-01-06','b+','',162,95,'male','789974568','father',26,'nsumit12@','dachospitalknowit@gmail.com',NULL),(20,'newsumit','789895889','1902-01-06','b+','',162,95,'male','789974568','father',27,'nsumit12@','dachospitalknowit@gmail.com',NULL),(21,'lalit','8958965889','1996-06-23','o+','nothing',126,65,'male','568956895','brother',30,'1lalit122@','1sgh@gmail.com',NULL),(22,'glalit','8958965889','1996-06-23','o+','nothing',126,65,'male','568956895','brother',31,'1lalit122@','g1sgh@gmail.com',NULL),(23,'glalit','8958965889','1996-06-23','o+','nothing',126,65,'male','568956895','brother',32,'1lalit122@','g1sgh@gmail.com',NULL),(24,'glalit','8958965889','1996-06-23','o+','nothing',126,65,'male','568956895','brother',33,'1lalit122@','g1sgh@gmail.com',NULL),(25,'glalit','8958965889','1996-06-23','o+','nothing',126,65,'male','568956895','brother',34,'1lalit122@','g1sgh@gmail.com',NULL);
/*!40000 ALTER TABLE `patient_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_table`
--

DROP TABLE IF EXISTS `payment_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_table` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `billing_id` int NOT NULL,
  `paymentmethod` varchar(45) DEFAULT NULL,
  `Discharge_date` date DEFAULT NULL,
  `payment_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  UNIQUE KEY `payment_id_UNIQUE` (`payment_id`),
  KEY `FKf3r4tla36vpfj5r327hlooh1j` (`billing_id`),
  CONSTRAINT `FKf3r4tla36vpfj5r327hlooh1j` FOREIGN KEY (`billing_id`) REFERENCES `billing_table` (`billing_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_table`
--

LOCK TABLES `payment_table` WRITE;
/*!40000 ALTER TABLE `payment_table` DISABLE KEYS */;
INSERT INTO `payment_table` VALUES (1,1,'cash','2022-10-05','cleared');
/*!40000 ALTER TABLE `payment_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_table`
--

DROP TABLE IF EXISTS `staff_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff_table` (
  `staff_id` int NOT NULL AUTO_INCREMENT,
  `staff_name` varchar(25) NOT NULL,
  `dept_id` int DEFAULT NULL,
  `staff_gender` varchar(10) NOT NULL,
  `staff_contact` varchar(10) NOT NULL,
  `staff_bdate` date NOT NULL,
  `staff_jdate` date NOT NULL,
  `login_id` int DEFAULT NULL,
  `password` varchar(15) NOT NULL,
  `user_email` varchar(25) NOT NULL,
  `picture` tinyblob,
  PRIMARY KEY (`staff_id`),
  UNIQUE KEY `idDoctor table_UNIQUE` (`staff_id`),
  KEY `login_id_idx` (`login_id`),
  KEY `dept_id_idx` (`dept_id`),
  CONSTRAINT `dept_id` FOREIGN KEY (`dept_id`) REFERENCES `department_table` (`dept_id`),
  CONSTRAINT `login_id` FOREIGN KEY (`login_id`) REFERENCES `login_table` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_table`
--

LOCK TABLES `staff_table` WRITE;
/*!40000 ALTER TABLE `staff_table` DISABLE KEYS */;
INSERT INTO `staff_table` VALUES (1,'vikash',1,'male','8989565412','1996-05-15','2018-06-16',4,'helo','vikas@gmail.com',NULL),(2,'rakesh',3,'male','7856123645','1995-02-23','2020-05-25',5,'byyy','rakesh11@gmail.com',NULL),(3,'ikash',NULL,'male','7894561235','1996-05-01','2012-05-12',16,'kash11@','kas@gmail.com',NULL),(4,'ravi',NULL,'male','8989565412','1996-05-15','2018-06-16',28,'ravi11@','ravi@gmail.com',NULL),(5,'aravi',NULL,'male','8989565412','1996-05-15','2018-06-16',29,'aravi11@','aravi@gmail.com',NULL);
/*!40000 ALTER TABLE `staff_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-21 15:30:46
