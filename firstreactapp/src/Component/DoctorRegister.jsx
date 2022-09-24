import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./css/style8.css";
import { useNavigate } from "react-router-dom";
import { ConstructionRounded } from "@mui/icons-material";
import { render } from "@testing-library/react";

{
  /*class DoctorRegist extends React.Component {
    navigate = useNavigate();
    constructor(props) {
        super(props)
        this.state = {
            dept: [],
            dept_id: 0,
            user_email: "",
            doctor_name: "",
            doctor_contact: "",
            qualifications: "",
            password: ""
        }
        this.deptid = this.deptid.bind(this);
    }
    componentDidMount = () => {
        fetch("http://localhost:8080/alldept")
            .then(resp => resp.json())
            .then(data => this.setState({ dept: data }));

    }
    deptid = (e) => {
        this.setState({ dept_id: e.target.value })
    }
    
    render() {
        return (<div>
            select Department:
            <select name="dept" onChange={(e) => { this.deptid(e) }}>
                {
                    this.state.dept.map(dept => {
                        return (<option value={dept.dept_id}>{dept.dept_name}</option>)
                    })
                }
            </select>
        </div>
        )
    }
}*/
}

let DoctorRegister = () => {
  const navigate = useNavigate();
  const [user_email, setuser_email] = useState("");
  const [doctor_name, setdoctor_name] = useState("");
  const [doctor_contact, setdoctor_contact] = useState("");
  const [qualifications, setqualifications] = useState("");
  const [password, setpassword] = useState("");
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
      await axios.post("http://localhost:8080/registerd", {
        user_email: user_email,
        doctor_name: doctor_name,
        doctor_contact: doctor_contact,
        qualifications: qualifications,
        password: password,
        dept_id: dept_id,
      });

      alert("User Registation Successfully");
      setuser_email("");
      setdoctor_name("");
      setdoctor_contact("");
      setqualifications("");
      setpassword("");
      setdept_id(0);
    } catch (err) {
      alert("User Registation Failed");
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => navigate("/Landing")}>
            Meditrina Hospital
          </a>

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
      <div className="registeresd pt-5">
        <div className="register-container">
          <div className="container card w-50 ">
            <form
              className="register-form d-flex align-items-center flex-column "
              onSubmit={handleSubmit}
            >
              <br></br>
              <h1>Registration Form</h1>
              <div className="mb-3 ">
                <label htmlFor="user_email" className="form-label">
                  Doctor Email :
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="user_email"
                  id="email"
                  onChange={(event) => {
                    setuser_email(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="doctor_name" className="form-label">
                  Doctor Name :
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="doctor_name"
                  id="doctor_name"
                  onChange={(event) => {
                    setdoctor_name(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="doctor_contact" className="form-label">
                  Doctor Contact :
                </label>
                <input
                  type="text"
                  placeholder="contact"
                  name="doctor_contact"
                  id="doctor_contact"
                  onChange={(event) => {
                    setdoctor_contact(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="qualifications" className="form-label">
                  Qualifications :
                </label>
                <input
                  type="text"
                  placeholder="MBBS/BAMS/MD"
                  name="qualifications"
                  id="qualifications"
                  onChange={(event) => {
                    setqualifications(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  onChange={(event) => {
                    setpassword(event.target.value);
                  }}
                />
              </div>
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
          </div>
        </div>
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
};

export default DoctorRegister;
