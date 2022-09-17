package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.Patient;
import com.hospital.project.repositry.DoctorRepository;
@Service
public class DoctorService {
	@Autowired
	DoctorRepository drepo;
	
	public List<Doctor> getAll()
	{
		return drepo.findAll();
	}	
	public Doctor savecon(Doctor c)
	{
		return drepo.save(c);
	}
	public Doctor getDoctor(int did) {
	
		return drepo.findById(did).get();
	}
	public Doctor updateDoctor(Doctor da,int doctor_id)
	{
		Doctor d=drepo.findById(doctor_id).get();
		d.setDoctor_name(da.getDoctor_name());
		d.setDoctor_contact(da.getDoctor_contact());
		d.setQualifications(da.getQualifications());
		
		/*Login l=lrepo.getById(pa.getLogin()).get();
		l.setPassword(pa.getPassword());
		l.setUser_id(pa.getUser_email());*/
		return drepo.save(d);
	}
	
	}
