package com.hospital.project.repositry;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.Patient;


@Transactional
@Repository
public interface HospitalRepositorye extends JpaRepository<Patient, Integer>
{

	

	

	
}