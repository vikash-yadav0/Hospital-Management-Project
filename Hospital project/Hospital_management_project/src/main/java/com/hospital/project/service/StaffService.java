package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Login;
import com.hospital.project.entiries.Patient;
import com.hospital.project.entiries.Staff;
import com.hospital.project.repositry.StaffRepository;
@Service
public class StaffService {

	@Autowired
	StaffRepository srepo;
	
	public List<Staff> getAll()
	{
		return srepo.findAll();
	}	
	public List<Staff> getstaffbydept(int did)
	{
		return srepo.getstaffbydept(did);
	}	
	public Staff save(Staff s)
	{
		return srepo.save(s);
	}
	public Staff getStaff(int sid) {
	
		return srepo.findById(sid).get();
	}
	public Staff updateStaff(Staff st,int staff_id)
	{
		Staff s=srepo.findById(staff_id).get();
		s.setStaff_name(st.getStaff_name());
		s.setStaff_bdate(st.getStaff_bdate());
		s.setStaff_contact(st.getStaff_contact());
		s.setStaff_gender(st.getStaff_gender());
		s.setStaff_jdate(st.getStaff_jdate());
	
		return srepo.save(s);
	}
	public Staff getStaff(Login l)
	{
		return srepo.getStaff(l);
	}
	}

