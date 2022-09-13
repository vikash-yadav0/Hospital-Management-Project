package com.hospital.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.hospital.project.entiries.Admission;
import com.hospital.project.entiries.Login;
import com.hospital.project.service.LoginService;

@Controller
public class LoginController {
	
	@Autowired
	LoginService lser;
	
	@PostMapping("/savelogin")
	public Login SaveDoctor(@RequestBody Login C)
	{
		return lser.saveln(C);
	}
	@GetMapping("/getlogin")
	public Login getAdmission(@RequestParam("login_id") int lid)
	{
		return lser.getLogin(lid);
	}

}
