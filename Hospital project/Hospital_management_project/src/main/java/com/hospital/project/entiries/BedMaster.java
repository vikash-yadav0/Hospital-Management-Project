package com.hospital.project.entiries;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="bed_master")
public class BedMaster {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int bed_id;
	@Column
	String category;
	@Column
	Double charges;
	@Column
	String status;
	@Column
	int dept;
	public BedMaster() {
		super();
	}
	public BedMaster(int bed_id, String category, Double charges, String status, int dept) {
		super();
		this.bed_id = bed_id;
		this.category = category;
		this.charges = charges;
		this.status = status;
		this.dept = dept;
	}
	public int getBed_id() {
		return bed_id;
	}
	public void setBed_id(int bed_id) {
		this.bed_id = bed_id;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Double getCharges() {
		return charges;
	}
	public void setCharges(Double charges) {
		this.charges = charges;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getDept() {
		return dept;
	}
	public void setDept(int dept) {
		this.dept = dept;
	}
	@Override
	public String toString() {
		return "BedMaster [bed_id=" + bed_id + ", category=" + category + ", charges=" + charges + ", status=" + status
				+ ", dept=" + dept + "]";
	}
	
	
	
	
}
