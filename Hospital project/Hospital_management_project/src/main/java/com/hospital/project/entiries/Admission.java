package com.hospital.project.entiries;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="admission_table")
public class Admission {

@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
int admission_id;
	
@JsonFormat(pattern = "yyyy-mm-dd")
@Column
Date admited_date;

@JsonIgnoreProperties("doctor")
@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name="patient_id")
Patient patient;

@JsonIgnoreProperties("department")
@OneToOne(cascade = CascadeType.ALL)
@JoinColumn(name="bed_id")
BedMaster bed;

@Column
String status;

@JsonIgnoreProperties("admission")
@ManyToOne
@JoinColumn(name="doctor_id")
Doctor doctor;

@JsonIgnoreProperties("admission")
@ManyToOne
@JoinColumn(name="dept_id")
Department department;

@JsonIgnoreProperties("adnission")
@ManyToOne
@JoinColumn(name="staff_id")
Staff staff;



public Admission() {
	super();
}

public Admission(int admission_id, Date admited_date, Patient patient, BedMaster bed, String status, Doctor doctor,
		Department department, Staff staff) {
	super();
	this.admission_id = admission_id;
	this.admited_date = admited_date;
	this.patient = patient;
	this.bed = bed;
	this.status = status;
	this.doctor = doctor;
	this.department = department;
	this.staff = staff;
	
}

public int getAdmission_id() {
	return admission_id;
}

public void setAdmission_id(int admission_id) {
	this.admission_id = admission_id;
}

public Date getAdmited_date() {
	return admited_date;
}

public void setAdmited_date(Date admited_date) {
	this.admited_date = admited_date;
}

public Patient getPatient() {
	return patient;
}

public void setPatient(Patient patient) {
	this.patient = patient;
}

public BedMaster getBed() {
	return bed;
}

public void setBed(BedMaster bed) {
	this.bed = bed;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

public Doctor getDoctor() {
	return doctor;
}

public void setDoctor(Doctor doctor) {
	this.doctor = doctor;
}

public Department getDepartment() {
	return department;
}

public void setDepartment(Department department) {
	this.department = department;
}

public Staff getStaff() {
	return staff;
}

public void setStaff(Staff staff) {
	this.staff = staff;
}



@Override
public String toString() {
	return "Admission [admission_id=" + admission_id + ", admited_date=" + admited_date + ", patient=" + patient
			+ ", bed=" + bed + ", status=" + status + ", doctor=" + doctor + ", department=" + department + ", staff="
			+ staff + "]";
}



}
