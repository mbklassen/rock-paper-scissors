function getComputerChoice() {
    // Returns a random integer from 1 to 3 inclusive
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}
