package com.hospital.project.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Patient;
import com.hospital.project.repositry.PatientRepository;

@Service
public class PatientService {

	@Autowired
	PatientRepository prepo;
	
	public List<Patient> getAll()
	{
		return prepo.findAll();
	}	
	public Patient savecon(Patient c)
	{
		return prepo.save(c);
	}
	public Patient getPatient(int pid) {
	 return prepo.findById(pid).get();
		
	}
	/*public int updatePatient(int pid,String name)
	{
		return prepo.UpdatePatient(pid, name);
	}*/

}
