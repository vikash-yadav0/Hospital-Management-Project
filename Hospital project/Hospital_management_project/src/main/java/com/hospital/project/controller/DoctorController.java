package com.hospital.project.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.DoctorRegister;
import com.hospital.project.entiries.Login;
import com.hospital.project.entiries.Patient;
import com.hospital.project.entiries.Register;
import com.hospital.project.entiries.Staff;
import com.hospital.project.service.DoctorService;
import com.hospital.project.service.LoginService;
@CrossOrigin(origins ="*")
@RestController
public class DoctorController {
	// not getting department with staff ..
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
	public Doctor registerDoctor(@RequestBody DoctorRegister pr)
	{
		Login l=new Login(pr.getUser_email(),pr.getPassword(),"doctor");
		Login inserted=lservice.add(l);
		Doctor p=new Doctor(pr.getDoctor_name(),pr.getUser_email(),pr.getDoctor_contact(),pr.getQualifications(),pr.getPassword(),inserted,pr.getDept_id());
		return dservice.save(p);
		
	}
	@PostMapping("/savedoctor")
	public Doctor SaveDoctor(@RequestBody Doctor C)
	{
		return dservice.save(C);
	}
	@GetMapping("/getdoctorbyid")
	public Doctor getDoctor(@RequestParam("doctor_id") int did)
	{
		return dservice.getDoctor(did);
	}
	@PostMapping("/updatedoctor")
	public Doctor updatedoctor (@RequestBody Doctor doc,@RequestParam("doctor_id") int did)
	{
		return dservice.updateDoctor(doc, did);
		
	}
	@GetMapping("/getdoctorbydept")
	public List<Doctor> getDoctorbydept(@RequestParam("dept_id") int did)
	{
		return dservice.getDoctorbydept(did);
		
	}
	
	@PostMapping("/registerdoctor")
	public Doctor SaveUpload(@RequestPart("data")Doctor d,@RequestPart("file")MultipartFile file)
	{
		Login l=new Login(d.getUser_email(),d.getPassword(),"doctor");
		Login inserted=lservice.add(l);
		Doctor p=new Doctor(d.getDoctor_name(),d.getUser_email(),d.getDoctor_contact(),d.getQualifications(),d.getPassword(),inserted,d.getDept_id());
		
		Doctor savedf =dservice.save(p);
		boolean flag=true;
		byte[] data;
		try {
			data = file.getBytes();		
		Path path=Paths.get("images//"+"doctor"+savedf.getDoctor_id()+".jpg");
		Files.write(path, data);
		} catch (IOException e) {
			flag=false;
		}
		if(flag=true)
			return savedf;
		else 
			return null;
	}
	@PostMapping("/getDoctor")
	public Doctor getDoctor(@RequestBody Login l)
	{
		return dservice.getDoctor(l);
	}

}
