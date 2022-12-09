/*const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playerSelection = button.id.toString();
            console.log(playerSelection);
        });
    });

window.addEventListener('click', game);*/

let playerSelection;

const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', e => {
    playerSelection = e.target.classList.value;
    console.log(playerSelection);
    game(playerSelection);
});

function getComputerChoice() {
    // Stores a random integer from 1 to 3 inclusive in choice
    let choice = Math.floor(Math.random() * 3) + 1;

    // Return "Rock", "Paper", or "Scissors" depending on whether choice is 1, 2, or 3, respectively
    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // Convert strings to lowercase so they can be easily compared
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();

    // Stores the result of the round
    let result;
    
    // Possible results when player chooses rock
    if (playerChoice === "rock") {
        if (computerChoice === "rock") {
            result = "tie";
        }
        else if (computerChoice === "paper") {
            result = "lose";
        }
        else if (computerChoice === "scissors") {
            result = "win";
        }
    }

    // Possible results when player chooses paper
    else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            result = "win";
        }
        else if (computerChoice === "paper") {
            result = "tie";
        }
        else if (computerChoice === "scissors") {
            result = "lose";
        }
    }

    // Possible results when player chooses scissors
    else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "lose";
        }
        else if (computerChoice === "paper") {
            result = "win";
        }
        else if (computerChoice === "scissors") {
            result = "tie";
        }
    }

    // Invalid result if player chooses something unexpected
    else {
        result = "invalid player entry"
    }

    console.log(result);
    return result;
}

function game(playerChoice) {
    
    let playerScore = 0;
    let computerScore = 0;
    
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    let resultText;

    // Print an alert message that depends on the result of the round and increment player or computer score accordingly
    switch (result) {
        case "win":
            playerScore++;
            resultText = "You win this round, " + playerChoice + " beats " + computerChoice;
            break;
        case "lose":
            computerScore++;
            resultText = "You lose this round, " + computerChoice + " beats " + playerChoice;
            break;
        case "tie":
            resultText = "This round is a tie, you both chose " + playerChoice;
            break;
        default:
            resultText = "Invalid entry";
            // If player enters something invalid, don't progress to the next round
    }

    let round = 1;
    // Stores text containing the round number
    let roundText = ". \nRound: " + round;
    // Stores text containing the score
    let scoreText = "\nScore: Player - " + playerScore + "  Computer - " + computerScore;
    // Print an alert containing the result of the round, the round number, and the score
    console.log(resultText + roundText + scoreText);

    // Function returns a string declaring the outcome of the game after 5 rounds
    if (playerScore > computerScore) {
        return "You win the game! :)"
    }
    else if (playerScore < computerScore) {
        return "You lose the game! :("
    }
    else {
        return "It's a tie game."
    }
}