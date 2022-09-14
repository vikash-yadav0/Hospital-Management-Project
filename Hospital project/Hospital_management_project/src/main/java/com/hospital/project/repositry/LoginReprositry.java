package com.hospital.project.repositry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Login;

@RestController
public interface LoginReprositry extends JpaRepository<Login,Integer>{
	@Query("select l.role , l.login_id from Login l where userEmail=:uemail and passoward=: pwd")
	public List<Object[]> checkLogin(String uemail, String pwd);

}
