const secreNumber = Math.trunc(Math.random() * 30) + 1;
document.querySelector(".number").textContent = secreNumber;

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "🖐 No a number!";

    } else if (guess === secreNumber) {
        document.querySelector(".message").textContent = " 🎉Correct Number!";
    } else if (guess > secreNumber) {
        document.querySelector(".message").textContent = " 📈Too high!";
    } else if (guess < secreNumber) {
        document.querySelector(".message").textContent = " 📉Too low!";
    }


})