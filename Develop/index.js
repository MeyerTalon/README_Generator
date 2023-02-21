// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Write a description of your project.',
    'How can a user install your project?',
    'How can a user use your project?',
    'How can someone contribute to this project?',
    'How can the user test your project?',
    'What license do you want to use?',
    'What is your GitHub username?',
    'What is yout email address?',
];

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile('README.md', generateMarkdown(data), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README.md created successfullly!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
                validate: (input) => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter the title of your project.");
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
                validate: (input) => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter a description of your project.");
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
                validate: (input) => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter a how to install your project.");
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
                validate: (input) => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter how to use your project.");
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[4],
                validate: (input) => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter how to contribute to your project.");
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'test',
                message: questions[5],
                validate: (input) => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter how to test your project.");
                        return false;
                    }
                },
            },
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: ['MIT License', 'Apache License 2.0', 'ISC License', 'No License'],
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7],
                validate: (input) => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please enter your GitHub username.");
                        return false;
                    }
                },
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
                validate: (input) => {
                    if (input) {
                        return true;
                    } else {
                        console.log("Please your email.");
                        return false;
                    }
                },
            },
        ])
        .then(writeToFile);
}

// Function call to initialize app
init();

