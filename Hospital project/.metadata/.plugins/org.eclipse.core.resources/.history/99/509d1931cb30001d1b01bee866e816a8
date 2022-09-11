package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Service.HospitalService;
import com.example.demo.entiries.Doctor;


@RestController
public class HospitalController 
{

	@Autowired
	HospitalService hservice;
	
	@GetMapping("/all")
	public List<Doctor> getAll()
	{
		return hservice.getAll();
		
	}
	@PostMapping("/save")
	public Doctor SaveContact(@RequestBody Doctor C)
	{
		return hservice.savecon(C);
	}
}
