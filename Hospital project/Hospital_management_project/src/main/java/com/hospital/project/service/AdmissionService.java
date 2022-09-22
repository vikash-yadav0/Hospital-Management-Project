package com.hospital.project.service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Admission;
import com.hospital.project.entiries.AdmissionRegister;
import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.Patient;
import com.hospital.project.repositry.AdmissionReprository;
import com.hospital.project.repositry.PatientRepository;
@Service
public class AdmissionService {
	@Autowired
	AdmissionReprository arepo;
	
	@Autowired
	PatientRepository prepo;
	
	public List<Admission> getAll()
	{
		return arepo.findAll();
	}	
	public Admission save(Admission c)
	{
		return arepo.save(c);
	}
	public Admission getAdmission(int aid) {
	
		return arepo.findById(aid).get();
	}
	public boolean cancelAdmission(int a) {
		try {
			arepo.deleteById(a);
			
		    }
			 catch(Exception e)
			{
				 return false;
			}
			return true;
	}
	public Admission updateAdmission(AdmissionRegister c, int aid) {
		
		Admission ad=arepo.findById(aid).get();
		ad.setAdmited_date(c.getAdmited_date());
	/*	ad.setPatient();
		ad.setDoctor(c.getDoctor_id());
		ad.setBed(c.getBed_id());
		ad.setDepartment(c.getDept_id());*/
		return arepo.save(ad);
		
	}
}
