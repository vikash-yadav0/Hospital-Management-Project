package com.hospital.project.entiries;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="specialization_table")
public class Specialization {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int sp_id;
	
	@Column
	String sp_name;
	@Column
	int doctor_id;
	@ManyToOne
	@JoinColumn(name="doctor_id")
	Doctor doctor;
	
	public Specialization(int sp_id, String sp_name, int doctor_id, Doctor doctor) {
		super();
		this.sp_id = sp_id;
		this.sp_name = sp_name;
		this.doctor_id = doctor_id;
		this.doctor = doctor;
	}
	public Specialization() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getSp_id() {
		return sp_id;
	}
	public void setSp_id(int sp_id) {
		this.sp_id = sp_id;
	}
	public String getSp_name() {
		return sp_name;
	}
	public void setSp_name(String sp_name) {
		this.sp_name = sp_name;
	}
	public int getDoctor_id() {
		return doctor_id;
	}
	public void setDoctor_id(int doctor_id) {
		this.doctor_id = doctor_id;
	}
	public Doctor getDoctor() {
		return doctor;
	}
	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}
	@Override
	public String toString() {
		return "Specialization [sp_id=" + sp_id + ", sp_name=" + sp_name + ", doctor_id=" + doctor_id + ", doctor="
				+ doctor + "]";
	}
	
	
    

	


	

	
	
	
}
