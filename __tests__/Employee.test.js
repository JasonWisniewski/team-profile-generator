const Employee = require('../lib/Employee.js');

// const any thing that employee requires to run ex const Potion = ('../lib/Potion);
// jest.mock(../lib/Potion.js)

test('creates an employee object', () => {
  const employee = new Employee('mark',26);

  expect(employee.name).toBe('mark')

})