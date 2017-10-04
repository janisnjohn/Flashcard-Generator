
var fs = require("fs");
//dependancy inquirer npm package
var inquirer = require('inquirer');

// constructor function to creat basic cards

function ClozeCard(text, cloze){
	// if(this instanceof ClozeCard){
		this.text = text;
		this.cloze = cloze;
		this.partial = function(){
			var partial = text.replace(cloze, "...");
			console.log(partial);
			console.log(text);

		}
};
	// } 	else{
	// 	return new ClozeCard(text,cloze);