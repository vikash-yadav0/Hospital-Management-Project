import React from "react";
import axios from "axios";
import { useState } from "react";
import './style10.css';


function StaffRegister()
{
   
   const [staff_name, setstaff_name] = useState("");
   const [user_email, setuser_email] = useState("");
   const [staff_contact, setstaff_contact] = useState("");
   const [staff_gender, setstaff_gender] = useState("");
   const[password,setpassword] =useState("");
   const[staff_bdate,setstaff_bdate] =useState("");
   const[staff_jdate,setstaff_jdate] =useState("");

 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/registers",
        {
            staff_name:staff_name,
            user_email : user_email,
            staff_contact:staff_contact,
            staff_gender:staff_gender,
            password: password,
            staff_bdate:staff_bdate,
            staff_jdate:staff_jdate

        });

         alert("User Registation Successfully");
    
          setstaff_name("");
          setuser_email("");
          setstaff_contact("");
          setstaff_gender("");
        //  setqualifications("");
           setpassword("");
           setstaff_bdate("");
           setstaff_jdate("");

        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <div class="registeresdstaff">
        <div className="register-container">
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1><b>Staff Registration form</b></h1>
            <p>Fill in the Information Below</p>
             
             <div>
            <input type="text"
            name="staff_name"
            placeholder="Name"
            autoComplete="off"
            onChange={(event) =>
                {
                    setstaff_name(event.target.value);      
                }}          
            />
            </div>
            <br/>
             

            <div>
           <input type="text"
            name="user_email"
            placeholder="Email"
            autoComplete="off"
            onChange={(event) =>
                {
                    setuser_email(event.target.value);      
                }}          
            />
            </div> 
            <br/>
 
             <div>
            <input type="number"
            name="staff_contact"
            placeholder="Phone Number"
            autoComplete="off"
            onChange={(event) =>
                {
                    setstaff_contact(event.target.value);      
                }}          
            />
            </div>
            <br/>

            <div>
            <input type="text"
            name="staff_gender"
            placeholder="M/F"
            autoComplete="off"
            onChange={(event)=>
                {
                    setstaff_gender(event.target.value);  
                }}
            />
            </div>
            <br/>
        
             <div>
            <input type="password"
            name="password"
            placeholder="Password"
            onChange={(event) =>
                {
                    setpassword(event.target.value);      
                }}          
            />
            </div>
            <br/>


            <div>
            <input type="Date"
            name="staff_bdate"
            onChange={(event)=>
                {
                    setstaff_bdate(event.target.value);  
                }}
            />
            </div>
            <br/>

            <div>
             <input type="Date"
            name="staff_jdate"
            onChange={(event)=>
                {
                    setstaff_jdate(event.target.value);  
                }}
            />
             </div>
             <br/>
              <button type="submit">Register</button>
              </form>    
              <p>  </p>
              </div>
        </div>
    )
}
 
export default StaffRegister;