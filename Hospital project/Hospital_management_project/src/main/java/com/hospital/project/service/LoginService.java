package com.hospital.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospital.project.entiries.Doctor;
import com.hospital.project.entiries.Login;
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
	
	/*public Object CheckLogin(String uid,String pwd)
	{
		List<Object[]> log=lrepo.checkLogin(uid, pwd);
		if(log.size()==1)
		  {
			System.out.println(log.get(0)[0]+ "   "+log.get(0)[1]);
			Patient p=null;
			Doctor d=null;
			Staff s=null;
		
			if(log.get(0)[0].equals("patient"))
			  {
			
				Optional<Patient>op=prepo.loginid((int)log.get(0)[1]);
				System.out.println("byyyy");
				try
				  {
					p=op.get();
					System.out.println("okkk");
				  }
				catch (Exception e) {
				      p=null;
				      System.out.println(p);
				  }
				return p;
				
			  }
		   else if(log.get(0)[0].equals("doctor"))
		       {
			     Optional<Doctor>op=drepo.loginid((int)log.get(0)[1]);
			     try
			      {
				    d=op.get();
			      }
			    catch (Exception e) {
			       d=null;
			      }
			    return d;
			
			   }
				
		  else if(log.get(0)[0].equals("staff"))
	        {
		      Optional<Staff>op=srepo.loginid((int)log.get(0)[1]);
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
	}*/
	public Login CheckLogin(String uid,String pwd)
	{
		return lrepo.checkLogin(uid, pwd);
		
	
			
	}
	public Login find(int id)
	{
		return lrepo.findById(id).get();
	}
	public Login add(Login l)
	{
		return lrepo.save(l);
	}
}
