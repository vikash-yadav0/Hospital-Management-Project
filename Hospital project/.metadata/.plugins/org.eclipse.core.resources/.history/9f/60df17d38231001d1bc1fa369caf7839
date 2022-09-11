package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Patient;
import com.hospital.project.repositry.HospitalRepositorye;




@Service
public class HospitalService {

	@Autowired
	HospitalRepositorye hrepo;
	
	public List<Patient> getAll()
	{
		return hrepo.findAll();
	}
	
	public Patient savecon(Patient c)
	{
		return hrepo.save(c);
	}

}
