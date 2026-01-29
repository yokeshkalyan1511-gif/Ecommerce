let number;

do {
  number = parseInt(prompt("Enter a number between 1 and 100:"));
} while (isNaN(number) || number < 1 || number > 100);

alert("Valid number: " + number);