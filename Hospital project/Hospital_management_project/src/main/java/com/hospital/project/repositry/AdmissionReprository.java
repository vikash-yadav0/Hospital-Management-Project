package com.hospital.project.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.Admission;
@Repository
public interface AdmissionReprository extends JpaRepository<Admission, Integer>{

}
