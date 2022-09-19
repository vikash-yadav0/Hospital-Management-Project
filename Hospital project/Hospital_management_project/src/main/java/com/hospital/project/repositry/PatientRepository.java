package com.hospital.project.repositry;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.Patient;


@Transactional
@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer>
{

	
	@Query("select l  from Patient l where login.login_id=:uid")
	public Optional<Patient> loginid(int uid);

	
	
	

	

	
}
