package com.hospital.project.entiries;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="billing_table")
public class Billing {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int billing_id;
	
	@JsonIgnoreProperties({"bed","department"})
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="Admission_id")
	Admission admission;
	@Column
	Double test_cost;
	@Column
	Double medicine_cost;
	@OneToOne
	@JoinColumn(name="bed_id")
	BedMaster bed;
	@Column
	int consultation_fees;
	
	
	public Billing() {
		super();
	}
	
	public Billing(Admission admission, Double test_cost, Double medicine_cost, BedMaster bed, int consultation_fees) {
		super();
		this.admission = admission;
		this.test_cost = test_cost;
		this.medicine_cost = medicine_cost;
		this.bed = bed;
		this.consultation_fees = consultation_fees;
	}

	public Billing(int billing_id, Admission admission, Double test_cost, Double medicine_cost, BedMaster bed,
			int consultation_fees) {
		super();
		this.billing_id = billing_id;
		this.admission = admission;
		this.test_cost = test_cost;
		this.medicine_cost = medicine_cost;
		this.bed = bed;
		this.consultation_fees = consultation_fees;
	}

	public Admission getAdmission() {
		return admission;
	}

	public void setAdmission(Admission admission) {
		this.admission = admission;
	}

	public BedMaster getBed() {
		return bed;
	}

	public void setBed(BedMaster bed) {
		this.bed = bed;
	}

	public int getBilling_id() {
		return billing_id;
	}
	public void setBilling_id(int billing_id) {
		this.billing_id = billing_id;
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
	
	public int getConsultation_fees() {
		return consultation_fees;
	}
	public void setConsultation_fees(int consultation_fees) {
		this.consultation_fees = consultation_fees;
	}

	@Override
	public String toString() {
		return "Billing [billing_id=" + billing_id + ", admission=" + admission + ", test_cost=" + test_cost
				+ ", medicine_cost=" + medicine_cost + ", bed=" + bed + ", consultation_fees=" + consultation_fees
				+ "]";
	}
		
	
}
