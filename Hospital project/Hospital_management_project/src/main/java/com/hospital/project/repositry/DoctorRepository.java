package com.hospital.project.repositry;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.Login;
import com.hospital.project.entiries.Patient;
import com.hospital.project.entiries.Staff;

@Transactional
@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer>
{
	@Query("select l  from Doctor l where login.login_id=:uid")
	public Optional<Doctor> loginid(int uid);
	
	@Query("select d from Doctor d where login=:l")
	public Doctor getDoctor(Login l);
	
	@Query("select l  from Doctor l where dept_id=:did")
	public List<Doctor> getDoctorbydept( int did);
}
