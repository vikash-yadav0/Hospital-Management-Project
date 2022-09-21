import './App.css';
import React from "react";
import { Route, Routes } from "react-router";
import Login from "./Component/Loginform1";
import Admin from "./Component/Admin";
import Register from './Component/Registerition';
//import MainMenu from "./Component/MainMenu";
import Carousel from 'react-bootstrap/Carousel';
import Landing from "./Component/Landing";

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
     {/*<h1><span className='text-danger'><b>+</b></span><span className="text-info">Meditrina</span></h1><h3 className="text-success">Hospital</h3>*/}
  
     <nav>


     </nav>
     <Routes>
     {/*<Route  path="*" element={<MainMenu/>} exact/>*/}
     <Route path="*" element={<Landing/>} exact></Route>
     <Route path="/login" element={<Login/>}/>
     <Route path="/Admin" element={<Admin/>}/>
     <Route path="/patientregister" element={<Register/>}/>
     </Routes>
    
    
      </div>
  );
}
export default App;
