package com.hospital.project.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.Payment;
@Repository
public interface PaymentReprository extends JpaRepository<Payment, Integer>{

}
