const Employee = require('./Employee.js')

class Engineer extends Employee {
  constructor(name,  github, id ,email){
    super(name, id, email);

    this.github = github;
    this.role = 'Engineer';
  };
  getGithub (){
    return this.github;
  };
  getRole (){
    // over ride to provide engineer
    return this.role;
  }
}

module.exports = Engineer