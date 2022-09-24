import React from "react";
import axios from "axios";
import { useState } from "react";
import './style.css';
function Bedsavailbility(){

  const [admited_date, setadmited_date] = useState("");
  const [patient_id, setpatient_id] = useState("");
  const [bed_id, setbed_id] = useState("");
  const [doctor_id, setdoctor_id] = useState("");
  const [dept_id, setdept_id] = useState("");



  async function handleSubmit(event)
   {
       event.preventDefault();
   try
       {
        await axios.post("http://localhost:8080/saveadmission",
       {
         
        admited_date : admited_date,
        patient_id:patient_id,
        bed_id:bed_id,
        doctor_id:doctor_id,
        dept_id:dept_id,
        
       });

        alert("Registation Beds Successfully");  
        setadmited_date("");
        setpatient_id("");
         setbed_id("");
         setdoctor_id("");
         setdept_id("");
       
       }
   catch(err)
       {
         alert("Registation Beds Failed");
       }
  }
    


  return(
  
      <div className="register-container">
    
    <form className="register-form" onSubmit={handleSubmit}>
    <br></br>      
    <h1> Bed Registration form</h1>
    <p>Fill in the Information Below</p>
    
    <div>
   <input type="Date"
    name="admited_date"
   autoComplete="off"
    onChange={(event) =>
        {
          setadmited_date(event.target.value);      
        }}          
    />
    </div>
    <br/>

    <div>
     <input type="text"
    name="patient_id"
    placeholder="patient_id"
   autoComplete="off"
    onChange={(event) =>
        {
          setpatient_id(event.target.value);      
        }}          
    />
   </div>
   <br/>

   <div>
    <input type="text"
    name="bed_id"
    placeholder="Bed-ID"
    autoComplete="off"
    onChange={(event) =>
        {
            setbed_id(event.target.value);      
        }}          
    />
    </div>
    <br/>

    <div>
    <input type="text"
    name="doctor_id"
    placeholder="Doctor-ID"
    autoComplete="off"
    onChange={(event)=>
        {
            setdoctor_id(event.target.value);  
        }}
    />
    </div>
    <br/>

    <div>
    <input type="text"
    name="dept_id"
    placeholder="Dept-ID"
    autoComplete="off"
    onChange={(event)=>
        {
            setdept_id(event.target.value);  
        }}
    />
   </div>
   <br/>
  

   
      <button type="submit">Register</button>
      </form>    
     

     

    </div>
  );
}

export default Bedsavailbility;
