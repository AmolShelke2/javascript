// object and property in javacript

// Object can hold different type of data strign's number boolean, undefined, null, array anything
//  and also we can attached function to the objects and these function are then called methods
// so how can we create Methods

// object literal
/*
var john = {
  firstName: "John",
  lastName: "Smith",
  age: 17,
  birthYear: 1989,
  family: ["jain", "mark", "bob", "Emily"],
  job: "teacher",
  isMarried: false,
};

console.log(john.firstName);
console.log(john['lastName']);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john['isMarried'] = true;
console.log(john);

// New object syntax 
var jane = new Object();
jane.name = "jane";
(jane.birthYear = 1990), (jane['lastName'] = "smith");
console.log(jane)
 */

// Object and methods and this method
/*
var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 2004,
  family: ["jane", "mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,

  calcAge: function (birthYear) {
    this.age = 2021 - this.birthYear;
  },
};
john.calcAge();
console.log(john);
*/


// arrays are all are objects

// methods basic:
/*
var amol = {
  firstName: "Amol",
  lastName: "shelke",
  job: "Nothing",
  birthYear: 2004,
  isMarried: false,

  calcAge: function () {
    this.age = 2021 - this.birthYear;
  },
};


amol.calcAge();
console.log(amol);
*/

// create a object in which you have to create a method that logs the age of the person
// and logs the object on the console.

/*
var a = {
  firstName: "a",
  lastName: "b",
  job: "Nothing",
  birthYear: "1990",
  isMarried: true,

  calcAge: function () {
    this.age = 2021 - this.birthYear;
  },
};

a.calcAge();
console.log(a);
*/

// Coding challenge
// calculate the BMI index of the marks and john's body  by the object and function methods

// solutions
/*
var john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  BMIcal: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

var mark = {
  fullName: "mark miller",
  mass: 78,
  height: 1.69,

  BMIcal: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (john.BMIcal() > mark.BMIcal()) {
  console.log(john.fullName + " has a higher BMI of " + john.bmi);
} else if (mark.bmi > john.bmi) {
  console.log(mark.fullName + " has a higher BMI of " + mark.bmi);
} else {
  console.log("There BMI is same");
}

*/
// -------------------------------------------------------------------------------------------------------------------------------------

// loops in javacript

// for loops in javacript
// loops are used to iterate over the items.and imagine that you have a
// very repeative task like log the number from 1 to 10 you have to do like console.loog(1)
// console.log(2) for ten times  but this repetitive task can be done with the loops in very easy way
// you can basically automate repative task using loop

// there are two loops in javascript for and while

// for loop in javascript

// for (var i = 0; i <= 9; i++) {
//   console.log(i);
// }

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true , log i to the console, i++
// i = 10, 10 < 10, False, exit the loop

// var john = ["john", "smith", 1990, "designer", false];
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]); //for loop
// }

// var amol = ["amol", "Hp", "Motorola", "coder", "Frontend dev"];
// for (var a = 0; a < amol.length; a++) {
//   console.log(amol[a]); // for loop
// }

// while loop in javacript
/*
so different between for loop and the while
 loop is that in while we only have the conditions so all we
 have to pass into wile loop */

// while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// continue and break statement
/*
the continue we use to quit just the current iteration of the loop and then
continue to the next one */

var john = ["john", "smith", 1990, "Designer", false, "blue"];

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") continue;
//   console.log(john[i]);
// }

/*
difference between continue and break that the break exits the current iteration
and the entire loop as well And so it dosen't continue to the next
Iteration */

// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") break;
//   console.log(john[i]);
// }

// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}

// StackOverflow 😍
/*
john
  .slice()
  .reverse()
  .forEach(function (entry) {
    console.log(entry);
  }); 
  */
