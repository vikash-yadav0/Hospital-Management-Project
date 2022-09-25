import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import "./css/style.css";
function AdmitPatient() {
  const [admited_date, setadmited_date] = useState("");
  const [patient_id, setpatient_id] = useState("");
  const [bed_id, setbed_id] = useState([]);
  const [doctor, setDoctor] = useState([]);
    const [doctor_id, setDoctor_id] = useState(0);
    const [dept_id, setdept_id] = useState();
    const [dept, setdept] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/alldept")
        .then((resp) => resp.json())
        .then((data) => {
          setdept(data)});
    }, []);
    useEffect(() => {
      fetch("http://localhost:8080/avaliablebed")
        .then((resp) => resp.json())
        .then((data) => {
          setbed_id(data)});
    }, []);

    useEffect(() => {
      fetch("http://localhost:8080/alldoctor")
          .then(r => r.json())
          .then(d => setDoctor(d))
  }, []);


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/saveadmission", {
        admited_date: admited_date,
        patient_id: patient_id,
        bed_id: bed_id,
        doctor_id: doctor_id,
        dept_id: dept_id,
      });

      alert("Registation Beds Successfully");
      setadmited_date("");
      setpatient_id("");
      setbed_id("");
      setDoctor_id(0);
      setdept_id("");
    } catch (err) {
      alert("Registation Beds Failed");
    }
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <br></br>
        <h1> Bed Registration form</h1>
        <p>Fill in the Information Below</p>

        <div>
          <input
            type="Date"
            name="admited_date"
            autoComplete="off"
            onChange={(event) => {
              setadmited_date(event.target.value);
            }}
          />
        </div>
        <br />

        <div>
          <input
            type="text"
            name="patient_id"
            placeholder="patient_id"
            autoComplete="off"
            onChange={(event) => {
              setpatient_id(event.target.value);
            }}
          />
        </div>
        <br />

        <div className="mb-3">
                <label htmlFor="Dept" className="form-label">
                 <b> Bed Id :</b>
                </label>
        <select
                  name="bed_id"
                  onChange={(e) => {
                    setdept_id(e.target.value);
                  }}>
                    <option value='Select'>Select...</option>
                 { bed_id.map(
                  (el) => {
                  return  <option value={el.bed_id}>{el.category},{el.charges}</option>;
                  }
                  )}
                </select>
        </div>
        <br />

        <div>
        <label htmlFor="Dept" className="form-label"><b>
                    Doctor Name :</b>
                </label>
                <select
                    name="doctor_id"
                    onChange={(e) => {
                        setDoctor_id(e.target.value);
                    }}>
                    <option value='Select'>Select...</option>
                    {doctor.map(
                        (el) => {
                            return <option value={el.doctor_id}>{el.doctor_name}</option>;
                        }
                    )}
                </select>
        </div>
        <br />

        
        <div className="mb-3">
                <label htmlFor="Dept" className="form-label">
                 <b> Department :</b>
                </label>
        <select
                  name="deprt_id"
                  onChange={(e) => {
                    setdept_id(e.target.value);
                  }}>
                    <option value='Select'>Select...</option>
                 { dept.map(
                  (el) => {
                  return  <option value={el.dept_id}>{el.dept_name}</option>;
                  }
                  )}
                </select>
        </div>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AdmitPatient;
