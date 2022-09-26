import React from 'react';
import {  useNavigate } from "react-router-dom";

const Aboutus = () => {
    const navigate = useNavigate();
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" onClick={() => navigate("/Landing")} >Meditrina Hospital</a>
                        </div>
        </nav>

        <div className="container-fluid">
            <h3 className="py-3">About Us</h3>
            <p>
                ACHIEVEMENTS AND STRENGTHS
                Patients at Yashoda Hospitals receive personalized care and treatment from doctors and staff who take time to get to know them. Here, under one umbrella are expert medical consultants, certified medical staff, skilled surgeons, state-of-the-art technology and facilities, as well as support groups, and social workers – all dedicated to treatment and recovery of the patients.

                Above all, we are attentive to all the needs and comforts of the patient. We have an aggressive approach balancing our treatment strategies with careful monitoring of our patient’s overall health and well-being.

                Drawing on the strength of our community setting, patients benefit from our focused, custom-made care. A greater level of personal attention is afforded to each patient, and their individual needs are met with much thought and careful consideration.
            </p>
            <p>ACCOMPLISHMENTS
                Advances in treatments and techniques happen here first. Yashoda Group is a collaborative community of experts, empowered by outstanding technology, so that our hospitals can make significant breakthroughs and translate them swiftly into medical treatments.</p>
            <p>We are experts at what we do. Patients can be assured that they would receive quality healthcare, where the most advanced treatments are delivered by the field’s leading medical professionals. The following are few examples:

                More than 20,000 cardiac procedures every year
                First Inter-State Heart transplantation in the region
                PTE procedures in Pulmonology Embolism in collaboration with surgeons of Duke University, USA
                Treated World’s largest number 10000 of cancer patients with RapidArc Technology
                First in world to use RapidArc based Stereotactic Radio-surgery in the treatment of Arteriovenous Malfunction
                First in India to implement 4D gated RapidArc for the treatment of moving tumors
                One and only authorized Advanced Training center for IMRT/IGRT and RapidArc technology for Oncologists and Physicists across the country
                More than 16,200 patients have been successfully treated using high precision Radiotherapy
                For the first time in India, Continuous Renal Replacement Therapy CRRT was used to treat multi-organ dysfunction, septicemia, refractory CCF, etc. having haemodynamic instability.
                First ever half-matched bone-marrow transplantation was successfully done at Yashoda Hospitals. This was a very rare procedure, first ever done successfully in the States of Telangana and Andhra Pradesh.</p>
            <p>PIONEERING TECHNOLOGICAL ADVANCEMENT
                Meditria Hospitals is known as the pioneer in bringing the latest advancements to the people. We believe in keeping pace with revolutionary technology to deliver treatments with higher accuracy, better precision and enhanced results.

                We are proud to be in the forefront of modern medical technologies with a proud tradition of medical excellence, as evidenced by our many “firsts” and medical breakthroughs in Asia, India, and the States of Telangana and Andhra Pradesh.

                A FEW OF THEM INCLUDE:
                First in Asia – RapidArc Radiotherapy Treatments for Cancer Patients
                First time in South Asia – 16-channel 1.5T HDx MRI system
                First time in India – Dual Source CT with Heart PBV for coronary Angio and non-cardiac application
                First in South India – Linear Accelerator with Intensity Modulated Radiation Therapy IMRT
                First in South India – High Definition PET
                First in the combined State of Andhra Pradesh – Modular Operation Theatre with HEPA air filter system
                First in the combined State of Andhra Pradesh – State-of-art Heart and Lung Center
                First in the combined State of Andhra Pradesh – Digital Flat Panel Cardiac Catheterization Lab</p>


            <div className="bg- mt-5 pt-5 pb-5">
                <div className="container-fluid">
                    <div className="asd pb-3 mb-4">Vision and Mission</div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="media pt-0">
                                <img src="https://www.noblehospitalspune.com/assets/imgs/vision.png" className="mr-3" width="45" />
                                <div className="media-body">
                                    <h5 className="mt-0 asd ">Vision</h5>
                                    <p className="mb-3">Achieving unmatched standards of excellence that become a benchmark of healthcare practice through innovation, technology and compassionate care.</p>
                                </div>
                            </div>
                            <div className="media">
                                <img src="https://www.noblehospitalspune.com/assets/imgs/mission.png" className="mr-3" width="45" />
                                <div className="media-body">
                                    <h5 className="mt-0 asd ">Mission</h5>
                                    <p className="mb-3">To provide integrated healthcare of global standards to patients from all walks of life and to establish ourselves as one of India's most trusted and advanced healthcare destinations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">

                            <div className="media">
                                <img src="https://www.noblehospitalspune.com/assets/imgs/values.png" className="mr-3" width="45" />
                                <div className="media-body">
                                    <h5 className="mt-0 asd ">Values</h5>
                                    <p className="mb-3">
                                        <strong className="cf">Compassion</strong> – Encouraging open communication, transparency and maintaining excellence in personal and professional conduct.<br />
                                        <strong className="cf">Quality</strong> – Adhering to the highest standards of patient care.<br />
                                        <strong className="cf">Innovation</strong> – Recognising and implementing new ideas.<br />
                                        <strong className="cf">Collaboration</strong> – Fostering efficiency and synergising to drive professional and organisational growth.<br />
                                        <strong className="cf">Leadership</strong> – Being approachable, dependable and inspiring to build trust and mutual respect.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}
export default Aboutus;
