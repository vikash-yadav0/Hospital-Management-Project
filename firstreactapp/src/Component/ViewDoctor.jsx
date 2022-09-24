import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./css/style11.css";

function ViewDoctor() {
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/alldoctor")
      .then((res) => setMyData(res.data));
  }, []);
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigate("/Landing")}>
            <img src="./images/logo.png" className="img-thumbnail" />
            Meditrina Hospital
          </a>

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
        <button type="button" class=" btn btn-success btn-lg">
          Doctor List
        </button>
        <table className="table">
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
                  <th>{doctor_name}</th>
                  <th>{qualifications}</th>
                  <th>{doctor_contact}</th>
                  <th>{user_email}</th>
                  <button
                    type="button"
                    className="btn btn-success "
                    onClick={() => navigate("/Update")}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mx-2"
                    onClick={() => navigate("")}
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <footer className="py-6 ">
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
