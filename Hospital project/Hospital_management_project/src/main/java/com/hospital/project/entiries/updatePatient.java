package com.hospital.project.entiries;

import java.sql.Date;

public class updatePatient {
	int patient_id;		
	String patient_contact1;
	String patient_contact2;	
	Date patient_bdate;	
	String password;	
	String patient_bloodgroup;	
	String patient_history;	
	String patient_height;	
	String patient_weight;	
	String patient_gender;
	String form_fill;
	public updatePatient() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public String getPatient_contact1() {
		return patient_contact1;
	}
	public void setPatient_contact1(String patient_contact1) {
		this.patient_contact1 = patient_contact1;
	}
	public String getPatient_contact2() {
		return patient_contact2;
	}
	public void setPatient_contact2(String patient_contact2) {
		this.patient_contact2 = patient_contact2;
	}
	public Date getPatient_bdate() {
		return patient_bdate;
	}
	public void setPatient_bdate(Date patient_bdate) {
		this.patient_bdate = patient_bdate;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPatient_bloodgroup() {
		return patient_bloodgroup;
	}
	public void setPatient_bloodgroup(String patient_bloodgroup) {
		this.patient_bloodgroup = patient_bloodgroup;
	}
	public String getPatient_history() {
		return patient_history;
	}
	public void setPatient_history(String patient_history) {
		this.patient_history = patient_history;
	}
	public String getPatient_height() {
		return patient_height;
	}
	public void setPatient_height(String patient_height) {
		this.patient_height = patient_height;
	}
	public String getPatient_weight() {
		return patient_weight;
	}
	public void setPatient_weight(String patient_weight) {
		this.patient_weight = patient_weight;
	}
	public String getPatient_gender() {
		return patient_gender;
	}
	public void setPatient_gender(String patient_gender) {
		this.patient_gender = patient_gender;
	}
	public String getForm_fill() {
		return form_fill;
	}
	public void setForm_fill(String form_fill) {
		this.form_fill = form_fill;
	}

	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	
	

}
