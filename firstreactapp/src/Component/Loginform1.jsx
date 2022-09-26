import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Component/css/login.css';
import Blogo from "./NavBar";
import Footer from "./NavBar/footer";

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
         // localStorage.setItem("loggedinuser", JSON.stringify(resp.data));
          navigate("/Admin");
        } else {
          alert("Invalid usename or password");
        }
      });
  }
  return (
    <div className="login1">
      <div className="container-fluids">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container ">
            <Blogo/>

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
        </nav><div className="pt-5"></div>
        <div className="container card w-50">
          <form className="login pt-4">
            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-4 col-form-label ">
                User id :
              </label>
              <div className="col-sm-5">
                <input
                  type="email"
                  placeholder="user_id"
                  className="form-control "
                  autoComplete="off"
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
              <div className="col-sm-5">
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
              className="btn btn-success col-sm-2"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
{
  
}
