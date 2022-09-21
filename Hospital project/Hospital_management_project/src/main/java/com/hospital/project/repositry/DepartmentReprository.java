package com.hospital.project.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Department;
@RestController
public interface DepartmentReprository extends JpaRepository<Department, Integer>{

	
}
