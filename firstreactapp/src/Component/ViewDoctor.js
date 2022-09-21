import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";

function ViewDoctor(){
   const[myData,setMyData]=useState([]);

   useEffect(()=>{
    axios
    .get("http://localhost:8080/alldoctor")
    .then((res)=>setMyData(res.data));
},[] )
return(
       <div>
       <h1>All Doctor</h1>
       {myData.map((post)=>{
             const{user_email,doctor_name,doctor_contact,qualifications,password}=post;
             return(
                <div>
                    <table>
                        <tr>
                  <td>{user_email}</td>
                  <td>{doctor_name}</td>
                  <td>{doctor_contact}</td>
                  <td>{qualifications}</td>
                  <td>{password}</td>
               </tr>
               </table>
                </div>
             );
       })}

       </div>
    );
}
export default ViewDoctor;