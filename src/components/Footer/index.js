import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../Footer/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="d-flex justify-content-center social-media-icons-white">
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
        <a href="https://www.instagram.com/cocacollan">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <br/>
      <p className="footer-text">
        <strong>© Danny Collan™</strong>Full-Stack Portfolio.All Rights Reserved.
      </p>
    </div>
  );
}
export default Footer;
