package com.hospital.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.hospital.project.*")
public class HospitalManagementProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(HospitalManagementProjectApplication.class, args);
	}

}
