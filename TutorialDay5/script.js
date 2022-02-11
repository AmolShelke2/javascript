let firstCard = 10;
let secondCard = 4;

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("mesage-el");

// Create a startGame() function. Move the conditional
// bellow (line 11-20) inside the body of the function

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 22) {
    message = "wohoo You've got BlackJack!";
  } else {
    message = "You're out of the game!";
    isAlive = "false";
  }

  messageEl.textContent = message;
}
