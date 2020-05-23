/****************************************************
* @Execution : default node : cmd> Gambler.js
* @Purpose : Program to play gambler game to win the cash amount.
* @Description : Return percentage of wins and lose in gambler program.
* @OverView : Gambler program to play game for amount wins or lose.
* @author : Kiran IC
* @Version : 1.0
* @since : 23-May-2020
******************************************************/

//Constant
const gambleing = require('./gamblerBl');
let input = require('readline-sync');
let stake = input.questionInt('Enter the stake amount : ');
let goal = input.questionInt('Enter your goal : ');
let trails = input.questionInt('Enter number of trails you want to play : ');

let gamblerValidation = () => {
    if ((stake, goal, trails == undefined) | (stake, goal, trails == 0)) {
        console.log('Input correct number stake goal and trails value greater than 0');
    }
    else {
        gamblerMain(stake, goal, trails);
    }
}
gamblerValidation();