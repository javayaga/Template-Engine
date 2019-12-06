const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Emgineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const employeeData = [

]

function managerPrompt() {
    return inquirer
    .prompt([{
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    { 
        type: "number",
        name: "id",
        message: "What is the manager's ID number?"
    },
    {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
    },
    {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add an additional employee?"
    }])
    .then((responses) => {
        const {name, id, office, addEmployee} = responses;
        console.log(name);
        console.log(id);
        console.log(office);
        console.log(addEmployee);
    })
};

managerPrompt();