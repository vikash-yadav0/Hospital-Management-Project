package com.hospital.project.entiries;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="doctor_table")
public class Doctor {
	
	// not getting department with staff ..
		@Id()
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		
		int doctor_id;
		@Column()
		String doctor_name;
		@Column
		String user_email;
		@Column
		String doctor_contact;
		@Column
		String qualifications;
		@Column
		String password;
		@Column
		int dept_id;
		@OneToOne
		@JoinColumn(name="login")
		Login login;
		@Column
		byte [] picture;
		public Doctor() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Doctor(String doctor_name, String user_email, String doctor_contact, String qualifications,
				String password, Login login, byte[] picture,int dept_id) {
			super();
			this.doctor_name = doctor_name;
			this.user_email = user_email;
			this.doctor_contact = doctor_contact;
			this.qualifications = qualifications;
			this.password = password;
			this.login = login;
			this.picture = picture;
			this.dept_id=dept_id;
		}
		
		public Doctor(String doctor_name, String user_email, String doctor_contact, String qualifications,
				String password, Login login,int dept_id) {
			super();
			this.doctor_name = doctor_name;
			this.user_email = user_email;
			this.doctor_contact = doctor_contact;
			this.qualifications = qualifications;
			this.password = password;
			this.login = login;
			this.dept_id=dept_id;
		}
		public Doctor(int doctor_id, String doctor_name, String user_email, String doctor_contact,
				String qualifications, String password, Login login,int dept_id) {
			super();
			this.doctor_id = doctor_id;
			this.doctor_name = doctor_name;
			this.user_email = user_email;
			this.doctor_contact = doctor_contact;
			this.qualifications = qualifications;
			this.password = password;
			this.login = login;
			this.dept_id=dept_id;
		}
		public Doctor(int doctor_id, String doctor_name, String user_email, String doctor_contact,
				String qualifications, String password, Login login, byte[] picture,int dept_id) {
			super();
			this.doctor_id = doctor_id;
			this.doctor_name = doctor_name;
			this.user_email = user_email;
			this.doctor_contact = doctor_contact;
			this.qualifications = qualifications;
			this.password = password;
			this.login = login;
			this.picture = picture;
			this.dept_id=dept_id;
		}
		public int getDoctor_id() {
			return doctor_id;
		}
		
		public int getDept_id() {
			return dept_id;
		}
		public void setDept_id(int dept_id) {
			this.dept_id = dept_id;
		}
		public void setDoctor_id(int doctor_id) {
			this.doctor_id = doctor_id;
		}
		public String getDoctor_name() {
			return doctor_name;
		}
		public void setDoctor_name(String doctor_name) {
			this.doctor_name = doctor_name;
		}
		public String getUser_email() {
			return user_email;
		}
		public void setUser_email(String user_email) {
			this.user_email = user_email;
		}
		public String getDoctor_contact() {
			return doctor_contact;
		}
		public void setDoctor_contact(String doctor_contact) {
			this.doctor_contact = doctor_contact;
		}
		public String getQualifications() {
			return qualifications;
		}
		public void setQualifications(String qualifications) {
			this.qualifications = qualifications;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public Login getLogin() {
			return login;
		}
		public void setLogin(Login login) {
			this.login = login;
		}
		public byte[] getPicture() {
			return picture;
		}
		public void setPicture(byte[] picture) {
			this.picture = picture;
		}
		@Override
		public String toString() {
			return "Doctor [doctor_id=" + doctor_id + ", doctor_name=" + doctor_name + ", user_email=" + user_email
					+ ", doctor_contact=" + doctor_contact + ", qualifications=" + qualifications + ", password="
					+ password + ", login=" + login + ", picture=" + Arrays.toString(picture) + "]";
		}
		
		
		/*@JsonIgnoreProperties("doctor")
		@ManyToOne
		@JoinColumn(name="department_id")
		Department department;*/
		
		/*@JsonIgnoreProperties("doctor")
		@OneToMany( mappedBy="doctor",cascade = CascadeType.ALL)
		Set<DoctorSpecilization> dspec =new HashSet();
		/*
		
		@JsonIgnoreProperties("doctor")
		@OneToMany( mappedBy="doctor",cascade = CascadeType.ALL)
		Set<Admission> admission =new HashSet();
		*/	

}
