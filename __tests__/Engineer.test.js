const Engineer = require ('../lib/Engineer');

test('Creates a github role, and email', () => {
  const engineer = new Engineer('Jake', 'jakeSmith', 'Engineer', 'jake@bob.com')

  expect(engineer.name).toBe('Jake');
  expect(engineer.special).toBe('jakeSmith');
  expect(engineer.role).toBe('Engineer');
  expect(engineer.email).toBe('jake@bob.com');
})