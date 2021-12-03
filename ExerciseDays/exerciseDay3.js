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

// coding challenge 2
/*
 john and mike both play basketball in different team in the latest 3 games, 
 john's team scored 89, 120, and 183 points, while Mike's team scored 136, 94, and 123 points.


1 : calculate the average score of each team 
2. decide which teams wins in average(highest average, score), and print the winner
in the console. also include the average score in the output 
3. then change the score to show different winners. dont't forget to take into accout there 
might be a draw(the same avarage score)

4. Extra : mary also plays basetball and her team scored 97, 134, and 105 points. like before
log the average winner to the console. HINT you will need the && operator to take the 
decision

 */
var johnTeamsScore = (89 + 120 + 183) / 3;
var mikesTeamScore = (116 + 94 + 123) / 3;
var marryTeamScore = (97 + 134 + 105) / 3;

console.log(johnTeamsScore, mikesTeamScore, marryTeamScore);
if (johnTeamsScore > mikesTeamScore && johnTeamsScore > marryTeamScore) {
  console.log(
    "john's team win's the game with ther high score " + johnTeamsScore
  );
} else if (mikesTeamScore > johnTeamsScore && mikesTeamScore > marryTeamScore) {
  console.log("mike's team win's the game with high score " + mikesTeamScore);
} else if (marryTeamScore > johnTeamsScore && mikesTeamScore) {
  console.log(
    "Marry's team win's the game with the high score " + marryTeamScore
  );
} else {
  console.log("the game is draw");
}

/*
if (johnTeamsScore > mikesTeamScore) {
  console.log("John's team is score more than mike's team " + johnTeamsScore);
} else if (mikesTeamScore > johnTeamsScore) {
  console.log("Mikes team has score more than joh's team" + mikesTeamScore);
} else {
  console.log("There is  a tie! ");
} */


var johnTeamsScore = (89 + 120 + 183) / 3;
var mikesTeamScore = (116 + 94 + 123) / 3;
var marryTeamScore = (97 + 134 + 105) / 3;

console.log(johnTeamsScore, mikesTeamScore, marryTeamScore);

if (johnTeamsScore > mikesTeamScore && johnTeamsScore > marryTeamScore) {
  console.log(
    "John's team wins the game with the high score " + johnTeamsScore
  );
} else if (mikesTeamScore > johnTeamsScore && mikesTeamScore > marryTeamScore) {
  console.log(
    "Mike's team wins the game with the high score " + mikesTeamScore
  );
} else if (marryTeamScore > johnTeamsScore && mikesTeamScore) {
  console.log(
    "Marry's team wins the score with the high score " + marryTeamScore
  );
} else {
  console.log("The game is draw");
}
