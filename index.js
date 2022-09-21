// VINCE NOTE: Don't forget to add links that helped you learn in your readme!
const { generateHtml } = require("./src/sample.js");
const { writeFile } = require("./utils/writePage.js");

// require job variables
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// require inquirer
const inquirer = require("inquirer");
// require fs
const fs = require("fs");

// Empty team array for results
const teamArray = [];

const init = () => {
  console.log("It's time to build your team!");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your manager's name?",
        // validate for input
        validate: (response) => {
          if (response !== '') {
            return true;
          } else {
            return "Please insert your manager's name!";
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your manager's id number?",
        // validate for number return
        validate: (response) => {
            const check = response.match(/^[0-9]+$/)
          if (check) {
            return true;
          } else {
            return "Please insert a valid id number!";
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your manager's email address?",
        // validate for email address
        validate: (response) => {
            const check = response.match(/^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.]+.[a-zA-Z]+$/)
          if (check) {
            return true;
          } else {
            return "Please insert a valid email address!";
          }
        },
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is your manager's office phone number?",
        // validate or valid 10 digit phone number
        validate: (response) => {
            const check = response.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
          if (check) {
            return true;
          } else {
            return "Please insert a valid phone number!";
          }
        },
      },
    ])
    // push code into new manager class.
    .then((responses) => {
      const manager = new Manager(
        responses.managerName,
        responses.managerId,
        responses.managerEmail,
        responses.managerOffice
      );
      // push class into empty array for later use
      teamArray.push(manager);
      // call function for user to add more people
      // DEVELOPER NOTE! I wih I would have discovered this in project 9
      addTeamMembers();
    });

  // DEVELOPER NOTE: part two. If elses didn't work, had to find another solution online
  function addTeamMembers() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamSelect",
          message: "Please select a team member you would like to add:",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to select another team member",
          ],
        },
      ])
      .then((response) => {
        // use switch and case:
        switch (response.teamSelect) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            console.log("You're team is now complete!");
            buildPage();
            break;
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
        // check for valid name
          validate: (response) => {
            if (response !== "") {
              return true;
            } else {
              return "Please insert your engineer's name!";
            }
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is your engineer's id number?",
          // validate for number return
          validate: (response) => {
            const check = response.match(/^[0-9]+$/)
            if (check) {
              return true;
            } else {
              return "Please insert a valid id number!";
            }
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is your engineer's email address?",
          // validate for email address
          validate: (response) => {
            const check = response.match(/^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.]+.[a-zA-Z]+$/)
            if (check) {
              return true;
            } else {
              return "Please insert a valid email address!";
            }
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is your engineer's Github Username?",
          // validate for input
          validate: (response) => {
            if (response !== '') {
              return true;
            } else {
              return "Please insert a valid Github username";
            }
          },
        },
      ])
      .then((responses) => {
        const engineer = new Engineer(
          responses.engineerName,
          responses.engineerId,
          responses.engineerEmail,
          responses.engineerGithub
        );
        // push class into empty array for later use
        teamArray.push(engineer);
        // call function for user to add more people
        addTeamMembers();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is your intern's name?",
          // validate for input
          validate: (response) => {
            if (response !== "") {
              return true;
            } else {
              console.log("Please insert your intern's name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is your intern's id number?",
          // validate for number return
          validate: (response) => {
            const check = response.match(/^[0-9]+$/)
            if (check) {
              return true;
            } else {
              console.log("Please insert a valid id number!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is your intern's email address?",
          // validate for email address
          validate: (response) => {
            const check = response.match(/^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.]+.[a-zA-Z]+$/)
            if (check) {
              return true;
            } else {
              console.log("Please insert a valid email address!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does/did your intern attend?",
          // validate for input
          validate: (response) => {
            if (response !== "") {
              return true;
            } else {
              console.log("Please insert your intern's school name!");
              return false;
            }
          },
        },
      ])
      .then((responses) => {
        const intern = new Intern(
          responses.internName,
          responses.internId,
          responses.internEmail,
          responses.internSchool
        );
        // push class into empty array for later use
        teamArray.push(intern);
        // call function for user to add more people
        addTeamMembers();
      });
  }

//   writes page using the teamArray data into the generateHtml function from sample.js
  function buildPage() {
    return new Promise((resolve, reject) => {
      fs.writeFile("./dist/index.html", generateHtml(teamArray), (err) => {
        if (err) {
          reject(err);
          return "Something went wrong. Please try again later.";
        }

        resolve({
          ok: true,
          message: "Team Page Created!",
        });
      });
    });
  }
};

// function to start application
init();

// VINCE NOTE: Don't forget to add links that helped you learn in your readme!
