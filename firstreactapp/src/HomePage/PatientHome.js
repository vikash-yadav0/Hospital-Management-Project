import { bgcolor, color } from "@mui/system";
import axios from "axios";
import React, { useState , useEffect} from "react";
import {  useNavigate } from "react-router-dom";
import '../Component/style.css';
import './style2.css';
function HomeController(){
       
  const[patient, setPatient] = useState({});
 // const [patient_name, setpatient_name] = useState("");
  
  const navigate=useNavigate();
   
   useEffect(() => {
       axios.post("/getPatient", localStorage.getItem("loggedinuser") )
       .then(resp => {setPatient(resp.data); localStorage.setItem("loggedinpatient",JSON.stringify(patient))});
      
    },[]  );
         
    return(
        <div class="container">
        <h1>Welcome</h1>
        <table align="center" >
        
          <tr>
         <td><b>Beds availbility</b></td>
         </tr>
         <tr>
          <td><button  style={{ marginLeft: "10px", marginTop: "10px", bgcolor:"black", color:"blue"}}  onClick={() => navigate("/viewbeds")}>Check Availibility</button></td><br/>
          </tr>
         
         </table>
 
      </div>  
    );
}
export default HomeController;