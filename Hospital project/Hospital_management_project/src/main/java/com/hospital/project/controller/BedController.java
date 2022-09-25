package com.hospital.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.BedMaster;

import com.hospital.project.service.BedService;

@CrossOrigin(origins ="*")
@RestController
public class BedController {
	@Autowired
	BedService bserv;
	
	@GetMapping("/getbedid")
	public BedMaster getBedMaster(@RequestParam("bed_id") int bid)
	{
		return bserv.getBed(bid);
	}
	@GetMapping("/allbed")
	public List<BedMaster> getAll()
	{
		return bserv.getAll();
		
	}
	@GetMapping("/bookedbed")
	public List<BedMaster> BookedBed()
	{
		return bserv.BedBooked();
		
	}
	@GetMapping("/avaliablebed")
	public List<BedMaster> Bedavaliable()
	{
		return bserv.Bedavaliable();
		
	}
	@GetMapping("/avaliablebedbydept")
	public List<BedMaster> avaliablebedbydept(@RequestParam("dept_id")int did)
	{
		return bserv.AvaliableBedbydept(did);
		
	}
	@GetMapping("/BedBookedbydept")
	public List<BedMaster> BedBookedbydept(@RequestParam("dept_id") int did)
	{
		return bserv.BedBookedbydept(did);
		
	}
	

}
