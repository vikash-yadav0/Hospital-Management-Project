package com.hospital.project.repositry;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.Doctor;

@Transactional
@Repository
public interface Doctorepository extends JpaRepository<Doctor, Integer>
{

}
