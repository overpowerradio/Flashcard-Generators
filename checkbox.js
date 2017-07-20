
var inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'checkbox',
    message: 'Select Your Flash Card Style',
    name: 'learning style',
    choices: [
      {
        name: 'Basic Card'
      },
      {
        name: 'Cloze Card'
      },     
    ],
    validate: function (answer) {
      if (answer.length < 1) {
        return 'You must choose at least one topping.';
      }
      return true;
    }
  }
]).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});