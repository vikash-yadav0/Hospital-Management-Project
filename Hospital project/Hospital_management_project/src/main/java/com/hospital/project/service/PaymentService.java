package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Payment;
import com.hospital.project.repositry.PaymentReprository;
@Service
public class PaymentService {
	
	@Autowired
	PaymentReprository prepo;
	
	public Payment savecon(Payment c)
	{
		return prepo.save(c);
	}
	public Payment getPayment(int pid) {
	
		return prepo.findById(pid).get();
	}
	public List<Payment> getAll() {
		
		return prepo.findAll();
	}
	

}
