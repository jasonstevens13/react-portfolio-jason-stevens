import React from "react";
import "./mystyle.css";

function ContactCard() {

    return (

        <div className="card border-dark mb-3" id="contactCard">
            <div className="card-body">
                <h5 className="card-title">Contact</h5>
                <p className="card-text italic"> I welcome any and all contact regarding professional endeavors or
                            opportunities, paid or pro bono.</p>
                <br></br>
                <h6>Email: jasoncstevens13@gmail.com</h6>
                <br></br>
                <h6>Phone: (856) 417-4558</h6>
                <br></br>
                <h6>GitHub:
                    <a className="navbar-brand" href="https://github.com/jasonstevens13" target="_blank">
                        <img src="./images/github.png" width="40" height="40" alt="jasonstevens13"></img>
                    </a>
                </h6>
                <h6>LinkedIn:
                    <a className="navbar-brand" href="https://www.linkedin.com/in/jasoncharlesstevens" target="_blank">
                        <img src="./images/linkedin.png" width="40" height="40"
                            alt="www.linkedin.com/in/jasoncharlesstevens"></img>
                    </a>
                </h6>
                <h6> Resume:
                    <a className="navbar-brand" href="./docs/Jason_Stevens_Resume9.pdf" target="_blank" alt="Resume">
                        <svg className="bi bi-file-text" width="40" height="40" viewBox="0 0 16 16"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z"
                                clip-rule="evenodd" />
                            <path fill-rule="evenodd"
                                d="M4.5 10.5A.5.5 0 015 10h3a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 8h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 6h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 4h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                </h6>

            </div>
        </div>


    );
}

export default ContactCard;