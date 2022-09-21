import React from "react";
import {Row,Col} from "react-bootstrap";
import './custom.css';

import {  useNavigate } from "react-router-dom";
//import { NavLink } from "react-router-dom";

function Admin(){
    const navigate=useNavigate();
 return(
       <div>
        <br/>
        <br/>
        <Row>
               <Col className="one"><button  onClick={() => navigate("/Doctorregister")} >Add New Doctor</button></Col>
                <Col className="two"><button  onClick={() => navigate("/StaffRegister")} >Add New Staff</button></Col>   </Row><br/>
            <Row><Col className="three"><button  onClick={() => navigate("/viewdoctor")} >view Doctor</button></Col>
                <Col className="four"><button  onClick={() => navigate("/viewstaff")} >view Staff</button></Col>  </Row><br/>
            <Row><Col className="five"><button  onClick={() => navigate("/viewpatient")} >Patient Data</button></Col>
        </Row>
       </div>
      

    );
}






export default Admin;