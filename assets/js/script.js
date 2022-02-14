// wait for page to load

let choices = ["paper", "rock", "scissors"]

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
                checkDrawGame();
            } else if (this.getAttribute("data-type") === "scissors") {
                p1Choice = "scissors";
                aiChoice = choices[Math.floor(Math.random() * choices.length)];
                checkDrawGame();
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
            // updateAiScore();
        } else if (aiChoice == "scissors") {
            console.log("P1 wins");
            // updateP1Score();
        }
    } else if (p1Choice == "paper") {
        if (aiChoice == "scissors") {
            console.log("AI wins");
            // updateAiScore();
        } else if (aiChoice == "rock") {
            console.log("P1 wins");
            // updateP1Score();
        }
    } else if (p1Choice == "scissors") {
        if (aiChoice == "rock") {
            console.log("AI wins");
            // updateAiScore();
        } else if (aiChoice == "paper") {
            console.log("P1 wins");
            // updateP1Score();
        }
    }
}

// function updateDrawScore()

// function updateP1Score()

// function UpdateAiScore()

// function contestWinner()

// function newGame()