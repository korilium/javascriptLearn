

var Game = {

    start: function (){
        this.gridArray = [
            [null, null, null], 
            [null, null, null],
            [null, null, null]
        ]; 
        
        this.playerOne = "X";
        this.playerTwo =  "O"; 
        console.log("Game started! Player One is X, Player Two is O.");
        this.printBoard();

    }, 

    move: function (player) {
        const row = parseInt(window.prompt("Enter row (0, 1, or 2):"), 10);
        const col = parseInt(window.prompt("Enter column (0, 1, or 2):"), 10);
        this.play(player, row, col);
    },

    printBoard: function () {
       console.table(this.gridArray);
    },

    play: function (player, moveV, moveH) {
        if (player === this.playerOne) {
            this.gridArray[moveV][moveH] = this.playerOne 
        }else{
            this.gridArray[moveV][moveH] =  this.playerTwo
        }
        
        this.printBoard();



    }
}

    

