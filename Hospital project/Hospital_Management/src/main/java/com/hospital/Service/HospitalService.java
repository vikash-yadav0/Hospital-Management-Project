package com.hospital.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.entiries.Doctor;
import com.hospital.entiries.Patient;
import com.hospital.repositry.HospitalRepositorye;


@Service
public class HospitalService {

	@Autowired
	HospitalRepositorye hrepo;
	
	public List<Doctor> getAll()
	{
		return hrepo.findAll();
	}
	
	public Doctor savecon(Patient c)
	{
		return hrepo.save(c);
	}

}
