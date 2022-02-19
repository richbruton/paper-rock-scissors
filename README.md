# Rock Paper Scissors Lizard Spock

# User Stories

## First time user


## Returning user

## Site owners

Site owners want a website that will entertain users while they play the game on the site. They want the game to be intuitive. 

# Design

# Features


## Future features


# Bugs

Could not get initial loop to work, changing the variable declaration form `let buttons = document.getElementsById("button");` to `let buttons = document.getElementsByTagName("button");` made it work.

Alerts were appearing before the player and computer's choice was populated and score updated. When either the player or computer reached 5 points the page would reload before the score updated. The following code was used : 

    setTimeout(function () {
        alert("It's a draw! Try again!");
    }, 500); 

This gave the user the chance to see what the computer chose before being told who won the round. The 0.5 second delay allowed for the Javacript to populate the DOM before sending the alert. 

To overcome the scenario where the page reloaded as soon either party scored 5 points, a similar time out function was used. In this case the function would have a longer time out, 3 seconds, to give the user an oppurtunity to look at the scoreboard and make a screenshot of the outcome if they desired. The following code gace the desired delay to the reload:

    function newGame() {
        setTimeout(function () {
            location.reload();
        }, 3000);
    }


# Testing


# Manual Testing

## First time user

## Returning user


# Deployment

## The site was deployed on github pages. The deployment process was

1. Open the project in Github

2. Click on settings and navigate to pages.

3. Select branch : Main.

4. Click save.

## To run locally, the deployment process is

1. Navigate to the site's [repository](https://github.com/richbruton/paper-rock-scissors)

2. Click on the code button.

3. Copy the URL under Clone with HTTPS by clicking on the copy button.

4. Open the terminal in your IDE, and navigate to the directory intended for use.

5. Type `git clone` into the terminal followed but the copied url link form Step 3. It should look like this `git clone https://github.com/richbruton/paper-rock-scissors.git`

6. Press enter to clone the repository.

# Credits

# Acknowledgements

A big thank you to Jack Wachira, for all of his input throughout this project.