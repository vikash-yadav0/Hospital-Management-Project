package com.hospital.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Department;
import com.hospital.project.entiries.Doctor;
import com.hospital.project.repositry.DepartmentReprository;
@Service
public class DepartmentService {
	@Autowired
	DepartmentReprository deprepo;
	
	public Department getDepartment(int did) {
		
		return deprepo.findById(did).get();
	}

	public List<Department> getAll()
	{
		return deprepo.findAll();
	}	

	

}
