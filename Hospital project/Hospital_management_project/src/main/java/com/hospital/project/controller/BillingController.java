package com.hospital.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Admission;
import com.hospital.project.entiries.BedMaster;
import com.hospital.project.entiries.Billing;
import com.hospital.project.entiries.BillingSave;
import com.hospital.project.service.AdmissionService;
import com.hospital.project.service.BedService;
import com.hospital.project.service.BillingService;
@CrossOrigin(origins ="*")
@RestController
public class BillingController {
	@Autowired
	BillingService bser;
	
	@Autowired
	BedService beser;
	
	@Autowired
	AdmissionService aservice;
	
	@GetMapping("/allbills")
	public List<Billing> getAll()
	{
		return bser.getAll();
		
	}
	
	@PostMapping("/savebill")
	public Billing saveBilling (@RequestBody BillingSave bs)
	{
		Admission a=aservice.getAdmission(bs.getAdmission_id());
		int bed=a.getBed().getBed_id();
		BedMaster bm=beser.getBed(bed);
		String status=bm.setStatus(bs.getBed_Status());
		Billing b=new Billing(a,bs.getTest_cost(),bs.getMedicine_cost(),bs.getConsultation_fees(),bs.getPayment_status(),bs.getDischarge_date(),status);
		return bser.savebill(b);
	}
	@GetMapping("/getbill")
	public Billing getBillById(@RequestParam("billing_id")int bid)
	{
		return bser.getBilling(bid);
	}

}
