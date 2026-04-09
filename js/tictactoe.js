// Tic Tac Toe logic
document.addEventListener('DOMContentLoaded', function() {
    var board = ['', '', '', '', '', '', '', '', ''];
    var currentPlayer = 'X';
    var gameActive = true;
    
    var statusDisplay = document.querySelector('#game-status');
    var squares = document.querySelectorAll('#tictactoe-board button');
    var resetButton = document.querySelector('#reset-game');
    
    var winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    function handleCellPlayed(clickedCell, clickedCellIndex) {
        board[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
        // Optionally update visually
        clickedCell.classList.remove('btn-default');
        clickedCell.classList.add(currentPlayer === 'X' ? 'btn-info' : 'btn-success');
    }
    
    function handlePlayerChange() {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDisplay.innerHTML = "Player " + currentPlayer + "'s turn";
    }
    
    function handleResultValidation() {
        var roundWon = false;
        for (var i = 0; i <= 7; i++) {
            var winCondition = winningConditions[i];
            var a = board[winCondition[0]];
            var b = board[winCondition[1]];
            var c = board[winCondition[2]];
            
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        
        if (roundWon) {
            statusDisplay.innerHTML = "Player " + currentPlayer + " wins!";
            statusDisplay.classList.add('text-success');
            gameActive = false;
            return;
        }
        
        var roundDraw = !board.includes('');
        if (roundDraw) {
            statusDisplay.innerHTML = "Game ended in a draw!";
            statusDisplay.classList.add('text-warning');
            gameActive = false;
            return;
        }
        
        handlePlayerChange();
    }
    
    function handleCellClick(clickedCellEvent) {
        var clickedCell = clickedCellEvent.target;
        var clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
        
        if (board[clickedCellIndex] !== '' || !gameActive) {
            return;
        }
        
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }
    
    function handleRestartGame() {
        gameActive = true;
        currentPlayer = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        statusDisplay.innerHTML = "Player " + currentPlayer + "'s turn";
        statusDisplay.classList.remove('text-success', 'text-warning');
        squares.forEach(function(square) {
            square.innerHTML = '&nbsp;';
            square.classList.remove('btn-info', 'btn-success');
            square.classList.add('btn-default');
        });
    }
    
    squares.forEach(function(square) {
        square.addEventListener('click', handleCellClick);
    });
    
    if(resetButton) {
        resetButton.addEventListener('click', handleRestartGame);
    }
});
