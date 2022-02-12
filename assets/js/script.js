// wait for page to load

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "rock") {
                alert("You picked rock");
            } else if (this.getAttribute("data-type") === "paper") {
                alert("You picked paper");
            } else if (this.getAttribute("data-type") === "scissors") {
                alert("You picked scissors");
            }
        })
    }
})