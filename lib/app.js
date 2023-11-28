//WHEN I am prompted for text
//THEN I can enter up to three characters

const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: '',
        message: ''
    },
    {
        type: 'input',
        name: '',
        message: ''
    },
    {
        type: 'input',
        name: '',
        message: ''
    },
]

const startGen = async () => {
    try {
        const answers = await inquirer.prompt
    } catch (error) {
        console.error(error)
    }
}