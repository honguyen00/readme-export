const { writeFile } = require("fs").promises;
const inquirer = require("requirer");
const generate = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "Add an image at the end of this section?(Y/N)","What are the steps required to install your project?", 
"Please provide instructions and examples for use: ", "Please select an suitable license for your project: ", "Please include the link to the license file: ", "Please include ways that other developers can contribute to your project: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
