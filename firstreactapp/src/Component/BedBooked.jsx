import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react";
import Blogo from "./NavBar";
import '../Component/css/bedbooking.css';

function ViewBeds(){
   const[myData,setMyData]=useState([]);
   const navigate=useNavigate();

   useEffect(()=>{
    fetch("http://localhost:8080/bookedbed")
    .then((resp) => resp.json())
    .then((data) => {
      setMyData(data)
    });
},[] );
return(
  <div className="bedbooking">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <Blogo/>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item mx-2">
                <button
                  type="button"
                  className="btn btn-light "
                  aria-current="page"
                  onClick={() => navigate("/StaffHome")}
                >
                  Go back
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  <div className="pt-4">
  <button type="button" className=" btn btn-success btn-lg">
    Bed avaliable
  </button>
  <table className="table bg-light my-4 mb-4">
    <thead>
      <tr>
        <th>Bed id</th>
        <th>category</th>
        <th>charges</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
    {myData.map((post)=>{
             const{bed_id,category,charges,status}=post;
             return(
          <tr>
            <th width="12%">{bed_id}</th>
                        <td>{category}</td>
                        <td>{charges}</td>
                        <td>{status}</td>
        
          </tr>
        );
      })}
    </tbody>
 </table>
 
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
}
export default ViewBeds;