/******************************************************
* @description : The program is design to play tic tac toe in system.
* @purpose : The program to play Tic tac toe game in system.
* @return : Return tic tac toe board to play the game. 
* @parameter : rows columns and input.
******************************************************/

let input = require('readline-sync');
let gameBoard = [];
let player;
let gameStatus;
let letter = "";
let selectInput;
let rows;
let columns;
let index;

reset = () => {                                                    //to reset board
    gameBoard = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];
    player = 1;
    gameStatus = 1;
}

print = () => {                                                    //To print game board 
    console.log("r\c  0 1 2");
    console.log("0   ", gameBoard[0], gameBoard[1], gameBoard[2]);
    console.log("1   ", gameBoard[3], gameBoard[4], gameBoard[5]);
    console.log("2   ", gameBoard[6], gameBoard[7], gameBoard[8]);
}

set = (rows, columns, letter) => {                                 //to print value in board
    index = rows * 3 + columns;
    if (gameBoard[index] == ".") {
        gameBoard[index] = letter;
        player = player % 2 + 1;
    }
    else {
        console.log('You cannot place there');
    }
}

checkMatch = (num1, num2, num3) => {
    if (gameBoard[num1] != "." && gameBoard[num1] == gameBoard[num2] && gameBoard[num2] == gameBoard[num3]) {
        gameStatus = 0;
    }
}
checkGame = () => {                                 //Function to check wining possibilites
    checkMatch[0, 1, 2]
    checkMatch[3, 4, 5],
    checkMatch[6, 7, 8],
    checkMatch[0, 3, 6],
    checkMatch[1, 4, 7],
    checkMatch[2, 5, 8],
    checkMatch[0, 4, 8],
    checkMatch[2, 4, 6]
}
computer = () => {                                 //FUnction for generating row and column values
    rows = Math.random() * 3 | 0;
    columns = Math.random() * 3 | 0;
}

ticTacToeMain = () => {
    reset();
    while (true) {
        if (player == 1) {
            letter = "O";                          //Letter for to play Game
            console.log("Player computer's trun:", letter);

        } else {
            letter = "X";
            console.log("Player player's trun:", letter);
        }
        print();
        console.log();
        console.log("Command");
        console.log("1 ==>for set[row][column]");
        console.log('2 ==>for restart');
        while (true) {
            if (player == 1) {
                computer();                                         //calling computer for row and column values
                selectInput = 1;
            }
            else if (player == 2) {
                selectInput = input.questionInt("Enter 1 or 2 :");
                rows = input.questionInt("Enter row value : ");
                columns = input.questionInt("Enter column value : ");
            }
            if (selectInput == 1) {
                set(rows, columns, letter);                        //calling set function for adding O or X into board
                break;
            } else if (selectInput == 2) {
                reset();                                            //calling reset to play new game
                break;
            }
            else {
                console.log("Select 1 or 2");
            }
        }
        checkGame();
        if (gameStatus != 1) {
            print();
            console.log("Game over");
            player = player % 2 + 1;                            //changing player to computer
            console.log("player", player, letter, "wins");
            let newGame = input.questionInt("Enter 1 for new match: ");
            newGame == 1 ? reset() : console.log();
        }
    }
}