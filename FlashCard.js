var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard.js");
var Basic = require("./Basic.js");

//Changes Made
var basicCards = [property, method, keys, values];
var basicCount = basicCards.length;

var property = new Basic("If a variable is apart of an object, what is it called?", "A property");
var method = new Basic("If a function is part of an object, what is it called?", "A method");
var keys = new Basic("What do you call the name of the variables within an object?", "Keys");
var values = new Basic("What is the other part of a key that makes up a property within an object?", "A value");

var clozeList = [propertyC, methodC, keysC];
var clozeCount = clozeList.length;

var propertyC = new ClozeCard("If a variable is apart of an object, it's called a property.", "property");
var methodC = new ClozeCard("If a function is called an [.......], when it's apart of an object", "method.");
var keysC = new ClozeCard("The propertes of an object are variables that we call [......] to which you will then assign a value to.", "Keys");



 function clozelearning() {
    if (clozeCount > 0) {
    
      inquirer.prompt([
      {
        name: "question",
        message: propertyC.text.replace(propertyC.cloze, "....")
      },
        ]).then(function(answers) {
        console.log("Full Text: " + propertyC.text);
        clozeCount--;
        clozelearning()
        });
    }  
  }
function basiclearning() {
		if (basicCount > 0) {
		
			inquirer.prompt([
			{
				name: "question",
				message: property.front
			},
				]).then(function(answers) {
				console.log("The correct answer is: " + property.back);
        basicCount--;
				basiclearning()
				});
		}  
	}

 

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
        return 'You must choose at least one learning style.';
      }
      return true;
    }
  }
]).then(function (answers) {

	if (this.answers == 'Basic Card') {
				basiclearning();
	}

  else {
    clozelearning();
  }
  // console.log(JSON.stringify(answers, null, '  '));
});

