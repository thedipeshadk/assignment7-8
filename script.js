document.addEventListener('DOMContentLoaded', function () {

    let player1Score = 0;
    let player2Score = 0;
    
    const winningScore = 5;

    function rollDice() {
        let dice1Value = Math.floor(Math.random() * 6) + 1;
        let dice2Value = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice1').src = `dice${dice1Value}.png`;
        document.getElementById('dice2').src = `dice${dice2Value}.png`;

        let roundWinner = '';
        if (dice1Value > dice2Value) {
            roundWinner = 'player1';
        } else if (dice2Value > dice1Value) {
            roundWinner = 'player2';
        }

        if (roundWinner === 'player1') {
            player1Score++;
        } else if (roundWinner === 'player2') {
            player2Score++;
        }

        document.getElementById('player1-score').textContent = `Player 1 Score: ${player1Score}`;
        document.getElementById('player2-score').textContent = `Player 2 Score: ${player2Score}`;

        if (player1Score >= winningScore) {
            document.getElementById('winner-message').textContent = 'Player 1 wins!';
            document.getElementById('roll-button').disabled = true;
        } else if (player2Score >= winningScore) {
            document.getElementById('winner-message').textContent = 'Player 2 wins!';
            document.getElementById('roll-button').disabled = true;
        }
    }

    document.getElementById('roll-button').addEventListener('click', rollDice);
});
