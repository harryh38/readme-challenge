const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);
// Function to prompt user for input
const promptUser = () => {
  return inquirer.prompt([
    // Questions go here
    {
      type: "input",
      name: "title",
      message: "what is your github repository",
    },
    {
      type: "input",
      name: "description",
      message: "What is a description of your repo",
    },
    {
      type: "input",
      name: "installation",
      message: "how do we install your repo",
    },
    {
      type: "input",
      name: "usage",
      message: "how do we use your application",
    },
    {
      type: "list",
      name: "license",
      message: "do you have a licence attached to your repo",
      choices: ["MIT", "Apache", "GNU"],
    },
    {
      type: "input",
      name: "contributing",
      message: "what are the names of those contributing to your code",
    },
    {
      type: "input",
      name: "tests",
      message: "how does your code run? how have you tested it?",
    },
    {
      type: "input",
      name: "questions",
      message: "Do you have any questions related to the repo/code?",
    },
  ]);
};

// Function to initialize the application
const init = async () => {
  try {
    const userResponses = await promptUser();
    const readmeContent = generateMarkdown(userResponses);
    console.log(userResponses);
    await writeFile("./generate-readme/readme.md", readmeContent);
    // You can write the generated README content to a file or log it to the console
    console.log("success");
  } catch (error) {
    console.error("Error initializing application:", error);
  }
};

// Call the init function
init();
