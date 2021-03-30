// console.log("BEFORE CONDITIONAL")
// let diceRoll = Math.floor((Math.random() * 6) + 1)
// if (diceRoll < 3) {
//     console.log("Your number is less than 3");
//     console.log(`You rolled: ${diceRoll}`);
// }
// console.log("AFTER CONDITIONAL")

// Conditional Exercise: if num is even number, print out "even"
// let num = Math.floor((Math.random()* 100) + 1)
// function isEven(num){
//     //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
//    if (num%2 === 0)
//     console.log("even"); 
//     //AND THIS LINE ↑↑↑↑↑
// }

// let random = Math.random();
// if (random < 0.5) { 
//     console.log("Your number is less than 0.5!");
// }
// else {
//     console.log("Your number is greater than (or equal to) 0.5")
// }
// console.log(random);

// const dayOfWeek = prompt("Enter a Day").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHH I HATE MONDAYS!")
// }
// else if (dayOfWeek === 'saturday') {
//     console.log("YAY, I LOVE SATURDAYS!")
// }
// else if (dayOfWeek === 'friday') {
//     console.log("TGIF!!")
// }
// else {
//     console.log("MEHHH");
// }

// Want to implement code to check for age against a specified range and display the admission price for a theme park.
// Age range + associated Prices:
// 0 - 5: FREE, 5-10: CHILD - $10, 10 - 65: ADULT - $20, 65+: SENIOR - $10

// const age = 89;

// if (age < 5) {
//     console.log("You are a baby. You get in FREE!")
// } 
// else if (age < 10) {
//     console.log("You are a child. You pay $10");
// }
// else if (age < 65) {
//     console.log("You are an adult. You pay $20");
// }
// else{
//     console.log("You are a senior. You pay $10")
// }


//Nesting Conditionals

const password = prompt("Please enter a password:");
if (password.length >= 6) { // The code below only runs if the password is more than 6 characters!
    if (password.indexOf(' ') !== -1){  //Password cannot include space. If space is not in password, IndexOf will return -1 --> we want this to be -1!
        console.log("Password cannot include spaces...")
    }
    else {
        console.log("Valid Password!")
    }
}
else {
    console.log("Too Short! Password must be 6+ characters.")
}