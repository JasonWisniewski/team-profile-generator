// require all engineer, intern, employee files here
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// do not need to require employee

const inquirer = require('inquirer');

const fs = require('fs');
const generateHtml = require('./src/generateHTML');
// const generateJs = require('./assets/js/script');

// create array of employee questions for user to input
const teamArray = [];
console.log(teamArray);
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
    },
    {
      type: 'text',
      name: 'email',
      message: 'employee email'
    },
    {
      type: 'text',
      name: 'id',
      message: 'what is the employee id number?'
    }
  ])
  // this.employees.push(new manager(name, id, email, office number)) to array 
  // this createEmployee()
  .then(userInput => {
    const htmlCode = generateHtml(userInput)
    writeToFile(htmlCode);
    console.log('html file created successfully')
  });
  
}

init();

//const bob = new Character("bob", 30, 30, 25)
//console.log(bob.isAlive())

// get all the input from inquirer
// const manager = new Manager(inquirerAnswers.name, etc)
// push that into some kind of team array
// send that team array to the component that generates the html