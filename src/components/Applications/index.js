import {
  workdayscheduler,
  fantasticweatherapp,
  quizbiz,
  expressnotetaker,
  uniquesqlemployeetracker,
  groovyreadmegenerator,
  horiseon,
  supersvggenerator,
  excellentpasswordgenerator,
  funkyormapp,
  truetechblog,
  nosqlsocialnetworkapi,
  fabulouspwatexteditor
} from "../../assets/images";
import "./applications.css";

const Applications = () => {
  const projectsInfo = [
    {
      title: "Horiseon",
      image: horiseon,
      description:"Application based on removing repeated lines and adding necessary elements in ways that the website will still appear the same.",
      githuburl: "https://github.com/dcollan/horiseon-refactor-homework",
      deployurl: "https://dcollan.github.io/horiseon-refactor-homework/",
      tags: ["#HTML ", "#CSS"],
    },
    {
      title: "Excellent Password Generator",
      image: excellentpasswordgenerator,
      description:
        "Webpage that allows for user to create a new randomly generated password to have shown on screen. Upon clicking 'Generate Password', the user will be provided with a prompt indicating how long their password will be, ranging from 8 to 128 (inclusively). After entering, the user will then be asked if any lowercase, uppercase, numbers, or special characters will be included in the password.",
      githuburl: "https://github.com/dcollan/excellent-password-generator",
      deployurl: "https://dcollan.github.io/excellent-password-generator/",
      tags: ["#HTML ", "#CSS ", "#JavaScript"],
    },
    {
      title: "Work Day Scheduler",
      image: workdayscheduler,
      description:
        "Work schedule web app that allows so that, once the user clicks save after entering in text to a textfield (whether it is before, in between, or after 9am-5pm), the entered text will yet remain after refreshing the page. There will be different timeblocks for past, present, and future, and while this is all done using Day.js, the current date will also be displayed at the top of the page.",
      githuburl: "https://github.com/dcollan/work-day-scheduler",
      deployurl: "https://dcollan.github.io/work-day-scheduler/",
      tags: ["#HTML ", "#CSS ", "#jQuery ", "#Day.js"],
    },
    {
      title: "Fantastic Weather App",
      image: fantasticweatherapp,
      description:
        "Weather website that returns the current weather for a specific entered city once the user clicks submit on a form field. Upon submit, the page will also return the predicted forecast for the next five days, where all of the searches the user has done will be displayed onscreen based on the local storage.",
      githuburl: "https://github.com/dcollan/fantastic-weather-app",
      deployurl: "https://dcollan.github.io/fantastic-weather-app/",
      tags: ["#HTML ", "#CSS ", "#jQuery ", "#AJAX ", "#APIs"],
    },
    {
      title: "Quiz Biz",
      image: quizbiz,
      description:
        "Quiz game based on a timer initiating as soon as the user clicks start. Once the user begins the quiz, the timer will countdown until zero, and there will be a 20 second deduction in seconds if the user answers a question incorrectly. Once the user has successfully answered all questions or the timer hits 0, the results page will display indicating the user's total seconds left, in which this will be used to be saved to local storage, and be compared with other saved high scores. The user will be required to enter their initials to submit the scores they have received after the game finishes.",
      githuburl: "https://github.com/dcollan/quiz-biz",
      deployurl: "https://dcollan.github.io/quiz-biz/",
      tags: ["#HTML ", "#CSS ", "#JavaScript"],
    },
    {
      title: "Express Note Taker",
      image: expressnotetaker,
      description:
        "Note-taking application that prompts user to begin by clicking on a button regarding whether to create a new note. Once the button is clicked, a text field will be provided, prompting the user to enter in a note title with a note description. There will be a save button provided, in which once the user clicks 'Save', the note will be saved and stored. User is also able to delete notes, if needed.",
      githuburl: "https://github.com/dcollan/express-note-taker",
      deployurl: "https://express-note-taker3-38445df5a0b6.herokuapp.com/",
      tags: ["#HTML ", "#CSS ", "#JavaScript ", "#Heroku ", "#Node.js ", "#Express.js"],
    },
    {
      title: "Unique SQL Employee Tracker",
      image: uniquesqlemployeetracker,
      description:
        "Employee tracker terminal app that uses mysql2 and inquirer. Provided with a selection of options to choose from, the user has the choice to view a list of employees, view a list of roles, view a list of departments, add new employees, add new departments, add new roles, or simply update existing employee roles, where they will also have the option to exit the application. It must be so that, when a user selects a choice, the table will be returned with department, role, or employee information (or where it is continuously updated by the user's entries, the updated table will also be returned). For a bonus, add a delete option to remove employees, departments, or roles from the database, including updating employee managers, viewing employees by manager, viewing employees by department, or viewing the total budget of any department.",
      githuburl: "https://github.com/dcollan/unique-sql-employee-tracker",
      deployurl: "https://www.youtube.com/watch?v=9AJjRyGpiNw",
      tags: ["#JavaScript ", "#MySQL ", "#Node.js ", "#Inquirer"],
    },
    {
      title: "Groovy README Generator",
      image: groovyreadmegenerator,
      description:
        "README.md generator terminal app that allows so that the user will be first provided with a series of prompts to answer, where all input data will then be stored into a new README.md file.",
      githuburl: "https://github.com/dcollan/groovy-readme-generator",
      deployurl: "https://www.youtube.com/watch?v=BGW5I8wH-Gg",
      tags: ["#JavaScript ", "#Node.js ", "#Inquirer"]
    },
    {
      title: "Super SVG Generator",
      image: supersvggenerator,
      description:
        "SVG generator terminal app that uses the Jest and Inquirer. Application is based on testing and generating a new SVG file that renders in the shape of a square, circle, or triangle based on the user's input as they select which shape to use and what colors to be included for both the text and the shape. The user will also be prompted to enter at most 3 text characters to be used inside of the shape. Once the user finishes all prompts, the new SVG file will then be generated inside of the examples folder that consists of what the user has entered.",
      githuburl: "https://github.com/dcollan/super-svg-generator",
      deployurl: "https://www.youtube.com/watch?v=hcGHbK2LqGY",
      tags: ["#JavaScript ", "#Node.js ", "#Inquirer ", "#Jest"]
    },
    {
      title: "Funky ORM App",
      image: funkyormapp,
      description:
        "Ecommerce CRUD app that will use Postman/Insomnia. In localhost:3001, the application will execute GET, POST, PUT, or DELETE commands on the database's queries based on the user's requests.",
      githuburl: "https://github.com/dcollan/funky-orm-app",
      deployurl: "https://www.youtube.com/watch?v=uBGy4H8eJ5Y",
      tags: ["#JavaScript ", "#Dotenv ", "#Express.js ", "#MySQL ", "#Sequelize ", "#Postman"]

    },
    {
      title: "True Tech Blog",
      image: truetechblog,
      description:
        "Fully-functional, responsive web app that allows for users to register a new account, and be able to login, where their information is stored inside a database. Once they have either created a new account or successfully logged in, they will be granted the option to be able to create a new post that can be shared in a global landing page (even displayed for users currently logged off). They will be able to include a title and a description to be included in their post, where the date posted will be shown in the post, including the name of the user. As long as the user is currently logged into the session, he/she will also have a dashboard page in which the person will be able to see all of their posts, and be able to update/delete any post. If updated/deleted, the post will be immediately updated in both the landing page and the dashboard page. If the user wishes to log out, they will also be able to do so by clicking on a 'logout' button that will terminate their current session, and be taken back into the landing page, where they will be given the option to log back in.",
      githuburl: "https://github.com/dcollan/true-tech-blog",
      deployurl: "https://blooming-peak-29118-29e0be2b30b7.herokuapp.com/",
      tags: ["#HBS ", "#JavaScript ", "#Node.js ", "#Bcrypt ", "#Sequelize ", "#Express.js ", "#MySQL "]
    },
    {
      title: "NoSQL Social Network API",
      image: nosqlsocialnetworkapi,
      description:
        "NoSQL application that performs CRUD operations using MongoDB. Working with an existing database, to perform these CRUD operations, Postman/Insomnia will be used to successfully work with 'user' and 'thought' schemas. In the process of running the server, GET, POST, PUT, and DELETE operations are capable of being executed by the user as long as they are inside of Postman/Insomnia using the source 'localhost:3001/'. In the process of deleting a user, their associated thoughts will also be deleted.",
      githuburl: "https://github.com/dcollan/nosql-social-network-api",
      deployurl: "https://www.youtube.com/watch?v=hpfKxUrX6IU",
      tags: ["#JavaScript ", "#Node.js ", "#Express.js ", "#Moment ", "#MongoDB ", "#Insomnia"]
    },
    {
      title: "Fabulous PWA Text Editor",
      image: fabulouspwatexteditor,
      description:
        "Progressive web application that successfully renders a text editor the user could open on localhost:3000. The basis of the application will use webpack plugins, including IndexedDB, so that it may be able to store the saved information the user has entered for referring to for later use, even when offline.",
      githuburl: "https://github.com/dcollan/fabulous-pwa-text-editor",
      deployurl: "https://fabulous-pwa-text-editor.onrender.com/",
      tags: ["#HTML ", "#CSS ", "#JavaScript ", "#Node.js ", "#Express.js ", "#Babel ", "#Insomnia"]
    },
  ];

  return (
    <div className="container-1">
      <div className="grid2">
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
  );
};

export default Applications;
