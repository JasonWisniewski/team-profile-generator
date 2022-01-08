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
function employeeQ (extraPrompt, role){
   inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your work email address?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'what is your employee id number?'
    }
  ])
  
  // employees.push(new manager(name, id, email, office number)) to array 
  // this createEmployee()
  .then(userInput => {
    if(role === 'manager'){
      teamArray.push(new Manager(userInput.name, extraPrompt, userInput.id, userInput.email))
    }
    else if (role === 'intern'){
      teamArray.push(new Intern(userInput.name, extraPrompt, userInput.id, userInput.email))      
    }
    else if (role === 'engineer'){
      teamArray.push(new Engineer(userInput.name, extraPrompt, userInput.id, userInput.email))      
    }
    createEmployeeQ()

    
  });
  
}

function createManagerQ (){
  inquirer.prompt([
    {
      type: 'input',
      name: 'number',
      message: 'What is the office number?'
    }
]).then(({ number }) => {
  employeeQ(number, 'manager')
})
}

function createEmployeeQ (){
  inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Do you want to create another employee?',
      choices: ['yes', 'no']
    }
  ]).then(({ employee }) => {
    if(employee == 'yes'){
      whichEmployeeQ()
    } else {
      const htmlCode = generateHtml(teamArray)
      writeToFile(htmlCode);
      console.log('html file created successfully')
      console.log(teamArray)
    }
  })
}

function whichEmployeeQ (){
  inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Which employee do you want to create?',
      choices: ['engineer', 'intern']
    }
  ]).then(({ employee }) => {
    if(employee == 'engineer'){
      createEngineerQ()
    } else {
      createInternQ()
    }
  })
} 

function createInternQ (){
  inquirer.prompt([
    {
      type: 'input',
      name: 'school',
      message: 'What is the name of their school?'
    }
]).then(({ school }) => {
  employeeQ(school, 'intern')
})
}

function createEngineerQ (){
  inquirer.prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is the name of their github account?'
    }
]).then(({ github }) => {
  employeeQ(github, 'engineer')
})
}

createManagerQ ()

//const bob = new Character("bob", 30, 30, 25)
//console.log(bob.isAlive())

// get all the input from inquirer
// const manager = new Manager(inquirerAnswers.name, etc)
// push that into some kind of team array
// send that team array to the component that generates the html