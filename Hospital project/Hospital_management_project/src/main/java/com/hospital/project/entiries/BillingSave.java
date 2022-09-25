package com.hospital.project.entiries;

import java.util.Date;

public class BillingSave {
	int admission_id;
	double test_cost;	
	double medicine_cost;
	double consultation_fees;
	String Bed_Status;
	Date Discharge_date;
	String payment_status;
	
	public int getAdmission_id() {
		return admission_id;
	}
	public void setAdmission_id(int admission_id) {
		this.admission_id = admission_id;
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
	public String getBed_Status() {
		return Bed_Status;
	}
	public void setBed_Status(String bed_Status) {
		Bed_Status = bed_Status;
	}
	public Date getDischarge_date() {
		return Discharge_date;
	}
	public void setDischarge_date(Date discharge_date) {
		Discharge_date = discharge_date;
	}
	public String getPayment_status() {
		return payment_status;
	}
	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}
	
	
	
}
