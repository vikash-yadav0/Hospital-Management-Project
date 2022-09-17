package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Admission;
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
	public List<Billing> getAll()
	{
		return brepo.findAll();
	}	

}
