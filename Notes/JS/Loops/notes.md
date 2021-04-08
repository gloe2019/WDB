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

> [!NOTE]
>
> - Running console.log(mutualFollowers.push(tinasFollowers[j])) will not work as expected. This is due to how the push method actually works.
> - JavaScript Array push() Method
>   - _Return Value: A Number, representing the **new length of the array**_
> - When the loop gets a match, the value is pushed into the specified array, however the push method will return the new length of the array!
