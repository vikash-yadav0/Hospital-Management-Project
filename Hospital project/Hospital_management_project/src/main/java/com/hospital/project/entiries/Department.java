package com.hospital.project.entiries;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="department_table")
public class Department {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int dept_id;
	@Column
	String dept_name;
	
	/*@JsonIgnoreProperties("department")
	@OneToMany(cascade = CascadeType.ALL)
	Set<Doctor> doctor=new HashSet();
	
	@JsonIgnoreProperties("department")
	@OneToMany(cascade = CascadeType.ALL)
	Set<Admission> admission=new HashSet();
	
	@JsonIgnoreProperties("department")
	@OneToMany(cascade = CascadeType.ALL)
	Set<Staff> staff=new HashSet();
	
	@JsonIgnoreProperties("department")
	@OneToMany(cascade = CascadeType.ALL)
	Set<BedMaster> bed=new HashSet();*/
	public Department() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Department(String dept_name) {
		super();
		this.dept_name = dept_name;
	}

	/*public Department(int dept_id, String dept_name, Set<Doctor> doctor, Set<Admission> admission, Set<Staff> staff,
			Set<BedMaster> bed) {
		super();
		this.dept_id = dept_id;
		this.dept_name = dept_name;
		this.doctor = doctor;
		this.admission = admission;
		this.staff = staff;
		this.bed = bed;
	}*/
	
	
	public int getDept_id() {
		return dept_id;
	}
	public Department(int dept_id, String dept_name) {
		super();
		this.dept_id = dept_id;
		this.dept_name = dept_name;
	}
	public void setDept_id(int dept_id) {
		this.dept_id = dept_id;
	}
	public String getDept_name() {
		return dept_name;
	}
	public void setDept_name(String dept_name) {
		this.dept_name = dept_name;
	}
/*	public Set<Doctor> getDoctor() {
		return doctor;
	}
	public void setDoctor(Set<Doctor> doctor) {
		this.doctor = doctor;
	}
	public Set<Admission> getAdmission() {
		return admission;
	}
	public void setAdmission(Set<Admission> admission) {
		this.admission = admission;
	}
	public Set<Staff> getStaff() {
		return staff;
	}
	public void setStaff(Set<Staff> staff) {
		this.staff = staff;
	}
	public Set<BedMaster> getBed() {
		return bed;
	}
	public void setBed(Set<BedMaster> bed) {
		this.bed = bed;
	}*/
	@Override
	public String toString() {
		return "Department [dept_id=" + dept_id + ", dept_name=" + dept_name +  ", admission="
				 +  "]";
	}
	
	
	

}
