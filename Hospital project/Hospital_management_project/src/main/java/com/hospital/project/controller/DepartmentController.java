package com.hospital.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Department;
import com.hospital.project.entiries.Doctor;
import com.hospital.project.service.DepartmentService;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class DepartmentController {

	@Autowired
	DepartmentService depserv;
	
	@GetMapping("/getdepartment")
	public Department getDepartment(@RequestParam("dept_id") int did)
	{
		return depserv.getDepartment(did);
	}

	@GetMapping("/alldept")
	public List<Department> getAll()
	{
		return depserv.getAll();
		
	}
}
