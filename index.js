const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const createREADME = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

// Questions for README
function promptUser() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log("Please type a project title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: ",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please type a project title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log("Please type a project title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please type a project title!");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log("Please type a project title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?",
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log("Please type a project title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?",
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log("Please type a project title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub unsername: ",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("Please type a project title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please type a project title!");
                    return false;
                }
            }
        },
    ]);
}

async function init() {
    try {
        const data = await promptUser();
        const generateContent = createREADME(data);

        await writeFileAsync('./dist/README.md', generateContent);
        console.log("Successfully created README.md");
    } catch(err) {
        console.log(err);
    }
}

init()