import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Blogo from "./NavBar";
import { useNavigate } from "react-router-dom";
//import "./css/style10.css";

function StaffRegister() {
  const navigate = useNavigate();
  const [staff_name, setstaff_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [staff_contact, setstaff_contact] = useState("");
  const [staff_gender, setstaff_gender] = useState("");
  const [password, setpassword] = useState("");
  const [staff_bdate, setstaff_bdate] = useState("");
  const [staff_jdate, setstaff_jdate] = useState("");
  const [dept_id, setdept_id] = useState();
  const [dept, setdept] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/alldept")
      .then((resp) => resp.json())
      .then((data) => {
        console.log('dept',data)
        setdept(data)});
  }, []);
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/registers", {
        staff_name: staff_name,
        user_email: user_email,
        staff_contact: staff_contact,
        staff_gender: staff_gender,
        password: password,
        staff_bdate: staff_bdate,
        staff_jdate: staff_jdate,
      });

      alert("User Registation Successfully");

      setstaff_name("");
      setuser_email("");
      setstaff_contact("");
      setstaff_gender("");
      //  setqualifications("");
      setpassword("");
      setstaff_bdate("");
      setstaff_jdate("");
    } catch (err) {
      alert("User Registation Failed");
    }
  }
  return (
    <div>
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
  <div className="container">
    <div className="registeresdstaff">
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <br></br>
          <h1>
            Staff Registration
          </h1>
         

          <div>
          <b>
             <label for="staff_name">Name : </label>
                    </b>
            <input
              type="text"
              name="staff_name"
              placeholder="Name"
              autoComplete="off"
              onChange={(event) => {
                setstaff_name(event.target.value);
              }}
            />
          </div>
          <br />

          <div>
          <b>
             <label for="user_email">Email : </label>
                    </b>
            <input
              type="text"
              name="user_email"
              placeholder="Email"
              autoComplete="off"
              onChange={(event) => {
                setuser_email(event.target.value);
              }}
            />
          </div>
          <br />

          <div>
          <b>
             <label for="staff_contact">Contact : </label>
                    </b>
            <input
              type="text"
              name="staff_contact"
              placeholder="Contact Number"
              autoComplete="off"
              onChange={(event) => {
                setstaff_contact(event.target.value);
              }}
            />
          </div>
          <br />

          <div>
          <b>
                      <label for="patient_gender">Gender : </label>
                    </b>
          <input
                      type="radio" value="male" name="staff_gender" id="staff_gender" onChange={(event) => {
                        setstaff_gender(event.target.value);
                      }} />
                    Male
                    <input
                      type="radio" value="female" name="staff_gender" id="staff_gender" onChange={(event) => {
                        setstaff_gender(event.target.value);
                      }} />
                    Female
          </div>
          <br />

          <div>
          <b>
             <label for="password">Password : </label>
                    </b>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => {
                setpassword(event.target.value);
              }}
            />
          </div>
          <br />

          <div>
          <b>
             <label for="staff_bdate">Birth Date : </label>
                    </b>
            <input
              type="Date"
              name="staff_bdate"
              onChange={(event) => {
                setstaff_bdate(event.target.value);
              }}
            />
          </div>
          <br />

          <div>
          <b>
             <label for="staff_jdate">Join Date : </label>
                    </b>
            <input
              type="Date"
              name="staff_jdate"
              onChange={(event) => {
                setstaff_jdate(event.target.value);
              }}
            />
          </div>
          <br />
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
          <button type="submit" className="btn btn-primary">
                Submit
              </button>
        </form>
        <p> </p>
      </div>
    </div></div>
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

export default StaffRegister;
