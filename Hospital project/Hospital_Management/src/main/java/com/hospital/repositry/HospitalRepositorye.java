package com.hospital.repositry;

import java.util.List;

import com.hospital.entiries.Doctor;
import com.hospital.entiries.Patient;

public interface HospitalRepositorye {

	List<Doctor> findAll();

	Doctor save(Patient c);

	
}
