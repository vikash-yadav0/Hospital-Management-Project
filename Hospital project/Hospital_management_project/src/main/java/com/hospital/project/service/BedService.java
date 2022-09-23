package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.BedMaster;
import com.hospital.project.entiries.Doctor;
import com.hospital.project.repositry.BedReprository;

@Service
public class BedService {

	@Autowired
	BedReprository brepo;
	
	public BedMaster getBed(int bid) {
		
		return brepo.findById(bid).get();
	}

	public List<BedMaster> getAll() {
		
		return brepo.findAll();
	}
   public List<BedMaster> Bedavaliable() {
		
		return brepo.BedAvaliable();
	}
   public List<BedMaster> BedBooked() {
	
	return brepo.BedBooked();
}
}
