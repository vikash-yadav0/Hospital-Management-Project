package com.hospital.project.entiries;

import java.sql.Date;

public class StaffRegister {
	String staff_name;	
	String staff_contact;	
	String staff_gender;	
	Date staff_bdate;	
	Date staff_jdate;
	String user_email;
	String password;
	int dept_id;
	
	
	public int getDept_id() {
		return dept_id;
	}
	public void setDept_id(int dept_id) {
		this.dept_id = dept_id;
	}
	public String getUser_email() {
		return user_email;
	}
	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public StaffRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getStaff_name() {
		return staff_name;
	}
	public void setStaff_name(String staff_name) {
		this.staff_name = staff_name;
	}
	public String getStaff_contact() {
		return staff_contact;
	}
	public void setStaff_contact(String staff_contact) {
		this.staff_contact = staff_contact;
	}
	public String getStaff_gender() {
		return staff_gender;
	}
	public void setStaff_gender(String staff_gender) {
		this.staff_gender = staff_gender;
	}
	public Date getStaff_bdate() {
		return staff_bdate;
	}
	public void setStaff_bdate(Date staff_bdate) {
		this.staff_bdate = staff_bdate;
	}
	public Date getStaff_jdate() {
		return staff_jdate;
	}
	public void setStaff_jdate(Date staff_jdate) {
		this.staff_jdate = staff_jdate;
	}
	

}
