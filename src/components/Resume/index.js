import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./resume.css";
import { uploadedFileLink } from "../../assets/images";
const Resume = () => {
  return (
    <>
      <div className="resume-sec">
        <h1 className="skill">Skills</h1>
        <h3 className="skill">Programming Languages</h3>
        <div>
          <ul className="skills-section1">
            <li>Java</li>
            <li>Ruby</li>
            <li>Swift</li>
            <li>C</li>
            <li>C++</li>
            <li>C#</li>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <h3 className="skill">Front-end</h3>
        <div>
          <ul className="skills-section1">
            <li>HTML5</li>
            <li>CSS</li>
            <li>XML</li>
            <li>Angular</li>
            <li>Spring Boot</li>
            <li>PHP</li>
            <li>React.js</li>
            <li>ASP.Net</li>
            <li>Oracle</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
          </ul>
        </div>
        <h3 className="skill">Back-end</h3>
        <div>
          <ul className="skills-section1">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <h3 className="skill">Methodologies</h3>
        <div>
          <ul className="skills-section1">
            <li>Agile development</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
          </ul>
        </div>
        <h3 className="skill">Web Services</h3>
        <div>
          <ul className="skills-section1">
            <li>Git</li>
            <li>Github</li>
            <li>Azure</li>
            <li>AWS</li>
            <li>GCP</li>
          </ul>
        </div>

          <button className="button">
          <a
          className="button"
          href={uploadedFileLink}
          target="_blank"
          rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={uploadedFileLink} />
            View Resume
            </a>
          </button>
     
      </div>
    </>
  );
};

export default Resume;
