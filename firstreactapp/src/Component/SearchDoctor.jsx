import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function SearchDoctor(){

    const [doctor,setDoctor]=useState([]);
    const [doctorid,setDoctorid]=useState([]);
    const [Doctor_id,setDoctor_id] = useState(0);
   
    const navigate = useNavigate();

    useEffect(() => {    
        fetch("http://localhost:8080/alldoctor")
        .then(r => r.json())
        .then(d => setDoctor(d))
    },[]);

    const FetchDoctor=(e)=>{
        
        setDoctor_id(e.target.value);   
        fetch("http://localhost:8080/getdoctorbyid?doctor_id="+Doctor_id)
        .then(r => r.json())
        .then(d => {setDoctorid(d)});
        
    }
    return(
     <div>
         <div className="mb-3">
                <label htmlFor="Dept" className="form-label"><b>
                  Doctor :</b>
                </label>
                <select
                  name="doctor_id"
                  onChange={(e) => {
                    setDoctor_id(e.target.value);
                  }}>
                    <option value='Select'>Select...</option>
                 { doctor.map(
                  (el) => {
                  return  <option value={el.doctor_id}>{el.doctor_name},{el.qualifications}</option>;
                  }
                  )}
                </select>
                <button className='btn btn-primary' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={FetchDoctor}>Search</button>
              </div>
        <div className="container my-4">
                <div>                
                    <h3>Doctor Information</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                        <tr>
                        <th>doctor_id</th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Qualifications</th>                        
                        <th>dept id</th>                        
                    </tr>
                        </thead>
                        <tbody>                      
                            <tr>
                                <td>{doctorid.doctor_id}</td>
                                <td>{doctorid.doctor_name}</td>
                                <td>{doctorid.user_email}</td>
                                <td>{doctorid.doctor_contact}</td>
                                <td>{doctorid.qualifications}</td>                               
                                <td>{doctorid.dept_id}</td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div></div></div>
            
    )
}
export default SearchDoctor;
