// const password = prompt("Enter your password:");
// if(password.length >=6 && password.indexOf(' ') === -1){
//     console.log("Valid Password")
// } // Combining two logical operators -- note: if the left side is false, JS woun't bother checking the right side as BOTH sides need to be true!
// else {
//     console.log("Invalid password!")
// }

//Exercise
// const mystery = 'Pleather17'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// // LEAVE THIS CODE ALONE! (pretty please)
// if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
//     console.log("YOU GOT IT!!!");
// }

//Example: Combining AND and OR Operators...
// 0-5 = free, 5-10 = $10, 10- 65 = $20, 65+ = free
// let age = 100;
// if(age >= 0 && age < 5 || age >= 65){ //the AND evaluates first! before the OR...
//     console.log("You get in FREE")
// }
// else if (age >= 5 && age < 10){
//     console.log("You pay $10!")
// }
// else if (age >= 10 && age < 65){
//     console.log("You pay $20!")
// }
// else{
//     console.log("You must be a martian as your age is totes weird!") //Invalid Age catchall...
// }

//Example: Dealing with NOT
let firstName = prompt("Please enter your first name:");
if(!firstName){
    firstName = prompt("Try again!"); //Note: this only runs once - learn how to loop this in later videos...
}
else{
    alert(`Nice to meet you ${firstName}`)
}

let age = 1;
if(!(age >= 0 && age < 5 || age >= 65)){
    console.log("You are not a Baby or a Senior - Pay $10")
}