const secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;


document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "🖐 No a number!";

    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = " 🎉Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';

    } else if (guess > secretNumber) {
        document.querySelector(".message").textContent = " 📈Too high!";
        score--;
        document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
        document.querySelector(".message").textContent = " 📉Too low!";
        score--;
        document.querySelector(".score").textContent = score;
    }

    if (score <= 0) {
        document.querySelector(".message").textContent = "😣 Game Over!"
        document.querySelector("body").style.backgroundColor = "#a84c32";

    }
})