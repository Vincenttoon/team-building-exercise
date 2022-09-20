// require job variables
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// require inquirer
const inquirer = require('inquirer');
// require fs
const fs = require('fs');

const init = () => {
    console.log("It's time to build your team!");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is your managers name?'
            }
        ])
}

// function to start application
init();

