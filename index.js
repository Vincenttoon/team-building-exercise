// VINCE NOTE: Don't forget to add links that helped you learn in your readme!

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
        // push code into new manager class.
        .then((responses) => {
            const manager = new Manager(
                responses.managerName,
                responses.managerId,
                responses.managerEmail,
                responses.managerOffice
            );
            // push class into empty array for later use
            team.push(manager);
            // call function for user to add more people
            // DEVELOPER NOTE! I SHOULD HAVE THOUGHT OF THIS IN PROJECT 9
            addTeamMembers()
        })
};

 // DEVELOPER NOTE: part two. If elses didn't work, had to find another solution online
function addTeamMembers() {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'teamSelect',
                message: 'Please select a team member you would like to add:',
                choices: ['Engineer', 'Intern', "I don't want to select another team member"]
            },

        ])
        .then((response) => {
            // use switch and case:
            switch (response.teamSelect) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    console.log("You're team is now complete!")
                    console.log(team)
                    break;
            }
        })
}

function addEngineer() {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?",
            // this needs rubular
            validate: (response) => {
                if (response) {
                    return true;
                } else {
                    console.log("Please insert your engineer's name!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is your engineer's id number?",
            // this needs rubular
            validate: (response) => {
                if (response) {
                    return true;
                } else {
                    console.log("Please insert your engineer's id number!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email address?",
            // this needs rubular
            validate: (response) => {
                if (response) {
                    return true;
                } else {
                    console.log("Please insert your engineer's id number!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is your engineer's Github Username?",
             // this needs rubular
            validate: (response) => {
                if (response) {
                    return true;
                } else {
                    console.log("Please insert your engineer's id number!")
                    return false
                }
            }
        }
    ])
    .then((responses) => {
        const engineer = new Engineer(
            responses.engineerName,
            responses.engineerId,
            responses.engineerEmail,
            responses.engineerGithub
        );
        // push class into empty array for later use
        team.push(engineer);
        // call function for user to add more people
        addTeamMembers()
    })
}

function addIntern() {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?",
            // this needs rubular
            validate: (response) => {
                if (response) {
                    return true;
                } else {
                    console.log("Please insert your intern's name!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is your intern's id number?",
            // this needs rubular
            validate: (response) => {
                if (response) {
                    return true;
                } else {
                    console.log("Please insert your intern's id number!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is your intern's email address?",
            // this needs rubular
            validate: (response) => {
                if (response) {
                    return true;
                } else {
                    console.log("Please insert your intern's id number!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'internGithub',
            message: "What is your intern's Github Username?",
             // this needs rubular
            validate: (response) => {
                if (response) {
                    return true;
                } else {
                    console.log("Please insert your intern's id number!")
                    return false
                }
            }
        }
    ])
    .then((responses) => {
        const intern = new Intern(
            responses.internName,
            responses.internId,
            responses.internEmail,
            responses.internGithub
        );
        // push class into empty array for later use
        team.push(intern);
        // call function for user to add more people
        addTeamMembers()
    })
}



// function to start application
init();

// VINCE NOTE: Don't forget to add links that helped you learn in your readme!

