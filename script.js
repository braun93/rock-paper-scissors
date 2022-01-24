let playerScore = 0;
let cpuScore = 0;

// random computer action, returns rock, paper or scissors
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    let randomOption = options[Math.floor(Math.random() * options.length)];
    return randomOption;
}

// player action transformed to lower case
function playerPlay() {
    let playerMove = prompt('Rock, paper or scissors?');
    playerMove = playerMove.toLowerCase();
    return playerMove;
}

// single round function, adds score and returns the round winner
function playRound(playerSelection, computerSelection) {
    let win = 'Player wins the round!';
    let lose = 'Computer wins the round!';
    let tie = 'Tie round!';
    let invalidValue = 'Something went wrong, please try again.';

    // optional console.log to see the player's and computer's choice
    console.log('Player selection is ' + playerSelection);
    console.log('Computer selection is ' + computerSelection);
    
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return win;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors') {
        cpuScore++;
        return lose;
    } else if (playerSelection === computerSelection) {
        return tie;
    } else {
        return invalidValue;
    }
}

// checks who won the game and returns the winner and the score
function gameEnd() {
    let finalResult;
    if (playerScore > cpuScore) {
        finalResult = `Congratulations! You won the best of five against the computer! The final score is ${playerScore}:${cpuScore}.`;
    } else if (playerScore < cpuScore) {
        finalResult = `Bad news! You lost the best of five against the computer! The final score is ${playerScore}:${cpuScore}. Try again!`;
    } else if (playerScore === cpuScore) {
        finalResult = `Close one! Best of five against the computer ended in a tie. The final score is ${playerScore}:${cpuScore}.`;
    }
    return finalResult;
}

// final game in a 'best of 5' format
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log('Player score is ' + playerScore + '.');
        console.log('Computer score is ' + cpuScore + '.');
    }
    console.log(gameEnd());
}
