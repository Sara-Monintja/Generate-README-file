const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generate-markdown');
const fs = require('fs/promises');
const path = require('path');

// Goal: generate a readme file for future projects

// question to ask: 
// what is project title

inquirer.prompt([
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title'
    },
    {
        type: 'list',
        message: "What is the license?",
        name: 'license',
        choices: [
            'MIT', 'GPL-2', 'Apache-V2', 'No License'
        ]
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'github',
    },
    {
        type:  'input',
        message: "What is your email address?",
        name: 'email'
    }
    
]).then((ans) => {
    
    console.log(ans);

    const markdown = generateMarkdown(ans);

// once asked
// generate a readme file based on the responses
const outputPath = path.join(__dirname, 'output', 'generated.md');

fs.writeFile(outputPath, markdown, 'utf-8')
    .then(() => {
        console.log('generated!')
    });
})



// github


// description, instalation instructions, usage information, contribution guidelines, and test instructions
// email
// github


// in the output folder

