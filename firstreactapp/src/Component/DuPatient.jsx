import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import Blogo from "./NavBar";
import '../Component/css/docreg.css';
const DuPatient = () => {

    
    const [patient_history, setpatient_history] = useState();
        
   
    const [patient, setpatient] = useState([]);
    const [patientid, setpatientid] = useState([]);
    const [patient_id, setpatient_id] = useState(0);
    const navigate = useNavigate();
    
    async function handleSubmit() {
        try {
          
            await axios.post(("http://localhost:8080/updatepatientbyDoctor?Patient_id=" + patientid.patient_id), {
                
                patient_history:patient_history
            });

            alert("History updated Successfully");            
            
            
        } catch (err) {
            alert("History updation Failed");
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
        <div className="docreg">
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
                                    <span
                                        type="text"
                                        placeholder="name"
                                        name="patient_name"
                                        id="patient_name"
                                        
                                       
                                    >{patientid.patient_name}</span>
                                </div>
                               
                                <div className="mb-3">
                                    <label htmlFor="Patient_history" className="form-label">
                                        History:
                                    </label>
                                    <input
                                        type="text"
                                        name="patient_history"
                                        defaultValue={patientid.patient_history}
                                        id="patient_history"
                                        onChange={(e) => {
                                            setpatient_history(e.target.value);
                                        }}
                                    />
                                </div>


                                <span  className="btn btn-primary py-1" onClick={() => handleSubmit()}>
                                    Submit
                                </span>
                            </form>
                        </div>
                    </div>
                </div></div>
            <footer className="py-6 " style={{ position: "absolute", bottom: "0", width: "100%" }} >
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
export default DuPatient;