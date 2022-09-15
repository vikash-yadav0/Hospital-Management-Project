package com.hospital.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.Patient;
import com.hospital.project.entiries.Staff;
import com.hospital.project.repositry.DoctorRepository;
import com.hospital.project.repositry.LoginReprositry;
import com.hospital.project.repositry.PatientRepository;
import com.hospital.project.repositry.StaffRepository;

@Service
public class LoginService {
	@Autowired
	LoginReprositry lrepo;
	
	@Autowired
	PatientRepository prepo;
	
	@Autowired
	DoctorRepository drepo;
	
	@Autowired
	StaffRepository srepo;
	
	public Object CheckLogin(String uid,String pwd)
	{
		List<Object[]> log=lrepo.checkLogin(uid, pwd);
		if(log.size()==1)
		  {
			Patient p=null;
			Doctor d=null;
			Staff s=null;
			if(log.get(0)[0].equals("Patient"))
			  {
				Optional<Patient>op=prepo.findById((int)log.get(0)[1]);
				try
				  {
					p=op.get();
				  }
				catch (Exception e) {
				      p=null;
				  }
				return p;
				
			  }
		   else if(log.get(0)[0].equals("Doctor"))
		       {
			     Optional<Doctor>op=drepo.findById((int)log.get(0)[1]);
			     try
			      {
				    d=op.get();
			      }
			    catch (Exception e) {
			       d=null;
			      }
			    return d;
			
			   }
				
		  else if(log.get(0)[0].equals("Staff"))
	        {
		      Optional<Staff>op=srepo.findById((int)log.get(0)[1]);
		      try
		        {
		        	s=op.get();
		         }
		      catch (Exception e) 
		         {
		           s=null;
		         }
		        return s;
		
		    }
		  }
	
		return null;	
	}
	
}
