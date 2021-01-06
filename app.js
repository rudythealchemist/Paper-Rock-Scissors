const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS!';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS!';

let gameIsRunning = false; //stops the user from starting a new game if one is running.

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK},${PAPER} or ${SCISSORS}`, '').toUpperCase(); //method used to returns strings as uppercase character.
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`); //String interpolation used with back ticks ``, $ and {}
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};


//computer given a choice
const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};


const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => //arrow function + default function.
    cChoice === pChoice ? //if equal
    RESULT_DRAW : //true
    cChoice === ROCK && pChoice === PAPER || // if equal or 
    cChoice === PAPER && pChoice === SCISSORS || // if equal or
    cChoice === SCISSORS && pChoice === ROCK ? // if equal or 
    RESULT_PLAYER_WINS : //else if 
    RESULT_COMPUTER_WINS; //else



//=> (using anonymous functions)
// const getWinner = (cChoice, pChoice) => {
//     if (cChoice === pChoice) {
//         return RESULT_DRAW;
//     } else if (
//         cChoice === ROCK && pChoice === PAPER ||
//         cChoice === PAPER && pChoice === SCISSORS ||
//         cChoice === SCISSORS && pChoice === ROCK) {
//         return RESULT_PLAYER_WINS;
//     } else RESULT_COMPUTER_WINS;
// };

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    // const winner = getWinner(computerChoice, playerChoice);
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    }
    let message = `You picked ${playerChoice} computer picked ${computerChoice}`; // var created outside of if statement scope to make it avaialble elsewhere.
    if (winner === RESULT_DRAW) {
        message = message + ' so it is a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + ' won.';
    } else {
        message = message + ' lost.';
    }
    alert(message);
    gameIsRunning = false; // used to restart game by clicking button.
});
// anonymous function used as an argument in eventlistener whish is function.