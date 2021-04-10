// For Loop Examples:
// for (let i = 0; i < 6; i++) {
// 	console.log("Da ba dee da ba daa");
// }

// const seatingChart = [
// 	["Kristen", "Erik", "Namita"],
// 	["Geoffrey", "Juanita", "Antonio", "Kevin"],
// 	["Yuma", "Piotr", "Sakura", "Jack"],
// ];
// for (let i = 0; i < seatingChart.length; i++) {
// 	const row = seatingChart[i];
// 	console.log(`Row #${i + 1}`);
// 	for (let j = 0; j < row.length; j++) {
// 		console.log(row[j]);
// 	}
// }
// While Loop Examples:
// const SECRET = "GlassEye";
// let input = prompt("Please enter the secret phrase:");
// while (input !== SECRET) {
// 	input = prompt("Please enter the secret phrase:");
// }
// console.log("You got it!");

// const passcode = "memento";
// let input = prompt("Please enter the passcode:");
// while (input !== passcode) {
// 	input = prompt(input);
// }
// console.log(`${passcode} mori!`);

// Guessing Game
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
