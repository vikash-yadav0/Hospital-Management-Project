package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Admission;
import com.hospital.project.entiries.AdmissionRegister;
import com.hospital.project.repositry.AdmissionReprository;
import com.hospital.project.repositry.BedReprository;
import com.hospital.project.repositry.DepartmentReprository;
import com.hospital.project.repositry.DoctorRepository;
import com.hospital.project.repositry.PatientRepository;
@Service
public class AdmissionService {
	@Autowired
	AdmissionReprository arepo;
	
	@Autowired
	PatientRepository prepo;
	
	@Autowired
	DoctorRepository drepo;
	
	@Autowired
	BedReprository brepo;
	
	@Autowired
	DepartmentReprository deprepo;
	
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
		ad.setPatient(prepo.findById(c.getPatient_id()).get());
		ad.setDoctor(drepo.findById(c.getDoctor_id()).get());
		ad.setBed(brepo.findById(c.getBed_id()).get());
		ad.setDepartment(deprepo.findById(c.getDept_id()).get()); 
		return arepo.save(ad);
		
	}
}
