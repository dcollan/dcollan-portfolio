import {
    joyfindr,
    socialgoalstracker,
    kryptorun,
    dcollan_headgear,
    charms
  } from "../../assets/images";
  import "./projects.css";
  
  const Projects = () => {
    const projectsInfo = [     
      {
        title: "JoyFindR",
        image: joyfindr,
        description:
          "RESTful API wep app that acts as a game library storage using two different APIs: https://rawg.io/apidocs and https://developers.giphy.com/. Given that a user enters what games they wish to search, the application will also return memes based on the output of the game description using both APIs.",
        githuburl: "https://github.com/stevendreed/JoyFindR",
        deployurl: "https://stevendreed.github.io/JoyFindR/",
        tags: ["#HTML ", "#CSS ", "#JavaScript ", "#RESTful APIs"]
      },
      {
        title: "Social Goals Tracker",
        image: socialgoalstracker,
        description:
          "Web app that allows for users to create account, log in and post goals, with options to delete or update their posts at any time.",
        githuburl: "https://github.com/SnapperGee/social-goals-tracker",
        deployurl: "https://social-goals-tracker-73d7fdc5c8eb.herokuapp.com/",
        tags: ["#Handlebars ", "#SCSS ", "#TypeScript ", "#Prisma ", "#Express.js ", "#Tailwind"]
      },
      {
        title: "KryptoRun",
        image: kryptorun,
        description:
          "React app that will enable for users to be able to create an account with MetaMask service, where once done, they will be able to exchange Ethereum currency with other users.",
        githuburl: "https://github.com/dcollan/kryptorun",
        deployurl: "https://kryptorun.com/",
        tags: ["#JavaScript ", "#Solidity ", "#Shell ", "#Node.js ", "#Tailwind ", "#Vite"]
      },
      {
        title: "Dcollan Headgear",
        image: dcollan_headgear,
        description:
          "Mock ecommerce React web app that allows for users to make purchases using Stripe, where they will be taken to a transaction page that contains items placed in cart.",
        githuburl: "https://github.com/dcollan/dcollan-headwear",
        deployurl: "https://dcollan-headwear.vercel.app/",
        tags: ["#JavaScript ", "#Babel ", "#Shell ", "#Node.js ", "#Sanity ", "#Stripe"]
      },
      {
        title: "Charms CRUD App",
        image: charms,
        description:
          "Beginner-level React CRUD app takes in posts, allows updating, and deleting from database. Any user is able to perform the action on all posts.",
        githuburl: "https://github.com/dcollan/charms-crud-application",
        deployurl: "https://charms.netlify.app/",
        tags: ["#JavaScript ", "#Shell ", "#Node.js ", "#MongoDB ", "#HTML ", "#CSS"]
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
                    <h6>{project.tags}</h6>
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
  