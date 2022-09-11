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
	PatientRepository hrepo;
	
	public List<Patient> getAll()
	{
		return hrepo.findAll();
	}	
	public Patient savecon(Patient c)
	{
		return hrepo.save(c);
	}
	public Patient getPatient(int pid) {
		/*Patient p=null;		
		Optional<Patient>op=*/
		return hrepo.findById(pid).get();
		/*try
		{
			p=op.get();
		}
		catch(NoSuchElementException e)
		{
			p=null;
		}
		return p;*/
	}

}
