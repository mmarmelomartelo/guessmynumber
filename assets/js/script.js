// generate  a random number from 0 to 30 //
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}
// start the game again //

document.querySelector(".again").addEventListener("click", function() {
    score = 30;
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").textContent = "";
    document.querySelector("body").style.backgroundColor = "#636363";
    document.querySelector('.number').style.width = '15rem';

});

// evaluate if the guessing is corret //

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);


    // when the input is empty //
    if (!guess) {
        displayMessage("🖐 No a number!");

    } else if (guess > 30) {
        displayMessage("Am I a joke for you? the number must be betwwen 1 and 30");


        // when the guess is correct //
    } else if (guess === secretNumber) {
        displayMessage("🎉Correct Number!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        // when the guess is too high //
    } else if (guess > secretNumber) {
        displayMessage(" 📈Too high!");
        score--;
        document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
        displayMessage(" 📉Too low!");
        score--;
        document.querySelector(".score").textContent = score;
    }

    if (score <= 0) {
        displayMessage("💥 You lost the game!");
        document.querySelector(".number").textContent = "😣 Game Over!!!";
        document.querySelector("body").style.backgroundColor = "#a84c32";
        document.querySelector('.number').style.width = '50rem';
        document.querySelector(".score").textContent = "💥 You lost the game!"

    }
})