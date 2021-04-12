# Functions - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

## Introduction to Functions

- Functions are a fundamental building block in JavaScript. A function is a reusable "chunk" of code that we define once and then can execute at a later point.
  - Functions allow us write reusable, modular code - reducing code repetition! (DRY - don't repeat yourself)

```javascript
// Let's simulate a dice roll:
let die1 = Math.floor(Math.random() * 6) + 1;
// If we needed to roll the dice 6 times, we would have to copy and paste this code 6 times. Functions allow us to simplify code and reduce repetition:
let die2 = rollDie();
// We can also make functions that accept input to modify it's behaviour. For example;
let die3 = rollDie(20); // we can create a function to roll a 20-sided die!
```

## Our First Function

- Functions must first be defined, then run at a later point.

#### Defining a Function:

```javascript
function funcName() {
	//code to run when the function is called
}
ex: function singSong() {
	console.log("DO");
	console.log("RE");
	console.log("MI");
	console.log("FA");
}
```

- Note, when you define/register a function, it does not run! You'll need to call it!

#### Running a Function:

```javascript
funcName(); //run the function once
ex: singSong(); //executes the function defined above.
```

- Functions should be called after they've been defined, but for some _reason_ JavaScript doesn't care and calling a function before it's definition still works...🤣🤷 --> _Hoisting_

---

## Arguments

- An argument is an input for a function. We can write functions that accept inputs. Doing this allows us to create functions that have dynamic outputs - based on the inputs provided.
- Similar to how we write in input for methods (_which are actually functions themselves!_) - like push(), console.log(), we can create functions that accept inputs.

- To define an argument, we add in a parameter in the parenthesis:

```javascript
function greet(person) {
	console.log(`Hi, ${person}!`); //person is a placeholder for an argument we wil lpass in when we run the function.
}
greet("Gloria"); //person = Gloria => Hi Gloria!
```

> **Note:**
>
> If an expected argument is not passed in with the function call, the function runs and uses `undefined` in place of the argument

## Functions with Multiple Arguments

- We can define functions that expect multiple arguments. We just need to define the required parameters in the appropriate order.

```javascript
function greet(firstName, lastName) {
	console.log(`User: ${firstName}, ${lastName[0]}.`);
}
greet("Matt", "Brown"); // => User: Matt, B.
```

```javascript
function repeat(str, num){
let result = '',
for (let i = 0; i < num; i++){
    result += str
}
console.log(result);
}
repeat('beep ', 4) // => beep beep beep beep
```

---

## The **Return** Keyword

- To write functions that have concrete output that we can capture, use the return keyword in the function definition!
  The return keyword returns the output of the function...

```javascript
function add(x, y) {
	let sum = x + y;
	return sum;
}
```

- The return statement ends the execution of the function, and specifies the value to be returned by that function.

```javascript
function add(x, y) {
	let sum = x + y;
	return sum; //Code execution stops here!
	console.log("End of Function"); //This piece is never executed!
}
// We can use the return statements in conditional blocks:
function add(x, y) {
	if (typeof x !== "number" || typeof y !== "number") {
		return false;
	}
	let sum = x + y;
	return sum; // the only way for this code to be executed is if the top piece never ran, because the return statement stops code execution, so if the top piece runs, the bottom will never get a chance to!
}
```

- Note: we can only return a single value. Although, this value can be an array or object with multiple items in it.
