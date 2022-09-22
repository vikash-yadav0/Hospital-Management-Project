package com.hospital.project.entiries;

import java.util.Date;

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
	@Column
	String payment_status;
	@Column
	Date Discharge_date;
	@Column
	String Bed_Status;
	
	public Billing() {
		super();
	}

	public Billing(Admission admission, double test_cost, double medicine_cost, double consultation_fees,
			String payment_status, Date discharge_date, String bed_Status) {
		super();
		this.admission = admission;
		this.test_cost = test_cost;
		this.medicine_cost = medicine_cost;
		this.consultation_fees = consultation_fees;
		this.payment_status = payment_status;
		Discharge_date = discharge_date;
		Bed_Status = bed_Status;
	}

	public Billing(int billing_id, Admission admission, double test_cost, double medicine_cost,
			double consultation_fees, String payment_status, Date discharge_date, String bed_Status) {
		super();
		this.billing_id = billing_id;
		this.admission = admission;
		this.test_cost = test_cost;
		this.medicine_cost = medicine_cost;
		this.consultation_fees = consultation_fees;
		this.payment_status = payment_status;
		Discharge_date = discharge_date;
		Bed_Status = bed_Status;
	}

	public int getBilling_id() {
		return billing_id;
	}

	public void setBilling_id(int billing_id) {
		this.billing_id = billing_id;
	}

	public Admission getAdmission() {
		return admission;
	}

	public void setAdmission(Admission admission) {
		this.admission = admission;
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

	public String getPayment_status() {
		return payment_status;
	}

	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}

	public Date getDischarge_date() {
		return Discharge_date;
	}

	public void setDischarge_date(Date discharge_date) {
		Discharge_date = discharge_date;
	}

	public String getBed_Status() {
		return Bed_Status;
	}

	public void setBed_Status(String bed_Status) {
		Bed_Status = bed_Status;
	}

	@Override
	public String toString() {
		return "Billing [billing_id=" + billing_id + ", admission=" + admission + ", test_cost=" + test_cost
				+ ", medicine_cost=" + medicine_cost + ", consultation_fees=" + consultation_fees + ", payment_status="
				+ payment_status + ", Discharge_date=" + Discharge_date + ", Bed_Status=" + Bed_Status + "]";
	}
	
	

	
}
