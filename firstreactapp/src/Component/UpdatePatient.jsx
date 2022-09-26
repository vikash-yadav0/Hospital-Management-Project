import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import Blogo from "./NavBar";
import '../Component/css/viewdoct.css';
const UpdatePatient = () => {
    const [patient_name, setpatient_name] = useState("");
    const [patient_contact1, setpatient_contact1] = useState("");
    const [patient_contact2, setpatient_contact2] = useState("");
    const [patient_bloodgroup, setpatient_bloodgroup] = useState("");
    const [patient_history, setpatient_history] = useState("");
    const [patient_gender, setpatient_gender] = useState("");
    const [patient_bdate, setpatient_bdate] = useState("");
    const [patient_height, setpatient_height] = useState("");
    const [patient_weight, setpatient_weight] = useState("");
    
    const [dept_id, setdept_id] = useState("");
    const [dept, setdept] = useState([]);
    const [patient, setpatient] = useState([]);
    const [patientid, setpatientid] = useState([]);
    const [patient_id, setpatient_id] = useState(0);
    const navigate = useNavigate();
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
            await axios.post(("http://localhost:8080/updatepatient?Patient_id=" + patient_id), {

                patient_name: patient_name,
                patient_contact1: patient_contact1,
                patient_contact2: patient_contact2,
                patient_gender: patient_gender,
                patient_bdate: patient_bdate,
                patient_bloodgroup: patient_bloodgroup,
                patient_history: patient_history,
                patient_height: patient_height,
                patient_weight: patient_weight,
                dept_id: dept_id,
            });

            alert("User Registation Successfully");

            setpatient_name("");
            setpatient_contact1("");
            setpatient_contact2("");
            setpatient_gender("");
            setpatient_bdate("");
            setpatient_bloodgroup("");
            setpatient_history("");
            setpatient_height("");
            setpatient_weight("");
            setdept_id(0);
        } catch (err) {
            alert("User Registation Failed");
        }
    }
    useEffect(() => {
        fetch("http://localhost:8080/allpatient")
            .then(r => r.json())
            .then(d => setpatient(d))
    }, []);

    const FetchPatient = (e) => {

        setpatient_id(e.target.value);
        fetch("http://localhost:8080/getpatient?patient_id=" + patient_id)
            .then(r => r.json())
            .then(d => { setpatientid(d) });
    }

    return (
        <div className="viewdoc">
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
                    Patient :</b>
                </label>
                <select
                    name="patient_id"
                    onChange={(e) => {
                        setpatient_id(e.target.value);
                    }}
                >
                    <option value='Select'>Select...</option>
                    {patient.map(
                        (el) => {
                            return <option value={el.patient_id}>{el.patient_name}</option>;
                        }
                    )}

                </select>
                <button className='btn btn-primary mx-5' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={FetchPatient}>Search</button>

            </div>
            <div className="container">
                <div className="registeresd pt-2">
                    <div className="register-container">
                        <div className="container card w-50 my-3">
                            <form
                                className="register-form d-flex align-items-center flex-column "
                                onSubmit={handleSubmit}
                            >

                                <h3>Update Form</h3>

                                <div className="mb-3 pt-2">
                                    <label htmlFor="staff_name" className="form-label">
                                        Patient Name :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="patient_name"
                                        id="patient_name"
                                        defaultValue={patientid.patient_name}
                                        onChange={(event) => {
                                            setpatient_name(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="staff_contact" className="form-label">
                                        patient Contact1 :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="contact1"
                                        name="patient_contact1"
                                        defaultValue={patientid.patient_contact1}
                                        id="patient_contact1"
                                        onChange={(event) => {
                                            setpatient_contact1(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="staff_contact2" className="form-label">
                                        patient Contact2 :
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="contact2"
                                        name="patient_contact2"
                                        defaultValue={patientid.patient_contact2}
                                        id="patient_contact2"
                                        onChange={(event) => {
                                            setpatient_contact1(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="patient_gender" className="form-label">
                                        Gender:
                                    </label>
                                    <input
                                        type="radio" value="male" name="patient_gender" id="patient_gender" onChange={(event) => {
                                            setpatient_gender(event.target.value);
                                        }} />
                                    Male
                                    <input
                                        type="radio" value="female" name="patient_gender" id="patient_gender" onChange={(event) => {
                                            setpatient_gender(event.target.value);
                                        }} />
                                    Female
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="patient_bdate" className="form-label">
                                        Birth Date:
                                    </label>
                                    <input
                                        type="date"

                                        name="birthdate"
                                        defaultValue={patientid.patient_bdate}
                                        id="patient_bdate"
                                        onChange={(event) => {
                                            setpatient_bdate(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Patient_bloodgroup" className="form-label">
                                        Blood Group:
                                    </label>
                                    <input
                                        type="text"

                                        name="patient_bloodgroup"
                                        defaultValue={patientid.patient_bloodgroup}
                                        id="patient_bloodgroup"
                                        onChange={(event) => {
                                            setpatient_bloodgroup(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Patient_height" className="form-label">
                                        Height:
                                    </label>
                                    <input
                                        type="text"

                                        name="patient_height"
                                        defaultValue={patientid.patient_height}
                                        id="Patient_height"
                                        onChange={(event) => {
                                            setpatient_height(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Patient_weight" className="form-label">
                                        Weight:
                                    </label>
                                    <input
                                        type="text"

                                        name="patient_weight"
                                        defaultValue={patientid.patient_weight}
                                        id="patient_weight"
                                        onChange={(event) => {
                                            setpatient_weight(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Patient_history" className="form-label">
                                        History:
                                    </label>
                                    <input
                                        type="textbox"

                                        name="patient_history"
                                        defaultValue={patientid.patient_history}
                                        id="patient_history"
                                        onChange={(event) => {
                                            setpatient_history(event.target.value);
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
            <footer className="py-6 " >
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
    )
}
export default UpdatePatient;