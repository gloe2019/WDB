let triangle = ''
for (let number= 1; number <= 7; number++){
    triangle = triangle + '#'
    console.log(triangle)
}

// //Need to figure out a way to use the .length property!
// let triangle2 = '#'
// for(triangle2.length < 7; triangle2)

//FizzBuzz
//First, write code to print out all numbers from 1 to 20
for(let num = 1; num <= 100; num++) {
    if(num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(num % 3 == 0){
        console.log("Fizz");
    }
    else if (num % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(num);
    }    
}