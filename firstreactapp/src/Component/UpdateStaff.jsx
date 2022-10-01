import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import Blogo from "./NavBar";
import '../Component/css/viewdoct.css';
const UpdateStaff = () => {
    const navigate = useNavigate();
    const [staff_name, setstaff_name] = useState();
    const [staff_contact, setstaff_contact] = useState();
    const [staff_gender, setstaff_gender] = useState();
    const [Staff_bdate, setStaff_bdate] = useState();
    const [Staff_jdate, setStaff_jdate] = useState();
    const [dept_id, setdept_id] = useState();
    const [dept, setdept] = useState([]);
    const [staff, setStaff] = useState([]);
    const [staffid, setStaffid] = useState([]);
    const [staff_id, setStaff_id] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/alldept")
            .then((resp) => resp.json())
            .then((data) => {
                setdept(data)
            });
    }, []);
    async function handleSubmit() {
        try {
            await axios.post(("http://localhost:8080/updatestaff?staff_id=" + staffid.staff_id), {
               
                staff_name: staff_name,
                staff_contact: staff_contact,
                staff_gender: staff_gender,
                staff_bdate: Staff_bdate,
                staff_jdate: Staff_jdate,
                dept_id: dept_id,
            });

           

            setstaff_name("");
            setstaff_contact("");
            setstaff_gender("");
            setStaff_bdate("");
            setStaff_jdate("");
            setdept_id(0);
            alert("User Registation Successfully");
        } catch (err) {
            alert("User Registation Failed",err);
        }
    }
    useEffect(() => {
        fetch("http://localhost:8080/allstaff")
            .then(r => r.json())
            .then(d => setStaff(d))
    }, []);

    const FetchStaff = (e) => {

        setStaff_id(e.target.value);
        fetch("http://localhost:8080/getstaff?staff_id=" + staff_id)
            .then(r => r.json())
            .then(d => { setStaffid(d) });
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
                                    onClick={() => navigate("/login")}
                                >
                                    Logout
                                </button>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="pt-3"></div>
            <div className="container card w-25 ">
                <label htmlFor="Dept" className="form-label"><b>
                    Select Staff :</b>
                </label>
                <select
                    name="staff_id"
                    onChange={(e) => {
                        setStaff_id(e.target.value);
                    }}
                >
                    <option value='Select'>Select...</option>
                    {staff.map(
                        (el) => {
                            return <option value={el.staff_id}>{el.staff_name}</option>;
                        }
                    )}

                </select>
                <button className='btn btn-primary mx-5 ' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={FetchStaff}>Search</button>

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
                                <h3>Update Staff</h3>

                                <div className="mb-3">
                                    <label htmlFor="staff_name" className="form-label">
                                        Staff Name :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="staff_name"
                                        id="staff_name"
                                        defaultValue={staffid.staff_name}
                                        onChange={(event) => {
                                            setstaff_name(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="staff_contact" className="form-label">
                                        Staff Contact :
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="contact"
                                        name="staff_contact"
                                        defaultValue={staffid.staff_contact}
                                        id="staff_contact"
                                        onChange={(event) => {
                                            setstaff_contact(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="staff_gender" className="form-label">
                                       Sraff Gender : 
                                    </label>
                                    <input
                      type="radio" value="male" name="patient_gender" id="patient_gender" onChange={(event) => {
                        setstaff_gender(event.target.value);
                      }} />
                    Male
                    <input
                      type="radio" value="female" name="patient_gender" id="patient_gender" onChange={(event) => {
                        setstaff_gender(event.target.value);
                      }} />
                    Female
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Staff_bdate" className="form-label">
                                        Birth Date:
                                    </label>
                                    <input
                                        type="date"

                                        name="birthdate"
                                        defaultValue={staffid.Staff_bdate}
                                        id="Staff_bdate"
                                        onChange={(event) => {
                                            setStaff_bdate(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Staff_jdate" className="form-label">
                                        Joining Date:
                                    </label>
                                    <input
                                        type="date"

                                        name="joindate"
                                        defaultValue={staffid.Staff_jdate}
                                        id="Staff_jdate"
                                        onChange={(event) => {
                                            setStaff_jdate(event.target.value);
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
                                <span  className="btn btn-primary py-1" onClick={() => handleSubmit()}>
                                    Submit
                                </span>
                            </form>
                        </div>
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
    )
}
export default UpdateStaff;