package com.hospital.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Staff;
import com.hospital.project.service.StaffService;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class staffController {

	@Autowired
	StaffService sservice;
	
	/*@GetMapping("/allstaff")
	public List<Staff> getAll()
	{
		return sservice.getAll();
		
	}*/
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
