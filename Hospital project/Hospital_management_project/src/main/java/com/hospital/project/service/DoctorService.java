package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Doctor;
import com.hospital.project.repositry.DoctorRepository;
@Service
public class DoctorService {
	@Autowired
	DoctorRepository drepo;
	
	/*public List<Doctor> getAll()
	{
		return drepo.findAll();
	}*/	
	public Doctor savecon(Doctor c)
	{
		return drepo.save(c);
	}
	public Doctor getDoctor(int did) {
	
		return drepo.findById(did).get();
	}
	
	}
