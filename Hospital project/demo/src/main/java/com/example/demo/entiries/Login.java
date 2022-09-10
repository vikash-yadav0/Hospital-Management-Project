package com.example.demo.entiries;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="login_table")
public class Login {
	
	@Id	
	int dept_id;
	@Column
	String dept_name;
	@Column
	String role;
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Login(int dept_id, String dept_name, String role) {
		super();
		this.dept_id = dept_id;
		this.dept_name = dept_name;
		this.role = role;
	}
	public int getDept_id() {
		return dept_id;
	}
	public String getDept_name() {
		return dept_name;
	}
	public String getRole() {
		return role;
	}
	
	

}
