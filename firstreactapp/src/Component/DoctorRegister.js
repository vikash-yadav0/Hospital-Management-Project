import React from "react";
import axios from "axios";
import { useState } from "react";


function DoctorRegister()
{
   
   const [user_email, setuser_email] = useState("");
   const [doctor_name, setdoctor_name] = useState("");
   const [doctor_contact, setdoctor_contact] = useState("");
   const [qualifications, setqualifications] = useState("");
   const[password,setpassword] =useState("");

 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/registerd",
        {
          
            user_email : user_email,
            doctor_name:doctor_name,
            doctor_contact:doctor_contact,
            qualifications:qualifications,
            password: password
        });

         alert("User Registation Successfully");
    
          
          setuser_email("");
          setdoctor_name("");
          setdoctor_contact("");
          setqualifications("");
           setpassword("");
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <div className="register-container">
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Doctor registration form</h1>
            <p>Fill in the Information Below</p>
 
           <input type="text"
            name="user_email"
            placeholder="Email"
            autoComplete="off"
            onChange={(event) =>
                {
                    setuser_email(event.target.value);      
                }}          
            />
 
            <input type="text"
            name="doctor_name"
            placeholder="Name"
            autoComplete="off"
            onChange={(event) =>
                {
                    setdoctor_name(event.target.value);      
                }}          
            />
            <input type="text"
            name="doctor_contact"
            placeholder="contact"
            autoComplete="off"
            onChange={(event)=>
                {
                    setdoctor_contact(event.target.value);  
                }}
            />
            <input type="text"
            name="qualifications"
            placeholder="MBBS/BAMS/MD"
            autoComplete="off"
            onChange={(event)=>
                {
                    setqualifications(event.target.value);  
                }}
            />
          
            <input type="password"
            name="password"
            placeholder="Password"
            onChange={(event) =>
                {
                    setpassword(event.target.value);      
                }}          
            />
        
           
              <button type="submit">Register</button>
              </form>    
              <p>  </p>
    
        </div>
    )
}
 
export default DoctorRegister;