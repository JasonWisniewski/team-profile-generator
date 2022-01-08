const Intern = require ('../lib/Intern');
// const Employee = require('../lib/Employee');

test('creates school name and role', () => {
  const intern = new Intern('billy', 'Penn State' ,5 ,'billy@bob.com');
  
  expect(intern.name).toBe('billy');
  expect(intern.school).toBe('Penn State');
  expect(intern.role).toBe('Intern');
  expect(intern.email).toBe('billy@bob.com');
});