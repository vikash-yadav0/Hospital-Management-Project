package com.hospital.project.entiries;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payment_table")
public class Payment {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int payment_id;
	@Column
	int billing_id;
	@Column
	String online,cash;
	@Column
	Date Discharge_date;
	@Column
	int Admission_id;
	@Column
	String payment_status;
	public Payment() {
		super();
	}
	public Payment(int payment_id, int billing_id, String online, String cash, Date discharge_date, int admission_id,
			String payment_status) {
		super();
		this.payment_id = payment_id;
		this.billing_id = billing_id;
		this.online = online;
		this.cash = cash;
		this.Discharge_date = discharge_date;
		this.Admission_id = admission_id;
		this.payment_status = payment_status;
	}
	public int getPayment_id() {
		return payment_id;
	}
	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}
	public int getBilling_id() {
		return billing_id;
	}
	public void setBilling_id(int billing_id) {
		this.billing_id = billing_id;
	}
	public String getOnline() {
		return online;
	}
	public void setOnline(String online) {
		this.online = online;
	}
	public String getCash() {
		return cash;
	}
	public void setCash(String cash) {
		this.cash = cash;
	}
	public Date getDischarge_date() {
		return Discharge_date;
	}
	public void setDischarge_date(Date discharge_date) {
		Discharge_date = discharge_date;
	}
	public int getAdmission_id() {
		return Admission_id;
	}
	public void setAdmission_id(int admission_id) {
		Admission_id = admission_id;
	}
	public String getPayment_status() {
		return payment_status;
	}
	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}
	@Override
	public String toString() {
		return "Payment [payment_id=" + payment_id + ", billing_id=" + billing_id + ", online=" + online + ", cash="
				+ cash + ", Discharge_date=" + Discharge_date + ", Admission_id=" + Admission_id + ", payment_status="
				+ payment_status + "]";
	}
	
	
	
}
