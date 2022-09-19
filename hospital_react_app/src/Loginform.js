import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
const Login = () => {
  const [user_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, SetUsers] = useState([]);
  let flag = 'false';
  const navigate = useNavigate();

  const CheckRole = (result) => {
    if (result.data.role === "patient") {
      alert("User Logder In");
  
      navigate("/patienthome");
    } 
  };
 const validUser = () => {
    if (user_email.length === 0) {
      alert("Enter your email");
    } else if (password.length === 0) {
      alert("Enter your password");
    } else {
      // const data = new FormData()

      // data.append('user_email',user_email)
      // data.append('password' , password)
      const data = {
        user_email: user_email,
        password: password,
      };

      axios.post("http://localhost:8080/CheckLogin", data).then((response) => {
        const result = response.data;
        console.log(result.user_email);
        console.log(result.password);
        console.log(result);
        if (result.status === "success") {
          alert("login Successfully");
         SetUsers(result.data)
          //window.sessionStorage.setItem()
          flag = 'true'
          console.log(flag);

          
            if (result.data.role === "patient") {
              alert("User Logder In");
          
              navigate("/patienthome",{users : result.data,});
            } 
          
        } else {
          alert("Invalid usename or password");
        }
      });
    }
    // console.log(email + password)
  };
  return (
    <center>
      <div className='card2'>
        
        <hr/>
        <br />
        <br />
        <div className="mb-3" style={{ width: "400px" }}>
          <label htmlFor=""><b>Email</b></label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3" style={{ width: "400px" }}>
          <label htmlFor=""><b>Password</b></label>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
         
        </div>
        <div className="mb-3">
          <button className="btn btn-success" onClick={validUser}>
            Log In
          </button><br />
          &nbsp;
          
        </div>
      </div>
    </center>
  );
};

export default Login;