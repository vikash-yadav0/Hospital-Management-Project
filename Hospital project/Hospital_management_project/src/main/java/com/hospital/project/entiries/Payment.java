package com.hospital.project.entiries;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="payment_table")
public class Payment {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int payment_id;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="billing_id")
	Billing billing;
	@Column
	String paymentmethod;
	@Column
	Date Discharge_date;
	
	/*@JsonIgnoreProperties("patient")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="admission_id")
	Admission admission;*/
	
	@Column
	String payment_status;
	
	
	public Payment() {
		super();
	}


	public Payment(int payment_id, Billing billing, String paymentmethod, Date discharge_date,
			String payment_status) {
		super();
		this.payment_id = payment_id;
		this.billing = billing;
		this.paymentmethod = paymentmethod;
		Discharge_date = discharge_date;
		//this.admission = admission;
		this.payment_status = payment_status;
	}


	public int getPayment_id() {
		return payment_id;
	}


	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}


	public Billing getBilling() {
		return billing;
	}


	public void setBilling(Billing billing) {
		this.billing = billing;
	}


	public String getPaymentmethod() {
		return paymentmethod;
	}


	public void setPaymentmethod(String paymentmethod) {
		this.paymentmethod = paymentmethod;
	}


	public Date getDischarge_date() {
		return Discharge_date;
	}


	public void setDischarge_date(Date discharge_date) {
		Discharge_date = discharge_date;
	}


	/*public Admission getAdmission() {
		return admission;
	}


	public void setAdmission(Admission admission) {
		this.admission = admission;
	}


	public String getPayment_status() {
		return payment_status;
	}*/


	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}


	@Override
	public String toString() {
		return "Payment [payment_id=" + payment_id + ", billing=" + billing + ", paymentmethod=" + paymentmethod
				+ ", Discharge_date=" + Discharge_date +  ", payment_status="
				+ payment_status + "]";
	}


	
	
}
