let playerScore = 0;
let computerScore = 0;

// Query all selectors with the class "choice", convert the nodelist into an array and store in choiceButtons
const choiceButtons = Array.from(document.querySelectorAll('.choice'));
const resultsPara = document.querySelector('.results');
const scorePara = document.querySelector('.score');

// Add a "click" event listener for each button
choiceButtons.forEach(button => {
    button.addEventListener('click', clickResponse);
});

// Play a round in response to user clicking a choice button
function clickResponse(e) {
    const playerSelection = e.target.id;
    playRound(playerSelection);
}

function getComputerChoice() {
    // Stores a random integer from 1 to 3 inclusive in choice
    const choice = Math.floor(Math.random() * 3) + 1;

    // Return "Rock", "Paper", or "Scissors" depending on whether choice is 1, 2, or 3, respectively
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getResult(playerSelection, computerSelection) {
    // Convert strings to lowercase so they can be easily compared
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

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

    return result;
}

function playRound(playerChoice) {
    
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
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

    // Stores text containing the score
    let scoreText = "Score: Player - " + playerScore + ", Computer - " + computerScore;
    
    if (computerScore === 5) {
        resultsPara.textContent = "Computer wins this game";
        choiceButtons.forEach(button => {
            button.removeEventListener('click', clickResponse);
        });
    }
    else if (playerScore === 5) {
        resultsPara.textContent = "You win this game";
        choiceButtons.forEach(button => {
            button.removeEventListener('click', clickResponse);
        });
    }
    else {
        resultsPara.textContent = resultText;
    }

    scorePara.textContent = scoreText;
}