//WHEN I am prompted for text
//THEN I can enter up to three characters

const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'initialInput',
        message: 'Please enter up to three characters:'
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