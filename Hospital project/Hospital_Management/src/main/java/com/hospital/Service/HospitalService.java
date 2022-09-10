package com.hospital.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.entiries.Doctor;
import com.hospital.repositry.HospitalRepository;


@Service
public class HospitalService {

	@Autowired
	HospitalRepository hrepo;
	
	public List<Doctor> getAll()
	{
		return hrepo.findAll();
	}
	
	public Doctor savecon(Doctor ct)
	{
		return hrepo.save(ct);
	}

}
