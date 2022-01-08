const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name, special, id, email){
    super(name, id, email)

    this.special = special;
    this.role = 'Intern';

  };
  getSchool (){
    return this.special;
  };
  getRole (){
    // over ride to provide engineer
    return this.role;
  }
}

module.exports = Intern