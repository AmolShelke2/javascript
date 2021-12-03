// tutorial day 2

// 1. if else statements
/*
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will married soon");
}

// example
var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married! ");
} else {
  console.log(firstName + " will married hopefully married soon! ");
}

// calculate the BMI
var johnMass = 45;
var johnHeight = 2.3;

var markMass = 59;
var markHeight = 3.5;

var johnBMI = johnMass / (johnHeight * johnHeight);
var markBMI = markMass / (markHeight * markHeight);

if (johnBMI > markBMI) {
  console.log("John's bmi is higher than mark's");
} else {
  console.log("Mark's BMI is higher than john's");
}

------------------------------------------------------------------------------------------
// 2. boolean logic
var firstName = "john";
var age = 16;

if (age < 13) {
  console.log(firstName + " is a kid!");
} else if (age >= 13 && age <= 20) {
  console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName + "is  a young man.");
} else {
  console.log(firstName + " is a man. ");
}

// 3. The Ternary operator and switch statement

var firstName = "john";
var age = 16;

age >= 16
  ? console.log(firstName + " drink beer.")
    : console.log(firstName + " drink juice");
  


var drink = age >= 18 ? "beer" : "juice";
console.log(drink);



// if (age >= 18) {
//   var drink = "beer";
// } else {
//   var drink = "juice";
// }

--------------------------------------------------------------------------------------
//switch statement 

var job = 'teacher'
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code')
        break
    case 'driver':
        console.log(firstName + ' drives an uber in inida')
        break
    case 'designer':
        console.log(firstname + ' designs beautiful websites. ')
        break
    default:
        console.log(firstName + ' does something else. ')
}


var age = 16
switch (true) {
    case (age < 13): {
        console.log(firstName + ' is  a kid')
        break
    }
    case (age >= 13 && age <= 20): {
        console.log(firstName + ' is  a teenager')
        break
    }
    case (age >= 20 && age <= 30): {
        console.log(firstName + ' is a young man')
        break
    }
    default:{
        console.log(firstName + ' is a man')
    }
}
*/
// ____________________________________________________________________________________________________
// 5. TRuthy and falsy values and equality operator

// falsy values: undefined, null, 0 ,'', NaN

// truthy values: not falsy values

// var height

// height = 23

// if (height || height === 0) {
//     console.log("variable is defined ")
// } else {
//     console.log("variable has not been defined")
// }

/******************************************  
 equality operator
  *******************************/

// if (height == "23") {
//     console.log("the == does operator type coercion! ")
// }

// == this equality operator does the type coercion
// === this equality operator is a strict operator

// ---------------------------------------------------------------------------------

// // coding challenge 2nd
// var johnTeamsScore = (89 + 120 + 183) / 3;
// var mikesTeamScore = (116 + 94 + 123) / 3;
// var marryTeamScore = (97 + 134 + 105) / 3;

// console.log(johnTeamsScore, mikesTeamScore, marryTeamScore);
// if (johnTeamsScore > mikesTeamScore && johnTeamsScore > marryTeamScore) {
//   console.log(
//     "john's team win's the game with ther high score " + johnTeamsScore
//   );
// } else if (mikesTeamScore > johnTeamsScore && mikesTeamScore > marryTeamScore) {
//   console.log("mike's team win's the game with high score " + mikesTeamScore);
// } else if (marryTeamScore > johnTeamsScore && mikesTeamScore) {
//   console.log(
//     "Marry's team win's the game with the high score " + marryTeamScore
//   );
// } else {
//   console.log("the game is draw");
// }

// /*
// if (johnTeamsScore > mikesTeamScore) {
//   console.log("John's team is score more than mike's team " + johnTeamsScore);
// } else if (mikesTeamScore > johnTeamsScore) {
//   console.log("Mikes team has score more than joh's team" + mikesTeamScore);
// } else {
//   console.log("There is  a tie! ");
// } */

