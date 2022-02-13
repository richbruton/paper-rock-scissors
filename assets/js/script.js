// wait for page to load

let choices = ["paper", "rock", "scissors"]

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");


    // player choice and computer choice
    for (let button of buttons) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "rock") {
                let p1Choice = "rock";
                let aiChoice = choices[Math.floor(Math.random() * choices.length)];
                console.log(aiChoice);
            } else if (this.getAttribute("data-type") === "paper") {
                let p1Choice = "paper";
                let aiChoice = choices[Math.floor(Math.random() * choices.length)];
            } else if (this.getAttribute("data-type") === "scissors") {
                let p1Choice = "scissors";
                let aiChoice = choices[Math.floor(Math.random() * choices.length)];
            }
        })
    }
})


function checkDrawGame() {
    if (p1Choice === aiChoice) {
        updateDrawScore();
        console.log("draw")
    } else {
        gameWinner();
    }
}

// function gameWinner()

// function updateDrawScore()

// function updateP1Score()

// function UpdateAiScore()

// function contestWinner()

// function newGame()