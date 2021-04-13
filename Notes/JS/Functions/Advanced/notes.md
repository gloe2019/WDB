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

#### **Quiz**

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

---

## Block Scope

- A block refers to anything written within curly braces {} -- includes functions, conditionals AND loops...
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

---

## Lexical Scope

- Inner functions nested inside parent functions have access to variables defined in their parent functions.
- Nested functions have acces to variables defined in their parent functions, however this is not reflected in the reverse scenario -- parent functions do not have access to variables defined in inner/nested functions.

```javascript
function bankRobbery() {
	const heroes = ["Black Panther", "Spiderman", "Superman", "Wolverine"];
	function cryForHelp() {
		for (let hero of heroes) {
			console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
		}
	}
	cryForHelp(); // calling this function here allows the loop to be executed once the bankRobbery function is called.
}
```

---

## Function Expressions

- We've learned how to define functions using _function statements:_
  ```javascript
  function add(x, y) {
  	return x + y;
  }
  ```
- There's another way to define a function - by storing the function in a variable. This is a function expression:
- JavaScript treats functions as values that can be stored in variables
  ```javascript
  const add = function (x, y) {
  	// this expression creates the function and stores it in the variable named `add`
  	return x + y;
  };
  //To call the function, we use the name of the variable, since we don't actually name the function.
  ```

---

## Higher Order Functions

- Higher order functions operate on/with other functions.
- They can:
  - Accept other functions as arguments.
  - Return a function

### Accepting a Function as an Argument

```javascript
//We can pass a function as an argument into another function!
function rollDie() {
	const roll = Math.floor(Math.random() * 6) + 1;
	console.log(roll);
}

function callSixTimes(func) {
	for (let i = 0; i < 6; i++) {
		func();
	}
}

callSixTimes(rollDie); // Don't include the parenthesis when passing in a function as an argument, or the function will immediately execute, return a number value and invalidate the statement as callSixTimes is expecting a function and not a numerical value!
```

### Returning a Function

```javascript
function makeMysteryFunc() {
	const rand = Math.random();
	if (rand > 0.5) {
		return function () {
			console.log("I AM A GOOD FUNCTION!");
            console.log("You Win a Million Dollars!!😄🎊🎇🎊)
		};
	} else {
		return function () {
            alert ("YOU HAVE BEEN INFECTED WITH A COMPUTER VIRUS!")
            alert ("STOP TRYING TO CLOSE THIS WINDOW!")
            alert ("STOP TRYING TO CLOSE THIS WINDOW!")
            alert ("STOP TRYING TO CLOSE THIS WINDOW!")
            alert ("STOP TRYING TO CLOSE THIS WINDOW!")
        };
	}
}
```

```javascript
function makeBetweenFunc(min, max) {
	return function (num) {
		return num >= min && num <= max;
	};
} //This allows us to make a factory function that create distinct functions based on the parameters provided...

makeBetweenFunc(5, 10); // function should test whether or not there is a number between 5 and 10...
//You can capture the returned function in a variable!
//Ex:
const isChild = makeBetweenFunc(0, 18);
isChild(40); // => false
isChild(7); // => true

const isAdult = makeBetweenFunc(19, 64);

const isSenior = makeBetweenFunc(65, 120);
```

## Defining Methods

- We've encountered some methods previously:
  - `toUpperCase()` -- convert string to uppercase
  - `push()` -- add values to the end of an array
  - `indexOf()` -- return the array item stored at the provided index
- A method is a function that has been placed as a property on an Object.
- Every method is a function, however not all functions are methods!
- We can add functions as properties on objects!

```javascript
const myMath = {
	PI: 3.14159,
	square: function (num) {
		return num * num;
	},
	cube: function (num) {
		return num ** 3;
	},
};

myMath.cube(3); // => 27
```

- There is a new shorthand way of adding methods in JS:

```javascript
const myMath = {
	PI: 3.14159,
	square(num) {
		//**You don't need the function keyword!!**
		return num * num;
	},
	cube(num) {
		return num ** 3;
	},
};
```
