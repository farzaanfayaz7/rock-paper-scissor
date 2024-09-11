function getComputerChoice() {
    let ret = Math.random()

    if (ret <= 0.33) {
        return "Rock";
    }

    else if (ret > 0.33 && ret < 0.66) {
        return "Paper"
    }

    else {
        return "Scissor"
    }
}

function getHumanChoice() {

    const userInput = window.prompt("Enter Rock/Paper/Scissor!");
    return userInput;
}

function playRound(humanChoice, ComputerChoice) {
    if (humanChoice === "Rock" && ComputerChoice === "Scissor") {
        console.log("Rock smashes Scissor, you win this round")
        return 1; // human wins
    }

    else if (humanChoice === "Paper" && ComputerChoice === "Rock") {
        console.log("Paper covers Rock, you  win this round!")
        return 1; // human wins
    }

    else if (humanChoice === "Scissor" && ComputerChoice === "Paper") {
        console.log("Scissor cuts Paper, you win this round!")
        return 1; // human wins
    }

    else if (humanChoice === "Rock" && ComputerChoice === "Paper") {
        console.log("Paper covers Rock, Computer wins this round")
        return -1; // computer wins
    }

    else if (humanChoice === "Paper" && ComputerChoice === "Scissor") {
        console.log("Scissor cuts Paper, Computer wins this round")
        return -1; // computer wins
    }

    else if (humanChoice === "Scissor" && ComputerChoice === "Rock") {
        console.log("Rock smashes Scissor, Computer wins this round")
        return -1; // computer wins
    }

    else if (humanChoice === "Rock" && ComputerChoice === "Rock") {
        console.log("It's a tie")
        return 0; // tie
    }

    else if (humanChoice === "Paper" && ComputerChoice === "Paper") {
        console.log("It's a tie")
        return 0; // tie
    }

    else if (humanChoice === "Scissor" && ComputerChoice === "Scissor") {
        console.log("It's a tie")
        return 0; // tie
    }
}

function playGame() {
    var humanScore = 0;
    var ComputerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const ComputerChoice = getComputerChoice();
        console.log(`Human Choice: ${humanChoice}`);
        console.log(`Computer choice:  ${ComputerChoice}`);

        let result = playRound(humanChoice, ComputerChoice);
        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            ComputerScore++;
        }
    }

    console.log(`Computer Score: ${ComputerScore}`);
    console.log(`Human Score: ${humanScore}`);
}

playGame();