import {
    joyfindr
  } from "../../assets/images";
  import "./projects.css";
  
  const Projects = () => {
    const projectsInfo = [     
      {
        title: "JoyFindR",
        image: joyfindr,
        description:
          "Group collaboration. RESTful API wep app that acts as a game library storage using two different APIs: https://rawg.io/apidocs and https://developers.giphy.com/. Given that a user enters what games they wish to search, the application will also return memes based on the output of the game description using both APIs.",
        githuburl: "https://github.com/stevendreed/JoyFindR",
        deployurl: "https://stevendreed.github.io/JoyFindR/",
      }
    ];
  
    return (
      <div className="container-1">
        <div className="grid3">
          {projectsInfo.map((project, i) => {
            return (
              <a className="card-link" href={project.githuburl} target="_blank">
                <div key={i} className="card">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt="project image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{`${project.description.substring(
                      0,
                      70
                    )}...`}</p>
                    <div className="buttonContainer">
                    <a href={project.githuburl} className="gitAndLiveLink">
                      Github
                    </a>
                    <a href={project.deployurl} className="gitAndLiveLink">
                      Live
                    </a>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    ); //this will activate render card function six times for each project
  };
  
  export default Projects;
  