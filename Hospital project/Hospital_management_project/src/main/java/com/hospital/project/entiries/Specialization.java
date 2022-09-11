package com.hospital.project.entiries;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="specialization_table")
public class Specialization {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int sp_id;
	
	@Column
	String sp_name;

	public Specialization() {
		super();
	}

	public Specialization(int sp_id, String sp_name) {
		super();
		this.sp_id = sp_id;
		this.sp_name = sp_name;
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

	@Override
	public String toString() {
		return "Specialization [sp_id=" + sp_id + ", sp_name=" + sp_name + "]";
	}
	
	
}
