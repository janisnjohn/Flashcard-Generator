
var fs = require("fs");
//dependancy inquirer npm package
var inquirer = require('inquirer');

// constructor function to create cloze cards

function ClozeCard(text, cloze){
	if(this instanceof ClozeCard){
		this.text = text;
		this.cloze = cloze;
	} 	else{
	 	return new ClozeCard(text,cloze);
	}
};
module.exports = ClozeCard;