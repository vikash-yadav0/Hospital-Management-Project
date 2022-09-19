package com.hospital.project.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Login;
import com.hospital.project.entiries.Patient;
import com.hospital.project.repositry.LoginReprositry;
import com.hospital.project.repositry.PatientRepository;

@Service
public class PatientService {

	@Autowired
	PatientRepository prepo;
	@Autowired
	LoginReprositry lrepo;
	
	public List<Patient> getAll()
	{
		return prepo.findAll();
	}	
	public boolean save(Patient c)
	{
		return prepo.save(c) != null;
	}
	public Patient getPatient(int pid) 
	{
	 return prepo.findById(pid).get();
		
	}
	
	
	public Patient updatePatient(Patient pa,int patient_id)
	{
		Patient p=prepo.findById(patient_id).get();
		p.setPatient_name(pa.getPatient_name());
		p.setPatient_bdate(pa.getPatient_bdate());
		p.setPatient_bloodgroup(pa.getPatient_bloodgroup());
		p.setPatient_contact1(pa.getPatient_contact1());
		p.setPatient_contact2(pa.getPatient_contact2());
		p.setPatient_gender(pa.getPatient_gender());
		p.setPatient_height(pa.getPatient_height());
		p.setPatient_history(pa.getPatient_history());
		p.setPatient_weight(pa.getPatient_weight());
		//p.setLogin.(pa.getLogin().getPassword(),pa.getLogin().getUser_id());
		
		return prepo.save(p);
	}
	}
