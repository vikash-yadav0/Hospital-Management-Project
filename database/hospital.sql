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
  `admited_date` datetime DEFAULT NULL,
  `bed_id` int DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `patient_id` int DEFAULT NULL,
  PRIMARY KEY (`admission_id`),
  KEY `FK4ts50uyy2q3yk209rqw0dnfs5` (`bed_id`),
  KEY `FKo4yhdjfugpuqx31p49y5kpq79` (`dept_id`),
  KEY `FKpooh7tis9wxa5dqd1geu06frg` (`doctor_id`),
  KEY `FKromm2556tv2e60mkbwc9ev2rf` (`patient_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admission_table`
--

LOCK TABLES `admission_table` WRITE;
/*!40000 ALTER TABLE `admission_table` DISABLE KEYS */;
INSERT INTO `admission_table` VALUES (1,'2022-06-02 00:00:00',8,1,1,1);
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
  `category` varchar(255) DEFAULT NULL,
  `charges` double DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  PRIMARY KEY (`bed_id`),
  KEY `FK3w6lb538cw6qesmr4m0k61td2` (`dept_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bed_master`
--

LOCK TABLES `bed_master` WRITE;
/*!40000 ALTER TABLE `bed_master` DISABLE KEYS */;
INSERT INTO `bed_master` VALUES (1,'general',200,'avaliable',1),(2,'gold',700,'avaliable',2),(3,'silver',500,'avaliable',3),(4,'general',200,'booked',2),(5,'gold',700,'booked',1),(6,'silver',500,'booked',3),(7,'general',200,'available',3),(8,'silveer',500,'booked',2);
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
  `bed_status` varchar(255) DEFAULT NULL,
  `discharge_date` datetime DEFAULT NULL,
  `consultation_fees` double DEFAULT NULL,
  `medicine_cost` double DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `test_cost` double DEFAULT NULL,
  `admission_id` int DEFAULT NULL,
  PRIMARY KEY (`billing_id`),
  KEY `FKak350ceu02obj2vp7u1o1xgly` (`admission_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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
  `dept_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`dept_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department_table`
--

LOCK TABLES `department_table` WRITE;
/*!40000 ALTER TABLE `department_table` DISABLE KEYS */;
INSERT INTO `department_table` VALUES (1,'medicine'),(2,'OPD'),(3,'orthology'),(4,'radiology');
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
  `dept_id` int DEFAULT NULL,
  `doctor_contact` varchar(255) DEFAULT NULL,
  `doctor_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `picture` tinyblob,
  `qualifications` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `login` int DEFAULT NULL,
  PRIMARY KEY (`doctor_id`),
  KEY `FKcdvgeqj6d4ddvp6tveh8a0abs` (`login`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_table`
--

LOCK TABLES `doctor_table` WRITE;
/*!40000 ALTER TABLE `doctor_table` DISABLE KEYS */;
INSERT INTO `doctor_table` VALUES (1,2,'3446354287','bakul','Bakul11@',NULL,'MD','bakul@gmail.com',9),(2,1,'9834329876','amit','Amit11@',NULL,'MBBS','amit@gmail.com',10),(3,3,'7957489274','rushab','Rushab11@',NULL,'MBBS','rushab@gmail.com',11),(4,4,'9557489232','monika','Monika11@',NULL,'BAMS','monika@gmail.com',12);
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
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`login_id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_table`
--

LOCK TABLES `login_table` WRITE;
/*!40000 ALTER TABLE `login_table` DISABLE KEYS */;
INSERT INTO `login_table` VALUES (1,'Ram11@','patient','ramcdac@gmail.com'),(3,'Vikash11@','patient','vikash@gmail.com'),(4,'Deepak11@','patient','deepak@gmail.com'),(5,'Sonal11@','patient','sonal@gmail.com'),(6,'Rohit11@','patient','rohit@gmail.com'),(7,'Jyoti11@','patient','jyoti@gmail.com'),(8,'admin11@','admin','admin@gmail.com'),(9,'Bakul11@','doctor','bakul@gmail.com'),(10,'Amit11@','doctor','amit@gmail.com'),(11,'Rushab11@','doctor','rushab@gmail.com'),(12,'Monika11@','doctor','monika@gmail.com'),(13,'Vaibhav11@','staff','vaibhav@gmail.com'),(14,'Himanshu11@','staff','himanshu@gmail.com'),(15,'Sonal11@','staff','sonali@gmail.com'),(16,'Dapli11@','staff','dipali@gmail.com');
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
  `form_fill` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `patient_bdate` date DEFAULT NULL,
  `patient_bloodgroup` varchar(255) DEFAULT NULL,
  `patient_contact1` varchar(255) DEFAULT NULL,
  `patient_contact2` varchar(255) DEFAULT NULL,
  `patient_gender` varchar(255) DEFAULT NULL,
  `patient_height` varchar(255) DEFAULT NULL,
  `patient_history` varchar(255) DEFAULT NULL,
  `patient_name` varchar(255) DEFAULT NULL,
  `patient_weight` varchar(255) DEFAULT NULL,
  `picture` tinyblob,
  `user_email` varchar(255) DEFAULT NULL,
  `login` int DEFAULT NULL,
  PRIMARY KEY (`patient_id`),
  KEY `FKheu80fvxnxb7to34owbhpkl6f` (`login`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_table`
--

LOCK TABLES `patient_table` WRITE;
/*!40000 ALTER TABLE `patient_table` DISABLE KEYS */;
INSERT INTO `patient_table` VALUES (1,'brother','Ram11@','2022-09-22','o+','7283092371','8134374692','male','160','fever','ram','50',NULL,'ramcdac@gmail.com',1),(3,'uncle','Vikash11@','1996-01-01','A+','9862352682','9134374695','male','170','fever','vikash ','',NULL,'vikash@gmail.com',3),(4,'sister','Deepak11@','1998-06-12','B+','986348239','7894374690','male','165','fever','deepak','',NULL,'deepak@gmail.com',4),(5,'father','Sonal11@','2000-03-02','AB+','706348256','9294374648','female','160','fever','sonal','',NULL,'sonal@gmail.com',5),(6,'mother','Rohit11@','1995-06-17','A+','896348232','8194374640','male','170','fever','rohit','',NULL,'rohit@gmail.com',6),(7,'brother','Jyoti11@','1995-04-28','A+','796348278','8349437464','female','161','fever','jyoti','52',NULL,'jyoti@gmail.com',7);
/*!40000 ALTER TABLE `patient_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_table`
--

DROP TABLE IF EXISTS `staff_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff_table` (
  `staff_id` int NOT NULL AUTO_INCREMENT,
  `dept_id` int DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `picture` tinyblob,
  `staff_bdate` date DEFAULT NULL,
  `staff_contact` varchar(255) DEFAULT NULL,
  `staff_gender` varchar(255) DEFAULT NULL,
  `staff_jdate` date DEFAULT NULL,
  `staff_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`staff_id`),
  KEY `FKg43eh9l97yhf4oivaanaxbw94` (`login_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_table`
--

LOCK TABLES `staff_table` WRITE;
/*!40000 ALTER TABLE `staff_table` DISABLE KEYS */;
INSERT INTO `staff_table` VALUES (1,2,'Vaibhav11@',NULL,'1990-02-26','8764356543','male','2017-06-13','vaibhav','vaibhav@gmail.com',13),(2,1,'Himanshu11@',NULL,'1998-07-16','9164356557','male','2019-11-27','himanshu','himanshu@gmail.com',14),(3,3,'Sonal11@',NULL,'1993-06-24','8964356123','female','2014-05-24','sonali','sonali@gmail.com',15),(4,4,'Dapli11@',NULL,'1992-07-21','9434356657','female','2013-02-13','dipali','dipali@gmail.com',16);
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

-- Dump completed on 2022-10-01  8:28:04
