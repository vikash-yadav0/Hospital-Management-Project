package com.hospital.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Doctor;
import com.hospital.project.service.DoctorService;

@RestController
public class DoctorController {

	@Autowired
	DoctorService dservice;
	
	@GetMapping("/alldoctor")
	public List<Doctor> getAll()
	{
		return dservice.getAll();
		
	}
	@PostMapping("/savedoctor")
	public Doctor SaveDoctor(@RequestBody Doctor C)
	{
		return dservice.savecon(C);
	}
	@GetMapping("/getdoctor")
	public Doctor getDoctor(@RequestParam("doctor_id") int did)
	{
		return dservice.getDoctor(did);
	}

}
