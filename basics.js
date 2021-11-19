// VARIABLES

// Create a Variable: var
var favoriteFood = 'pizza';
var numOfSlices = 8;

console.log(favoriteFood);
console.log(numOfSlices);

// Create a Variable: let
let changeMe = 'Change from this';
console.log(changeMe);

changeMe = 'To this!!!';
console.log(changeMe);

// Create a Variable: const
const entree = 'tacos';
console.log(entree);

// THIS WILL GIVE A TypeError: Assignment to constant variable.
// entree = 'chicken'
// console.log(entree)

// Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9000;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5; // same as levelUp + 5
powerLevel -= 100; // same as powerLevel - 100
multiplyMe *= 11; // same as multiplyMe * 11
quarterMe /= 4; // same as quarterMe / 4

console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

// The Incrememnt and Decrement Operator
let gainOne = 3;
let loseOne = 3;

gainOne++;
loseOne--;

console.log(gainOne);
console.log(loseOne);

// String Concatenation with Variables
var favoriteAnimal = 'dog';

console.log('My favorite animal: ' + favoriteAnimal)

// String Interpolation
var myName = 'Jake';
var myCity = 'Colorado Springs';

console.log(`My name is ${myName}. My favorite city is ${myCity}`); // Make sure to use the back tik ` not the quotes ' or "




