const Employee = require("../lib/Employee");

const generateTeam = (team) => {
  const generateManger = (manager) => {
    // !!! would create separate cards for Manager !!!
    return `
        <div class="card-body col-sm-12 col-md-4">
            <div style="border-style: solid; border-color:goldenrod; border-width: thick; box-shadow: 5px 5px 15px 5px #000000;">
                <div class="card-header bg-info text-white"  style="box-shadow: 5px #000000;">
                    <h5 class="card-title">${manager.getName()}</h5>
                    <h6 class="card-subtitle"><i class="fab fa-black-tie"></i>  Manager</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email:<a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office #: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
  };

  const generateEngineer = (engineer) => {
    // !!! would create separate cards for Engineer !!!
    return `
        <div class="card-body col-sm-12 col-md-4">
            <div style="border-style: solid; border-color:goldenrod; border-width: thick; box-shadow: 5px 5px 15px 5px #000000;">
                <div class="card-header bg-info text-white"  style="box-shadow: 5px #000000;">
                    <h5 class="card-title">${engineer.getName()}</h5>
                    <h6 class="card-subtitle"><i class="fas fa-cogs"></i>  ${engineer.getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        
        `;
  };

  const generateIntern = (intern) => {
    // !!! would create separate cards for Intern !!!
    return `
      <div class="card-body col-sm-12 col-md-4">
        <div style="border-style: solid; border-color:goldenrod; border-width: thick; box-shadow: 5px 5px 15px 5px #000000;">
            <div class="card-header bg-info text-white"  style="box-shadow: 5px #000000;">
                  <h5 class="card-title">${intern.getName()}</h5>
                  <h6 class="card-subtitle"><i class="fas fa-graduation-cap"></i>  ${intern.getRole()}</h6>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${intern.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                  <li class="list-group-item">School: ${intern.getSchool()}</li>
              </ul>
                        </div>
    </div>
      `;
  };

//   empty array for user data results
  const cardArray = [];

//   joins managers through filter & map
  cardArray.push(team
    // filters home employee function to call out Manager declaration
    .filter(employee => employee.getRole() === "Manager")
    // maps manager declaration to only call managers to the generate manager function
    .map(manager => generateManger(manager))
  );
//   joins engineers through filter & map
  cardArray.push(team
    // filters home employee function to call out Engineer declaration
    .filter(employee => employee.getRole() === "Engineer")
    // maps engineer declaration to only call engineer to the generate engineer function
    .map(engineer => generateEngineer(engineer))
  );

//   joins interns through filter & map
  cardArray.push(team
        // filters home employee function to call out Intern declaration
    .filter(employee => employee.getRole() === "Intern")
    // maps intern declaration to only call intern to the generate intern function
    .map(intern => generateIntern(intern))
  );

  return cardArray.join("");
};


// !!! Would generate the final HTML with the above parameters/cards included
function generateHtml(team) {
  return `
  <!DOCTYPE html>
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <title>Team Builder</title>
  </head>

  <body style="background-color: grey;">
    <div class="row">
        <div class="bg-info col-12 jumbotron container text-center">
            <h1 class="text-white" style="text-decoration:underline; text-shadow: 2px 2px #000000;">Your Professional Team:</h1>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="d-flex justify-content-between" style="width: 80%;">

            ${generateTeam(team)}

        </div>
    </div>
  </body>
    
    `;
};

// !!! export to use generateHtml for the writePage call? !!!
module.exports = { generateHtml };
