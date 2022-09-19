package com.hospital.project.repositry;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.Patient;
import com.hospital.project.entiries.Staff;
@Transactional
@Repository
public interface StaffRepository extends JpaRepository<Staff,Integer>
{
	@Query("select l  from Staff l where login.login_id=:uid")
	public Optional<Staff> loginid(int uid);
}
