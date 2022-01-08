const Employee = require('./Employee.js')

class Engineer extends Employee {
  constructor(name,  special, id ,email){
    super(name, id, email);

    this.special = special;
    this.role = 'Engineer';
  };
  getGithub (){
    return this.special;
  };
  getRole (){
    // over ride to provide engineer
    return this.role;
  }
}

module.exports = Engineer