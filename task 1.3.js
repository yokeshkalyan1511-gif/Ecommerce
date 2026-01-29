let cart = [];
let item;

while (true) {
  item = prompt("Enter item name (type 'done' to finish):");
  if (item.toLowerCase() === "done") break;
  cart.push(item);
}

console.log("Your cart:", cart);



task 4
let number;

do {
  number = parseInt(prompt("Enter a number between 1 and 100:"));
} while (isNaN(number) || number < 1 || number > 100);

alert("Valid number: " + number);



task5:
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Sum from 1 to 100:", sum);

task:6

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
task7:

for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}


task8:
let students = ["Anu", "Bala", "Chitra", "Deepak"];

for (let name of students) {
  console.log("Hello, " + name);
}


task9:
let prices = [100, 250, 75, 300];
let total = 0;

for (let price of prices) {
  total += price;
}

console.log("Total bill: ₹" + total);


task10:
let num = parseInt(prompt("Enter a number for its table:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${num} × ${i} = ${num * i}`);
}