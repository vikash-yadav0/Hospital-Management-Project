import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Blogo from "../Component/NavBar";
function DoctorHome() {
   let nm = JSON.parse(localStorage.getItem("loggedindoctor"));
  const [doctor, setDoctor] = useState([]);
  const navigate = useNavigate();
let logout=()=>{
  localStorage.removeItem("loggedindoctor");
}

  useEffect(() => {
    fetch("http://localhost:8080/getDoctorbylogin?login_id="+nm.login_id)
      .then((resp) => resp.json())
      .then((data) => {setDoctor(data)
      });
   {/*} axios.post("/getDoctor", localStorage.getItem("loggedinuser"))
  .then(resp => { setDoctor(resp.data); localStorage.setItem("loggedindoctor", JSON.stringify(doctor)) });*/}
  }, []);

  return (
    <div>

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
                      Doctor
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
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
                  <h5 className="card-title text-primary">View Patient</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/viewpatient")}
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
                  <h5 className="card-title text-primary">Register Doctor</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/Doctorregister")}
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
                  <h5 className="card-title text-primary">Register Doctor</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/Doctorregister")}
                    className="btn btn-primary"
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"> Doctor Information</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/viewdoctor")}
                    className="btn btn-warning"
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-2 pb-2 mx-4">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Register Staff</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/StaffRegister")}
                    className="btn btn-info"
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Staff Information</h5>
                  <p className="card-text"></p>
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/viewstaff")}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-primary">Register Doctor</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/Doctorregister")}
                    className="btn btn-primary"
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div><div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-primary">Register Doctor</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/Doctorregister")}
                    className="btn btn-primary"
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="row my-2 pb-2 mx-4">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Patient Information</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/viewpatient")}
                    className="btn btn-success"
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Search Doctor</h5>
                  <p className="card-text"></p>
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/SearchDoctor")}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-primary">Register Doctor</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/Doctorregister")}
                    className="btn btn-primary"
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div><div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-primary">Register Doctor</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/Doctorregister")}
                    className="btn btn-primary"
                  >
                    REGISTER
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
     
    );
}
export default DoctorHome;