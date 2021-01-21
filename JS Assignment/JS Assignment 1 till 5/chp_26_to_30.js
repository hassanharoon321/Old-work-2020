var user = prompt("Enter a positive number: ");

console.log("number: " +user);

var round = Math.round(user);``
console.log("round-off: " +round);

var upperSide = Math.ceil(user);
console.log("ceil: " +upperSide);

var downSide = Math.floor(user);
console.log("floor: " +downSide);

//------------------------------------------------


var user2 = prompt("Enter a neagtive number to round off");
console.log("number: " +user2);

var round = Math.round(user2);
console.log("round-off: " +round);

var downSide = Math.floor(user2);
console.log("floor: " +downSide);

var upperSide = Math.ceil(user2);
console.log("ceil: " +upperSide); 


//------------------------------------------------------


var absoluteNumber = -4;
var absoluteValue = Math.abs(absoluteNumber);
console.log("The absolute value of "+ absoluteNumber + " is " + absoluteValue);


//---------------------------------------------------


var dice = Math.random() * 6;
var dice2 = Math.random() * 6;

var ceilDice = Math.ceil(dice);
var ceilDice2 = Math.ceil(dice2)

console.log("Random Dice Value " +ceilDice);
console.log("Random Dice Value " +ceilDice2);

//----------------------------------------------------


var toss = Math.random() * 2;
var tossCeil = Math.ceil(toss);

var toss2 = Math.random() * 2;
var tossCeil2 = Math.ceil(toss2);

var tossArray = ["","tails","heads"];

console.log(tossCeil +"\n Random coil Value: " +tossArray[tossCeil]);

console.log(tossCeil2 +"\n Random coil Value: " +tossArray[tossCeil2]);

//--------------------------------------------------------

var numbers = Math.random() *100;
var numbersCeil = Math.ceil(numbers)
console.log("Random numbers Between 1 to 100: " +numbersCeil);

//--------------------------------------------------------


var user = prompt("Enter your weight:");

var convertToInteger = parseInt(user)

console.log("The weight of user is " +convertToInteger + " kilograms");


//-----------------------------------------------------------------

var user = prompt("Enter a random number 1 to 10");

var random = Math.random() * 10;

var randomCeil = Math.ceil(random);

var userInt = parseInt(user)

console.log(randomCeil);

if (userInt == randomCeil){
    console.log("Welcome worst user");
}else{
    console.log("Tryagain bad luck!!");
}