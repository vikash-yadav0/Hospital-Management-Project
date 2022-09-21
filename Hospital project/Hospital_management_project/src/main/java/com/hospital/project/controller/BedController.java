package com.hospital.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.BedMaster;
import com.hospital.project.service.BedService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class BedController {
	@Autowired
	BedService bserv;
	
	@GetMapping("/getbedid")
	public BedMaster getBedMaster(int bid)
	{
		return bserv.getBed(bid);
	}

}
