// exercise No1

// Create Two variables firstName and lastName
// concatenate the two variables into a third variables called fullName
// log fullName to the console

// soultion
let firstName = "Amol";
let LastName = "Shelke";

let fullName = firstName + " " + LastName;

console.log(fullName);

// exercise No. 2
let name = "Linda";
let greeting = "Hi there";

function myGreeting() {
  let message = greeting + ", " + name + "!";
  console.log(message);
}

myGreeting();

// Exercise No.3
// Create two function, add3points() and removePoint(), and have them
// add remove poinnts to/from the myPoinnts variable

let myPoints = 3;

function add3points() {
  myPoints += 3;
  console.log(myPoints);
}
add3points();
add3points();
add3points();

function remove1Points() {
  myPoints -= 2;
  console.log(myPoints);
}
remove1Points();
remove1Points();

// Exercise 3
// try to predict what each of the lines will log out

console.log("2" + 2); //the answer will be 22
console.log(11 + 7); //the answer will be 18
console.log(6 + "5"); //the answer will be 65
console.log("My points: " + 5 + 9); //the answer will be My Points: 59
console.log(2 + 2); //the answer will be 4
console.log("11" + "14"); //the answer will be 1114



// Exercise No. 4 

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let paragraph = document.getElementById("error");
console.log(paragraph);

function purchase() {
  paragraph.textContent = "Some thing went wrong please try again";
}



// exercise 4 
let num1 = 5
let num2 = 6

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


let sumEl = document.getElementById(sum - el)

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}


function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}


function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}


function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}
