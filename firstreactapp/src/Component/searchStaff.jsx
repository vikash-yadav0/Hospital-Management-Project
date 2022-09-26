import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Blogo from "./NavBar";
import Footer from "./NavBar/footer";
import '../Component/css/viewdoct.css';

function SearchStaff(){

    const [staff,setStaff]=useState([]);
    const [staffid,setStaffid]=useState([]);
    const [Staff_id,setStaff_id] = useState(0);
   
    const navigate = useNavigate();

    useEffect(() => {    
        fetch("http://localhost:8080/allstaff")
        .then(r => r.json())
        .then(d => setStaff(d))
    },[]);

    const FetchStaff=(e)=>{
        
        setStaff_id(e.target.value);   
        fetch("http://localhost:8080/getstaff?staff_id="+Staff_id)
        .then(r => r.json())
        .then(d => {setStaffid(d)});
        
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
                 Select Staff :</b>
                </label>
                <select
                  name="staff_id"
                  onChange={(e) => {
                    setStaff_id(e.target.value);
                  }}>
                    <option value='Select'>Select...</option>
                 { staff.map(
                  (el) => {
                  return  <option value={el.staff_id}>{el.staff_name}</option>;
                  }
                  )}
                </select>
                <button className='btn btn-primary mx-5' style={{ marginLeft: "10px", marginTop: "10px" }} onClick={FetchStaff}>Search</button>
              </div>
        <div className="container my-4">
                <div>                
                    <h3>Staff Information</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                        <tr>
                        <th>Staff_id</th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Gender</th>
                        <th>Birth Date</th>
                        <th>Joining Date</th>                        
                        <th>dept id</th>                        
                    </tr>
                        </thead>
                        <tbody>                      
                            <tr>
                                <td>{staffid.staff_id}</td>
                                <td>{staffid.staff_name}</td>
                                <td>{staffid.user_email}</td>
                                <td>{staffid.staff_gender}</td>
                                <td>{staffid.staff_bdate}</td>
                                <td>{staffid.staff_jdate}</td>                               
                                <td>{staffid.dept_id}</td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div></div>
                <Footer/></div>
            
    )
}
export default SearchStaff;
