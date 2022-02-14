// wait for page to load

let choices = ["paper", "rock", "scissors"]
// let p1Choice = "";

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");


    // player choice and computer choice
    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "rock") {
                p1Choice = "rock";
                aiChoice = choices[Math.floor(Math.random() * choices.length)];
                console.log("AI chose",
                    aiChoice);
                console.log(p1Choice);
                checkDrawGame();
            } else if (this.getAttribute("data-type") === "paper") {
                p1Choice = "paper";
                aiChoice = choices[Math.floor(Math.random() * choices.length)];
            } else if (this.getAttribute("data-type") === "scissors") {
                p1Choice = "scissors";
                aiChoice = choices[Math.floor(Math.random() * choices.length)];
            }
        })
    }
})


function checkDrawGame() {
    if (p1Choice === aiChoice) {
        // updateDrawScore();
        console.log("draw");
    } else {
        console.log("not a draw");
        gameWinner();
    }
}

function gameWinner() {
    if (p1Choice == "rock") {
        if (aiChoice == "paper") {
            console.log("AI wins");
        } else if (aiChoice == "scissors") {
            console.log("P1 wins");
        }
    }
}

// function updateDrawScore()

// function updateP1Score()

// function UpdateAiScore()

// function contestWinner()

// function newGame()