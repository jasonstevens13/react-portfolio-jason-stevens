import React from "react";
import "./mystyle.css";

function AboutCard() {

    return (

        <div className="float-left">
            <div className="card h-100 border-dark mb-3" id="aboutCard">
                <div className="card-body">
                    <h5 className="card-title">Jason Stevens - Jr. Full Stack Dev</h5>
                    <br></br>
                    <div>
                        <img src="./images/biopic.jpg" id="bioImg" className="card-img" alt="Jason Stevens"></img>
                        <p> </p>
                        <h5>ABOUT:</h5>
                        <p>Jr. Full Stack Developer with a background in roles that fostered skills in management, customer service, digital, and business analysis. Earned a certificate in Full Stack Development through an intensive bootcamp from the University of Pennsylvania. Friendly, well-mannered, team-player, with proven loyal and cooperative interactions with all levels of management, clients, and vendors. Excellent communicator who utilizes good judgment, attention to detail, and passion for research. Quick learner who endures reform and embraces new directives, strategies, and technology.</p>
                    </div>
                    <div>
                        <h5>TECHNICAL SKILLS:</h5>
                        <p>MERN Stack | HTML5 | CSS3 | JavaScript | jQuery | Java | Bootstrap | Express.js | React.js | Node.js | Database Theory | MongoDB | MySQL | Command Line | Git | Heroku</p>
                    </div>
                    <div>
                        <h5>EMAIL:</h5>
                        <p>jasoncstevens13@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AboutCard;