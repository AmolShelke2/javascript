// coding challenge day 5

/* 
remember the tip calculator challenge? lets create a more advanced version using 
everything we learned! 

this time, john and his family went to 5 different restaurants. the bills 
were $124, $48, $268, $180 and $42.
john likes to tip 20% of the bill when the bill is less than $50 and
$200, and 10% if the bill more than $200


implenent a tip calculator using objects and loops: 
1. create an object with an array for the bill values 
2. Add a method to calcute the tip 
3. this method should include a loop to itrate over all the paid bills and 
do the tip calculation 

4. As an output, create 1) a new array containing all tips, and 2) an array containing final 
paid amounts (bill + tip). hint start with two empty arrays[] as properties
and then fill them up in the loop.



EXTRA AFFTER FINISHING: Mark's family also went on a holidy going to 4 different restaurants 
The bill wee $77,  $375, $110, $45 

Mark likes to tip 20% of the bill when the bill is less than $100 , 10% when the bill is between 
$100 and $350, and 25% if the bill is more than $300 (different than john)

5. Implements the same  functionality as before this time using mark's tippinng rule.

create a function (not a method) to calculate the avrage of given array of tips. looop over
the array and each iteration store the current sum inn a variable (starting from 0 ). after you have the sum
of the array, divide it by the number of elements in it ("That's how you calculate the average")


7. calcualte the average tip for each family 
log to the console which family paid the highest tips on average 

*/

var john = {
  fullName: "John smith",
  bills: [124, 48, 268, 180, 42],

  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // add results to the corresponding array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};


var mark = {
  fullName: "Mark miller",
  bills: [77, 475, 110, 45],

  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 350) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      // add results to the corresponding array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// DO the calculation
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      " family pays higher tips with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName + "s pays higher tips with an average of $" + mark.average
  );
} else {
  console.log("they pays the same tips");
}
