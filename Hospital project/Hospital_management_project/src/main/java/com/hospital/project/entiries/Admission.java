package com.hospital.project.entiries;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admission_table")
public class Admission {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
int admission_id;
	
@Column
Date admited_date;

@Column
int patient_id;

@Column
int doctor_id;

@Column
int bed_id;

@Column
int Payment_id;

@Column
String status;

public Admission() {
	super();
}

public Admission(int admission_id, Date admited_date, int patient_id, int doctor_id, int bed_id, int payment_id,
		String status) {
	super();
	this.admission_id = admission_id;
	this.admited_date = admited_date;
	this.patient_id = patient_id;
	this.doctor_id = doctor_id;
	this.bed_id = bed_id;
	this.Payment_id = payment_id;
	this.status = status;
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

public int getPatient_id() {
	return patient_id;
}

public void setPatient_id(int patient_id) {
	this.patient_id = patient_id;
}

public int getDoctor_id() {
	return doctor_id;
}

public void setDoctor_id(int doctor_id) {
	this.doctor_id = doctor_id;
}

public int getBed_id() {
	return bed_id;
}

public void setBed_id(int bed_id) {
	this.bed_id = bed_id;
}

public int getPayment_id() {
	return Payment_id;
}

public void setPayment_id(int payment_id) {
	Payment_id = payment_id;
}

public String getStatus() {
	return status;
}

public void setStatus(String status) {
	this.status = status;
}

@Override
public String toString() {
	return "Admission [admission_id=" + admission_id + ", admited_date=" + admited_date + ", patient_id=" + patient_id
			+ ", doctor_id=" + doctor_id + ", bed_id=" + bed_id + ", Payment_id=" + Payment_id + ", status=" + status
			+ "]";
}





}
