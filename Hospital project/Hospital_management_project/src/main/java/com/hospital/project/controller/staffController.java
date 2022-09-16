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
		Login l=new Login(pr.getUser_email(),pr.getPassword(),pr.getRole());
		Login inserted=lservice.add(l);
		Staff p=new Staff(pr.getStaff_name(),pr.getUser_email(),pr.getStaff_contact(),pr.getStaff_gender(),pr.getPassword(),pr.getStaff_bdate(),pr.getStaff_jdate(),inserted);
		return sservice.savecon(p);
		
	}
	
	@GetMapping("/allstaff")
	public List<Staff> getAll()
	{
		return sservice.getAll();
		
	}
	@PostMapping("/savestaff")
	public Staff SaveContact(@RequestBody Staff C)
	{
		return sservice.savecon(C);
	}
	@GetMapping("/getstaff")
	public Staff getPatient(@RequestParam("staff_id") int sid)
	{
		return sservice.getStaff(sid);
	}

}
