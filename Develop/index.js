// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
       type: "input",
       name: "title",
       message: "add a title for this project.",
    },
    {
        type: "input",
        name: "description",
        message: "describe the functionality of this project.",
    },
    {
       type: "input",
       name: "screenshot",
       message: "provide relative path to desired image for project preview.", 
    },
    {
        type: "input",
        name: "link",
        message: "provide a link to access your application"
    },
    {
        type: "checkbox",
        name: "license",
        message: "select the desired license for this project.",
        choices: ["apache-2.0", "mit", "bsd-2-clause", "bsd-3-clause", "mpl-2.0", "bsl-1.0", "None"],
    },
    {
        type: "input",
        name: "require",
        message: "list any project dependencies here.",
    },
    {
        type: "input",
        name: "usage",
        message: "describe what your project does and why its usefull.",
    },
    {
        type: "input",
        name: "contribution",
        message: "list any contribution guide lines on this project",
    },  
    {
        type: "input",
        name: "creator",
        message: "write your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address."
    },
    {
        type: "input",
        name: "test",
        message: "provide a walkthrough of any required tests.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Your Professional README.md File...");
        writeToFile("./README.md", generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
