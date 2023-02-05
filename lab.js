let options = ["rock", "paper", "scissors"];

let choice = prompt("Pick either rock, paper, or scissors");

let computerPick = options[parseInt(Math.random() * 3)];

if (choice == computerPick) {
    console.log("You tied");
}

if (choice == "rock" && computerPick == "scissors") {
    console.log("You win");
}
else if (choice == "rock" && computerPick == "paper") {
    console.log("You lose");
}
else if (choice == "paper" && computerPick == "scissors") {
    console.log("You lose");
}
else if (choice == "paper" && computerPick == "rock") {
    console.log("You win");
}
else if (choice == "scissors" && computerPick == "rock") {
    console.log("You lose");
}
else if (choice == "scissors" && computerPick == "papers") {
    console.log("You win");
}