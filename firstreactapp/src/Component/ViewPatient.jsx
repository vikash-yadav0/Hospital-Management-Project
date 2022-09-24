import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";

function ViewPatient(){
   const[myData,setMyData]=useState([]);

   useEffect(()=>{
    axios
    .get("http://localhost:8080/allpatient")
    .then((res)=>setMyData(res.data));
},[] )
return(
       <div>
       <h1>Patient Data</h1>
       <table  className="table table-bordered">
         <thead>

       {myData.map((post)=>{
             const{patient_name,user_email,patient_contact1,patient_contact2,patient_bdate,password,patient_bloodgroup
            ,patient_history,patient_height,patient_weight,patient_gender,form_fill}=post;
               return(
                
                    
               <tr>
                  <td>{patient_name}</td>
                  <td>{user_email}</td>
                  <td>{patient_contact1}</td>
                  <td>{patient_contact2}</td>
                  <td>{patient_bdate}</td>
                  <td>{password}</td>
                  <td>{patient_bloodgroup}</td>
                  <td>{patient_history}</td>
                  <td>{patient_height}</td>
                  <td>{patient_weight}</td>
                  <td>{patient_gender}</td>
                  <td>{form_fill}</td>
               </tr>
             
                
             );



       })}
          </thead>
         </table>
       </div>
    );
}
export default ViewPatient;