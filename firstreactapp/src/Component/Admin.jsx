import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Component/css/style5.css";
import { useNavigate } from "react-router-dom";
import Blogo from "./NavBar";


//import { NavLink } from "react-router-dom";

let Admin = () => {
 
  const navigate = useNavigate();
  let logout=()=>{
    localStorage.removeItem("loggedinuser");
  }
  
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
                      Admin
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Schedule
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Security
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
                  <h5 className="card-title text-dark">Register Doctor</h5>
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
                  <h5 className="card-title text-dark">Register Staff</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/StaffRegister")}
                    className="btn btn-warning "
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-dark">Doctor Information</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/viewdoctor")}
                    className="btn btn-info "
                  >
                    ALL DOCTOR
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"> Staff Information</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/viewstaff")}
                    className="btn btn-success"
                  >
                    ALL STAFF 
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-2 pb-2 mx-4">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Search Doctor</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/SearchDoctor")}
                    className="btn btn-primary"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"> Search Staff</h5>
                  <p className="card-text"></p>
                  <button
                    className="btn btn-warning "
                    onClick={() => navigate("/SearchStaff")}
                  >
                    SEARCH 
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-dark">Search Patient</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/SearchPatient")}
                    className="btn btn-info"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </div><div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-dark">Avaliable Beds</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/viewBeds")}
                    className="btn btn-success"
                  >
                    AVALIABLE
                  </button>
                </div>
              </div>
            </div>
          </div>
          

          <div className="row my-2 pb-2 mx-4">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Booked Beds</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/BedBooked")}
                    className="btn btn-primary"
                  >
                    BOOKED
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Admit Patient</h5>
                  <p className="card-text"></p>
                  <button
                    className="btn btn-warning "
                    onClick={() => navigate("/SearchDoctor")}
                  >
                    ADMIT 
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-dark">Update Doctor</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/UpdateDoctor")}
                    className="btn btn-info"
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            </div><div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-dark">Update Staff</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/updatestaff")}
                    className="btn btn-success"
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
          </div>
                         
          </div>
        </div>
    
      <footer className="py-6" style={{position:"absolute",bottom:"0",width:"100%"}}>
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

export default Admin;
