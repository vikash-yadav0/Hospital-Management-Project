package com.hospital.project.entiries;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="patient_table")
public class Patient {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int patient_id;
	@Column
	String patient_name;
	@Column
	String user_email;
	@Column
	String patient_contact1;
	@Column
	String patient_contact2;
	
	@JsonFormat(pattern = "yyyy-mm-dd")
	@Column
	Date patient_bdate;
	@Column
	String password;
	@Column
	String patient_bloodgroup;
	@Column
	String patient_history;
	@Column
	String patient_height;
	@Column
	String patient_weight;
	@Column
	String patient_gender;
	@Column
	String form_fill;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login")
	Login login;
	
	
	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	
	public Patient(String patient_name, String user_email, String patient_contact1, String patient_contact2,
			Date patient_bdate, String password, String patient_bloodgroup, String patient_history,
			String patient_height, String patient_weight, String patient_gender, String form_fill, Login login) {
		super();
		this.patient_name = patient_name;
		this.user_email = user_email;
		this.patient_contact1 = patient_contact1;
		this.patient_contact2 = patient_contact2;
		this.patient_bdate = patient_bdate;
		this.password = password;
		this.patient_bloodgroup = patient_bloodgroup;
		this.patient_history = patient_history;
		this.patient_height = patient_height;
		this.patient_weight = patient_weight;
		this.patient_gender = patient_gender;
		this.form_fill = form_fill;
		this.login = login;
	}


	public Login getLogin() {
		return login;
	}


	public void setLogin(Login login) {
		this.login = login;
	}


	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	public String getPatient_name() {
		return patient_name;
	}
	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}
	public String getUser_email() {
		return user_email;
	}
	public void setUser_email(String patient_email) {
		this.user_email = patient_email;
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
	public String getPatient_password() {
		return password;
	}
	public void setPatient_password(String patient_password) {
		this.password = patient_password;
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


	@Override
	public String toString() {
		return "Patient [patient_id=" + patient_id + ", patient_name=" + patient_name + ", patient_email="
				+ user_email + ", patient_contact1=" + patient_contact1 + ", patient_contact2=" + patient_contact2
				+ ", patient_bdate=" + patient_bdate + ", patient_password=" + password
				+ ", patient_bloodgroup=" + patient_bloodgroup + ", patient_history=" + patient_history
				+ ", patient_height=" + patient_height + ", patient_weight=" + patient_weight + ", patient_gender="
				+ patient_gender + ", form_fill=" + form_fill + ", login=" + login + "]";
	}
	
	
}
