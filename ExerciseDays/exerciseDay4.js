// coding challenge day
/***
 
 john and his family went on holiday and went to 3 different restaurants. the 
 billls were $124, $48, and $268 .

 to tip the waiter a fair amount, joh created a simple tip calculator (as a function)
 he like to tip 20% of the bill when the bill is less than $50, 15% when the bill is 
 between $50 and $200, and 10% if the bill is more than $200


 in the end, john would like to have 2 arrays:
 1. containing all three tips (one for each bill)
 2. containing all three final  paid amound (bill, tip)

Note: spend 10 minutes to solve this problem
 */

// solution :

function tipCalculator(bill) {
  var percentage;

  if (bill < 50) {
    percentage = 0.2; //it will be 20%
  } else if (bill >= 50 && bill <= 200) {
    percentage = 0.15; //it will be 15%
  } else {
    percentage = 0.1; // it will be 10%
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

function tipCalculator(bill) {
  var percentage;

  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill <= 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }

  return percentage + bill;
}
var bill = [124, 48, 268];
var tip = [
  tipCalculator(bill[0]),
  tipCalculator(bill[1]),
  tipCalculator(bill[2]),
];

var finalValue = [bill[0] + [tip[0]], bill[1] + [tip[1]], [bill[2]] + [tip[2]]];
console.log(finalValue, tip);
