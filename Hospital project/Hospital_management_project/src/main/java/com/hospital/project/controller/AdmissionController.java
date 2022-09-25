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
import com.hospital.project.entiries.Department;
import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.Patient;
import com.hospital.project.entiries.AdmissionRegister;
import com.hospital.project.entiries.BedMaster;
import com.hospital.project.service.AdmissionService;
import com.hospital.project.service.BedService;
import com.hospital.project.service.DepartmentService;
import com.hospital.project.service.DoctorService;
import com.hospital.project.service.PatientService;
@CrossOrigin(origins ="*")
@RestController
public class AdmissionController {
	
	@Autowired
	AdmissionService aservice;
	
	@Autowired
	DoctorService dserv;
		
	@Autowired
	PatientService pserv;
	
	
	@Autowired
	DepartmentService depserv;
	
	@Autowired
	BedService bserv;
	
	@GetMapping("/alladmission")
	public List<Admission> getAll()
	{
		return aservice.getAll();
		
	}
	@PostMapping("/cancelAdmission")
	public boolean cancelAdmission(@RequestParam("admission_id") int a) {
		return aservice.cancelAdmission(a);
	}
	
	@PostMapping("/saveadmission")
	public Admission saveAdmission(@RequestBody AdmissionRegister c)
	{
		Doctor d = dserv.getDoctor(c.getDoctor_id());
		Patient p = pserv.getPatient(c.getPatient_id());
		Department dep = depserv.getDepartment(c.getDept_id());
		BedMaster bed=bserv.getBed(c.getBed_id());
		
		Admission ad=new Admission(c.getAdmited_date(),p,bed,d,dep);
		return aservice.save(ad);
	}
	@PostMapping("/updateadmission")
	public Admission updateAdmission(@RequestBody AdmissionRegister c,@RequestParam("admission_id") int aid )
	{
		
		return aservice.updateAdmission(c,aid);
	}
	@GetMapping("/getadmission")
	public Admission getAdmission(@RequestParam("admission_id") int aid)
	{
		return aservice.getAdmission(aid);
	}

}
