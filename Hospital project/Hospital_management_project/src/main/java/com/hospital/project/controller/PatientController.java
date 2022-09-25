package com.hospital.project.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hospital.project.entiries.*;
import com.hospital.project.service.*;



@CrossOrigin(origins ="*")
@RestController
public class PatientController 
{

	@Autowired
	PatientService pservice;
	
	@Autowired
	JavaMailSender sender;

	@Autowired
	LoginService lservice;
	
	@PostMapping("/registerp")
	public boolean registerPatient(@RequestBody Register pr)
	{
		boolean flag =true;
		
		try
		{
			Login l=new Login(pr.getUser_email(),pr.getPassword(),"patient");
			Login inserted=lservice.add(l);
			Patient p=new Patient(pr.getPatient_name(),pr.getUser_email(),pr.getPatient_contact1(),pr.getPatient_contact2(),pr.getPatient_bdate(),pr.getPassword(),pr.getPatient_bloodgroup(),pr.getPatient_history(),pr.getPatient_height(),pr.getPatient_weight(),pr.getPatient_gender(),pr.getForm_fill(),inserted);
			pservice.save(p);
			
			SimpleMailMessage mail=new SimpleMailMessage();
			mail.setFrom("dachospitalknowit@gmail.com");			
			mail.setTo(pr.getUser_email());			
			mail.setSubject("Registration is done successfully.");			
			mail.setText("you have successfuly register in dachospital web site now you can take appointment from doctor and schedule your checkup .");
			System.out.println("text");
			sender.send(mail);
			System.out.println("mail send");
		}
		catch (Exception e)
		{
			System.out.println("exception occur");
			flag=false;
		}
		
		return flag;
		
		
	}	
	
	@GetMapping("/allpatient")
	public List<Patient> getAll()
	{
		return pservice.getAll();
		
	}
	@PostMapping("/savepatient")
	public boolean SavePatient(@RequestBody Patient C)
	{
		return pservice.save(C);
	}
	@GetMapping("/getpatient")
	public Patient getPatient(@RequestParam("patient_id") int Pid)
	{
		return pservice.getPatient(Pid);
	}
	
	
	@PostMapping("/updatepatient")
	public Patient updatePatient (@RequestBody Patient pat,@RequestParam("Patient_id") int pid)
	{
		return pservice.updatePatient(pat, pid);
		
	}
	@PostMapping("/uploadpfile")
	public boolean SaveUpload(@RequestPart("data")Patient pr,@RequestPart("file")MultipartFile file)
	{
		Login l=new Login(pr.getUser_email(),pr.getPassword(),"patient");
		Login inserted=lservice.add(l);
		Patient p=new Patient(pr.getPatient_name(),pr.getUser_email(),pr.getPatient_contact1(),pr.getPatient_contact2(),pr.getPatient_bdate(),pr.getPassword(),pr.getPatient_bloodgroup(),pr.getPatient_history(),pr.getPatient_height(),pr.getPatient_weight(),pr.getPatient_gender(),pr.getForm_fill(),inserted);
		
		boolean savept =pservice.save(p);
		boolean flag=true;
		byte[] data;
		try {
			data = file.getBytes();		
		Path path=Paths.get("images//"+"patient"+p.getPatient_id()+".jpg");
		Files.write(path, data);
		} catch (IOException e) {
			flag=false;
		}
		if(flag=true)
			return savept;
		else 
			return false;
	}
	@PostMapping("/getPatient")
	public Patient getPatient(@RequestBody Login l)
	{
		return pservice.getPatient(l);
	}
	@GetMapping("/getPatientbylogin")
	public Patient getPatientbylogin(@RequestParam("login_id") int lid)
	{
		Login l=lservice.find(lid);
		return pservice.getPatient(l);
	}

	}

