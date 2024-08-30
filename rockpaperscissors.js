function getComputerChoice() {
    let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else if (random === 3) {
        return "scissors";
    } else {
        return "Type proper input!";
    }
}

function getHumanChoice() {
    let yourChoice = prompt('Choose Rock, Paper or Scissors.').toLowerCase();
    if (yourChoice === 'rock') {
        return 'rock';
    } else if (yourChoice === 'paper') {
        return 'paper';
    } else if (yourChoice === 'scissors') {
        return 'scissors';
    } else {
        return 'Invalid input';
    }
}

let computerScore = 0;
let humanScore = 0;
function playGame() {


    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock') {
            if (computerChoice === 'rock') {
                return "Draw";
            } else if (computerChoice === 'paper') {
                computerScore++;
                return "You lost";
            } else if (computerChoice === 'scissors') {
                humanScore++;
                return "You won";
            } else {
                return "Computer generated wrong number";
            }
        
        }  else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                humanScore++;
                return "You Won";
            } else if (computerChoice === 'paper') {
                return "Draw";
            } else if (computerChoice === 'scissors') {
                computerScore++;
                return 'You lost';
            } else {
                return 'something wenT WrOng.';
            }
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                computerScore++;
                return 'You lost';
            } else if (computerChoice === 'paper') {
                humanScore++;
                return "You won";
            } else {
                return "Draw";
            }
        } else {
            return "wrong play!";
        }
    }
    console.log(playRound(humanSelection, computerSelection));

}

playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore > computerScore) {
    alert("Well Done!");
} else {
    alert("Try again");
}
