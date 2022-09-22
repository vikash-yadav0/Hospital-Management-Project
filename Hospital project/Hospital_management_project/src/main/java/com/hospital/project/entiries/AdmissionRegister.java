package com.hospital.project.entiries;

import java.sql.Date;

public class AdmissionRegister {
	
	Date admited_date;
     int patient_id;         
     int bed_id; 
     int doctor_id;
     int dept_id;
	public Date getAdmited_date() {
		return admited_date;
	}
	public void setAdmited_date(Date admited_date) {
		this.admited_date = admited_date;
	}
	public int getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	public int getBed_id() {
		return bed_id;
	}
	public void setBed_id(int bed_id) {
		this.bed_id = bed_id;
	}
	
	public int getDoctor_id() {
		return doctor_id;
	}
	public void setDoctor_id(int doctor_id) {
		this.doctor_id = doctor_id;
	}
	public int getDept_id() {
		return dept_id;
	}
	public void setDept_id(int dept_id) {
		this.dept_id = dept_id;
	}
	
     
     
}
