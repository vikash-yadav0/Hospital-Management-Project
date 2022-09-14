import axios from "axios";
import { useState } from "react";


function Register()
{
   const [patient_id, setpatient_id] = useState("");
   const [patient_name, setpatient_name] = useState("");
   const [patient_email, setpatient_email] = useState("");
   const [patient_contact1, setpatient_contact1] = useState("");
   const [patient_contact2, setpatient_contact2] = useState("");
  
   const[patient_password, setpatient_password]=useState("");
   const [patient_bloodgroup, setpatient_bloodgroup] = useState("");
   const [patient_history, setpatient_history] = useState("");
   const [patient_height, setpatient_height] = useState("");
   const [patient_weight, setpatient_weight] = useState("");
   const [patient_gender, setpatient_gender] = useState("");
   const [form_fill,setform_fill] = useState("");
   const [login,setlogin] = useState("");
 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("/savepatient",
        {
            patient_id: patient_id,
            patient_name: patient_name,
            patient_email : patient_email,
            patient_contact1 : patient_contact1,
            patient_contact2 : patient_contact2,
            patient_password: patient_password,
            patient_bloodgroup :patient_bloodgroup,
            patient_history: patient_history,
            patient_height: patient_height,
            patient_weight: patient_weight,
            patient_gender: patient_gender,
            form_fill: form_fill,
            login: login
        });

          alert("User Registation Successfully");
          setpatient_id("");
          setpatient_name("");
          setpatient_email("");
          setpatient_contact1("");
          setpatient_contact2("");
        
          setpatient_bloodgroup("");
          setpatient_history("");
          setpatient_height("");
          setpatient_weight("");
          setpatient_gender("");
          setform_fill("");
          setlogin("");
        
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
            <h1>Patient registration form</h1>
            <p>Fill in the Information Below</p>
 
            <input type="number"
             name="patient_id"
             placeholder="id"
                    
             onChange={(event) =>
              {
                setpatient_id(event.target.value);      
              }}
            />

 
            <input type="text"
            name="patient_name"
            placeholder="Name"
            onChange={(event) =>
                {
                    setpatient_name(event.target.value);      
                }}
            />
 
            <input type="text"
            name="patient_email"
            placeholder="Email"
            onChange={(event) =>
                {
                    setpatient_email(event.target.value);      
                }}          
            />
 
            
            <input type="text"
            name="patient_contact1"
            placeholder="Contact"
            onChange={(event) =>
                {
                    setpatient_contact1(event.target.value);      
                }}          
            />
            <input type="text"
            name="patient_contact2"
            placeholder="contact"
            onChange={(event)=>
                {

                }}
            />
          
            <input type="password"
            name="patient_password"
            placeholder="Password"
            onChange={(event) =>
                {
                    setpatient_password(event.target.value);      
                }}          
            />
         <input type="text"
            name="patient_bloodgroup"
            placeholder="BloodGroup"
            onChange={(event) =>
                {
                    setpatient_bloodgroup(event.target.value);      
                }}          
            />
            
          <input type="text"
            name="patient_history"
            placeholder="History"
            onChange={(event) =>
                {
                    setpatient_history(event.target.value);      
                }}          
            />
             <input type="text"
            name="patient_height"
            placeholder="Height"
            onChange={(event) =>
                {
                    setpatient_height(event.target.value);      
                }}          
            />
             <input type="text"
            name="patient_weight"
            placeholder="Weight"
            onChange={(event) =>
                {
                    setpatient_weight(event.target.value);      
                }}          
            />
             <input type="text"
              name="patient_gender"
              placeholder="M/F"
            onChange={(event) =>
                {
                    setpatient_gender(event.target.value);      
                }}          
            />
             <input type="text"
            name="form_fill"
            placeholder="fill"
            onChange={(event) =>
                {
                    setform_fill(event.target.value);      
                }}          
            />
              <input type="text"
            name="login"
            placeholder="login"
            onChange={(event) =>
                {
                    setlogin(event.target.value);      
                }}          
            />
              <button type="submit">Register</button>
              </form>    
                {patient_password}
    
        </div>
    )
}
 
export default Register;