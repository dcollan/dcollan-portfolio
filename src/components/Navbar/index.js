import { Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./navbar.css";
const Navigation = (props) => {
  // const pages = ["About", "Portfolio", "Project"];
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/* <header className="header">Danny Collan</header> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="nav-link" id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              onClick={() => {
                props.changePage("About");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#applications"
              onClick={() => {
                props.changePage("Applications");
              }}
            >
              Applications
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => {
                props.changePage("Projects");
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              onClick={() => {
                props.changePage("Resume");
              }}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => {
                props.changePage("Contact");
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
