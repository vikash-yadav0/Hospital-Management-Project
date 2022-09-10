package com.hospital.entiries;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="login_table")
public class Login {
	
	@Id	
	int login_id;
	@Column
	String login_name;
	@Column
	String role;

	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
