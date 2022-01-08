const Manager = require ('../lib/Manager');
// const Employee = require('../lib/Employee');

test('creates office number name and role', () => {
  const manager = new Manager('bob', 436 ,5 ,'bob@bob.com');

  expect(manager.name).toBe('bob');
  expect(manager.special).toEqual(436);
  expect(manager.role).toBe('Manager');
  expect(manager.email).toBe('bob@bob.com');
});
