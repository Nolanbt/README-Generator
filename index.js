const inquirer = require("inquirer");
const fs = require("fs");
// array of questions for user
const questions = [
"What is the title?",
"What is the description of this project?",
"Table of Contents",
"Installation",
"Usage",
"License",
"Contributing?",
"Tests",
"Questions"
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("newREAMDE.md", JSON.stringify(response), function (err){
        if (err){
            return console.log(err);
        }
        
        console.log("New Readme Generated!")
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
