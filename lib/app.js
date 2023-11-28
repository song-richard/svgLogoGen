//WHEN I am prompted for text
//THEN I can enter up to three characters

const inquirer = require('inquirer')

const shapeOptions = ['Circle', 'Triangle', 'Square']

const questions = [
    {
        type: 'input',
        name: 'initialInput',
        message: 'Please enter up to three characters:'
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter a text color:'
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'Please enter a shape:',
        choices: shapeOptions,
    },
]

const startGen = async () => {
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers)
    } catch (error) {
        console.error(error)
    }
}

startGen()