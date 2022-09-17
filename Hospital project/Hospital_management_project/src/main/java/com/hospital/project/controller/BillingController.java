package com.hospital.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Admission;
import com.hospital.project.entiries.Billing;
import com.hospital.project.service.BillingService;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class BillingController {
	@Autowired
	BillingService bser;
	
	@GetMapping("/allbills")
	public List<Billing> getAll()
	{
		return bser.getAll();
		
	}
	
	@PostMapping("/savebill")
	public Billing saveBilling (Billing b)
	{
		return bser.savebill(b);
	}
	@GetMapping("/getbill")
	public Billing getBillById(@RequestParam("billing_id")int bid)
	{
		return bser.getBilling(bid);
	}

}
