import axios from "axios";
import React, { useState , useEffect} from "react";
import {  useNavigate } from "react-router-dom";

function StaffHome(){
         
  const[staff, setStaff] = useState({});
  const navigate = useNavigate();

   useEffect(() => {
       axios.post("/getStaff", localStorage.getItem("loggedinuser") )
       .then(resp => {setStaff(resp.data); localStorage.setItem("loggedinStaff",JSON.stringify(staff))});
    },[]  );
     
    return(
        <div>
        
        <h1>Welcome</h1>
        <table align="center" >
        
          <tr>
         <td><b>Beds Booking</b></td>
         </tr>
         <tr>
          <td><button  style={{ marginLeft: "10px", marginTop: "10px", bgcolor:"black", color:"blue"}}  onClick={() => navigate("/bedsavailbility")}>Click here</button></td><br/><br/>
          </tr>
          <tr>
          <td><button  style={{ marginLeft: "10px", marginTop: "10px", bgcolor:"black", color:"black"}}  onClick={() => navigate("/patientregister")}>Patient Registation</button></td><br/>
          </tr>
         
         </table>
 
      </div>  
    );
}
export default StaffHome;