import React from "react";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Blogo from "./NavBar";
import '../Component/css/bedbooking.css';

function ViewAdmission(){
   const [myData, setMyData] = useState([]);
   const navigate = useNavigate();
 
   useEffect(() => {
    fetch("http://localhost:8080/alladmission")
    .then(e=>e.json())
    .then(e=>{setMyData(e)})},[]);
   return (
     <div className="bedbooking">
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
                   onClick={() => navigate("#")}
                 >
                   Logout
                 </button>
               </li>
               
             </ul>
           </div>
         </div>
       </nav>
 
       <div className="pt-4">
         <button type="button" className=" btn btn-success btn-lg">
           Admission List
         </button>
         <table className="table my-4">
           <thead className="bg-dark text-light">
            
             <tr>
               <th>Admission ID</th>
               <th>Amisssion Date</th>
               <th>Patient name</th>
             
               <th>Bed id</th>
               <th>doctor name</th>
               <th>Department name</th>
             </tr>
           </thead>
           <tbody className="bg-light text-dark">
           {myData.map((post) => {
              
              return (
                 <tr>
                  <td>{post.admission_id}</td>
                 <td>{post.admited_date}</td>                    
                 <td>{post.patient.patient_name}</td>
                  <td>{post.bed.bed_id}</td>                               
                  <td>{post.doctor.doctor_name}</td>
                  <td>{post.department.dept_name}</td>
                  
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
export default ViewAdmission;