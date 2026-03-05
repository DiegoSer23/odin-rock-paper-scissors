let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let option = Math.floor(Math.random() * (4 - 1)) + 1
    switch(option) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function getHumanChoice() {
    let option = prompt("What's your play?")
    option.toLowerCase()
    return option
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock")
            computerScore += 1
        }
        else if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors")
            humanScore += 1
        }
        else {
            console.log("Tied round!")
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper")
            computerScore += 1
        }
        else if (computerChoice === "rock") {
            console.log("You win! Paper beats rock")
            humanScore += 1
        }
        else {
            console.log("Tied round!")
        }
    }
    else {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors")
            computerScore += 1
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beats paper")
            humanScore += 1
        }
        else {
            console.log("Tied round!")
        }
    }
}

function choiceHandler(event, choice) {
    playRound(choice, getComputerChoice());
    const results = document.getElementById("results");
    results.textContent = `Results: Human wins: ${humanScore} Computer wins: ${computerScore}`
    if (humanScore >= 5) {
        results.textContent += "Human wins!"
    } else if (ComputerScore >= 5) {
        results.textContent += "Computer wins!"
    }
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function(event) {
    choiceHandler(event, rockButton.textContent.toLowerCase())
})

paperButton.addEventListener("click", function(event) {
    choiceHandler(event, paperButton.textContent.toLowerCase())
})

scissorsButton.addEventListener("click", function(event) {
    choiceHandler(event, scissorsButton.textContent.toLowerCase())
})
