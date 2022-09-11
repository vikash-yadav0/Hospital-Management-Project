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
@Table(name="doctor_specilization")
public class DoctorSpecilization {

	 @Column
	    int doctor_id;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int docsp_id;
   
    @Column
    int sp_id;

	public DoctorSpecilization() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DoctorSpecilization(int doctor_id, int docsp_id, int sp_id) {
		super();
		this.doctor_id = doctor_id;
		this.docsp_id = docsp_id;
		this.sp_id = sp_id;
	}

	public int getDoctor_id() {
		return doctor_id;
	}

	public void setDoctor_id(int doctor_id) {
		this.doctor_id = doctor_id;
	}

	public int getDocsp_id() {
		return docsp_id;
	}

	public void setDocsp_id(int docsp_id) {
		this.docsp_id = docsp_id;
	}

	public int getSp_id() {
		return sp_id;
	}

	public void setSp_id(int sp_id) {
		this.sp_id = sp_id;
	}

	@Override
	public String toString() {
		return "DoctorSpecilization [doctor_id=" + doctor_id + ", docsp_id=" + docsp_id + ", sp_id=" + sp_id + "]";
	}
	
	
	
}
