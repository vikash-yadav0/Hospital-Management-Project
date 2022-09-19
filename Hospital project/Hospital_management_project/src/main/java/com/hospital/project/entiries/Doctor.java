package com.hospital.project.entiries;

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
		
		@OneToOne
		@JoinColumn(name="login")
		Login login;
		@Column
		byte [] picture;
		
		
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
		
		public Doctor() {
			super();
			// TODO Auto-generated constructor stub
		}

		public Doctor(int doctor_id, String doctor_name, String user_email, String doctor_contact,
				String qualifications, String password, Login login, byte[] picture) {
			super();
			this.doctor_id = doctor_id;
			this.doctor_name = doctor_name;
			this.user_email = user_email;
			this.doctor_contact = doctor_contact;
			this.qualifications = qualifications;
			this.password = password;
			this.login = login;
			this.picture = picture;
		}

		public Doctor( String doctor_name, String doctor_email, String doctor_contact,
				String qualifications, String password, Login login) {
			super();
			
			this.doctor_name = doctor_name;
			this.user_email = doctor_email;
			this.doctor_contact = doctor_contact;
			this.qualifications = qualifications;
			this.password = password;
			this.login = login;
		}
		public int getDoctor_id() {
			return doctor_id;
		}

		public byte[] getPicture() {
			return picture;
		}

		public void setPicture(byte[] picture) {
			this.picture = picture;
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

		public void setUser_email(String doctor_email) {
			this.user_email = doctor_email;
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

		@Override
		public String toString() {
			return "Doctor [doctor_id=" + doctor_id + ", doctor_name=" + doctor_name + ", doctor_email=" + user_email
					+ ", doctor_contact=" + doctor_contact + ", qualifications=" + qualifications + ", password="
					+ password + ", login=" + login + "]";
		}

		public Login getLogin() {
			return login;
		}

		public void setLogin(Login login) {
			this.login = login;
		}


		
		
		
		
		

}
