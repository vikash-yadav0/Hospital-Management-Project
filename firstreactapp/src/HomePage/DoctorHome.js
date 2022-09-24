import axios from "axios";
import React, { useState , useEffect} from "react";
import {  useNavigate } from "react-router-dom";
function DoctorHome(){
   // let nm = JSON.parse(localStorage.getItem("loggedindoctor")).doctor_name;
    const[doctor, setDoctor] = useState({});
    const navigate=useNavigate();
   

   useEffect(() => {
       axios.post("/getDoctor", localStorage.getItem("loggedinuser") )
       .then(resp => {setDoctor(resp.data); localStorage.setItem("loggedindoctor",JSON.stringify(doctor))});
    },[]  );

    return(
        
      
      <div className="row my-3">
       <div className="col-sm-6">
          <h1 className="ceneter">Welcome </h1>
           <div className="card">
               <div className="card-body">
                   <h5 className="card-title">View Patient</h5>
                   <p className="card-text">View details of all registered patients.</p>
                   <button onClick={() => navigate("/viewpatient")} className="btn btn-success">VIEW PATIENT</button>
               </div>
           </div>
           </div>
          
    </div>
     
    );
}
export default DoctorHome;