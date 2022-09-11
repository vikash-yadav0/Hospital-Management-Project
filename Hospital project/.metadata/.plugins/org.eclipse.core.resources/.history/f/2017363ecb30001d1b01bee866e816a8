package com.example.demo.entiries;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="department_table")
public class Department {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int dept_id;
	@Column
	String dept_name;
	public Department() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Department(int dept_id, String dept_name) {
		super();
		this.dept_id = dept_id;
		this.dept_name = dept_name;
	}
	public int getDept_id() {
		return dept_id;
	}
	public String getDept_name() {
		return dept_name;
	}
	@Override
	public String toString() {
		return "Department [dept_id=" + dept_id + ", dept_name=" + dept_name + "]";
	}
	

}
