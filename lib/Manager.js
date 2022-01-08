const Employee = require('./Employee.js')

class Manager extends Employee {
  constructor(name, special, id, email){
    super(name, id, email);

    this.special = special;
    this.role = "Manager";

  };
  getOfficeNumber (){
    return'test'
  }
  getRole (){
    // overridden to return manager
    return this.role
  }
}

module.exports = Manager