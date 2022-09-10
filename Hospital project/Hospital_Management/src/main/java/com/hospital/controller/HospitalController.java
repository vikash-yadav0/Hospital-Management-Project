package com.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.Service.HospitalService;
import com.hospital.entiries.Doctor;
import com.hospital.entiries.Patient;


@RestController
public class HospitalController 
{

	@Autowired
	HospitalService hservice;
	
	@GetMapping("/alldoctor")
	public List<Doctor> getAlldoctor()
	{
		return hservice.getAll();
		
	}
	@GetMapping("/allstaff")
	public List<Doctor> getAllstaff()
	{
		return hservice.getAll();
		
	}
	@PostMapping("/savepatient")
	public Doctor SaveContact(@RequestBody Patient C)
	{
		return hservice.savecon(C);
	}
}
