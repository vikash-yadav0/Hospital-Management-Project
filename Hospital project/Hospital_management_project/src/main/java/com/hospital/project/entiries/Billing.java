package com.hospital.project.entiries;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="billing_table")
public class Billing {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int billing_id;
	
	//@JsonIgnoreProperties({"bed","department"})
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Admission_id")
	Admission admission;
	
	@Column
	double test_cost;
	@Column
	double medicine_cost;
	@Column
	double consultation_fees;
	
	
	public Billing() {
		super();
	}
	
	

	public Billing(Admission admission, double test_cost, double medicine_cost,double consultation_fees) {
		super();
		this.admission = admission;
		this.test_cost = test_cost;
		this.medicine_cost = medicine_cost;
		//this.bed = bed;
		this.consultation_fees = consultation_fees;
	}



	public Billing(int billing_id, Admission admission, double test_cost, double medicine_cost,double consultation_fees) {
		super();
		this.billing_id = billing_id;
		this.admission = admission;
		this.test_cost = test_cost;
		this.medicine_cost = medicine_cost;
		//this.bed = bed;
		this.consultation_fees = consultation_fees;
	}

	public Admission getAdmission() {
		return admission;
	}

	public void setAdmission(Admission admission) {
		this.admission = admission;
	}


	public int getBilling_id() {
		return billing_id;
	}
	public void setBilling_id(int billing_id) {
		this.billing_id = billing_id;
	}
	
	public double getTest_cost() {
		return test_cost;
	}
	public void setTest_cost(double test_cost) {
		this.test_cost = test_cost;
	}
	public double getMedicine_cost() {
		return medicine_cost;
	}
	public void setMedicine_cost(double medicine_cost) {
		this.medicine_cost = medicine_cost;
	}
	
	public double getConsultation_fees() {
		return consultation_fees;
	}
	public void setConsultation_fees(double consultation_fees) {
		this.consultation_fees = consultation_fees;
	}

	@Override
	public String toString() {
		return "Billing [billing_id=" + billing_id + ", admission=" + admission + ", test_cost=" + test_cost
				+ ", medicine_cost=" + medicine_cost + ", consultation_fees=" + consultation_fees
				+ "]";
	}
		
	
}
