import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../Component/css/bedbooking.css';

import Blogo from "./NavBar";

function ViewDoctor() {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/alldoctor")
      .then((res) => setMyData(res.data));
  }, []);
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
          Doctor List
        </button>
        <table className="table bg-light my-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Qualification</th>
              <th>Contact</th>
              <th>E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {myData.map((post) => {
              const {
                user_email,
                doctor_name,
                doctor_contact,
                qualifications,
              } = post;
              return (
                <tr>
                  <td>{doctor_name}</td>
                  <td>{qualifications}</td>
                  <td>{doctor_contact}</td>
                  <td>{user_email}</td>
                 
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
export default ViewDoctor;
