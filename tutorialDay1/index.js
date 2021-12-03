// day one of javascript full course
// variables and datatypes

// this is a single line comment

/*
this lecture is about data types 

// string 
var firstName = "John"
console.log(firstName)

var lastName = "Smith"

// number 
var age = 19


// boolean 
var fullAge = true
console.log(fullAge)

// undefined 
var job
console.log(job)

job = 'Front end dev'
console.log(job)
*/

/*
variables mutation and type coercion 
*/

// javascript do automatically type coercion we don't need to coercion them by ourself

// type coercion
// var firstName = "John"
// var age = 35

// console.log(firstName + '' + age)

// var job, isMarried
// job = "devloper"
// isMarried = false

// console.log(firstName + ' is a ' + age + ' year old '
//     + job + ', is he married? ' + isMarried)

// // variable mutation

// age = 'thirty five'
// job = 'driver'
// alert(firstName + ' is a ' + age + ' year old '
//     + job + ', is he married? ' + isMarried)

// var lastName = prompt('what is his last name? ')
//  console.log(firstName + ' ' + lastName)

// basic operator in javascript
// var year, yearJohn, yearMark
// now = 2021
// year = 2021
// yearJohn = year - 20
// yearMark = year - 29

// console.log(yearJohn)

// console.log(now + 2)
// console.log(now * 3)
// console.log(now / 2)

// // logical operators
// ageJohn = 19
// ageMark = 23

// var older = ageJohn > ageMark
// console.log(older)

// // typeof
// console.log(typeof (older))
// console.log(typeof (now))
// console.log(typeof 'Mark is older than john')

// var x
// console.log(typeof(x))

// operator presendence

// var now = 2018
// var yearJohn = 1989
// var fullAge = 18

// // multiple operator
// var isFullAge = now - yearJohn >= fullAge //true
// console.log(isFullAge)

// // grouping
// var ageJohn = now - yearJohn
// var ageMark = 35
// var average = (ageJohn + ageMark) / 2

// var x, y;
// x = y =  (3 + 5) * 4 - 6 // 8 * 4 - 6  // 32 - 6 // 26
// console.log(x, y)

// More operator

// x = x * 2 //we are doubling the x
// x *= 2 //same

// console.log(x)

// x += 10
// console.log(x)

// x++
// console.log(x)

// x--
// console.log(x)

// calculate the BMI index of the marks and john's body
// // Coding challenge

var marksMass = 55;
var marksHeight = 3.2;

var johnsMass = 57;
var johnsHeight = 3.5;

var marksBMI = marksMass / (marksHeight * marksHeight);
var johnsBMI = johnsMass / (johnsHeight * johnsHeight);

if (marksBMI > johnsBMI) {
  console.log("marks BMI is higher than john's. ");
} else {
  console.log("John's BMI is higher than mark's");
}

// if else statement in javascript
var age = 18;

// write a if else statement to that will be
// if age < 18 then log the message like you cannot enter in the club
// else log the message like you're welcome

if (age <= 18) {
  console.log("You cannot enter in the club! ");
} else {
  console.log("you're welcome");
}

// create  a variable Named secret_num and assign a number to the variable
// then write a logic for the program and the logic will be
// if user guess a high number then log a message like ohh you guess to long
// if user guesses  a number near the secret number then log a message like you are to close to get the secret number
// and then last one if user guesses the secret number then log a message like yes you guess it perfect

// solution

secretNum = 9;

// logic
if (secretNum === 9) {
  console.log("Wohoo yoou guess it right! ");
} else if (secretNum >= 14) {
  console.log("you are to close to the secret number");
} else {
  console.log("You guess to high");
}

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "Married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will married soon ");
}