// var johnTeamsScore = (80 + 120 + 109) / 3;
// var mikesTeamScore = (120 + 80 + 100) / 3;
// var marryTeamScore = (140 + 70 + 100) / 3;

// console.log(johnTeamsScore, mikesTeamScore, marryTeamScore);

// // conditons
// if (johnTeamsScore > mikesTeamScore && johnTeamsScore > marryTeamScore) {
//   console.log(
//     "John's team win the game by the high score of " + johnTeamsScore
//   );
// } else if (mikesTeamScore > johnTeamsScore && mikesTeamScore > marryTeamScore) {
//   console.log(
//     "Mike's team win the game by the high score of " + mikesTeamScore
//   );
// } else if (
//   marryTeamScore >> johnTeamsScore &&
//   marryTeamScore > mikesTeamScore
// ) {
//   console.log(
//     "Marry's team win the game by the high score of " + marryTeamScore
//   );
// } else {
//   console.log("The game is draw");
// }
// ---------------------------------------------------------------------------------------------------------

// 6 . function in javascript

// function Birthyear() {
//   var myAge = 2021 - 2004;
//   console.log(myAge);
// }
// Birthyear();

// function calcuateAge(Birthyear) {
//   return 2018 - Birthyear;
// }
// var ageJohn = calcuateAge(1990);
// var ageMike = calcuateAge(1948);
// var ageJane = calcuateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//   var age = calcuateAge(year);
//   var retierment = 65 - age;

//   if (retierment > 0) {
//     console.log(firstName + " retire in " + retierment + " years.");
//   } else {
//     console.log(firstName + " is already retired");
//   }
// }

// yearsUntilRetirement(1990, "john");
// yearsUntilRetirement(1948, "Mike");
// yearsUntilRetirement(1969, "jane");

// ----------------------------------------------------------------------------------------------

/*********************************************
 7 . function statement and expression
 *******************************************
   */

// function declelaration
// function whatDoYouDo(job, firstName) {}

// function expression

/** 
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drive a cab in india";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "john"));
console.log(whatDoYouDo("driver", "mark"));
console.log(whatDoYouDo("designer", "jain"));

// differnce between statement and expression so javascript expressions are pieces of code that always produce a value and it's dosen't matter how long they are as as the code results
//  in a single value and it is an expression

// ____________________________________________________________________________________________________________________________

/*******************************
 8 . Arrays in javascript
 */

//  intialize new array
/*
var names = ["JOhn", "Mark", "Jane"];
var years = new Array(1889, 1868, 1767);

console.log(names);
console.log(names.length);

// mutate array data
names[1] = "ben";

names[names.length] = "mary";
console.log(names);

// different data types
var john = ["john", "smith", 1990, "teacher", false];
// array method 
john.unshift('mr.')
john.push("blue");
john.pop()
john.push()
console.log(john);

console.log(john.indexOf(1990))
*/

// codding challenge 3rd
/*
function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill <= 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }

  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

var finalValue = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalValue);
*/
// --------------------------------------------------------------------------------------------------------

// objects and properties

var john = {
  firstName: "john",
  lastName: "smith",
  birthYear: 1998,
  family: ["jane", "mike", "bob", "Emily"],
  job: "Teacher",
  isMarried: false,
};

console.log(john.firstName);
console.log(john["lastName"]);

var x = "birthyear";
console.log(john[x]);

// Mutation changing the value of the variable's
john.job = "designer";
john["isMarried"] = true;
console.log(john);

john.job = "gamer";
john["isMarried"] = false;
console.log(john);

// create our own object
var amol = {
  firstName: "Amol",
  lastName: "shelke",
  age: 17,
  birthYear: 2004,
  job: "berozgar",
  family: ["Amol", "ganesh", "mummy", "papa"],
};

console.log(amol.firstName);
// |
// |
// -- Same as this

console.log(amol["lastName"]);

// mutation
// changing the value of the variables
amol.age = 19;
// here i change my age to 19 using mutation
console.log(amol.age);
