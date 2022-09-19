import React from "react";
import { Route, Routes  } from "react-router";
import {  Link } from "react-router-dom";
import DoctorRegister from "./DoctorRegister";
import Login from "./Loginform1";

import Register from './Registerition';
import StaffRegister from "./StaffRegister";
import PatientHome from "../HomePage/PatientHome";


function MainMenu(){
    return(
     
       
        <div>
            <nav>
             <Link to="/login">Login</Link>
             <span style={{margin:'10px'}}></span>
             <Link to="/patientregister">Patient Registation</Link><br/>
             <Link to="/Doctorregister">Doctor Register</Link><br/>
             <Link to="/StaffRegister">Staff Register</Link>
             
            </nav>
          <div>
            <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/patientregister" element={<Register/>}/>
          <Route path="/Doctorregister" element={<DoctorRegister/>}/>
          <Route path="/StaffRegister" element={<StaffRegister/>}></Route>
          <Route path="/patienthome" element={<PatientHome/>}></Route>
          </Routes>
          </div>
          </div>
 

    );
}
export default MainMenu;