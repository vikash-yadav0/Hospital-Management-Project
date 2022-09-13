package com.hospital.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Billing;
import com.hospital.project.service.BillingService;

@RestController
public class BillingController {
	@Autowired
	BillingService bser;
	
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
