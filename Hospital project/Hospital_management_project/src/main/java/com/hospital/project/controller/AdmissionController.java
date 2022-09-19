package com.hospital.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Admission;
import com.hospital.project.entiries.Doctor;
import com.hospital.project.service.AdmissionService;
import com.hospital.project.service.DoctorService;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class AdmissionController {
	
	@Autowired
	AdmissionService aservice;
	
	@GetMapping("/alladmission")
	public List<Admission> getAll()
	{
		return aservice.getAll();
		
	}
	@PostMapping("/saveadmission")
	public Admission SaveDoctor(@RequestBody Admission C)
	{
		return aservice.save(C);
	}
	@GetMapping("/getadmission")
	public Admission getAdmission(@RequestParam("admission_id") int aid)
	{
		return aservice.getAdmission(aid);
	}

}
