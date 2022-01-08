const Employee = require('./Employee.js');

class Intern extends Employee {
  constructor(name, school, id, email){
    super(name, id, email)

    this.school = school;
    this.role = 'Intern';

  };
  getSchool (){
    return this.school;
  };
  getRole (){
    // over ride to provide engineer
    return this.role;
  }
}

module.exports = Intern