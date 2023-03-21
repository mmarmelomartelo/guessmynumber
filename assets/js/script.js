const secreNumber = Math.trunc(Math.random() * 30) + 1;
document.querySelector(".number").textContent = secreNumber;
let score = 30;
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "🖐 No a number!";

    } else if (guess === secreNumber) {
        document.querySelector(".message").textContent = " 🎉Correct Number!";

        document.querySelector("body").style.backgroundColor = "#60b347";
    } else if (guess > secreNumber) {
        document.querySelector(".message").textContent = " 📈Too high!";
        score--;
        document.querySelector(".score").textContent = score;
    } else if (guess < secreNumber) {
        document.querySelector(".message").textContent = " 📉Too low!";
        score--;
        document.querySelector(".score").textContent = score;
    }

    if (score <= 0) {
        document.querySelector(".message").textContent = "😣 Game over!"
        document.querySelector("body").style.backgroundColor = "#a84c32";

    }
})