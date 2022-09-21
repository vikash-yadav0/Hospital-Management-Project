import axios from "axios";
import React, { useState , useEffect} from "react";

function StaffHome(){
         
  const[staff, setStaff] = useState({});

   useEffect(() => {
       axios.post("/getStaff", localStorage.getItem("loggedinuser") )
       .then(resp => {setStaff(resp.data); localStorage.setItem("loggedinStaff",JSON.stringify(staff))});
    },[]  );
     
    return(
        <div>
        <h1>Welcome  </h1>
        <ul>
         
         <li><a href="#">Beds Availibility</a></li>
        </ul>
 
      </div>  
    );
}
export default StaffHome;