const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./lib/document.js');

// Creates a list of questions for the user to answer about their desired shape.
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters for your logo.',
        validate: function(input) {
            if (input.length > 3) {
                return 'Please enter 3 characters or less.';
            } else {
            return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please choose a color (or a hexadecimal number) for the text in your logo.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please pick a shape for your logo.',
        choices: ['triangle', 'square', 'circle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please choose a color (or a hexadecimal number) for your background color.'
    }
];

// Function to write the file using the generateDocument function from document.js
function writeToFile(data) {
    const fileTitle = data.text
    const document = generateSvg(data.text, data.textColor, data.shape, data.color);

    fs.writeFile(`./examples/${fileTitle}_logo.svg`, document, (err) => 
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}

// Function to put it all together
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(data);
        })
}

init();