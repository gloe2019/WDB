// const day = 2;
// if (day === 1){
//     console.log("Monday")
// }
// else if (day === 2){
//     console.log("Tuesday")
// }
// else if (day === 3){
//     console.log("Wednesday")
// }
// else if (day === 4){
//     console.log("Thursday")
// }
// else if (day === 5){
//     console.log("Friday")
// }
// else {
//     console.log("I don't know that!")
// }
//The code above would benefit from a switch statement as we are just checking one variable and making comparisons against that value...

//Switch Statement:
let day = prompt("Enter a number for a day of the week:");
day = parseInt(day); // src: https://stackoverflow.com/questions/31662389/switch-statement-it-does-not-work-with-prompt/31662421
switch(day){
    case 1:
        console.log("Monday");
        break; //necessary for switch statements to check a case throughly. if not present, each case will run without being checked after a match is found
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    //to combine two cases to have 1 output:
    case 6:
    case 7:
        console.log("Weekend")
        break;
    default:
        console.log("Invalid Number!")
}