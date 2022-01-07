const inquirer = require('inquirer');
// const Employee = require("./lib/Employee")
const fs = require('fs');
const generateHtml = require('./src/generateHTML');
// const generateJs = require('./assets/js/script');

// create array of employee questions for user to input
const questions = [];

// create a function to write html 
function writeToFile(htmlCode) {
  fs.writeFileSync("./output/index.html", htmlCode)
}

// create function to call inquirer
function init (userInput){
  return inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: 'What is your name?'
    }
  ]).then(userInput => {
    const htmlCode = generateHtml(userInput)
    writeToFile(htmlCode);
    console.log(htmlCode);
  });
}

init();

//const bob = new Character("bob", 30, 30, 25)
//console.log(bob.isAlive())

// get all the input from inquirer
// const manager = new Manager(inquirerAnswers.name, etc)
// push that into some kind of team array
// send that team array to the component that generates the html