let gameBoard = [];
let player;
let gameStatus;
let letter="";

reset = () => {
    gameBoard = ['.', '.', '.', '.', '.', '.', '.', '.', '.'];
    player = 1;
    gameStatus = 1;
}

ticTacToeMain = () => {
    if(player==1){
        letter="O";
        console.log("Player player1 trun:",letter);
        
    }else{
        letter="X";
        console.log("Player player2 trun:",letter);
    }
}