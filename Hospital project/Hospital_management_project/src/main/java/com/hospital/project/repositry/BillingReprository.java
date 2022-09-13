package com.hospital.project.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.project.entiries.Billing;

@Repository
public interface BillingReprository extends JpaRepository<Billing, Integer> {

}
