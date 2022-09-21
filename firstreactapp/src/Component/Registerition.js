import React from "react";
import axios from "axios";
import { useState } from "react";
import {Row,Col} from "react-bootstrap";


function Register()
{
   
   const [patient_name, setpatient_name] = useState("");
   const [user_email, setuser_email] = useState("");
   const [patient_contact1, setpatient_contact1] = useState("");
   const [patient_contact2, setpatient_contact2] = useState("");
   // const[role,setrole]                          =useState("");
   const[patient_bdate,setpatient_bdate] =useState("");
   const[password, setpassword]=useState("");
   const [patient_bloodgroup, setpatient_bloodgroup] = useState("");
   const [patient_history, setpatient_history] = useState("");
   const [patient_height, setpatient_height] = useState("");
   const [patient_weight, setpatient_weight] = useState("");
   const [patient_gender, setpatient_gender] = useState("");
   const [form_fill,setform_fill] = useState("");

 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/registerp",
        {
          
            patient_name: patient_name,
            user_email : user_email,
            patient_contact1 : patient_contact1,
            patient_contact2 : patient_contact2,
          
            patient_bdate:patient_bdate,
            password: password,
            patient_bloodgroup :patient_bloodgroup,
            patient_history: patient_history,
            patient_height: patient_height,
            patient_weight: patient_weight,
            patient_gender: patient_gender,
            form_fill: form_fill,
           
        })/*.then(res=>console.log('Data',res))*/;

         alert("User Registation Successfully");
    
          setpatient_name("");
          setuser_email("");
          setpatient_contact1("");
          setpatient_contact2("");
         
          setpatient_bdate("");
           setpassword("");
          setpatient_bloodgroup("");
          setpatient_history("");
          setpatient_height("");
          setpatient_weight("");
          setpatient_gender("");
          setform_fill("");
          
      
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <div className="register-container-fluid">
            <div className="mm">    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Patient registration form</h1>
            <br/>
            <p>Fill in the Information Below</p>
 
            
            <Row>
            <Col className="md-5">
            <label>Enter Name </label><br/>
            <input type="text"
            name="patient_name"
            placeholder="Name"
            autoComplete="off"
            onChange={(event) =>
                {
                    setpatient_name(event.target.value);      
                }}
            />
            </Col>
 
            <Col className="md-5">
            <label>Email ID -</label><br/>
            <input type="text"
            name="user_email"
            placeholder="Email"
            autoComplete="off"
            onChange={(event) =>
                {
                    setuser_email(event.target.value);      
                }}          
            />
            </Col>
            </Row>
            <br/>
 
            <Row>
            <Col className="md-5">
            <label>Contact </label><br/>
            <input type="text"
            name="patient_contact1"
            placeholder="Contact"
            autoComplete="off"
            onChange={(event) =>
                {
                    setpatient_contact1(event.target.value);      
                }}          
            />
            </Col>
            <Col className="md-5">
            <label>Contact </label><br/>
            <input type="text"
            name="patient_contact2"
            placeholder="Relatives contact"
            autoComplete="off"
            onChange={(event)=>
                {
                    setpatient_contact2(event.target.value);  
                }}
            />
            </Col></Row>
            <br/>
         
            <Row>
            <Col className="md-5">
            <label>Birth Date</label><br/>
            <input type="date"
            name="patient_bdate"
            placeholder="Birthdate"
            onChange={(event)=>
                {
                    setpatient_bdate(event.target.value);  
                }}
            />
            </Col>
            <Col className="md-5">
            <label>Password</label><br/>
            <input type="password"
            name="password"
            placeholder="Password"
            onChange={(event) =>
                {
                    setpassword(event.target.value);      
                }}          
            />
            </Col></Row>
            <br/>
            <Row>
            <Col className="md-5">
            <label>BloodGroup</label><br/>
         <input type="text"
            name="patient_bloodgroup"
            placeholder="BloodGroup"
            autoComplete="off"
            onChange={(event) =>
                {
                    setpatient_bloodgroup(event.target.value);      
                }}          
            />
            </Col>
            
            <Col className="md-5">
            <label>History</label><br/>
          <input type="text"
            name="patient_history"
            placeholder="History"
            autoComplete="off"
            onChange={(event) =>
                {
                    setpatient_history(event.target.value);      
                }}          
            />
            </Col></Row>
            <br/>
            <Row>
            <Col className="md-5">
            <label>Height</label><br/>
             <input type="text"
            name="patient_height"
            placeholder="Height"
            autoComplete="off"
            onChange={(event) =>
                {
                    setpatient_height(event.target.value);      
                }}          
            />
            </Col>
            <Col className="md-5">
            <label>Weight</label><br/>
             <input type="text"
            name="patient_weight"
            placeholder="Weight"
            autoComplete="off"
            onChange={(event) =>
                {
                    setpatient_weight(event.target.value);      
                }}          
            />
            </Col></Row>
            <br/>
            <Row>
            <Col className="md-5">
            <label>Gender</label><br/>
             <input type="text"
              name="patient_gender"
              placeholder="M/F"
              autoComplete="off"
            onChange={(event) =>
                {
                    setpatient_gender(event.target.value);      
                }}          
            /></Col>
            <Col className="md-5">
            <label>Who is filling the form</label><br/>
             <input type="text"
            name="form_fill"
            placeholder="Who fill from"
            autoComplete="off"
            onChange={(event) =>
                {
                    setform_fill(event.target.value);      
                }}          
            />
            </Col></Row>
            <br/>
           
              <button className="btn btn-primary" type="submit">Register</button>
              </form>    
              <p>  </p>
              </div>
    
        </div>
    )
}
 
export default Register;