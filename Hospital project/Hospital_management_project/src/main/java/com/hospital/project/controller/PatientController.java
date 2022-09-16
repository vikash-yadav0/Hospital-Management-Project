package com.hospital.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Login;
import com.hospital.project.entiries.Patient;
import com.hospital.project.entiries.Register;
import com.hospital.project.service.LoginService;
import com.hospital.project.service.PatientService;


@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class PatientController 
{

	@Autowired
	PatientService pservice;
	

	@Autowired
	LoginService lservice;
	
	@PostMapping("/registerp")
	public Patient registerPatient(@RequestBody Register pr)
	{
		Login l=new Login(pr.getUser_email(),pr.getPassword(),pr.getRole());
		Login inserted=lservice.add(l);
		Patient p=new Patient(pr.getPatient_name(),pr.getUser_email(),pr.getPatient_contact1(),pr.getPatient_contact2(),pr.getPatient_bdate(),pr.getPassword(),pr.getPatient_bloodgroup(),pr.getPatient_history(),pr.getPatient_height(),pr.getPatient_weight(),pr.getPatient_gender(),pr.getForm_fill(),inserted);
		return pservice.savecon(p);
		
	}
	
	
	@GetMapping("/allpatient")
	public List<Patient> getAll()
	{
		return pservice.getAll();
		
	}
	@PostMapping("/savepatient")
	public Patient SaveContact(@RequestBody Patient C)
	{
		return pservice.savecon(C);
	}
	@GetMapping("/getpatient")
	public Patient getPatient(@RequestParam("patient_id") int Pid)
	{
		return pservice.getPatient(Pid);
	}
}
