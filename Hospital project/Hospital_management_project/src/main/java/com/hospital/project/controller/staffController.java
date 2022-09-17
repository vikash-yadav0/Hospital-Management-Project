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
import com.hospital.project.entiries.Login;
import com.hospital.project.entiries.Register;
import com.hospital.project.entiries.Staff;
import com.hospital.project.entiries.StaffRegister;
import com.hospital.project.service.LoginService;
import com.hospital.project.service.StaffService;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class staffController {

	@Autowired
	StaffService sservice;
	@Autowired
	LoginService lservice;
	
	@PostMapping("/registers")
	public Staff registerstaff(@RequestBody StaffRegister pr)
	{
		Login l=new Login(pr.getUser_email(),pr.getPassword(),"staff");
		Login inserted=lservice.add(l);
		Staff p=new Staff(pr.getStaff_name(),pr.getUser_email(),pr.getStaff_contact(),pr.getStaff_gender(),pr.getPassword(),pr.getStaff_bdate(),pr.getStaff_jdate(),inserted);
		return sservice.save(p);
		
	}
	// not getting department with staff ..
	@GetMapping("/allstaff")
	public List<Staff> getAll()
	{
		return sservice.getAll();
		
	}
	@PostMapping("/savestaff")
	public Staff SaveContact(@RequestBody Staff C)
	{
		return sservice.save(C);
	}
	@GetMapping("/getstaff")
	public Staff getPatient(@RequestParam("staff_id") int sid)
	{
		return sservice.getStaff(sid);
	}
	@PostMapping("/updatestaff")
	public Staff updatedoctor (@RequestBody Staff sta,@RequestParam("staff_id") int sid)
	{
		return sservice.updateStaff(sta, sid);
		
	}
	@PostMapping("/upsfile")
	public Staff SaveUpload(@RequestPart("data")StaffRegister s,@RequestPart("file")MultipartFile file)
	{
	
		Login l=new Login(s.getUser_email(),s.getPassword(),"doctor");
		Login inserted=lservice.add(l);
		Staff p=new Staff(s.getStaff_name(),s.getUser_email(),s.getStaff_contact(),s.getStaff_gender(),s.getPassword(),s.getStaff_bdate(),s.getStaff_jdate(),inserted);
		Staff savesf =sservice.save(p);
		boolean flag=true;
		byte[] data;
		try {
			data = file.getBytes();		
		Path path=Paths.get("images//"+"staff"+savesf.getStaff_id()+".jpg");
		Files.write(path, data);
		} catch (IOException e) {
			flag=false;
		}
		if(flag=true)
			return savesf;
		else 
			return null;
	}

}
