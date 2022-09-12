package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Admission;
import com.hospital.project.repositry.AdmissionReprository;
@Service
public class AdmissionService {
	@Autowired
	AdmissionReprository arepo;
	
	public List<Admission> getAll()
	{
		return arepo.findAll();
	}	
	public Admission savecon(Admission c)
	{
		return arepo.save(c);
	}
	public Admission getAdmission(int aid) {
	
		return arepo.findById(aid).get();
	}

}
