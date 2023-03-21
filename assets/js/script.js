console.log("Hi we are connected!");

const number = Math.trunc(Math.random() * 30) + 1;
console.log(number);
console.log(document.querySelector(".message").textContent = " 🎉Correct Number!");

document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        document.querySelector(".message").textContent = "🖐 No a number!";
    }


})