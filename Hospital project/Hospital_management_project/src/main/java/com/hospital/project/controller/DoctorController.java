package com.hospital.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.Login;
import com.hospital.project.entiries.Patient;
import com.hospital.project.entiries.Register;
import com.hospital.project.service.DoctorService;
import com.hospital.project.service.LoginService;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class DoctorController {

	@Autowired
	DoctorService dservice;
	
	@Autowired
	LoginService lservice;
	
	@GetMapping("/alldoctor")
	public List<Doctor> getAll()
	{
		return dservice.getAll();
		
	}
	@PostMapping("/registerd")
	public Doctor registerDoctor(@RequestBody Register pr)
	{
		Login l=new Login(pr.getUser_email(),pr.getPassword(),pr.getRole());
		Login inserted=lservice.add(l);
		Doctor p=new Doctor(pr.getDoctor_name(),pr.getUser_email(),pr.getDoctor_contact(),pr.getQualifications(),pr.getPassword(),inserted);
		return dservice.savecon(p);
		
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
