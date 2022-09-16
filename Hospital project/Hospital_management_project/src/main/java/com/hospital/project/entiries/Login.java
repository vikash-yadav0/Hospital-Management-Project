package com.hospital.project.entiries;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="login_table")
public class Login {
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id	
	int login_id;
	@Column
	String user_id;
	@Column
	String role;
	@Column
	String password;
	

	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Login( String user_id, String password,String role) {
		super();
		
		this.user_id = user_id;
		this.role = role;
		this.password = password;
	}

	public int getLogin_id() {
		return login_id;
	}

	public void setLogin_id(int login_id) {
		this.login_id = login_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Login [login_id=" + login_id + ", user_id=" + user_id + ", role=" + role + ", password=" + password
				+ "]";
	}
	
	

}
