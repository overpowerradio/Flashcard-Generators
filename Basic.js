var inquirer = require('inquirer');

function Basic(front, back) {
	this.front = front;
	this.back = back;
	this.printInfo = function (){

		console.log("Front of the card: " + this.front + "\nBack of the card: " + this.back);


	};
}

module.exports = Basic;