import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Blogo from "./NavBar";

function ViewPatient(){
   const [myData, setMyData] = useState([]);
   const navigate = useNavigate();
 
   useEffect(() => {
     axios
       .get("http://localhost:8080/allpatient")
       .then((res) => setMyData(res.data));
   }, []);
   return (
     <div >
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid">
         <Blogo/>
 
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               <li className="nav-item mx-2">
                 <button
                   type="button"
                   className="btn btn-light "
                   aria-current="page"
                   onClick={() => navigate("/login")}
                 >
                   Logout
                 </button>
               </li>
               <li className="nav-item mx-2">
                 <button
                   type="button"
                   className="btn btn-light "
                   aria-current="page"
                   onClick={() => navigate("/Admin")}
                 >
                   Go back
                 </button>
               </li>
             </ul>
           </div>
         </div>
       </nav>
 
       <div className="pt-4">
         <button type="button" className=" btn btn-success btn-lg">
           Patient List
         </button>
         <table className="table">
           <thead>
             <tr>
               <th>Name</th>
               <th>BirthDate</th>
               <th>Contact</th>
               <th>Contact</th>
               <th>BloodGroup</th>
               <th>History</th>
               <th>Height</th>
               <th>Weight</th>
               <th>Gender</th>
               <th>E-Mail</th>
               <th>Form Fill</th>
             </tr>
           </thead>
           <tbody>
           {myData.map((post)=>{
             const{patient_name,user_email,patient_contact1,patient_contact2,patient_bdate,patient_bloodgroup
            ,patient_history,patient_height,patient_weight,patient_gender,form_fill}=post;
               return(
                 <tr>
                    <td>{patient_name}</td>
                    <td>{patient_bdate}</td>                    
                  <td>{patient_contact1}</td>
                  <td>{patient_contact2}</td>                               
                  <td>{patient_bloodgroup}</td>
                  <td>{patient_history}</td>
                  <td>{patient_height}</td>
                  <td>{patient_weight}</td>
                  <td>{patient_gender}</td>
                  <td>{user_email}</td>
                  <td>{form_fill}</td>
                   
                 </tr>
               );
             })}
           </tbody>
         </table>
       </div>
       <footer className="py-6 "style={{position:"absolute",bottom:"0",width:"100%"}}>
         <ul className="nav justify-content-center  bg-primary ">
           <li className="nav-item">
             <a
               onClick={() => navigate("/Landing")}
               className="nav-link px-2 text-light"
             >
               Home
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link px-2 text-light">
               Features
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link px-2 text-light">
               Pricing
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link px-2 text-light">
               FAQs
             </a>
           </li>
           <li className="nav-item">
             <a href="#" className="nav-link px-2 text-light">
               About
             </a>
           </li>
         </ul>
         <p className="text-center  bg-primary text-light">
           © 2022 Company, Inc
         </p>
       </footer>
     </div>
  
    );
}
export default ViewPatient;