// require job variables
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// require inquirer
const inquirer = require('inquirer');
// require fs
const fs = require('fs');

// Empty team array for results
const team = [];

const init = () => {
    console.log("It's time to build your team!");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is your manager's name?",
                // this needs rubular
                validate: (response) => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please insert your manager's name!")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is your manager's id number?",
                // this needs rubular
                validate: (response) => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please insert your managers id number!")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is your manager's email address?",
                // this needs rubular
                validate: (response) => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please insert your managers id number!")
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "What is your manager's office phone number?",
                 // this needs rubular
                validate: (response) => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please insert your managers id number!")
                        return false
                    }
                }
            }
        ])
        .then((responses) => {
            const manager = new Manager(
                responses.managerName,
                responses.managerId,
                responses.managerEmail,
                responses.managerOffice
            );
            team.push(manager);
            console.log(team);
        })
}

// function to start application
init();

