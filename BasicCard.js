//dependancy inquirer npm package
// var inquirer = require('inquirer');
// var ClozeCard = require("./ClozeCard");
var fs = require ('fs');
// constructor function to creat basic cards

function BasicCard(front, back){
	 if(this instanceof BasicCard) {
	this.front = front;
	this.back = back;
	 } else {
	 	return new BasicCard(front, back);
	 }
};

module.exports = BasicCard;
