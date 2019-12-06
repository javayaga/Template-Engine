const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Emgineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const employeeData = [

]

const managerQuestions = [{
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
    name: "email",
    message: "What is the manager's email address?"
},
{
    type: "input",
    name: "office",
    message: "What is the manager's office number?",
},
{
    type: "list",
    name: "addEmployee",
    message: "Would you like to add an additional employee?",
    choices: ["Engineer", "Intern", "I have no more employees to add"]
}];


const engineerQuestions = [{
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    { 
        type: "number",
        name: "id",
        message: "What is the employee's ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the employee's GitHub username?"
    },
    {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add an additional employee?",
        choices: ["Engineer", "Intern", "I have no more employees to add"]
    }];



return inquirer
    .prompt(managerQuestions)
    .then((responses) => {
        const {name, id, email, office, addEmployee} = responses;
        console.log(addEmployee);
        // if (addEmployee = Engineer) {
        //     inquirer.prompt(engineerQuestions)
        // }
});

