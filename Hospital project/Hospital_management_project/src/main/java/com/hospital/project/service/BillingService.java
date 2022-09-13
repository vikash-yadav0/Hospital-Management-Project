package com.hospital.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Billing;
import com.hospital.project.repositry.BillingReprository;

@Service
public class BillingService {
	@Autowired
	BillingReprository brepo;
	
	public Billing savebill(Billing b)
	{
		return brepo.save(b);
				
	}
	public Billing getBilling(int bid)
	{
		return brepo.findById(bid).get();
	}

}
