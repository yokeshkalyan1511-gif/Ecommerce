const secret = 7;
let guess;

do {
  guess = parseInt(prompt("Guess the secret number:"));
} while (guess !== secret);

alert("Correct !");
