# Loops - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

## Intro to Loops

- Loops allow us to repeat code easily.
  - ex: print 'hello' 10 times...
- There are multiple types of loops:
  - for loop
  - while loop
  - for...of loop
  - for...in loop
- All loops essentially do the same thing - they repeat an action some number of times. Different loop mechanisms provide different ways to determine the start/end points of a loop.

---

## For Loops

- A for loop repeats until a specified `condition` becomes false
  Syntax:

```javascript
for ([initialExpression]; [condition]; [incrementExpression]) {
	//code to run while looping
}
//Example:
for (let i = 1; i <= 10; i++) {
	console.log(i);
}
```

- The `initialExpression` portion starts the loop. This is where you typically create a variable that exists for the purpose of the loop.
- The `condition` portion is where you state the condition to be evaluated in order to determine whether or not the loop should execute. If `true`, the loop statetements will execute, and if `false`, the loop terminates. If this portion is omitted, the condition will be assumed to be true (be careful, as this can create an infinite loop! ~no bueno🙁😞)
- The `incrementExpression` portion will be executed for every iteration of the loop. It updates the iterator variable on each loop
- Whatever code you put in the loop body will be executed with every iteration of the loop, so be sure to setup appropriate control statements when necessary.

#### Practice: Our First For Loop

- Use a for loop to print out the classic chorus lyrics of "I'm Blue" by Eiffel 65. Print out the string "Da ba dee da ba daa" exactly 6 times.

```javascript
for (leti = 0; i < 6; i++) {
	console.log("Da ba dee da ba daa");
}
```

#### More Examples of For Loops

- Make a loop that prints out even numbers from 0 to 20

```javascript
for (let i = 0; i <= 20; i += 2) {
	console.log(i);
}
//Odd numbers in the same range:
for (let i = 1; i <= 20; i += 2) {
	console.log(i);
}
```

- Count down by 10 from 100 to 0

```javascript
for (let i=100; i>=0, i-=10){
    console.log(i);
}
```

### Infinite Loops

- An infinite loop is one that runs forever because the condition statement is always true!
- It will run until it uses up all the memory of the browser, and is pretty nasty.
- Avoid them by thinking through your code, and confirming that a stopping point exists for your loop.

```javascript
//Example of an Infinite Loop:
for (let i = 20; i >= 0; i++) {
	console.log(i);
}
```

- The example above is an infinite loop because **_`i` will always be greater than 0_** since it's being incremented by 1 with every loop iteration. Hence, the condition remains true and the loop runs forever...

### Looping Over Arrays

- We use loops frequently when interacting with arrays. To loop over an array, start at index 0 and continue looping until the last index (length-1)

```javascript
//Basic syntax for printing out items in an array:
const arrayName = ["arrayItem", "arrayItem", "arrayItem"];
for (let i = 0; i < arrayName.length; i++) {
	console.log(arrayName[i]);
}
//Example:
const animals = ["lions", "tigers", "bears"];
for (let i = 0; i < animals.length; i++) {
	console.log(i, animals[i]);
}
//0 'lions'
//1 'tigers'
//2 'bears'

//to go backwards:
for (let i = animals.length - 1; i >= 0; i--) {
	console.log(animals[i]);
}
```

#### Practice: Iterating Arrays

- For the `people` array provided, print out each name in uppercase letters.

```javascript
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
	console.log(people[i].toUpperCase());
}
```

### Nested Loops

- Loops can be nested. A common use for nested loops is to compare the elements in two arrays.
- Note: the inner loop is iterated until it becomes false before the next iteration of the outer loop is executed.

```javascript
let str = 'LOL'
for (let i = 0; i <=2; i++){
    console.log(`)
}
```

#### CodeCademy Practice Exercise for Nested Loops

- Create a variable called `bobsFollowers` and set it equal to an array with four strings representing the names of Bob's Friends
- Create a variable called `tinasFollowers` and set it equal to an array with three strings representing the names of Tina's friends. Make two of these identical to Bob's Friends
- Create a third variable called `mutualFollowers` and set it to an empty array.
- Create a nested loop with `bobsFollowers` as the outer loop's array and `tinasFollowers` as the inner loop's array. If the current element from the outer loop is identical to the current element from the inner loop, add that element into the `mutualFollowers` array.

```javascript
const bobsFollowers = ["Abner", "Chad", "Dennis", "Piotr"];

