/* let youAreHappy = true;
let youKnowIt = true;

if (youAreHappy && youKnowIt) {
  console.log("Clap Your Hands!");
}
else {
  console.log("Cry!");
}
 */

let birthYear = 2000;
let favoriteNumber = 24;

let age = 2024 - birthYear;
console.log(age);
if (age <= 0) {
  console.log("You do not exist yet.");
}

if (age <= 10 && age > 0) {
  console.log("You are a child.");
}

if (age > 10 && age < 18) {
  console.log("You are a teenager.");
}

if (age >= 18) {
  console.log("You are an adult.");
}

if (age > favoriteNumber){
  console.log("Your age is greater! Age: " + age);
}
else if (age < favoriteNumber) {
  console.log("Your favorite number is greater! Favorite Number: " + favoriteNumber);
}
else {
  console.log("The numbers are the same!");
}

if (favoriteNumber % 2 === 0) {
  console.log("Your favorite number is even.");
}
else {
  console.log("Your favorite number is odd.");
}



