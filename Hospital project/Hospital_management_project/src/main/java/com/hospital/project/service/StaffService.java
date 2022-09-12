package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Staff;
import com.hospital.project.repositry.StaffRepository;
@Service
public class StaffService {

	@Autowired
	StaffRepository srepo;
	
	/*public List<Staff> getAll()
	{
		return srepo.findAll();
	}	*/
	public Staff savecon(Staff c)
	{
		return srepo.save(c);
	}
	public Staff getStaff(int sid) {
	
		return srepo.findById(sid).get();
	}
	}

