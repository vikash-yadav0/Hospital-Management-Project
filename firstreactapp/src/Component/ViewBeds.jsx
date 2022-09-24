import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react";

function ViewBeds(){
   const[myData,setMyData]=useState([]);
   const navigate=useNavigate();

   useEffect(()=>{
    axios
    .get("http://localhost:8080/allbed")
    .then((res)=>setMyData(res.data));
},[] )
return(
    <div className="App">
         
       <h1>Available Beds</h1>
    <table className="table table-bordered">
      <thead>
    
        
       {myData.map((post)=>{
             const{bed_id,category,charges,status}=post;
             return(
                      <tr >
                        <th width="12%">{bed_id}</th>
                        <td>{category}</td>
                        <td>{charges}</td>
                        <td>{status}</td>
                      </tr>
                     );
         })}
         </thead>
           </table>
          
             </div>
        );
}
export default ViewBeds;