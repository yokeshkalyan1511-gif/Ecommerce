// console.log("welcome!!");

//var raja="king"
//var penuts =100.5
//var penuts= false
//var myvariable
//var myvar

//console.log(typeof(myvar))
//let name = "Yk"
//let name = "Yk"

// console.log(name);

// var arasan="king"
// let age=40


// console.log(typeof(var))

// var username= "kalyan";
// let age = 30;
// const isVerified = true;

//console.log("User Name:", username);
//console.log("Age:",age);
//console.log("Verified:", isVerified);

// const orderId = 123;
// let itemCount = 3;
// var discountCode = "null";

// console.log("Order ID:", OrderID);
// Task3
//const theme ="dark";
//let volumeLevel;
//var isLoggedIn = false;


//console.log("Theme:", theme);
//console.log("Volume LEVEL:", volumeLevel);
//console.log("Logged In:", isLoggedIn);

//const accountBalance = 190000000000n;
//let hasOverdraft = false;
//var accountStatus = "active";

//console.log("Balance:", accountBalance);
//console.log("Overdraft Enabled:", hasOverdraft);
//console.log("Status:", accountStatus);

//let visitorName = "kk";
//const sessionId = 12;
//var isSubscribed ="true";

//console.log("Visitor:", visitorName);
//console.log("Session:", sessionId);
//console.log("Subscribed:", isSubscribed);

//var studentName = "vedha";
//let studentAge = 21;
//const hasScholarship = true;
//console.log("StudentName:", studentName);
//console.log("StudentAge:", studentAge);
//console.log("Scholarship:", hasScholarship);

// function getTicketPrice(age) {
 // if (age < 5) {
   // return "Free Entry";
 // } else if (age >= 5 && age <= 18) {
   // return "Child Ticket: ₹50";
 // } else if (age >= 19 && age <= 60) {
   // return "Adult Ticket: ₹100";
 // } else {
    //return "Senior Ticket: ₹70";
  //}
//}
//let age = 80;
//let ticketMessage = getTicketPrice(age);
//console.log(ticketMessage); 


//function getGrade(score) {
  //if (score >= 90) {
    //return "Grade A";
  //} else if (score >= 75) {
    //return "Grade B";
  //} else if (score >= 50) {
    //return "Grade C";
  //} else {
    //return "Fail";
  //}
//}
//let score = 82;
//let grade = getGrade(score);
//console.log("Student Score:", score);
//console.log("Assigned Grade:", grade);

//var name="My name is yokeshKalyan"
//console.log(name.replace("yokesh", "kavin"));


// console.log("Hello from JavaScript!");
// alert("JS is working!");


//let secret=7;
//let maxAttempts=3;
//let attempts=0;
//while(attempts < maxAttempts){
 // let guess=Number(prompt("Enter your guess"))
  //attempts++;
  //if(guess == secret){
    //alert("your guess is correct")
    //console.log("Secret Number",+secret);
    //break;
  //}else if(attempts<maxAttempts){
   // alert("wrong guess, try again")
  //}else{
    //console.log("you used all 3 chances, Attempt Failed");
   // }
//}

//let cart = [];
//let item;

//while (true) {
  //item = prompt("Enter an item to add to your cart (type 'done' to finish):");
  
  //if (item === "done") {
    //break;
  //}
  
  //cart.push(item);
//}

//console.log("Items in your cart:");
//console.log(cart);

//let cart = [];

//for (let i = 0; i < 4; i++) {
  //let item = prompt(`Enter item ${i + 1} to add to your cart:`);
  //cart.push(item);
//}

//console.log("Items in your cart:");
//console.log(cart);

//const products = [
  //{ name: "Laptop", price: 80000, rating: 4.5, inStock: true },
  //{ name: "Headphones", price: 3000, rating: 3.8, inStock: true },
  //{ name: "Smartphone", price: 60000, rating: 4.7, inStock: false },
  //{ name: "Keyboard", price: 1500, rating: 4.2, inStock: true },
  //{ name: "Mouse", price: 700, rating: 4.1, inStock: true },
  //{ name: "Monitor", price: 12000, rating: 4.8, inStock: true },
  //{ name: "Charger", price: 1200, rating: 3.9, inStock: true },
//];
//const popularInStockProducts = products.filter(product => product.inStock && product.rating > 4.8);
//const prices = popularInStockProducts.map(product => product.price);
//const totalRevenue = prices.reduce((total, price) => total + price, 0);
//console.log("Total Revenue from Popular Products:", totalRevenue);

//let students = [
  //{ id: 1, name: "Aarav", marks: 92 },
  //{ id: 2, name: "Diya", marks: 48 },
  //{ id: 3, name: "Rahul", marks: 76 },
  //{ id: 4, name: "Ishita", marks: 33 },
  //{ id: 5, name: "Karan", marks: 59 },
  //{ id: 6, name: "Neha", marks: 84 },
  //{ id: 7, name: "Vikram", marks: 45 },
  //{ id: 8, name: "Ananya", marks: 67 },
  //{ id: 9, name: "Rohan", marks: 25 },
  //{ id: 10, name: "Sneha", marks: 71 }
//];
//let sStudents = [
  //{ name: "Alice", marks: 78 },
  //{ name: "Bob", marks: 45 },
  //{ name: "Charlie", marks: 62 },
  //{ name: "David", marks: 33 },
  //{ name: "Eve", marks: 90 }
//];
//let passedStudents = students.filter(student => student.marks >= 50);
//let passedMarks = passedStudents.map(student => student.marks);
//let totalMarks = passedMarks.reduce((sum, mark) => sum + mark, 0);
//let averageMarks = totalMarks / passedMarks.length;
//console.log("Average Marks of Passed Students:", averageMarks);

//const employees = [
  //{ id: 1, name: "Arjun", salary: 18000 },
  //{ id: 2, name: "Divya", salary: 27000 },
  //{ id: 3, name: "Rahul", salary: 32000 },
 // { id: 4, name: "Sneha", salary: 24000 },
  //{ id: 5, name: "Karthik", salary: 41000 },
  //{ id: 6, name: "Priya", salary: 38000 },
  //{ id: 7, name: "Manoj", salary: 19000 },
 // { id: 8, name: "Anjali", salary: 26000 },
  //{ id: 9, name: "Vivek", salary: 29000 },
 // { id: 10, name: "Nisha", salary: 23000 }
//];
//const filteredEmployees = employees.filter(function(employee) {
 // return employee.salary > 25000;
//});

//console.log(filteredEmployees)

//const mapEmployees = employees.map(function(employee) {
  //return {
    //salary: employee.salary + (employee.salary * 0.10)
  //};
//});
//console.log(mapEmployees);


//employees.forEach(function(employee) {
  //const newSalary = employee.salary + (employee.salary * 0.10); // add 10%
  //console.log(`${employee.name} - New Salary: ₹${newSalary}`);
//});

//employees.forEach(function(employee) {
  //if (employee.salary > 30000) {
    //const newSalary = employee.salary + (employee.salary * 0.10);
    //console.log(`${employee.name} - New Salary: ₹${newSalary}`);
  //}
//});










