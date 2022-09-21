import axios from "axios";
import React, { useState , useEffect} from "react";

function DoctorHome(){
   // let nm = JSON.parse(localStorage.getItem("loggedindoctor")).doctor_name;
    const[doctor, setDoctor] = useState({});

   useEffect(() => {
       axios.post("/getDoctor", localStorage.getItem("loggedinuser") )
       .then(resp => {setDoctor(resp.data); localStorage.setItem("loggedindoctor",JSON.stringify(doctor))});
    },[]  );

    return(
        <div>
        <h1>Welcome </h1>
        <ul>
         <li><a href="#">Search Patient</a></li>
         <li><a href="#">Apppoinment</a></li>
        </ul>
 
      </div>  
    );
}
export default DoctorHome;