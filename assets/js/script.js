// wait for page to load

let choices = ["paper", "rock", "scissors"]

var draw = 0;
var p1score = 0;
var aiscore = 0;

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
            }
            aiChoice = choices[Math.floor(Math.random() * choices.length)];
            console.log("AI chose",
                aiChoice);
            displayP1Choice();
            displayAiChoice();
            console.log("p1 chose", p1Choice);
            checkDrawGame();
        })
    }
})

function checkDrawGame() {
    if (p1Choice === aiChoice) {
        updateDrawScore();
        console.log("draw");
    } else {
        gameWinner();
    }
}

function gameWinner() {
    if (p1Choice == "rock") {
        if (aiChoice == "paper") {
            console.log("AI wins");
            updateAiScore();
        } else if (aiChoice == "scissors") {
            console.log("P1 wins");
            updateP1Score();
        }
    } else if (p1Choice == "paper") {
        if (aiChoice == "scissors") {
            console.log("AI wins");
            updateAiScore();
        } else if (aiChoice == "rock") {
            console.log("P1 wins");
            updateP1Score();
        }
    } else if (p1Choice == "scissors") {
        if (aiChoice == "rock") {
            console.log("AI wins");
            updateAiScore();
        } else if (aiChoice == "paper") {
            console.log("P1 wins");
            updateP1Score();
        }
    }
}

function displayP1Choice() {
    if (p1Choice == "rock") {
        document.getElementById("player-choice").innerHTML = 'Player chose rock <br> <i class="fas fa-hand-rock"></i>';
    } else if (p1Choice == "paper") {
        document.getElementById("player-choice").innerHTML = 'Player chose paper <br> <i class="fas fa-hand-paper"></i>';
    } else if (p1Choice == "scissors") {
        document.getElementById("player-choice").innerHTML = 'Player chose scissors <br> <i class="fas fa-hand-scissors"></i>';
    }
}

function displayAiChoice() {
    if (aiChoice == "rock") {
        document.getElementById("ai-choice").innerHTML = 'Computer chose rock <br> <i class="fas fa-hand-rock"></i>';
    } else if (aiChoice == "paper") {
        document.getElementById("ai-choice").innerHTML = 'Computer chose paper <br> <i class="fas fa-hand-paper"></i>';
    } else if (aiChoice == "scissors") {
        document.getElementById("ai-choice").innerHTML = 'Computer chose scissors <br> <i class="fas fa-hand-scissors"></i>';
    }
}

function updateDrawScore() {
    draw = draw + 1;
    document.getElementById("draw").innerHTML = draw;
    alert("It's a draw! Try again!");
}

function updateP1Score() {
    p1score = p1score + 1;
    document.getElementById("p1-score").innerHTML = p1score;
    if (p1score === 5) {
        contestWinner();
    } else {
        alert("You have won this round! Keep going!");
    }
}

function updateAiScore() {
    aiscore = aiscore + 1;
    document.getElementById("ai-score").innerHTML = aiscore;
    if (aiscore === 5) {
        contestWinner();
    } else {
        alert("The computer has beaten you this time, try again!");
    }
}

function contestWinner() {
    if (aiscore === 5) {
        alert("Hard luck, the computer has defeated you! Fancy another shot at the title?");
    } else if (p1score === 5) {
        alert("You have defeated the mighty computer! Congratulations, can you defend you title?")
    }
    newGame();
}

function newGame() {
    location.reload();
}