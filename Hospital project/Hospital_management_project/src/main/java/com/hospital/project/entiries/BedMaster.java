package com.hospital.project.entiries;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
	
	@JsonIgnoreProperties("bed")
	@ManyToOne
	@JoinColumn(name="dept_id")
	Department department;
	
	@JsonIgnoreProperties("bed")
	@OneToOne
	@JoinColumn(name="bed_id")
	Admission admission;
	
	
	public BedMaster() {
		super();
	}
	public BedMaster(int bed_id, String category, Double charges, String status, Department department) {
		super();
		this.bed_id = bed_id;
		this.category = category;
		this.charges = charges;
		this.status = status;
		this.department = department;
	}
	
	public BedMaster(String category, Double charges, String status, Department department, Admission admission) {
		super();
		this.category = category;
		this.charges = charges;
		this.status = status;
		this.department = department;
		this.admission = admission;
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
	public Department getDepartment() {
		return department;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
	@Override
	public String toString() {
		return "BedMaster [bed_id=" + bed_id + ", category=" + category + ", charges=" + charges + ", status=" + status
				+ ", department=" + department + "]";
	}
	
	
	
	
	
	
}
