const generateTeam = (team) => {
  const generateManger = (manager) => {
    // !!! would create separate cards for Manager !!!
    return `
        <div class="card-body col-sm-12 col-md-4">
            <div class="border border-warning">
                <div class="card-header bg-info text-white">
                    <h5 class="card-title">${manager.getName()}</h5>
                    <h6 class="card-subtitle"><i class="fab fa-black-tie"></i>  Manager</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email:<a href="${manager.getEmail()}"></a></li>
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
            <div class="border border-warning">
                <div class="card-header">
                    <h5 class="card-title bg-info text-white">${engineer.getName()}</h5>
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
          <div class="border border-warning">
              <div class="card-header">
                  <h5 class="card-titl bg-info text-whitee">${intern.getName()}</h5>
                  <h6 class="card-subtitle"><i class="fas fa-graduation-cap"></i>  ${intern.getName()}</h6>
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
};

// !!! Need to join workingTeam into one collective? Probably as workingTeam? !!!

// !!! Would generate the final HTML with the above parameters/cards included
function generateHtml() {
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
            <h1 class="text-white" style="text-decoration:underline;">Your Professional Team:</h1>
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
