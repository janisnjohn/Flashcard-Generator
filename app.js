var fs = require('fs');
var inquirer = require('inquirer');
var BasicCard = require("./BasicCard.js"); 
var ClozeCard = require("./ClozeCard.js");

// var newBasicCard = new (front, back);
// var newClozeCard = new(text, cloze);

start();
function start() {
inquirer.prompt([
	{
	name: "choices",
	type: 'list',
	message: 'Please choose a flash card.',
	choices: ["Basic Card", "Cloze Card", "All Cards"]
	},
])

.then(function(data){

	if (data.choices === "Basic Card") {
		console.log("You have chosen: " + data.choices);
		basicCard();		
	} else if (data.choices === "Cloze Card"){
		console.log("You have chosen: " + data.choices);
		clozeCard();
	} else if (data.choices ==="All Cards"){
		console.log("You have chosen: " + data.choices);
		allCards();
	}
})
};

function basicCard (){
inquirer.prompt([
	{
	name: "front",
	message: "What you want to say on the front of the flashcard?",
	type: "input"
	},
	{
	name: "back",
	message: "What you want on the back of the flashcard?",
	type: "input"
	}

]).then(function(output){
var newBasicCard = new BasicCard(output.front, output.back);
fs.appendFile("log.txt", output.front + ", " + output.back + "\r\n", function(err, output){
	if (err) {
		return console.log(err);
	}
});
		console.log("Front of the card is: " + output.front + "\r\nBack of the card is: " + output.back);

})
};

function clozeCard (){
inquirer.prompt([
	{
	name: "text",
	message: "What you want to say on the front of the flashcard?",
	type: "input"
	},
	{
	name: "cloze",
	message: "What you want on the back of the flashcard?",
	type: "input"
	}

]).then(function(output){
var newClozeCard = new ClozeCard(output.text, output.cloze);
fs.appendFile("log.txt", output.text + ", " + output.cloze + "\r\n", function(err, output) {
	if (err){
		return console.log(err);
 }
})
		console.log("Front of the card is: " + output.text + "\r\nBack of the card is: " + output.cloze + "\r\n Cloze Card: ");
		newClozeCard.partial();

})
}; 

function allCards(){
	fs.readFile("log.txt", "utf8", function(err, output){
		output = output.split(",");
		if (err) throw err;
		console.log("\n\r" + output);
	})

};

