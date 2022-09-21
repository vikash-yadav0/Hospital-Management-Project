package com.hospital.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Department;
@Service
public class DepartmentService {
	@Autowired
	DepartmentService deprepo;
	
	public Department getDepartment(int did) {
		
		return deprepo.getDepartment(did);
	}

	

	

}
