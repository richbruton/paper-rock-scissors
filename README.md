# Rock Paper Scissors Lizard Spock


# User Stories

## First time user
The first time user should know instinctively that they need to press a button to start the game. The score board should keep them interested and competitively engaged in the game. 

## Returning user
The returning user will be interested in either trying to beat the game or to win with as few draws or computer wins as possible. The short time commitment involved will encourage them to share the game with friends and to play it when trying to fill some time.

## Site owners

Site owners want a website that will entertain users while they play the game on the site. They want the game to be intuitive and easy to access.

# Design

The site is designed to that the UX is as straight forward as possible, to keep the user's focus on the game and their entertainment. The primary focus for the user will be the selection buttons, which will start the game or the round and allow the user to select their choice for the round. Two divs side by side below the selection buttons will start empty but will populate with the player's and computer's choice for each round. Below the display area there is a score board. The score board displays the user's and computer's scores. It also will display the number of drawn rounds, but draws will not impact the score. Draws will prolong the contest adding to the anticpation of the game.

Underneath the score board there will be a set of rules. These will be the conditions required for a win for each of the possible Player choices, and the parameters required to win the contest.

![Site wireframe](/assets/docs/wireframe.png "wireframe")

To prevent speed playing, by which the user just clicks the buttons as fast as possible to complete the game at speed, there is a series of alerts to inform the user of the outcome of each round and the eventual contest winner.

![Site wireframe with alert](/assets/docs/wireframe-alert.png "wireframe with alert")

# Features

## Title and subheading

The title of the game is the main heading of of the site. The sub heading is used to indicate that the user is required to make a choice in the next stage of the game.

![Paper Rock Scissors Lizard Spock](/assets/docs/title.png "heading and subheading")


## Selection Area

In this area there are five buttons of equal size, each button indicates a different choice for the user. The buttons each display the name of the choice and a FontAwesome indication of the choice. The buttons reverse their color and background color on a mouse hover, this allows the user to clearly see that selecting an option is the expected behaviour. 

![Selection area](/assets/docs/selection.png "selection area")

## Display Area

The display area starts off as two divs will place holder text in them, the place holder text indicates to the user that the frist div belongs to "Player 1" and the second div belongs to "Computer"

![choice area before](/assets/docs/choice-area-before.png "Player and computer choice display area before a selection has been made")

After the player makes a selection, the display area will populate with the Player's div will show the player's choice and a font awesome icon depicting their choice. The Computer's div will display a similar message and icon but this will be populated by a radom selection from the "choices" array. 

![choice area after](/assets/docs/choice-area-after.png "Player and computer choice display area after a selection has been made")

## Score Area

The score area will display the number of points that the Player and Computer has scored in the contest. It will allow the User to keep track of where they are in the contest and how crucial their next move will be. The score area also keeps tabs on the number of drawn games but drawn games do not affect the contest other than to prolong it. 

![Score after 1 round](/assets/docs/score-1-round.png "Score board after one round")

![Final Score](/assets/docs/final-score.png "Contest final score")

## Footer/Rules

## Alerts

## Future features

1. An option to change the parameters required to win.

2. An option to change the game from "Paper, rocks, scissors, lizard", spock to a simpler "paper, rock, scissors".

# Bugs

1. Could not get initial loop to work, changing the variable declaration form `let buttons = document.getElementsById("button");` to `let buttons = document.getElementsByTagName("button");` made it work.

2. Alerts were appearing before the player and computer's choice was populated and score updated. When either the player or computer reached 5 points the page would reload before the score updated. The following code was used : 

    setTimeout(function () {
        alert("It's a draw! Try again!");
    }, 500); 

This gave the user the chance to see what the computer chose before being told who won the round. The 0.5 second delay allowed for the Javacript to populate the DOM before sending the alert. 

3. To overcome the scenario where the page reloaded as soon either party scored 5 points, a similar time out function was used. In this case the function would have a longer time out, 3 seconds, to give the user an oppurtunity to look at the scoreboard and make a screenshot of the outcome if they desired. The following code gace the desired delay to the reload:

    function newGame() {
        setTimeout(function () {
            location.reload();
        }, 3000);
    }

4. The game was initially to be only "paper, rock, scissors" but through testing it was found that a drawn round was much too prevalent. Adding lizard and spock to the game changed the frequency of a drawn game from 33% to 20%. 


# Testing

## Validation

## Manual Testing




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

The setTimeout function was learnt from [W3schools](https://www.w3schools.com/jsref/met_win_settimeout.asp)

# Acknowledgements

A big thank you to Jack Wachira, for all of his input throughout this project.