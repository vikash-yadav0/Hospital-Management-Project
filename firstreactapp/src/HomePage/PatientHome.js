import axios from "axios";
import React, { useState , useEffect} from "react";

function HomeController(){
       
  const[patient, setPatient] = useState({});
    //let nm;
   useEffect(() => {
       axios.post("/getPatient", localStorage.getItem("loggedinuser") )
       .then(resp => {setPatient(resp.data); localStorage.setItem("loggedinpatient",JSON.stringify(patient))});
    },[]  );
         
    return(
        <div>
        <h1>Welcome </h1>
        <ul>
         <li><a href="#">Search Doctor</a></li>
         <li><a href="#">Apppoinment</a></li>
        </ul>
 
      </div>  
    );
}
export default HomeController;