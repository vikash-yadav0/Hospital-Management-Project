package com.hospital.project.repositry;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.BedMaster;
import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.Login;
import com.hospital.project.entiries.Patient;
import com.hospital.project.entiries.Staff;
@Transactional
@Repository
public interface StaffRepository extends JpaRepository<Staff,Integer>
{
	@Query("select l  from Staff l where login.login_id=:uid")
	public Optional<Staff> loginid(int uid);
	
	@Query("select d from Staff d where login=:l")
	public Staff getStaff(Login l);
	
	@Query("select l  from Staff l where dept_id=:did")
	public List<Staff> getstaffbydept( int did);
	
	
}
