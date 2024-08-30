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


    let computerScore = 0;
    let humanScore = 0;
    let computerSelection = getComputerChoice();
    let humanSelection = "";

    function playRound(humanSelection, computerSelection) {
        if (humanSelection === 'rock') {
            if (computerSelection === 'rock') {
                return "Draw";
            } else if (computerSelection === 'paper') {
                computerScore++;
                return "You lost";
            } else if (computerSelection === 'scissors') {
                humanScore++;
                return "You won";
            } else {
                return "Computer generated wrong number";
            }
        
        }  else if (humanSelection === 'paper') {
            if (computerSelection === 'rock') {
                humanScore++;
                return "You Won";
            } else if (computerSelection === 'paper') {
                return "Draw";
            } else if (computerSelection === 'scissors') {
                computerScore++;
                return 'You lost';
            } else {
                return 'something wenT WrOng.';
            }
        } else if (humanSelection === 'scissors') {
            if (computerSelection === 'rock') {
                computerScore++;
                return 'You lost';
            } else if (computerSelection === 'paper') {
                humanScore++;
                return "You won";
            } else {
                return "Draw";
            }
        } else {
            return "wrong play!";
        }
    }
    
 

/* DOM Code */
////////////////

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");


rockButton.addEventListener("click", function() {
    document.querySelector(".roundResult").textContent = playRound("rock", getComputerChoice());
    document.querySelector(".humanSc").textContent = humanScore;
    document.querySelector(".computerSc").textContent = computerScore;

});

paperButton.addEventListener("click", function() {
    document.querySelector(".roundResult").textContent = playRound("paper", getComputerChoice());
    document.querySelector(".humanSc").textContent = humanScore;
    document.querySelector(".computerSc").textContent = computerScore;

});

scissorsButton.addEventListener("click", function() {
    document.querySelector(".roundResult").textContent = playRound("scissors", getComputerChoice());
    document.querySelector(".humanSc").textContent = humanScore;
    document.querySelector(".computerSc").textContent = computerScore;

});




