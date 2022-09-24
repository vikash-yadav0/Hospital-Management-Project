//import React, { Component ,useState,render} from 'react';
import { useNavigate } from "react-router-dom";
import Blogo from "./NavBar";
//import { NavLink } from 'react-router-dom';
//import { useState } from 'react';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Blogo />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <button
                  type="button"
                  className="btn btn-light "
                  aria-current="page"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </li>
              <li className="nav-item mx-2">
                <button
                  type="button"
                  className="btn btn-light "
                  aria-current="page"
                  onClick={() => navigate("/patientregister")}
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item  active">
            <img
              src="https://source.unsplash.com/1000x300/?hospital,hospital"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item ">
            <img
              src="https://source.unsplash.com/1000x300/?hospital,doctor"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item ">
            <img
              src="https://source.unsplash.com/1000x300/?hospital,patient"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="card-group my-4">
        <div className="card">
          <img
            src="https://source.unsplash.com/600x300/?Care,doctor"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Care</h5>
            <p className="card-text">
              We recognize that every person is important, and hence deserves
              the very best care possible. We will not be mechanical in our
              approach to work. We will be personal.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 5 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://source.unsplash.com/600x300/?Courtesy,doctor"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Courtesy</h5>
            <p className="card-text">
              We understand that people walking through our doors are often
              going through a stressful time. We will go the extra mile to help
              both patients and their loved ones, feel completely at ease
              through courteous interactions at every stage.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://source.unsplash.com/600x300/?doctor,Capability"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Capability</h5>
            <p className="card-text">
              Whatever be the health problem, we will be fully capable of
              diagnosing and treating it effectively. Through the use of
              advanced technology, techniques and processes.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card-group my-4">
          <div className="card">
            <img
              src="https://source.unsplash.com/600x300/?Character,hospital"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Character</h5>
              <p className="card-text">
                We will be true to the trust that is placed in us. We will be
                faithful in following every procedure and principle. With our
                primary focus on always doing what is best for the patient.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://source.unsplash.com/600x300/?doctor,Commitment,doctor"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Commitment</h5>
              <p className="card-text">
                To continuous learning. To find better methods of prevention and
                cure. Through undertaking, supporting and commissioning
                research, in various medical and paramedical fields.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://source.unsplash.com/600x300/?hospital,Child"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Contribution</h5>
              <p className="card-text">
                Ensuring that we give back significantly to the society we live
                in through education, through planned charity and the supporting
                of local initiatives for better health.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ float: "bottom" }}>
        <ul className="nav justify-content-center  bg-primary ">
          <li className="nav-item">
            <a
              onClick={() => navigate("/Landing")}
              className="nav-link px-2 text-light"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-light">
              About
            </a>
          </li>
        </ul>
        <p
          className="text-center  bg-primary text-light"
          style={{ margin: "unset" }}
        >
          © 2022 Company, Inc
        </p>
      </footer>
    </>
  );
};
export default Landing;
