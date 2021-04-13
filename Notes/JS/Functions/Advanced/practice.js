// Define a function (using a function expression) that returns the square of a number.

const square = function (x) {
	return x * x;
};

/* Define an object called `square`, which will hold methods that have to di with the geometry of squares.
It should contain two methods - area and perimeter.
- Area should accept the length of a side then returen the side squared
- Perimeter should accept the length of a side then return that side multiplied by 4
*/
const square = {
	area(side) {
		return side * side;
	},
	perimeter(side) {
		return side * 4;
	},
};

/* Egg Laying Exercise:
Define an object called hen. It should have three properties:
- `name` should be set to 'Helen'
- `eggCount` shoud be set to 0
- `layAnEgg` should be a method which increments the value of `eggCount` by 1 and returns the string EGG. You need to use `this`
*/

const hen = {
	name: "Helen",
	eggCount: 0,
	layAnEgg() {
		this.eggCount += 1;
		return "EGG";
	},
};
