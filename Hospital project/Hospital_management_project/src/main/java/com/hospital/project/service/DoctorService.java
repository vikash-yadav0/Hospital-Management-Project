package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.Login;
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
	public Doctor save(Doctor c)
	{
		return drepo.save(c) ;
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
		
		return drepo.save(d);
	}
	
	public Doctor getDoctor(Login l)
	{
		return drepo.getDoctor(l);
	}
	
	}
