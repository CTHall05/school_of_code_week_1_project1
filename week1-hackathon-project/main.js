// Task 1: Variables Player Moves and Computer Moves

// The two variables represent the player's move and the computers move:
let playerMove = "";
let computerMove = "";

// Array of choice of moves for the game
let choices = [ "rock", "paper", "scissors" ]

// An if statement for all of the possible outcomes of game
if (playerMove === "rock" && computerMove === "scissors") {
    console.log("Player wins!");
} else if (playerMove === "rock" && computerMove === "paper") {
    console.log("Computer wins!");
} else if (playerMove === "paper" && computerMove === "rock") {
    console.log("Player wins!");
} else if (playerMove === "paper" && computerMove === "scissors") { 
    console.log("Computer wins!");
} else if (playerMove === "scissors" && computerMove === "paper") {
    console.log("Player wins!");
} else if (playerMove === "scissors" && computerMove === "rock") {
    console.log("Computer wins!");
} else {
    console.log("It's a draw!");
}

// Task 2 

