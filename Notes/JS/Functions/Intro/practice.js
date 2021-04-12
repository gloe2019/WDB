/* Write a function called `isSnakeEyes`, which accepts two numbers as inputs. 
If both numbers are 1s, print "Snake Eyes!". Otherwise, print "Not Snake Eyes!"
*/

function isSnakeEyes(num1, num2) {
	if (num1 === 1 && num1 === num2) {
		console.log("Snake Eyes!");
	} else {
		console.log("Not Snake Eyes!");
	}
}

//Test
isSnakeEyes(1, 4);
isSnakeEyes(2, 2);
isSnakeEyes(1, 1);

/*
Return Value Practice:
Write a function called `multiply` which accepts two numerical arguments and returns their product.
*/

function multiply(x, y) {
	let result = x * y;
	return result;
}

/*
isShortsWeather Function
Write a function called `isShortsWeather`. 
- It should accept a single number argument, called `temp`
- If `temp` is greater than or equal to 75, return `true`
- Otherwise, return false.
*/

function isShortsWeather(temp) {
	if (temp >= 75) {
		return true;
	}
	return false;
}

/*
Last Element Exercise:
Write a function called `lastElement`, which accepts a single array argument.
- The function should return the last element of the array (without removing the element.)
- If the array is empty, the function should return `null` 
*/

function lastElement(arr) {
	if (arr.length === 0) {
		return null;
	}
	return arr[arr.length - 1]; // OR return arr.slice(-1) -- check .slice documentation~~;
}

lastElement([]);
lastElement([1, 4, 6, "herkle"]);

/*
Capitalize Exercise:
Write a function called `capitalize` that accepts a string argument and returns a new string with the first letter capitalized (and the rest of the string unchanged)
- Rememver that strings are immutable. You cannot simply change the first letter in the original string. You'll need to create a new string to return
- Single out the first letter and capitalize it
- Aff the first letter to the rest of the original string, sliced to omit the first letter */

function capitalize(str) {
	let firstLetter = str[0].toUpperCase();
	let remainder = str.slice(1);
	return firstLetter + remainder;
}

/*
Sum Array Exercise:
Write a function called sumArray which accepts a single argument - an array of numbers.
It should return the sum of all numbers in the array.
*/

function sumArray(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

function sumArray(arr) {
	let total = 0;
	for (let item of arr) {
		total += item;
	}
	return total;
}

/*
Day of The Week Exercise:
Write a function called `returnDay`, which takes in one parameter (a number from 1 - 7) and returns the day of the week (1 = Mon, 7= Sun)
If the number is less than 1 or greater than 7, the function should return num.
*/

function returnDay(num) {
	let weekday = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	if (num < 1 || num > 7) {
		return null;
	}
	return weekday[num - 1];
}
