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
    

    function playRound(humanSelection, computerSelection) {
        if (humanSelection === 'rock') {
            if (computerSelection === 'rock') {
                return "It's a Draw";
            } else if (computerSelection === 'paper') {
                computerScore++;
            } else if (computerSelection === 'scissors') {
                humanScore++;
            } else {
                return "Computer generated wrong number";
            }
        
        }  else if (humanSelection === 'paper') {
            if (computerSelection === 'rock') {
                humanScore++;
            } else if (computerSelection === 'paper') {
                return "It's a Draw";
            } else if (computerSelection === 'scissors') {
                computerScore++;
            } else {
                return 'something wenT WrOng.';
            }
        } else if (humanSelection === 'scissors') {
            if (computerSelection === 'rock') {
                computerScore++;
            } else if (computerSelection === 'paper') {
                humanScore++;
            } else {
                return "It's a Draw";
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
const resetButton = document.querySelector("#reset");


rockButton.addEventListener("click", function() {
    document.querySelector(".roundResult").textContent = playRound("rock", getComputerChoice());
    updateScores();
});

paperButton.addEventListener("click", function() {
    document.querySelector(".roundResult").textContent = playRound("paper", getComputerChoice());
    updateScores();
});

scissorsButton.addEventListener("click", function() {
    document.querySelector(".roundResult").textContent = playRound("scissors", getComputerChoice());
    updateScores();
});

resetButton.addEventListener("click", function() {
    humanScore = 0;
    computerScore = 0;
    document.querySelector(".humanSc").textContent = humanScore;
    document.querySelector(".computerSc").textContent = computerScore;
    document.querySelector(".roundResult").textContent = "";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
})

function updateScores() {
    document.querySelector(".humanSc").textContent = humanScore;
    document.querySelector(".computerSc").textContent = computerScore;

    if (humanScore === 5 || computerScore === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}





