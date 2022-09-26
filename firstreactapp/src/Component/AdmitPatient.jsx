import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router"; 
import '../Component/css/admitpatient.css';

import Blogo from "./NavBar";
function AdmitPatient() {
  const [admited_date, setadmited_date] = useState("");
  const [patient_id, setpatient_id] = useState("");
  const [patient, setpatient] = useState([]);
  const [bed_id, setbed_id] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [doctor_id, setDoctor_id] = useState(0);
  const [dept_id, setdept_id] = useState();
  const [dept, setdept] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/alldept")
      .then((resp) => resp.json())
      .then((data) => {
        setdept(data)
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/allpatient")
      .then((resp) => resp.json())
      .then((data) => {
        setpatient(data)
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/avaliablebed")
      .then((resp) => resp.json())
      .then((data) => {
        setbed_id(data)
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/alldoctor")
      .then(r => r.json())
      .then(d => setDoctor(d))
  }, []);


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/saveadmission", {
        admited_date: admited_date,
        patient_id: patient_id,
        bed_id: bed_id,
        doctor_id: doctor_id,
        dept_id: dept_id,
      });

      alert("Registation Beds Successfully");
      setadmited_date("");
      setpatient_id("");
      setbed_id("");
      setDoctor_id(0);
      setdept_id("");
    } catch (err) {
      alert("Registation Beds Failed");
    }
  }

  return (
    <div className="admitpatient">
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
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-light me-md-2"
                  aria-current="page"
                  onClick={() => navigate("/Admin")}
                >
                  Go Back
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div >
      <h1> Patient Admission </h1>
      <div className="container card w-25">
        <form className="register-form" onSubmit={handleSubmit}>
          <br></br>
          


          <div><label><b>Admited date:</b></label>
            <input
              type="Date"
              name="admited_date"
              autoComplete="off"
              onChange={(event) => {
                setadmited_date(event.target.value);
              }}
            />
          </div>
          <br />

          <div className="mb-3">
            <label htmlFor="Dept" className="form-label">
              <b> Patient Id :</b>
            </label>
            <select
              name="bed_id"
              onChange={(e) => {
                setpatient_id(e.target.value);
              }}>
              <option value='Select'>Select......</option>
              {patient.map(
                (el) => {
                  return <option value={el.patient_id}>{el.patient_name},{el.patient_bdate},{el.patient_bloodgroup}</option>;
                }
              )}
            </select>
          </div>
          <br />

          <div className="mb-3">
            <label htmlFor="Dept" className="form-label">
              <b> Bed Id :</b>
            </label>
            <select
              name="bed_id"
              onChange={(e) => {
                setdept_id(e.target.value);
              }}>
              <option value='Select'>Select...</option>
              {bed_id.map(
                (el) => {
                  return <option value={el.bed_id}>{el.bed_id},{el.category},{el.charges}</option>;
                }
              )}
            </select>
          </div>
          <br />

          <div>
            <label htmlFor="Dept" className="form-label"><b>
              Doctor Name :</b>
            </label>
            <select
              name="doctor_id"
              onChange={(e) => {
                setDoctor_id(e.target.value);
              }}>
              <option value='Select'>Select...</option>
              {doctor.map(
                (el) => {
                  return <option value={el.doctor_id}>{el.doctor_name}</option>;
                }
              )}
            </select>
          </div>
          <br />


          <div className="mb-3">
            <label htmlFor="Dept" className="form-label">
              <b> Department :</b>
            </label>
            <select
              name="deprt_id"
              onChange={(e) => {
                setdept_id(e.target.value);
              }}>
              <option value='Select'>Select...</option>
              {dept.map(
                (el) => {
                  return <option value={el.dept_id}>{el.dept_name}</option>;
                }
              )}
            </select>
          </div>
          <br />

          <button type="submit" className="btn btn-primary py-1">
                                    Submit
                                </button>
        </form>
        </div></div>
        <footer className="py-6 " style={{ position: "absolute", bottom: "0", width: "100%" }}>
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

export default AdmitPatient;
