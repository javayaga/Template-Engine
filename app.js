const inquirer = require("inquirer");
const jest = require("jest");

return inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    { 
        type: "number",
        name: "id",
        message: "What is your ID number?"
    },
    {
        type: "list",
        name: "input",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"]
    }])