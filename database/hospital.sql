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
  `Payment_id` int NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`admission_id`),
  UNIQUE KEY `admission_id_UNIQUE` (`admission_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admission_table`
--

LOCK TABLES `admission_table` WRITE;
/*!40000 ALTER TABLE `admission_table` DISABLE KEYS */;
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
  `dept` int DEFAULT NULL,
  PRIMARY KEY (`bed_id`),
  UNIQUE KEY `bed_id_UNIQUE` (`bed_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bed_master`
--

LOCK TABLES `bed_master` WRITE;
/*!40000 ALTER TABLE `bed_master` DISABLE KEYS */;
INSERT INTO `bed_master` VALUES (1,'general',200,'free',1),(2,'gold',800,'free',1),(3,'gold',800,'book',1),(4,'general',200,'book',1),(5,'silver',500,'free',1),(6,'silver',500,'book',1);
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
  `total cost` double DEFAULT NULL,
  PRIMARY KEY (`billing_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing_table`
--

LOCK TABLES `billing_table` WRITE;
/*!40000 ALTER TABLE `billing_table` DISABLE KEYS */;
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
-- Table structure for table `doctor_specilization`
--

DROP TABLE IF EXISTS `doctor_specilization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_specilization` (
  `doctor_id` int NOT NULL,
  `docsp_id` int NOT NULL AUTO_INCREMENT,
  `sp_id` int NOT NULL,
  PRIMARY KEY (`docsp_id`),
  UNIQUE KEY `docsp_UNIQUE` (`docsp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_specilization`
--

LOCK TABLES `doctor_specilization` WRITE;
/*!40000 ALTER TABLE `doctor_specilization` DISABLE KEYS */;
INSERT INTO `doctor_specilization` VALUES (1,1,1),(1,2,2),(1,3,4),(2,4,3),(2,5,2);
/*!40000 ALTER TABLE `doctor_specilization` ENABLE KEYS */;
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
  `Doctor_email` varchar(45) NOT NULL,
  `doctor_contact` varchar(45) NOT NULL,
  `qualifications` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `dept_id` int NOT NULL,
  `login` int DEFAULT NULL,
  PRIMARY KEY (`doctor_id`),
  UNIQUE KEY `doctor_id_UNIQUE` (`doctor_id`),
  KEY `dept_id_idx` (`dept_id`),
  KEY `login1_idx` (`login`),
  CONSTRAINT `dept_id` FOREIGN KEY (`dept_id`) REFERENCES `department_table` (`dept_id`),
  CONSTRAINT `login1` FOREIGN KEY (`login`) REFERENCES `login_table` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_table`
--

LOCK TABLES `doctor_table` WRITE;
/*!40000 ALTER TABLE `doctor_table` DISABLE KEYS */;
INSERT INTO `doctor_table` VALUES (1,'vikash','vikash@gmail.com','7894561235','mbbs','vikash11@',1,NULL),(2,'ram','ram@gmail.com','8956231478','mbbs,md','ram11@',2,NULL);
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
  `passoward` varchar(15) NOT NULL,
  `role` varchar(20) NOT NULL,
  `user_id` varchar(25) NOT NULL,
  PRIMARY KEY (`login_id`),
  UNIQUE KEY `login_id_UNIQUE` (`login_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_table`
--

LOCK TABLES `login_table` WRITE;
/*!40000 ALTER TABLE `login_table` DISABLE KEYS */;
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
  `patient_email` varchar(20) NOT NULL,
  `patient_contact1` varchar(10) NOT NULL,
  `patient_bdate` date NOT NULL,
  `patient_bloodgroup` varchar(5) NOT NULL,
  `patient_history` varchar(250) DEFAULT NULL,
  `patient_height` float DEFAULT NULL,
  `patient_weight` float DEFAULT NULL,
  `patient_gender` varchar(8) NOT NULL,
  `patient_contact2` varchar(10) DEFAULT NULL,
  `form_fill` varchar(45) NOT NULL,
  `patient_password` varchar(15) NOT NULL,
  `login` int NOT NULL,
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `patient_id_UNIQUE` (`patient_id`),
  KEY `login_idx` (`login`),
  CONSTRAINT `loginid` FOREIGN KEY (`login`) REFERENCES `login_table` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_table`
--

LOCK TABLES `patient_table` WRITE;
/*!40000 ALTER TABLE `patient_table` DISABLE KEYS */;
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
  `online/cash` varchar(45) NOT NULL,
  `Discharge_date` date DEFAULT NULL,
  `Admission_id` int NOT NULL,
  `payment_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  UNIQUE KEY `payment_id_UNIQUE` (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_table`
--

LOCK TABLES `payment_table` WRITE;
/*!40000 ALTER TABLE `payment_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialization_table`
--

DROP TABLE IF EXISTS `specialization_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specialization_table` (
  `sp_id` int NOT NULL AUTO_INCREMENT,
  `sp_name` varchar(45) NOT NULL,
  PRIMARY KEY (`sp_id`),
  UNIQUE KEY `sp_id_UNIQUE` (`sp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialization_table`
--

LOCK TABLES `specialization_table` WRITE;
/*!40000 ALTER TABLE `specialization_table` DISABLE KEYS */;
INSERT INTO `specialization_table` VALUES (1,' Orthopedics'),(2,'Medicine'),(3,'Obstetrics and Gynecology'),(4,'Dermatology'),(5,'Pediatrics');
/*!40000 ALTER TABLE `specialization_table` ENABLE KEYS */;
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
  `dept` int DEFAULT NULL,
  `staff_gender` varchar(10) NOT NULL,
  `staff_contact` varchar(10) NOT NULL,
  `staff_email` varchar(45) NOT NULL,
  `staff_bdate` date NOT NULL,
  `staff_jdate` date NOT NULL,
  `staff_password` varchar(45) NOT NULL,
  `login` int DEFAULT NULL,
  PRIMARY KEY (`staff_id`),
  UNIQUE KEY `idDoctor table_UNIQUE` (`staff_id`),
  KEY `login_id_idx` (`login`),
  CONSTRAINT `login_id` FOREIGN KEY (`login`) REFERENCES `login_table` (`login_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_table`
--

LOCK TABLES `staff_table` WRITE;
/*!40000 ALTER TABLE `staff_table` DISABLE KEYS */;
INSERT INTO `staff_table` VALUES (1,'vikash',1,'male','8989565412','vikas@gmail.com','1996-05-15','2018-06-16','',NULL),(2,'rakesh',3,'male','7856123645','rakesh11@gmail.com','1995-02-23','2020-05-25','',NULL);
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

-- Dump completed on 2022-09-11 22:50:00
