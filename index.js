const inquirer = require('inquirer');

Assignment.prototype.startApp = function(){
  console.log('hey buddy');
  inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
  .then(({ name }) => {
    this.player = new Player(name);

    this.startNewBattle();
  });
};

