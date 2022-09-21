package com.hospital.project.entiries;

public class BillingSave {
	int admission_id;

	double test_cost;	
	double medicine_cost;
	double consultation_fees;
	public int getAdmission_id() {
		return admission_id;
	}
	public void setAdmission_id(int admission_id) {
		this.admission_id = admission_id;
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
	public double getConsultation_fees() {
		return consultation_fees;
	}
	public void setConsultation_fees(double consultation_fees) {
		this.consultation_fees = consultation_fees;
	}
	
}
