// Exercise no 1
let age =  19
// check if the person is old enough to enter the nightclub
// log a suitable mesage to the console in both cases
// if age is greater than 21 you can enter in the club
// else you cannot enter in club

if (age <= 21) {
    console.log("You can not enter in the club")
} else {
    console.log("Welcome")
}

// exercise no 2
// if age is less than 100 = not elegible
// else if exactly 100 = here is your birthday card from the king
// else
let age = 100

if (age <= 100) {
    console.log("You are not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the king")
} else {
    console.log("Not elegible You have gotten already one")
}

// Exerrcise no 3 
let firstCard = 10
let secondCard = 5

let sum = firstCard + secondCard
// wirte condition according to these rule
// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

if (sum <= 20) {
    console.log("DO you want to draw a new card")
} else if (sum === 21) {
    console.log("wohoooo! you got the blackjack")
} else {
    console.log("You're out of the game")
}


// According to the following statements tell that which boolean value will be on the console 
console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // flase

