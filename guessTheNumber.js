var secretNumber = parseInt(Math.random() * 11);

function Guess() {
    var resultElement = document.getElementById("result");
    var guess = parseInt(document.getElementById("value").value);
    console.log(guess);
    if (guess == secretNumber) {
        resultElement.innerHTML = "Yes!! You are right!";
    } else if (guess > 10 || guess < 0) {
        resultElement.innerHTML = "You must enter a number from 0 to 10"
    } else {
        resultElement.innerHTML = "No! You missed!"
    }
}