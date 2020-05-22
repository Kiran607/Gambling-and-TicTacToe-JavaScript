//Constant
const gambleing = require('./gamblerBl');
let input = require('readline-sync');
let stake = input.questionInt('Enter the stake amount : ');
let goal = input.questionInt('Enter your goal : ');
let trails = input.questionInt('Enter number of trails you want to play : ');
gamblerMain(stake,goal,trails)