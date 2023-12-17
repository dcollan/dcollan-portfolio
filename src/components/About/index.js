import image from "../../assets/images/dcollan.jpg";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className="about-me">
        <section className="about-section">
          <h1 className="hero-heading">Danny Collan</h1>
          <h2>Full Stack Developer</h2>
          <div>
            <img src={image} alt="Danny Collan" />
          </div>
          <p className="content">
          Motivated and detail-oriented Computer Science graduate with a strong academic background 
          and a passion for full-stack development. Eager to leverage theoretical knowledge and handson
          experience in website development to contribute to a dynamic organization as a Full-Stack
          Developer. Committed to delivering high-quality code and continuously expand technical skills.
          </p>
          <a
            href="mailto:dcollan@outlook.com"
            alt="email danny collan"
            title="email me at dcollan@outlook.com"
            className="btn"
          >
            Get In Touch
          </a>
          <div className="hidden d-flex justify-content-center social-media-icons">
            <div className="hide">
              <a href="https://github.com/dcollan">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/dcollan/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="mailto:dcollan@outlook.com"
                alt="email danny collan"
                title="email me at dcollan@outlook.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
