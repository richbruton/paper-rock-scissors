// choices for the AI to select from
let choices = ["paper", "rock", "scissors", "lizard", "spock"];

// variables to store the scores and number of draws in the contest
var draw = 0;
var p1score = 0;
var aiscore = 0;

// wait for page to load before starting a loop
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    // player choice and computer choice
    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "rock") {
                p1Choice = "rock";
            } else if (this.getAttribute("data-type") === "paper") {
                p1Choice = "paper";
            } else if (this.getAttribute("data-type") === "scissors") {
                p1Choice = "scissors";
            } else if (this.getAttribute("data-type") === "lizard") {
                p1Choice = "lizard";
            } else if (this.getAttribute("data-type") === "spock") {
                p1Choice = "spock";
            }
            aiChoice = choices[Math.floor(Math.random() * choices.length)];
            console.log("AI chose",
                aiChoice);
            displayP1Choice();
            displayAiChoice();
            console.log("p1 chose", p1Choice);
            checkDrawGame();
        });
    }
});

// function to display the players choice on index.html
function displayP1Choice() {
    if (p1Choice == "rock") {
        document.getElementById("player-choice").innerHTML = 'Player 1 chose rock <br> <i class="fas fa-hand-rock"></i>';
    } else if (p1Choice == "paper") {
        document.getElementById("player-choice").innerHTML = 'Player 1 chose paper <br> <i class="fas fa-hand-paper"></i>';
    } else if (p1Choice == "scissors") {
        document.getElementById("player-choice").innerHTML = 'Player 1 chose scissors <br> <i class="fas fa-hand-scissors"></i>';
    } else if (p1Choice == "lizard") {
        document.getElementById("player-choice").innerHTML = 'Player 1 chose lizard <br> <i class="fas fa-hand-lizard"></i>';
    } else if (p1Choice == "spock") {
        document.getElementById("player-choice").innerHTML = 'Player 1 chose spock <br> <i class="fas fa-hand-spock"></i>';
    }
}

// function to display the computers choice on index.html
function displayAiChoice() {
    if (aiChoice == "rock") {
        document.getElementById("ai-choice").innerHTML = 'Computer chose rock <br> <i class="fas fa-hand-rock"></i>';
    } else if (aiChoice == "paper") {
        document.getElementById("ai-choice").innerHTML = 'Computer chose paper <br> <i class="fas fa-hand-paper"></i>';
    } else if (aiChoice == "scissors") {
        document.getElementById("ai-choice").innerHTML = 'Computer chose scissors <br> <i class="fas fa-hand-scissors"></i>';
    } else if (aiChoice == "lizard") {
        document.getElementById("ai-choice").innerHTML = 'Computer chose lizard <br> <i class="fas fa-hand-lizard"></i>';
    } else if (aiChoice == "spock") {
        document.getElementById("ai-choice").innerHTML = 'Computer chose spock <br> <i class="fas fa-hand-spock"></i>';
    }
}

// function to check if the game is a draw, if not it calls on a function to delcare a winner
function checkDrawGame() {
    if (p1Choice === aiChoice) {
        updateDrawScore();
        console.log("draw");
    } else {
        gameWinner();
    }
}

// function to declare a winner of the round
function gameWinner() {
    if (p1Choice == "rock") {
        if (aiChoice == "paper" || aiChoice == "spock") {
            console.log("AI wins");
            updateAiScore();
        } else if (aiChoice == "scissors" || aiChoice == "lizard") {
            console.log("P1 wins");
            updateP1Score();
        }
    } else if (p1Choice == "paper") {
        if (aiChoice == "scissors" || aiChoice == "lizard") {
            console.log("AI wins");
            updateAiScore();
        } else if (aiChoice == "rock" || aiChoice == "spock") {
            console.log("P1 wins");
            updateP1Score();
        }
    } else if (p1Choice == "scissors") {
        if (aiChoice == "rock" || aiChoice == "spock") {
            console.log("AI wins");
            updateAiScore();
        } else if (aiChoice == "paper" || aiChoice == "lizard") {
            console.log("P1 wins");
            updateP1Score();
        }
    } else if (p1Choice == "lizard") {
        if (aiChoice == "rock" || aiChoice == "scissors") {
            console.log("AI wins");
            updateAiScore();
        } else if (aiChoice == "paper" || aiChoice == "spock") {
            console.log("P1 wins");
            updateP1Score();
        }
    } else if (p1Choice == "spock") {
        if (aiChoice == "paper" || aiChoice == "lizard") {
            console.log("AI wins");
            updateAiScore();
        } else if (aiChoice == "rock" || aiChoice == "scissors") {
            console.log("P1 wins");
            updateP1Score();
        }
    }
}

// function to update the numer of draws so far in the contest.
function updateDrawScore() {
    draw = draw + 1;
    document.getElementById("draw").innerHTML = draw;
    setTimeout(function () {
        alert("It's a draw! Try again!");
    }, 500);
}

// function to update the player's score on index.html
function updateP1Score() {
    p1score = p1score + 1;
    document.getElementById("p1-score").innerHTML = p1score;
    if (p1score === 5) {
        contestWinner();
    } else {
        setTimeout(function () {
            alert("You have won this round! Keep going!");
        }, 500);
    }
}

// function to update the computers score on index.html
function updateAiScore() {
    aiscore = aiscore + 1;
    document.getElementById("ai-score").innerHTML = aiscore;
    if (aiscore === 5) {
        contestWinner();
    } else {
        setTimeout(function () {
            alert("The computer has beaten you this time, try again!");
        }, 500);
    }
}

// function to delcare a contest winner
function contestWinner() {
    if (aiscore === 5) {
        setTimeout(function () {
            alert("Hard luck, the computer has defeated you! Fancy another shot at the title?");
        }, 500);
    } else if (p1score === 5) {
        setTimeout(function () {
            alert("You have defeated the mighty computer! Congratulations, can you defend your title?");
        }, 500);
    }
    newGame();
}

// function to reload the page and start a new game
function newGame() {
    setTimeout(function () {
        location.reload();
    }, 3000);
}