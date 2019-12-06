const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Emgineer = require("./lib/engineer");
const Intern = require("./lib/intern");

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
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"]
    }])
    .then((responses) => {
        const {name, id, role} = responses;
        console.log(name);
        console.log(id);
        console.log(role);

    })