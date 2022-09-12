package com.hospital.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Payment;
import com.hospital.project.service.PaymentService;
@RestController
public class PaymentController {
	
	@Autowired
	PaymentService pservice;
	
	@PostMapping("/savepayment")
	public Payment SaveContact(@RequestBody Payment C)
	{
		return pservice.savecon(C);
	}
	@GetMapping("/getpayment")
	public Payment getPatient(@RequestParam("payment_id") int Pid)
	{
		return pservice.getPayment(Pid);
	}

}