const tinasFollowers = ["Piotr", "Anderson", "Dennis"];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
	for (let j = 0; j < tinasFollowers.length; j++) {
		if (bobsFollowers[i] === tinasFollowers[j]) {
			mutualFollowers.push(tinasFollowers[j]);
			console.log(`Both are friends with: ${tinasFollowers[j]}`);
		}
	}
}
console.log(mutualFollowers);
```

> **NOTE**
>
> - Running console.log(mutualFollowers.push(tinasFollowers[j])) will not work as expected. This is due to how the push method actually works.
> - JavaScript Array push() Method
>   - _Return Value: A Number, representing the **new length of the array**_
> - When the loop gets a match, the value is pushed into the specified array, however the push method will return the new length of the array!

---

## While Loops

- While loops continue running as long as the test condition is true.
- Syntax:

```javascript
while (condition) statement;
```

- The statement in the loop stops executing once the condition becomes false.
- Example:

```javascript
let num = 0;
while (num < 10) {
	console.log(num);
	num++;
}
// While the condition - num < 10 is true, the current value of num will be printed, and then num will be incremented by 1.
```

- You need to pay attention to your code as it's much easier to create an infinite loop with while loops.
- Code placement matters in a while loop as the code is executed from top-to-bottom.
  - For example, if the code above was switched and the console.log statement came after the num++ statement, then the loop will print values from _1 to 10_ instead of _0 to 9_ as the number will be incremented before it was printed by console.log
- While loops are not typically used in the situation above, where there is a defined number of iterations - in this case a for loop is more suitable.
- While loops shine in cases where there is not a set number of iterations.
  - Example:
  ```javascript
  const SECRET = "GlassEye";
  let input = prompt("Please enter the secret phrase:");
  while (input !== SECRET) {
  	input = prompt("Please enter the secret phrase:");
  }
  console.log("You got it!");
  ```

### The **Break** Keyword

- This is most commonly used with while loops. This is because with while loops, we don't have a set number of iterations, and break is useful in this case.
- This stops the execution of the loop once the condition is met, and code below the loop is allowed to run.
- Example:
  ```javascript
  let input = prompt("Write something plz");
  while (true) {
  	input = prompt(input);
  	if (input.toLowerCase() === "stopeet") {
  		break; // as soon as this is encountered, the loop stops running
  	}
  }
  console.log("K, Fine");
  ```

### Guessing Game

- Write a guessing game that takes input from the user and uses Math.random to generate a random number for the user to guess. The user should be given prompts like "Too high" or "too low" as they're guessing to get them closer to the number. This should run until the user guesses the right number.

```javascript
let maxNumber = parseInt(prompt("Enter your maximum number:"));
while (!maxNumber) {
	maxNumber = parseInt(prompt("Enter a valid number!"));
} //User has to enter valid number before the rest of the code executes.

const answer = Math.floor(Math.random() * maxNumber) + 1;
// console.log(answer); //checkpoint

let guess = parseInt(prompt("Guess the number"));
let attempts = 1;

while (parseInt(guess) !== answer) {
	if (guess === "q") break;
	attempts++;
	if (guess < answer) {
		guess = prompt("Too low, Guess again:");
	} else {
		guess = prompt("Too high, Guess again:");
	}
}
if (guess === "q") {
	console.log("You quit!😨💩");
} else {
	console.log("Congrats, You win!! ");
	console.log(`That is correct! It took you ${attempts} tries.`);
}
```

---

## For...Of Loop

- Useful for situations where you're iterating over arrays/objects when you don't really need the index. If the index is necessary, then you're better off using a for loop.
- Example:

```javascript
const subreddits = [
	"funny",
	"news",
	"nba",
	"pics",
	"books",
	"ShowerThoughts",
	"mildlyinteresting",
	"aww",
];
for (let i = 0; i < subreddits.length; i++) {
	console.log(`Visit reddit.com/r/${subreddits[i]}`);
} //We can simplify this proces uing the for...of loop!
```

- Syntax:

```
for (variable of iterable) {
	statement;
}
```

- The variable represents the individual elements in the iterable - for example items in an array.

```javascript
for (let sub of subreddits) {
	console.log(`Visit reddit.com/r/${sub}`);
} // this prints out all the array items one by one...
```

- Let's revisit a previous example...

```javascript
const seatingChart = [
  ['Kristoff', 'Piotr' 'Sandy'],
  ['Malavika', 'Johnson', 'Xander', 'Bob'],
  ['Sue', 'Thomas', 'Jack', 'Anderson']
]
for (let i = 0; i < seatingChart.length; i++){
  const row = seatingChart[i];
  for (let j = 0; j < row.length; j++);
    console.log(row[j])
}
// Rewriting as a for...of loop:
for (let row of seatingChart){
  for (let student of row){
    console.log(student)
  }
}
```

- For...of loops can be used with other iterable objects - like strings:

```javascript
for (let char of "hello world") {
	console.log(char);
}
```

---

## Iterating Over Objects

- Let's create an object literal:

```javascript
const testScores = {
	keenan: 80,
	damon: 67,
	kim: 83,
	nancy: 68,
	chad: 49,
	nadia: 89,
	larry: 75,
	dwyane: 53,
};
```

- Object literals like the one above are not considered as iterable objects. To iterate over them, we can't use for...of loops.
- We can use the for...in loop to iterate over object literals. For...in iterates over the key of object literals.

```javascript
for (let person in testScores) {
	console.log(person); // this iterates over the key, so it displays the names only. To display the key and the value, just target the value using the key like so:
	console.log(`${person} scored: ${testScores[person]}`);
}
```

- We can also use the following special methods - Object.key(variableName), Object.values(variableName), Object.entries(variableName):

```javascript
Object.keys(testScores); //this prints out an Array with the keys of the object literal => ['keenan', 'damon', 'kim', 'nancy', 'chad',  'nadia', 'larry', 'dwyane']
Object.values(testScores); // returns an Array with the values => [80, 67, 83, 68, 49, 89, 75, 53]
Object.entries(testScores); // returns a nested array of key value pairs =>
/*  
[
  [ 'keenan', 80 ],
  [ 'damon', 67 ],
  [ 'kim', 83 ],
  [ 'nancy', 68 ],
  [ 'chad', 49 ],
  [ 'nadia', 89 ],
  [ 'larry', 75 ],
  [ 'dwyane', 53 ]
] */
```

- You can use those methods to create arrays of the keys/values of the object literal, then use the for...of loop to iterate!
- Ex:

```javascript
let total = 0;
for (let score of Object.values(testScores)) {
	console.log(score);
}
```
