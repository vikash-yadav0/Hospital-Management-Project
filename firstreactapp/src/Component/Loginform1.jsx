import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import doc from'./doc.jpg';
import Landing from "./Landing";
import "./css/styles.css";
import "./css/custom.css";
import "./css/style7.css";

function Login() {
  const [user_id, setuser_id] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/CheckLogin", {
        user_id: user_id,
        password: password,
      })
      .then((resp) => {
        if (resp.data.role === "doctor") {
          localStorage.setItem("loggedinuser", JSON.stringify(resp.data));
          navigate("/doctorhome");
        } else if (resp.data.role === "patient") {
          localStorage.setItem("loggedinuser", JSON.stringify(resp.data));
          navigate("/patienthome");
        } else if (resp.data.role === "staff") {
          localStorage.setItem("loggedinuser", JSON.stringify(resp.data));
          navigate("/staffhome");
        } else if (resp.data.role === "admin") {
          localStorage.setItem("loggedinuser", JSON.stringify(resp.data));
          navigate("/Admin");
        } else {
          alert("Invalid usename or password");
        }
      });
  }
  return (
    <div>
      <div className="container-fluids">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => navigate("/Landing")}>
              Meditrina Hospital
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <button
                    type="button"
                    className="btn btn-light "
                    aria-current="page"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button
                    type="button"
                    className="btn btn-light"
                    aria-current="page"
                    onClick={() => navigate("/patientregister")}
                  >
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <form className="login">
            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-4 col-form-label ">
                User id :
              </label>
              <div className="col-sm-3">
                <input
                  type="email"
                  placeholder="user_id"
                  className="form-control"
                  id="inputEmail3"
                  onChange={(event) => {
                    setuser_id(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputPassword3" className="col-sm-4 col-form-label">
                Password :
              </label>
              <div className="col-sm-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="inputPassword3"
                  onChange={(event) => {
                    setpassword(event.target.value);
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success me-md-4"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="Container my-4">
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
    </div>
  );
}

export default Login;
{
  /*<div className="col-md-4">
    <label for="inputState" className="form-label">Role</label>
    <select id="inputState" className="form-select">
      <option selected>Admin</option>
      <option>Doctor</option>
      <option>Patient</option>
      <option>Staff</option>
    </select>
                                        </div>*/
}
