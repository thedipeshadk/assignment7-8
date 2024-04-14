document.addEventListener('DOMContentLoaded', function () {

    let player1Score = 0;
    let player2Score = 0;
    
    const winningScore = 50;

    function rollDice() {
        let dice1Value = Math.floor(Math.random() * 6) + 1;
        let dice2Value = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice1').src = `dice${dice1Value}.png`;
        document.getElementById('dice2').src = `dice${dice2Value}.png`;

        let difference = Math.abs(dice1Value - dice2Value);

        if (dice1Value === dice2Value) {
            return; // Tie, no score changes
        } else if (dice1Value > dice2Value) {
            player1Score += difference;
        } else {
            player2Score += difference;
        }

        document.getElementById('player1-score').textContent = `Player 1 Score: ${player1Score}`;
        document.getElementById('player2-score').textContent = `Player 2 Score: ${player2Score}`;

        if (player1Score >= winningScore) {
            document.getElementById('winner-message').textContent = 'Player 1 wins!';
            document.getElementById('roll-button').disabled = true;
            document.getElementById('restart-button').style.display = 'inline';
        } else if (player2Score >= winningScore) {
            document.getElementById('winner-message').textContent = 'Player 2 wins!';
            document.getElementById('roll-button').disabled = true;
            document.getElementById('restart-button').style.display = 'inline';
        }
    }

    function restartGame() {
        player1Score = 0;
        player2Score = 0;
        document.getElementById('player1-score').textContent = `Player 1 Score: ${player1Score}`;
        document.getElementById('player2-score').textContent = `Player 2 Score: ${player2Score}`;
        document.getElementById('winner-message').textContent = '';
        document.getElementById('roll-button').disabled = false;
        document.getElementById('restart-button').style.display = 'none';
    }

    document.getElementById('roll-button').addEventListener('click', rollDice);
    document.getElementById('restart-button').addEventListener('click', restartGame);
});
