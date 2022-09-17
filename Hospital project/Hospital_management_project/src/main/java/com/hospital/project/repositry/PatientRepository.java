package com.hospital.project.repositry;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.Patient;


@Transactional
@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer>
{

	
	
	

	

	
}
