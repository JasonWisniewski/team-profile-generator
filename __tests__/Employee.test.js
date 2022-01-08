const Employee = require('../lib/Employee.js');

// const any thing that employee requires to run ex const Potion = ('../lib/Potion);
// jest.mock(../lib/Potion.js)

test('Creates an employee template', () => {
  const employee = new Employee('Blake', 999,'blake@bob.com')

  expect(employee.name).toBe('Blake');
  expect(employee.id).toEqual(999);
  expect(employee.email).toBe('blake@bob.com');
})