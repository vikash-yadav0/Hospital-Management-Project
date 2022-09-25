
import React from 'react';
import { useNavigate } from "react-router-dom";

const FAQ = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={() => navigate("/Landing")} >Meditrina Hospital</a>
                </div>
            </nav>

            <div className="container-fluid">
                <h3 className="py-3">Frequently asked Quesions</h3>
                <p>
                    <b>Who Can Be A Donor For An Allogeneic Transplant?</b>
                    Matching bone marrow is done by blood tests alone. It is not necessary to test the donor’s bone marrow at this stage.

                    It is usual to start by testing the brothers and sisters, as they are likely to provide the best match; parents are not usually good matches.

                    The donor should be in good health. He or she will be given a thorough medical checkup to make sure that there will be no risk to his or her own health from the procedure.</p>

                <p><b>Collecting Bone Marrow</b>
                    About a week or two before the bone marrow harvest is done, the patient (or the donor, for an Allogeneic transplantation) may have 1 to 2 units of blood withdrawn. This will be given back during the bone marrow harvest.

                    The harvest itself is carried out under general anaesthesia, so one will feel nothing. It involves the removal of some marrow from inside the bones at the back and front of the pelvis (the hip bones).

                    The patient or donor will have to stay in hospital overnight to recover fully from the general anaesthesia. Usually it feels sore for a few days and mild painkillers may be required. These will be administered by the nurses or doctors.</p>

                <p><b>How Are The Stem Cells Collected?</b>
                    Stem cell harvesting is done following a course of daily injections of a growth factor. This procedure takes about 3 hours. The patient will be made to lie down on a couch and a transfusion will be put into the vein of each arm. Blood will be collected from one arm, into a machine called a centrifuge, which spins it to separate out the stem cells. These are collected, and the remaining blood is returned through the IV in the other arm. The stem cells can even be frozen.</p>

                <p><b>What Is Umbilical Cord Blood Transplantation?</b>
                    Many children and young adults with serious blood diseases such as leukaemia, need a bone marrow transplantation to give them a chance to live. Unfortunately a marrow donor cannot always be found. Sometimes searching for a donor takes so long that the patient dies before a compatible donor is available.

                    However, now a new source of blood forming stem cells has been found Umbilical Cord Blood.

                    This is the blood that is left behind in the placenta and the umbilical cord after the delivery of a baby. Cord blood is rich in stem cells and can be used instead of bone marrow for transplantation.

                    The stem cell in the cord blood is of high quality and very potent in producing blood cells. Cord blood transplants appear to cause less serious immunological side effects. The ‘matching’ between donor and recipient appears to be less critical. This means that the chance of finding suitable cord blood for transplantation is much greater than that of bone marrow.</p>
            </div>
        </div>
    );
}
export default FAQ;