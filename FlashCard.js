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

var propertyC = new ClozeCard("If a variable is apart of an object, it's called a property.", "property");
var methodC = new ClozeCard("A function is called a method, when it's apart of an object.", "method");
var keysC = new ClozeCard("The propertes of an object are variables that we call keys to which you will then assign a value to.", "keys");


var clozeList = [propertyC, methodC, keysC];
var clozeCount = 0;



 function clozelearning() {
    if (clozeCount < 3) {
      var i = clozeCount;

      inquirer.prompt([
      {
        name: "question",
        message: clozeList[i].text.replace(clozeList[i].cloze, "....")
      },
        ]).then(function(answers) {
        console.log("\nThe correct answer: " + clozeList[i].cloze + "\n" + clozeList[i].text + "\n");
        clozeCount++;
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

 // console.log(clozeList[0].text.replace(clozeList[0].cloze, "...."));


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

