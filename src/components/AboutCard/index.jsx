import React from "react";
import "./mystyle.css";

function AboutCard() {

    return (

        <div className="float-left">
            <div className="card h-100 border-dark mb-3" id="aboutCard">
                <div className="card-body">
                    <h5 className="card-title">Jason Stevens - Jr. Full Stack Dev</h5>
                    <br></br>
                    <img src="./images/biopic.jpg" className="card-img" alt="Jason Stevens"></img>
                    <p> </p>
                    <p className="card-text">Flexible, friendly, and self-aware professional with a true desire to build
                    knowledge and skill set. A loyal employee with a clear objective to make a career
                            transition into a Junior Developer position that fosters career growth and recognizes existing transferable skills . </p>
                </div>
            </div>
        </div>

    );
}

export default AboutCard;