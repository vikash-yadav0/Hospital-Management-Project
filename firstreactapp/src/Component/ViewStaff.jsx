import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";

function ViewStaff(){
   const[myDataa,setMyDatao]=useState([]);

   useEffect(()=>{
    axios
    .get("http://localhost:8080/allstaff")
    .then((res)=>setMyDatao(res.data));
},[] )
return(
       <div>
       <h1>Staff Data</h1>
       {myDataa.map((post)=>{
             const{staff_name,user_email,staff_contact,staff_gender,password,staff_bdate,staff_jdate}=post;
             return(
                <div>
                    <table  border  solid black>
                        <tr>
                  <td>{staff_name}</td>        
                  <td>{user_email}</td>
                  <td>{staff_contact}</td>
                   <td>{staff_gender}</td>
                   <td>{password}</td>
                  <td>{staff_bdate}</td>
                  <td>{staff_jdate}</td>
                  </tr>
               </table>
                </div>
             );



       })}

       </div>
    );
}
export default ViewStaff;