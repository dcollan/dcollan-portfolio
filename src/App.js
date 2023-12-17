import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Applications from "./components/Applications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Particles from 'react-tsparticles';
import {loadStarsPreset} from "tsparticles-preset-stars";

class ParticlesContainer extends React.PureComponent {
  async customInit(engine){
    await loadStarsPreset(engine);
  }
  render() {
    const options = {
      preset: "stars"
    };
    return <Particles options={options}init={this.customInit}style={{opacity: "0.2"}}/>
  }
}
function App() {
  const [selectedPage, setSelectedPage] = useState("About");

  const changePage = (page) => {
    setSelectedPage(page);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case "About":
        return <About />;
      case "Applications":
        return <Applications />;
      case "Projects":
        return <Projects />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <h1>Page not found!</h1>;
    }
  };

  return (
    <>
      <Navbar changePage={changePage} />
      <ParticlesContainer/>
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
