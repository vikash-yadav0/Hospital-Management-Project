import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Blogo from "./NavBar";
import Footer from "./NavBar/footer";
import '../Component/css/viewdoct.css';

function SearchPatient(){

    const [patient,setPatient]=useState([]);
    const [patientid,setPatientid]=useState([]);
    const [Patient_id,setPatient_id] = useState(0);
   
    const navigate = useNavigate();

    useEffect(() => {    
        fetch("http://localhost:8080/allpatient")
        .then(r => r.json())
        .then(d => setPatient(d))
    },[]);

    const FetchPatient=(e)=>{
        
        setPatient_id(e.target.value);   
        fetch("http://localhost:8080/getpatient?patient_id="+Patient_id)
        .then(r => r.json())
        .then(d => {setPatientid(d)});
        
    }
    return(
     <div className="viewdoc">
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Blogo/>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Admin
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Schedule
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Security
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className=" pt-2"></div>
         <div className="container card w-25 mb-3">
                <label htmlFor="Dept" className="form-label"><b>
                  Search Patient :</b>
                </label>
                <select
                  name="doctor_id"
                  onChange={(e) => {
                    setPatient_id(e.target.value);
                  }}>
                    <option value='Select'>Select...</option>
                 {patient.map(
                  (el) => {
                  return  <option value={el.patient_id}>{el.patient_name}</option>;
                  }
                  )}
                </select>
                <button className='btn btn-primary mx-5' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={FetchPatient}>Search</button>
              </div>
        <div className="container my-4">
                <div>                
                    <h3>Patient Information</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                        <tr>
                        <th>Patient id</th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Contact 2</th>
                        <th>Birth date</th>
                        <th>Bloodgroup</th>                        
                        <th>History</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Gender</th>
                        <th>form fill</th>                        
                    </tr>
                        </thead>
                        <tbody>                      
                            <tr>
                                <td>{patientid.patient_id}</td>
                                <td>{patientid.patient_name}</td>
                                <td>{patientid.user_email}</td>
                                <td>{patientid.patient_contact1}</td>
                                <td>{patientid.patient_contact2}</td>
                                <td>{patientid.patient_bdate}</td>                               
                                <td>{patientid.patient_bloodgroup}</td>
                                <td>{patientid.patient_history}</td>
                                <td>{patientid.patient_height}</td>
                                <td>{patientid.patient_weight}</td>
                                <td>{patientid.patient_gender}</td>
                                <td>{patientid.form_fill}</td>

                            </tr>
                        
                        </tbody>
                    </table>
                </div></div>
                <Footer/>
                </div>
            
    )
}
export default SearchPatient;
