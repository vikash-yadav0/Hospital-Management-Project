
import React from "react";
import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import doc from'./doc.jpg';
import './styles.css';
import './custom.css';

function Login()
{
   
  const [user_id, setuser_id] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

 
   async function handleSubmit(event)
    {
        event.preventDefault();
        axios.post("/CheckLogin",{        
            user_id : user_id,
             password: password
          })
        .then(resp => {if(resp.data.role === "doctor")
                         {
                            localStorage.setItem("loggedinuser",JSON.stringify(resp.data));
                            navigate("/doctorhome");
                         }  
                         else if(resp.data.role === "patient")
                         {
                            localStorage.setItem("loggedinuser",JSON.stringify(resp.data));
                            navigate("/patienthome");
                         }
                         else if(resp.data.role === "staff")
                         {
                            localStorage.setItem("loggedinuser",JSON.stringify(resp.data));
                            navigate("/staffhome");
                         }
                         else{
                            alert("Invalid usename or password");
                         }


         });

        /*try
        {
         await axios.post("/CheckLogin",
        {
          
          user_id : user_id,
           password: password
        });

         alert("User Login Successfully");
            
         navigate("/patienthome")
       
        }
    catch(err)
        {
          alert("Login  Failed");
        } */
   }
    return (
        
        <div className="register-Container-fluid">
            <div className="imag">
            <div className="app">
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Login Page</h1>
            <br/>
           <div className="mb-3"> 
           <label ><b>User_id -  </b></label>
           <input type="text"
            name="user_id"
            placeholder="user_id"
            autoComplete="off"
            onChange={(event) =>
                {
                    setuser_id(event.target.value);      
                }}          
            />
            </div>
            <br/>
 
       
            <div className="mb-3">
            <label><b>Password  -  </b></label>
            <input type="password"
            name=" password"
            placeholder="Password"
            onChange={(event) =>
                {
                    setpassword(event.target.value);      
                }}          
            />
            </div>
            <br/>
        
              <div>
              <button className="btn btn-primary" type="submit" onClick={(e)=>{handleSubmit(e)}} >Login</button>
              </div>
              </form>    
              <p>  </p>
              </div>
              </div>
        </div>
    )
}
 
export default Login;