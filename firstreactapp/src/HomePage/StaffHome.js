import axios from "axios";
import React, { useState , useEffect} from "react";
import {  useNavigate } from "react-router-dom";
import Blogo from "../Component/NavBar";

function StaffHome(){
         
  const[staff, setStaff] = useState({});
  const navigate = useNavigate();

   useEffect(() => {
       axios.post("/getStaff", localStorage.getItem("loggedinuser") )
       .then(resp => {setStaff(resp.data); localStorage.setItem("loggedinStaff",JSON.stringify(staff))});
    },[]  );
     
    return(
        <div>
         <div className="containers">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Blogo/>

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
                    onClick={() => navigate("/login")}
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
      </div>
       
      
            <div className="fluids" style={{ marginBottom: "50px" }}>
          <div className="row my-3"></div>
          <div className="row my-2 pb-2 mx-4 ">
            <div className="col-sm-3">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-primary">Register Patient</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/patientregister")}
                    className="btn btn-primary"
                  >
                    Click
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Avaliable beds</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/bedsavailbility")}
                    className="btn btn-warning"
                  >
                    Click
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-2 pb-2 mx-4">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add Staff</h5>
                  <p className="card-text"></p>
                  <button
                    onClick={() => navigate("/StaffRegister")}
                    className="btn btn-info"
                  >
                    Click
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-3 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">View Staff</h5>
                  <p className="card-text"></p>
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/viewstaff")}
                  >
                   Click
                  </button>
                </div>
              </div>
            </div>
          </div>
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
export default StaffHome;