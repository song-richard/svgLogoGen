const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG');

//Array of shape choices
const shapeOptions = ['Circle', 'Triangle', 'Square'];

//Object of questions that will be prompting the end-user
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter up to three characters:',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a text color:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please enter a shape:',
        choices: shapeOptions.map((shape) => shape.toLocaleLowerCase()),
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color'
    }
]

//Function to initiate inquirier, generate logo, and use fs to write the logo into file system
const startGen = async () => {
    try {
        const answers = await inquirer.prompt(questions);
        const { text, textColor, shape, shapeColor } = answers;
        const svgLogo = generateSVG(text, textColor, shape, shapeColor);

        fs.writeFileSync('logo.svg', svgLogo);
        console.log('Generated logo.svg');
      } catch (error) {
        console.error('Error', error.message);
      }
}

//Calling startGen() to initiate function
startGen()