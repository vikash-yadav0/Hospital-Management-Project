package com.hospital.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Login;
import com.hospital.project.service.LoginService;
@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired
	LoginService lser;

	/*@PostMapping("/CheckLogin")
	public Object  checkLogin(@RequestBody Login l)
	{
		return lser.CheckLogin(l.getUser_id(),l.getPassword());
	}*/
	@PostMapping("/CheckLogin")
	public Login  checkLogin(@RequestBody Login l)
	{
		return lser.CheckLogin(l.getUser_id(),l.getPassword());
	}
}
