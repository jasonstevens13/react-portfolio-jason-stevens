import React from "react";

function NavTabs(props) {
  return (

    <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-white sticky-top container-fluid">

      <a className="navbar-brand">Jason Stevens</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          <li className="nav-item">
            <a
              href="#about"
              onClick={() => props.handlePageChange("About")}
              className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
            >
              About
</a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              onClick={() => props.handlePageChange("Projects")}
              className={props.currentPage === "Projects" ? "nav-link active" : "nav-link"}
            >
              Projects
</a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => props.handlePageChange("Contact")}
              className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
              Contact
</a>
          </li>
        </ul>
      </div>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <a className="navbar-brand" href="https://github.com/jasonstevens13" target="_blank">
            <img src="../../images/github.png" width="40" height="40" alt="GitHub"></img>
          </a>
          <a className="navbar-brand" href="https://www.linkedin.com/in/jasoncharlesstevens" target="_blank">
            <img src="../../images/linkedin.png" width="40" height="40" alt="GitHub"></img>
          </a>
          <a className="navbar-brand" href="./docs/Jason_Stevens_Resume9.pdf" target="_blank">
            <svg className="bi bi-file-text" width="40" height="40" viewBox="0 0 16 16" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4 1h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2zm0 1a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H4z"
                clip-rule="evenodd" />
              <path fill-rule="evenodd"
                d="M4.5 10.5A.5.5 0 015 10h3a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 8h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 6h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-2A.5.5 0 015 4h6a.5.5 0 010 1H5a.5.5 0 01-.5-.5z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </ul>
      </div>


    </nav>


  );
}

export default NavTabs;
