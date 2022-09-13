package com.hospital.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Login;
import com.hospital.project.repositry.LoginReprositry;

@Service
public class LoginService {
	@Autowired
	LoginReprositry lrepo;
	
	public Login saveln(Login b)
	{
		return lrepo.save(b);
				
	}
	public Login getLogin(int bid)
	{
		return lrepo.findById(bid).get();
	}

}
