
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Blogo from "../Component/NavBar";
import '../Component/css/staffhome.css';
function StaffHome() {

  const [staff, setStaff] = useState({});
  const navigate = useNavigate();
  let nm = JSON.parse(localStorage.getItem("loggedinuser"));
 
  
let logout=()=>{
  localStorage.removeItem("loggedinuser");
}

  useEffect(() => {
    fetch("http://localhost:8080/getStaffbylogin?login_id="+nm.login_id)
      .then((resp) => resp.json())
      .then((data) => {{
        setStaff(data);localStorage.setItem("loggedindoctor", JSON.stringify(data))}
      });}, []);

  return (
    <div className="staffreg">
      <div className="containers">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Blogo />

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-light me-md-2"
                    aria-current="page"
                    onClick={() => {logout();navigate("/login")}}
                  >
                    Logout
                  </button>
                </li>

                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Staff
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          {staff.staff_name}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          security
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Schedule
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="fluids" style={{ marginBottom: "50px" }}>
          <div className="row my-3"></div>
          <div className="row my-2 pb-2 mx-4 ">
            <div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-dark">Register Patient</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/patientregister")}
                    className="btn btn-primary"
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-dark">Avaliable Beds</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/viewbeds")}
                    className="btn btn-warning"
                  >
                    AVALIABLE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-dark">Booked Bed</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/BedBooked")}
                    className="btn btn-info"
                  >
                    BOOKED
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          <div className="row my-2 pb-2 mx-4">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Admit Patients</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/bedsavailbility")}
                    className="btn btn-primary"
                  >
                    ADMIT
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Patient Information</h5>
                  <p className="card-text"></p>
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate("/ViewPatient")}
                  >
                    INFORMATION 
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-dark">Search Doctor</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/SearchDoctor")}
                    className="btn btn-info"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
            <div className="row my-2 pb-2">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Admitted Patients</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/ViewAdmission")}
                    className="btn btn-primary"
                  >
                    ADMITTED
                  </button>
                </div>
              </div>
            </div>
          </div>                         
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
</div>
  );
}
export default StaffHome;