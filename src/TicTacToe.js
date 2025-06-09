
window.addEventListener("DOMContentLoaded", function() {
    Game.start();
});
var Game = {

    start: function (){
        this.gridArray = [
            [null, null, null], 
            [null, null, null],
            [null, null, null]
        ]; 
        
        this.playerOne = "X";
        this.playerTwo =  "O"; 
        this.moveCount = 0;
        this.currentPlayer = this.playerOne;
        console.log("Game started! Player One is X, Player Two is O.");
        this.printBoard();
        this.renderBoard();

    }, 

    move: function (_, row, col) {
        // const row = parseInt(window.prompt("Enter row (0, 1, or 2):"), 10);
        // const col = parseInt(window.prompt("Enter column (0, 1, or 2):"), 10);
        const player = (this.moveCount % 2 === 0) ? this.playerOne : this.playerTwo;
        this.play(player, row, col);
    },

    printBoard: function () {
       console.table(this.gridArray);
    },

    play: function (player, moveV, moveH) {
        if (this.gridArray[moveV][moveH] !== null)  {
            alert("cell already taken! choose another cell.");
                return;
        } 
        this.gridArray[moveV][moveH] = player;
        this.moveCount++;
        this.printBoard();
        this.renderBoard();

        const winner = this.checkWinner();
        if (winner) {
            setTimeout(() => {
                alert(`Player ${winner} wins!`);
                this.start(); // Optionally restart the game
            }, 100);
        } else if (this.moveCount === 9) {
            setTimeout(() => {
                alert("It's a draw!");
                this.start();
            }, 100);
        }
    },

    renderBoard: function () {
    const boardDiv = document.getElementById("board");
    boardDiv.innerHTML = ""; // Clear previous board

    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td");
            cell.textContent = this.gridArray[i][j] ? this.gridArray[i][j] : "";
            cell.style.width = "60px";
            cell.style.height = "60px";
            cell.style.textAlign = "center";
            cell.style.fontSize = "2em";
            cell.style.border = "1px solid #333";
            cell.style.cursor = "pointer";
            // Add data attributes for row and column
            cell.dataset.row = i;
            cell.dataset.col = j;
            // Add click event to cell
            cell.addEventListener("click", () => {
                this.move(this.currentPlayer, i, j);
            });
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    boardDiv.appendChild(table);

    // Optionally, show move count
    let moveCounter = document.getElementById("moveCounter");
    if (!moveCounter) {
        moveCounter = document.createElement("div");
        moveCounter.id = "moveCounter";
        boardDiv.parentNode.insertBefore(moveCounter, boardDiv.nextSibling);
    }
    moveCounter.textContent = `Move count: ${this.moveCount}`;
    },

    checkWinner: function() {
    const b = this.gridArray;
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
        if (b[i][0] && b[i][0] === b[i][1] && b[i][1] === b[i][2]) {
            return b[i][0];
        }
        if (b[0][i] && b[0][i] === b[1][i] && b[1][i] === b[2][i]) {
            return b[0][i];
        }
    }
    // Check diagonals
    if (b[0][0] && b[0][0] === b[1][1] && b[1][1] === b[2][2]) {
        return b[0][0];
    }
    if (b[0][2] && b[0][2] === b[1][1] && b[1][1] === b[2][0]) {
        return b[0][2];
    }
    return null;
},
}

    

