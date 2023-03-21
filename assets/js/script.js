let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
console.log("we are connected");
document.querySelector(".number").textContent = secretNumber;
document.querySelector(".again").addEventListener("click", function() {
    score = 30;
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").textContent = "";
    document.querySelector("body").style.backgroundColor = "#636363";
    document.querySelector('.number').style.width = '15rem';

});


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
        document.querySelector(".message").textContent = "💥 You lost the game!"
        document.querySelector(".number").textContent = "😣 Game Over!!!";
        document.querySelector("body").style.backgroundColor = "#a84c32";
        document.querySelector('.number').style.width = '50rem';
        document.querySelector(".score").textContent = "💥 You lost the game!"

    }
})