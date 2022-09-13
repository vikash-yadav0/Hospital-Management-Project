package com.hospital.project.entiries;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="billing_table")
public class Billing {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int billing_id;
	@Column
	int Admission_id;
	@Column
	Double test_cost;
	@Column
	Double medicine_cost;
	@Column
	int bed_id;
	@Column
	int consultation_fees;
	
	
	public Billing() {
		super();
	}
	public Billing(int billing_id, int admission_id, Double test_cost, Double medicine_cost, int bed_id,
			int consultation_fees) {
		super();
		this.billing_id = billing_id;
		this.Admission_id = admission_id;
		this.test_cost = test_cost;
		this.medicine_cost = medicine_cost;
		this.bed_id = bed_id;
		this.consultation_fees = consultation_fees;
		
	}
	public int getBilling_id() {
		return billing_id;
	}
	public void setBilling_id(int billing_id) {
		this.billing_id = billing_id;
	}
	public int getAdmission_id() {
		return Admission_id;
	}
	public void setAdmission_id(int admission_id) {
		Admission_id = admission_id;
	}
	public Double getTest_cost() {
		return test_cost;
	}
	public void setTest_cost(Double test_cost) {
		this.test_cost = test_cost;
	}
	public Double getMedicine_cost() {
		return medicine_cost;
	}
	public void setMedicine_cost(Double medicine_cost) {
		this.medicine_cost = medicine_cost;
	}
	public int getBed_id() {
		return bed_id;
	}
	public void setBed_id(int bed_id) {
		this.bed_id = bed_id;
	}
	public int getConsultation_fees() {
		return consultation_fees;
	}
	public void setConsultation_fees(int consultation_fees) {
		this.consultation_fees = consultation_fees;
	}
	
	@Override
	public String toString() {
		return "Billing [billing_id=" + billing_id + ", Admission_id=" + Admission_id + ", test_cost=" + test_cost
				+ ", medicine_cost=" + medicine_cost + ", bed_id=" + bed_id + ", consultation_fees=" + consultation_fees
				 + "]";
	}
	
	
	
	
	
	
	
	
	
}
