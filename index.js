const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const markdownGenerator = require('./utils/generateMarkdown');

const userInputQuestions = [
    { type: 'input', name: 'github', message: 'Username?' },
    { type: 'input', name: 'email', message: 'Email address?' },
    { type: 'input', name: 'title', message: 'Project title?' },
    { type: 'input', name: 'description', message: 'Description of project?' },
    { type: 'list', name: 'license', message: 'License type?', choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'] },
    { type: 'input', name: 'installation', message: 'Command to install dependencies?', default: 'npm i' },
    { type: 'input', name: 'test', message: 'Command to run tests?', default: 'npm test' },
    { type: 'input', name: 'usage', message: 'Information about using the repo?' },
    { type: 'input', name: 'contributing', message: 'Information about contributing to the repo?' },
];

const createReadmeFile = (fileName, data) => fs.writeFileSync(path.join(process.cwd(), fileName), data);

const startApplication = () => {
    inquirer.prompt(userInputQuestions).then((responses) => {
        console.log('Creating README...');
        createReadmeFile('README.md', markdownGenerator({ ...responses }));
    });
}

startApplication();
