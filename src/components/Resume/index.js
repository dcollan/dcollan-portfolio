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
        <h3 className="skill">Front-end</h3>
        <div>
          <ul className="skills-section1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Web design</li>
            <li>React.js</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <h3 className="skill">Back-end</h3>
        <div>
          <ul className="skills-section1">
            <li>Java</li>
            <li>C/C++</li>
            <li>Python</li>
            <li>REST APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
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
