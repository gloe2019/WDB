# Callbacks & Array Methods

## Goals of this section

- To use the new arrow function syntax
- To understand and use these methods. Note - these are all array methods that require one to pass in a function!
  - forEach
  - map
  - filter
  - find
  - reduce
  - some
  - every

---

## The ForEach Method

- Allows you to do something once per element in an array. Similar to a for...of loop.

```javascript
const numbers = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
];
numbers.forEach(function (el) {
	if (el % 2 === 0) {
		console.log(el); // most of the time, we pass in a function that we create solely for this instance.
	}
});
```

```javascript
const movies = [
	{
		title: "Amadeus",
		score: 99,
	},
	{
		title: "Stand By Me",
		score: 85,
	},
	{
		title: "Parasite",
		score: 95,
	},
	{
		title: "Alien",
		score: 90,
	},
];

movies.forEach(function (movie) {
	console.log(`${movie.title} - ${movie.score}/100`);
});
```

---

## The map Method

- Map accepts a callback function and runs it once per element in the array. It then generates a new array using the results of the callback. It's used to map an array from one state to another.

```javascript
const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (t) {
	return t.toUpperCase();
});

caps; // => [ 'ROFL', 'LOL', 'OMG', 'TTYL' ]

const numbers = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	19,
	20,
];
const doubleNums = numbers.map(function (num) {
	return num * 2; // this function is called on every element and the results are added to a new array stored under doubleNums
});
doubleNums; // => [2,  4,  6,  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]

const movies = [
	{
		title: "Amadeus",
		score: 99,
	},
	{
		title: "Stand By Me",
		score: 85,
	},
	{
		title: "Parasite",
		score: 95,
	},
	{
		title: "Alien",
		score: 90,
	},
];
const titles = movies.map(function (movie) {
	return movie.title;
});
titles; // => [ 'Amadeus', 'Stand By Me', 'Parasite', 'Alien' ]
```
