const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");
// TODO: Create an array of questionss for user input
const questions = ["What is the title of your project?","Provide a short description explaining your project: ", "What are the steps required to install your project?", 
"Please provide instructions and examples for use: ", "Please select an suitable license for your project: ", "Please include the link to the license file: ", 
"Please include ways that other developers can contribute to your project: ", "Enter your GitHub username: ", "Enter your email address: "];

const promptUser = () => {
    console.log('You will be propmt with a number of questionss to provide more details about your project. Please answer all the questions to generate your README file.\n')
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: empty,
        }, 
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: empty
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: empty
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: empty
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: ["Apache 2.0 License", "Boost Software License 1.0", 
            "BSD 3-Clause License", "Eclipse Public License 1.0", "GNU GPL v3", "GNU GPL v2",
            "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "IBM Public License Version 1.0", 
            "ISC License", "The MIT License", "Mozilla Public License 2.0", "Unlicense License"],
            validate: empty
        },
        {
            type: 'input',
            name: 'link',
            message: questions[5],
            validate: empty
        },
        {
            type: 'input',
            name: 'contributing',
            message: questions[6],
            validate: empty
        },
        {
            type: 'input',
            name: 'username',
            message: questions[7],
            validate: empty
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
            validate: empty
        },
    ])
}

const empty = (input) => {
    if (input == '' || !input) {
        return 'Please provide some details! (Write N/a if not applicable)!'
    }
    return true;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data)
    .then(()=> console.log('Successfully create new readme file!'));
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => writeToFile('README.md', generate(answers)));
}

// Function call to initialize app
init();
