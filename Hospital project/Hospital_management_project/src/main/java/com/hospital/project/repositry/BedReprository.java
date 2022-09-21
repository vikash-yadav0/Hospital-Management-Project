package com.hospital.project.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.project.entiries.BedMaster;
@Repository
public interface BedReprository extends JpaRepository<BedMaster, Integer>{

}
