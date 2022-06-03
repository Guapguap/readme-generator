const fs = require("fs");
const inquirer = require("inquirer");

// const generateReadme = require("./utils/generateReadme")

//Prompt the user questions to populate the README.md
const promptUser = () => {

    // questions will now be prompted with validators 
    return inquirer.prompt([

        // username prompt 
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false; 
                }
            }
        },

         // email prompt 
        {
            type: "input",
            name: "email",
            message: "Please enter your email: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false; 
                }
            }
        },

         // title prompt 
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name.');
                    return false; 
                }
            }
        },

         // decription prompt 
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false; 
                }
            }
        },

         // installation prompt 
        {
            type: "input",
            name: "installation",
            message: "Describe the steps in the installation process: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter steps required to install your project.');
                    return false; 
                }
            }
        },

         // usage prompt 
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description.');
                    return false; 
                }
            }
        },

         // license prompt 
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "GNU",
                "MIT",
                "Mozilla",
            ],
            default: ["MIT"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license: ');
                    return false; 
                }
            }
        },

         // contributor prompt 
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this project?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the contributor(s) to this project: ');
                    return false; 
                }
            }
        },

         // test prompt 
        {
            type: "input",
            name: "tests",
            message: "If applicable, provide any tests written for your application: "
        },

         // questions prompt 
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue? "
        }
    
    ]);
} 

// function call to initialize program
promptUser()
// returns user input 
.then(answers => {
    return generateReadme(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catches errors 
.catch(err => {
    console.log(err)
})

// function to write README file using file system 
const writeFile = data => {

    fs.writeFile('README.md', data, err => {

        // logs in the console that there is an error
        if (err) {
            console.log(err);
            return;
        
        // logs when the readme is successfully created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

