//WHEN I am prompted for text
//THEN I can enter up to three characters

const inquirer = require('inquirer')
const fs = require('fs')
const generateSVG = require('./lib/generateSVG')

const shapeOptions = ['Circle', 'Triangle', 'Square']

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

const startGen = async () => {
    try {
        const answers = await inquirer.prompt(questions);
        const { text, textColor, shape, shapeColor } = answers;
        const svgLogo = generateSVG(text, textColor, shape, shapeColor);

        await fs.writeFile('logo.svg', svgLogo);
        console.log('Generated logo.svg');
      } catch (error) {
        console.error('Error', error.message);
      }
}

startGen()