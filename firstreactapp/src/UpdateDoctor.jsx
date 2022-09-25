import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import Blogo from "./Component/NavBar";
const UpdateDoctor = () => {
    const navigate = useNavigate();
    const [doctor_name, setdoctor_name] = useState("");
    const [doctor_contact, setdoctor_contact] = useState("");
    const [qualifications, setqualifications] = useState("");
    const [dept_id, setdept_id] = useState();
    const [dept, setdept] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [doctorid, setDoctorid] = useState([]);
    const [Doctor_id, setDoctor_id] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/alldept")
            .then((resp) => resp.json())
            .then((data) => {
                setdept(data)
            });
    }, []);
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await axios.post(("http://localhost:8080/updatedoctor?doctor_id=" + Doctor_id), {

                doctor_name: doctor_name,
                doctor_contact: doctor_contact,
                qualifications: qualifications,
                dept_id: dept_id,
            });

            alert("User Registation Successfully");

            setdoctor_name("");
            setdoctor_contact("");
            setqualifications("");
            setdept_id(0);
        } catch (err) {
            alert("User Registation Failed");
        }
    }
    useEffect(() => {
        fetch("http://localhost:8080/alldoctor")
            .then(r => r.json())
            .then(d => setDoctor(d))
    }, []);

    const FetchDoctor = (e) => {

        setDoctor_id(e.target.value);
        fetch("http://localhost:8080/getdoctorbyid?doctor_id=" + Doctor_id)
            .then(r => r.json())
            .then(d => { setDoctorid(d) });
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Blogo />

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
            <div className="pt-3"></div>
            <div className="container card w-25 ">
                <label htmlFor="Dept" className="form-label"><b>
                    Doctor :</b>
                </label>
                <select
                    name="doctor_id"
                    onChange={(e) => {
                        setDoctor_id(e.target.value);
                    }}
                >
                    <option value='Select'>Select...</option>
                    {doctor.map(
                        (el) => {
                            return <option value={el.doctor_id}>{el.doctor_name},{el.qualifications}</option>;
                        }
                    )}

                </select>
                <button className='btn btn-primary mx-5' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={FetchDoctor}>Search</button>

            </div>
            <div className="container">
                <div className="registeresd pt-3">
                    <div className="register-container">
                        <div className="container card w-50 ">
                            <form
                                className="register-form d-flex align-items-center flex-column "
                                onSubmit={handleSubmit}
                            >
                                <br></br>
                                <h1>Update Form</h1>

                                <div className="mb-3">
                                    <label htmlFor="doctor_name" className="form-label">
                                        Doctor Name :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="doctor_name"
                                        id="doctor_name"
                                        defaultValue={doctorid.doctor_name}
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
                                        defaultValue={doctorid.doctor_contact}
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

                                        name="qualifications"
                                        defaultValue={doctorid.qualifications}
                                        id="qualifications"
                                        onChange={(event) => {
                                            setqualifications(event.target.value);
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
                                        {dept.map(
                                            (el) => {
                                                return <option value={el.dept_id}>{el.dept_name}</option>;
                                            }
                                        )}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary py-1">
                                    Submit
                                </button>
                            </form>
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
        </>
    )
}
export default UpdateDoctor;