import React from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import DoctorRegister from "./DoctorRegister";
import Login from "./Loginform1";

import Register from "./Registerition";
import StaffRegister from "./StaffRegister";
import PatientHome from "../HomePage/PatientHome";
import DoctorHome from "../HomePage/DoctorHome";
import StaffHome from "../HomePage/StaffHome";
import Admin from "./Admin";
import ViewDoctor from "./ViewDoctor";
import ViewStaff from "./ViewStaff";
import ViewPatient from "./ViewPatient";
import { Container, Row, Col } from "react-bootstrap";
import "./custom.css";

function MainMenu() {
  return (
    <div className="container-fluid">
      {/* <nav>
            <Row>
            <Col> <Link to="/Login"><b><h4>Login</h4></b></Link>
             <span style={{margin:'10px'}}></span></Col>
             <Col/>
             <Col><Link to="/patientregister"><b><h4>Patient Registation</h4></b></Link></Col>
            {/* <Link to="/Doctorregister">Doctor Register</Link><br/>
             <Link to="/StaffRegister">Staff Register</Link>*
             <Col/>
             <Col><Link to="/admin"><b><h4>Admin</h4></b></Link></Col>
             </Row>
            </nav>*/}
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/patientregister" element={<Register />} />
          <Route path="/Doctorregister" element={<DoctorRegister />} />
          <Route path="/StaffRegister" element={<StaffRegister />}></Route>
          <Route path="/patienthome" element={<PatientHome />}></Route>
          <Route path="/doctorhome" element={<DoctorHome />}></Route>
          <Route path="/staffhome" element={<StaffHome />}></Route>
          <Route path="/viewdoctor" element={<ViewDoctor />}></Route>
          <Route path="/viewstaff" element={<ViewStaff />}></Route>
          <Route path="/viewpatient" element={<ViewPatient />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default MainMenu;
