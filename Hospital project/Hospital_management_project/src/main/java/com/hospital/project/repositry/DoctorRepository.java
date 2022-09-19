package com.hospital.project.repositry;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.Patient;

@Transactional
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer>
{
	@Query("select l  from Doctor l where login.login_id=:uid")
	public Optional<Doctor> loginid(int uid);
}
