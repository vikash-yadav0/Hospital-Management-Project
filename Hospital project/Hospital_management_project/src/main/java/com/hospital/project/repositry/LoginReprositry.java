package com.hospital.project.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.Login;

@RestController
public interface LoginReprositry extends JpaRepository<Login,Integer>{

}
