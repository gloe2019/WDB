# Functions Continued...

## Function Scope

- The location where a variable is defined dictates where we have access to that variable.
- Variables defined within a function are scoped to that function. You cannot access them outside the function - They are local variables.

```javascript
function collectEggs() {
	let totalEggs = 6;
	console.log(totalEggs);
}
// Run the function:
collectEggs(); // => 6
console.log(totalEggs); //=> totalEggs is not defined! It only exists within the function collectEggs()

//Next Example:
let bird = "Scarlet Macaw";
function birdWatch() {
	let bird = "Great Blue Heron";
}

console.log(bird); // => Scarlet Macaw
birdWatch();
console.log(bird); //=> Scarlet Macaw. Bird exists in the global scope!
//If you do console.log(bird) within the function, then it will display 'Great Blue Heron', but outside of the function, bird will always display 'Scarlet Macaw'

let bird = "Scarlet Macaw";
function birdWatch() {
	console.log(bird);
}
birdWatch(); // => Scarlet Macaw. We still have access to variables defined outside a functon as they are global!
```

#### Quiz

```javascript
//What is printed to the console when this code runs?
let animal = "Giant Pacific Octopus";
function observe() {
	let animal = "Pajama Squid";
	console.log(animal);
}
observe(); // => "Pajama Squid"

//What is the result of running the following code:
const creature = "Common Sea Dragon";
function scubaDive() {
	const creature = "Spanish Dancer"; //A type of sea slug
	console.log(creature);
}

scubaDive(); // => "Spanish Dancer"

//What two values are printed to the console:
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
	let deadlyAnimal = "Scorpionfish";
	console.log(deadlyAnimal);
}
handleAnimal(); // => "Scorpionfish
console.log(deadlyAnimal); // => "Blue-Ringed Octopus"
```

## Block Scope

- A block refers to anything written within curly braces {} -- includes functions AND conditionals AND loops...
- Variables created with the `let` or `const` keywords are block scoped - They only exist within the block!

```javascript
let radius = 5;
if (radius < 0) {
	const PI = 3.1416;
	let msg = "HI!";
}
console.log(radius); // => 5
console.log(PI); //=> PI is not defined!
console.log(msg); // => msg is not defined, It doesn't exist outside the conditional!

for (let i = 0; i < 5; i++) {
	let msg = "AAKSJDSDADGH";
	console.log(msg); // The loop executes and msg is printed 5 times! once the loop is finished executing, msg no longer exists!
}
console.log(msg); // => msg is not defined
```

- When we use the `var` keyword, our variables are scoped to functions, but not to blocks - so we can access them outside the block!

```javascript
for (let i = 0; i < 5; i++) {
	var msg = "ASDASJDKHA";
	console.log(msg); //msg is printed 5 times
}
console.log(msg); // => "ASDASJDKHA"; -- msg is NOT block scoped because it was created with the var keyword!
```
