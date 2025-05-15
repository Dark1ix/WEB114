const MAX_GUESS = 10;
let guessesTaken = 0;
let secretNumber = Math.floor(Math.random() * 100) + 1;

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("guessForm");
    const guessInput = document.getElementById("myguess");
    const takenDisplay = document.getElementById("guessesTaken");
    const remainingDisplay = document.getElementById("guessesRemaining");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const guess = parseInt(guessInput.value);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100.");
            return;
        }

        guessesTaken++;
        takenDisplay.textContent = guessesTaken;
        remainingDisplay.textContent = MAX_GUESS - guessesTaken;

        if (guess === secretNumber) {
            alert("You guessed correct! The number was " + secretNumber);
            guessInput.disabled = true;
        } else if (guessesTaken >= MAX_GUESS) {
            alert("Game over! You used all your guesses. The number was " + secretNumber);
            guessInput.disabled = true;
        } else if (guess > secretNumber) {
            alert(guess + " is too high.");
        } else {
            alert(guess + " is too low.");
        }

        guessInput.value = "";
    });
});
