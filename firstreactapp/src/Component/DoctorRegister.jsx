import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Blogo from "./NavBar";
import '../Component/css/docreg.css';



let DoctorRegister = () => {
  const navigate = useNavigate();
  const [user_email, setuser_email] = useState("");
  const [doctor_name, setdoctor_name] = useState("");
  const [doctor_contact, setdoctor_contact] = useState("");
  const [qualifications, setqualifications] = useState("");
  const [password, setpassword] = useState("");
  const [dept_id, setdept_id] = useState();
  const [dept, setdept] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:8080/alldept")
      .then((resp) => resp.json())
      .then((data) => {
        setdept(data)});
  }, []);
  const validateAddFolowUp = () => { var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(doctor_contact.match(phoneno)) {
    return true;
  }
  else {
    alert("please Enter Phone number");
    return false;
  }}
  async function handleSubmit(event) {
    event.preventDefault();
    if (validateAddFolowUp() === true) {
    try {
      await axios.post("http://localhost:8080/registerd", {
        user_email: user_email,
        doctor_name: doctor_name,
        doctor_contact: doctor_contact,
        qualifications: qualifications,
        password: password,
        dept_id: dept_id,
      });

      alert("User Registation Successfully");
      setuser_email("");
      setdoctor_name("");
      setdoctor_contact("");
      setqualifications("");
      setpassword("");
      setdept_id(0);
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  }

  return (
    <div className="docreg">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
         <Blogo/>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-light me-md-2"
                  aria-current="page"
                  onClick={() => navigate("/login")}
                >
                  Logout
                </button>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
      <div className="registeresd pt-5">
        <div className="register-container">
          <div className="container card w-50 ">
            <form
              className="register-form d-flex align-items-center flex-column "
              onSubmit={handleSubmit}
            >
              <br></br>
              <h1>Registration Form</h1>
              <div className="mb-3 ">
                <label htmlFor="user_email" className="form-label">
                  Doctor Email :
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="user_email"
                  id="email"
                  onChange={(event) => {
                    setuser_email(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="doctor_name" className="form-label">
                  Doctor Name :
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="doctor_name"
                  id="doctor_name"
                  onChange={(event) => {
                    setdoctor_name(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="doctor_contact" className="form-label">
                  Doctor Contact :
                </label>
                <input
                  type="text"
                  placeholder="contact"
                  name="doctor_contact"
                  id="doctor_contact"
                  onChange={(event) => {
                    setdoctor_contact(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="qualifications" className="form-label">
                  Qualifications :
                </label>
                <input
                  type="text"
                  placeholder="MBBS/BAMS/MD"
                  name="qualifications"
                  id="qualifications"
                  onChange={(event) => {
                    setqualifications(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  onChange={(event) => {
                    setpassword(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Dept" className="form-label">
                  Department :
                </label>
                <select
                  name="deprt_id"
                  onChange={(e) => {
                    setdept_id(e.target.value);
                  }}>
                    <option value='Select'>Select...</option>
                 { dept.map(
                  (el) => {
                  return  <option value={el.dept_id}>{el.dept_name}</option>;
                  }
                  )}
                </select>
              </div>
              <button type="submit" className="btn btn-primary py-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div></div>
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
};

export default DoctorRegister;
