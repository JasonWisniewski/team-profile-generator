const inquirer = require("inquirer");


class Employee {
  constructor(name = ''){
    this.name = name;
    this.id = 1;
    this.email = 'jwizinpa95@gmail.com'
  };
  getName(){
    inquirer
      .prompt({
        type: 'text',
        name: 'name',
        message: "what is the name of your employees?"
      })
      .then(({ name })) => {
        this.employee = new Employee(name);
        this.getId()
      }
  }

};