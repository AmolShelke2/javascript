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

// Object and methods
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

