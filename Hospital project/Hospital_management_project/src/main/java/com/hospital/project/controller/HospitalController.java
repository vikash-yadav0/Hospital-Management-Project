package com.hospital.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Patient;
import com.hospital.project.service.PatientService;



@RestController
public class HospitalController 
{

	@Autowired
	PatientService hservice;
	
	@GetMapping("/allpatient")
	public List<Patient> getAll()
	{
		return hservice.getAll();
		
	}
	@PostMapping("/savepatient")
	public Patient SaveContact(@RequestBody Patient C)
	{
		return hservice.savecon(C);
	}
	@GetMapping("/getpatient")
	public Patient getPatient(@RequestParam("patient_id") int Pid)
	{
		return hservice.getPatient(Pid);
	}
}
