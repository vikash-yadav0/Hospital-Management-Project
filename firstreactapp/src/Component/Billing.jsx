import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react";
import Footer from "./NavBar/footer";
import Blogo from "./NavBar";
import '../Component/css/billing.css';

function Billing(){
   const[myData,setMyData]=useState([]);
   const navigate=useNavigate();

   useEffect(()=>{
    fetch("http://localhost:8080/allbills")
    .then(resp=>resp.json())
    .then((e)=>{setMyData(e)
});
},[] );
return(
  <div className="billing">
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
                    onClick={() => {navigate("/StaffHome")}}
                  >
                   Back
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
                      Staff
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          security
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Schedule
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    <div className="App">
         
       <h1>Billing Done</h1>
       <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                        <tr>
                        <th>Billing id</th>
                        <th> Test Cost</th>
                        <th>Medicine Cost</th>
                        <th>Consultation Fees</th>
                        <th>Payment status</th>
                        <th>Discharge Date</th>
                        <th>Bed Status</th>                        
                                               
                    </tr>
                        </thead>
                        <tbody>                      
                        {myData.map((post)=>{
             const{billing_id,
              test_cost,
              medicine_cost,
              consultation_fees,
              payment_status,
              discharge_date,
              bed_Status}=post;
             return(  
                            <tr >
                        <th width="12%">{billing_id}</th>
                        <td>{test_cost}</td>
                        <td>{medicine_cost}</td>
                        <td>{consultation_fees}</td>
                        <td>{payment_status}</td>
                        <td>{discharge_date}</td>
                        <td>{bed_Status}</td>
                      </tr>
                       );
                      })}
                        </tbody>
                    </table>
                    <Footer/>    
             </div></div>
        );
}
export default Billing;