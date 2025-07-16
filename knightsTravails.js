
var height = 8;
var width = 8;
var board = Array.from({ length: height }, () => Array(width).fill(null));



var currentPosition = { x: 0, y: 0 };

function isValidMove(x, y) {
    return x >= 0 && x < height && y >= 0 && y < width && board[x][y] === null;
}

function moveKnight(x, y) {
    if (isValidMove(x, y)) {
        board[currentPosition.x][currentPosition.y] = null; // Clear current position
        currentPosition = { x, y };
        board[x][y] = 'K'; // Place knight at new position
    } else {
        console.log("Invalid move");
    }
}

function displayBoard() {
    console.clear();
    board.forEach(row => console.log(row.map(cell => cell || '.').join(' ')));
}

// Example moves

var currentPosition = { x: 0, y: 0 };
board[currentPosition.x][currentPosition.y] = 'K'; // Place knight at initial position

console.log("Initial Board:");
displayBoard();
// Initial position
moveKnight(0, 0);
displayBoard();
moveKnight(2, 1);
displayBoard();
moveKnight(4, 2);
displayBoard();
moveKnight(5, 0);
displayBoard();
moveKnight(3, 3); // Invalid move
displayBoard();
moveKnight(6, 5);
displayBoard();
moveKnight(7, 6);
displayBoard();
moveKnight(5, 7);
displayBoard();
moveKnight(3, 6);
displayBoard();
moveKnight(1, 5);
displayBoard();
moveKnight(0, 3);
displayBoard();