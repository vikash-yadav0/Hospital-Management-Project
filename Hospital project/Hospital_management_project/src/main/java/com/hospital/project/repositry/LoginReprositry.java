package com.hospital.project.repositry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Login;

@RestController
public interface LoginReprositry extends JpaRepository<Login,Integer>{
	
	//@Query("select l.role , l.login_id  from Login l where user_id=:uid and password=:pwd")
	//public List<Object[]> checkLogin(String uid, String pwd);

	@Query("select l from Login l where  user_id=:uid and password=:pwd")
	public Login checkLogin(String uid,String pwd);
}

