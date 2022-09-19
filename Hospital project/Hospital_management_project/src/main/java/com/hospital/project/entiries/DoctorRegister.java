package com.hospital.project.entiries;

public class DoctorRegister {
	String user_email;
	String doctor_name;	
	String doctor_contact;
	String qualifications;
	String password;
	int dept_id;
	
	public DoctorRegister() {
		super();
		// TODO Auto-generated constructor stub
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

	public String getDoctor_name() {
		return doctor_name;
	}
	public void setDoctor_name(String doctor_name) {
		this.doctor_name = doctor_name;
	}
	public String getDoctor_contact() {
		return doctor_contact;
	}
	public void setDoctor_contact(String doctor_contact) {
		this.doctor_contact = doctor_contact;
	}
	public String getQualifications() {
		return qualifications;
	}
	public void setQualifications(String qualifications) {
		this.qualifications = qualifications;
	}


}
