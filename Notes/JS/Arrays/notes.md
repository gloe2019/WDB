# JS Arrays: Our First Data Structure!

- Data Structure = a collection of data
- Arrays allow you to group data together and store them in a collection.
- Arrays are an *ordered collection* of values. 
- Examples of ordered collections:
    - List of comments on IG post
    - Collection of levels in a game
    - Songs in a playlist
- To make an array in JS:

    - `let arrayName = [];`
    
    - `ex: let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];`
- Array values are ordered by their placement  - red is 1st, orange is 2nd, etc.
- Arrays have a length property! - `arrayName.length` tells you the number of items in the array.
- In JS, an array can consist of multiple types of variables 
    - `ex: kitchenSink = [false, null, undefined, 1, 25, 'Wow!', NaN] => valid array!`
- You can even place other arrays inside of an aray :O

        
-----
## Array Random Access
- Arrays are Indexed - each individual element has a corresponding index
    - We start counting at 0
    let sevenDwarfs = ['Doc', 'Dopey', 'Bashful', 'Grumpy', 'Sneezy', 'Sleepy', 'Happy']
- To access items indexed in an array: `arrayName[#]`, where `#` is the index number.
    - ex: `sevenDwarfs[4]` // -> Sneezy
    - `sevenDwarfs.length` //7 -> length is always +1 the maximum index.

> *What if you want to access a letter/letters of an item in an array?*
>    - ex: The 'a' in Bashful
>: `sevenDwarfs[2][1] // -->'a'`

- To update an array, use the square bracket syntax!
        
```javascript
    let colors = ['rad','orange','green','yellow'];
        colors[0] = 'red';
        colors[2] = 'yellow';
        colors[3] = 'green';
        //Adding item to array:
        colors[4]; //undefined --> doesn't exist
        colors[4] = 'blue';
        colors //['red', 'orange', 'yellow', 'green', 'blue']
```
> Note: You cannot reassign/change string values using this method!

### Array Access Exercise:
- Please make the following changes without touching line 1:
    - Change Lua to Luna
    - Change Bellatrix to Draco 

```javascript
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!
    // YOUR CODE BELOW HERE:
    leaderboard[1] = 'Luna';
    leaderboard[3] = 'Draco';
```
--------
## Array Methods
**[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**    

- Push & Pop are used to *add or remove from the end of an array* -- in order to maintain the inherent order in the array.

```javascript
PUSH
let movieLine = ['tom', 'nancy']
    //To add someone to the end:
    movieLine[2] = 'pablo' // you can add using the index 
    movieLine.push('oliver') - //push allows you to modify/update the array.
    //Note: you can push multiple items into an array like so:
    movieLine.push('harry', 'hermoine')
```
```javascript
POP
movieLine.pop() // Pop does not require any arguments. It returns the last item of the array and deletes it from the array.
//Note: because pop returns the last item in the array, you can capture that value in a variable like so:
    movieLine = ['tom', 'nancy', 'oliver', 'pablo', 'harry', 'hermoine'];
    let person = movieLine.pop()
    console.log(person) // -> hermoine
    movieLine // ['tom', 'nancy', 'oliver', 'pablo', 'harry']
```
- Shift & Unshift are used to *add or remove items from the start/beginning of an array*.
    - Shift - remove from start. 
    > [!TIP]
    > Note: you don't pass in an argument for this method!
    - Unshift - add to start
 ```javascript
    movieLine = ['tom', 'nancy', 'pablo', 'oliver', 'harry']
    SHIFT
    movieLine.shift() // returns and removes 'tom' from the array, shortening the array length to 4.
    UNSHIFT
    movieLine.unshift('timmy') // adds timmy to the beginning of the array (timmy has an index of 0 and everything else is pushed up...)
```
*For more info - do some reading on these CS Concepts:  "Stacks" and "Queue"*    

### Practice:
```javascript
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!
    //1. Remove the first element from the array
        planets.shift();
    //2. Add in 'Saturn' at the very end of the array
        planets.push('Saturn');
   // 3. Add 'Mercury' as the first element of the array
        planets.unshift('Mercury');
    //Check your work:
        console.log(planets);
```

------------------------------
### Concat, indexOf, includes & reverse
- Concat - method used to merge multiple arrays together. It does not change existing arrays, but returns a new one.
    - Syntax: firstArray.concat(secondArray)
```javascript
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 - array1.concat(array2)
    console.log(array3); // output -> Array ["a", "b", "c", "d", "e", "f"]
```
- Includes - determines whether an array included a certain value among its items - returns true OR false!
    - Syntax: arrayName.includes('arg') -- note: the argument must match the full value of an item. 
        
```javascript
cats = ['blue', 'kitty'];
        cats.includes('blue') // -> true
        cats.includes('Blue') // -> false
```
- IndexOf - returns the first index at which a given element can be found in the array, or -1 if it's not present
    - Syntax: arrayName.IndexOf('arg')

```javascript
comboParty = ['rusty', 'wyatt', 'blue', 'kitty']
    comboParty.IndexOf('rusty') // -> 0
    comboParty.IndexOf('kitty') // -> 3
```
- IndexOf is useful for quickly checking if an element is in an array or not.

- reverse - reverses an array in place. It is a *destructive method* as it changes the original!
    - Syntax: arrayName.reverse() --> does not require an argument passed in.

```javascript
comboParty.reverse() // -> comboParty => ['kitty', 'blue', 'wyatt', 'rusty']
```
----
### Slice, Splice & Sort
- Slice - method to return a portion/slice of an array. It returns ths portion ito a new array object, and the original is not affected.
    - Syntax: arrayName.slice([start[, end]]) --> can pass in 0, 1 or 2 numbers.
```javascript
let colors = ['red','orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    colors.slice(3) // -> ['green', 'blue', 'indigo', 'violet']
    colors.slice(5) // -> ['indigo', 'violet']
    //Providing a start value means the slice is taken from the start value to the end of the array. Since this returns a new array, you can store th eoutput in a new variable like so:
let coolColors = colors.slice(3) // -> ['green', 'blue', 'indigo', 'violet']

colors.slice(2,4) // -> ['yellow', 'green'] - starts at index of 2 and stops just before the stop point.
let warmColors = colors.slice(0,3) // -> ['red', 'orange', 'yellow']
//You can also use a negative index. This means the slice will start from the END of the array and move backwards however many numbers you choose.
colors.slice(-4) // -> ['green'. 'blue', 'indigo', 'violet']
```
- Splice - this method changes the contents of an array by removing or replacing existing elements and/or adding new elements *in place*. *Splice is destructive to the original array!*
    - Syntax: arrayName.splice(start, deleteCount, 'itemName - to insert')
        - Note: the starting index is required!
```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0,'Feb'); // inserts 'Feb' at index 1
console.log(months) // -> ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May'); //replaces 1 element at index 4
console.log(months) // -> ['Jan', 'Feb', 'March', 'April', 'May']
```
```javascript
colors = ['red','orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//To delete 'indigo' using splice:
colors.splice(5,1) // -> ['indigo'] -- splice returns an array containing the items deleted.
console.log(colors) // -> ['red','orange', 'yellow', 'green', 'blue', 'violet']

days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//remove 2 days of the weekend:
let weekend = days.splice(5,2)
console.log(weekend) // -> ['Saturday'. 'Sunday']
console.log(days) //['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
```
- We can also insert new values using splice!
```javascript
colors = ['red','orange', 'yellow', 'green', 'blue', 'violet'];
//Insert red-orange between red and orange
colors.splice(1, 0,'red-orange')
console.log(colors) // -> ['red', 'red-orange' 'orange', 'yellow', 'green', 'blue', 'violet']
//Insert turquoise and teal between green and blue
colors.splice(5,0,'turquoise', 'teal') // -> ['red','red-orange', 'orange', 'yellow', 'green', 'turquoise', 'teal', 'blue', 'violet']
```
- Sort - this sorts the elements of an array *in place* and returns the sorted array.  
The default sort order is ascending, based on the UTF-16 code unit values for each string. This doesn't play well with numbers by default...
```javascript
let scores = [1, 70, 100, 2500, 9, -12, 0, 34]
scores.sort() // -> [-12, 0, 1, 100, 2500, 34, 70, 9] - obviously not a useful numeric sort.
```
----
### Reference Types & Equality Testing
- Observe how === behaves with an array:
    ```javascript
    ['hi', 'bye'] === ['hi', 'bye'] // -> *false*
    [1] === [1] // -> *false*
    [] === [] // -> *false*
    ```
- These arrays seem to be equal - they have the exacty same contents, however they are not considered equal. Why?
- When comparing arrays using the equality operator, JavaScript does not compare their contents, but it compares their references in memory.
- Arrays are stored with reference numbers, so every array has a unique reference number associated with it. Even if two array s have the exact same items, their reference numbers are different because they were declared separately. (think of it like inode numbers for files in Linux...)
```javascript
    let nums = [1,2,3];
    let numsCopy = nums; // -> numsCopy is not a new array - both nums and numsCopy are referring to the same thing in memory. Hence they will be equal, and if you modify either of them, it will be reflected in both variables. 
    numsCopy.push(4) // numsCopy = nums = [1. 2. 3. 4]
    nums === numsCopy // -> true -- the reference is the same!
```
- Hence, you can't use '===' to compare array contents.

----
### Arrays + Const
- You can use const to create arrays. When you use const, you're storing the reference. The values can change as long as the reference remains the same. Hence, you can still use array methods that alter the content of the array (like push & pop...)
```javascript
    const colors = ['red', 'orange', 'yellow'];
    colors.push('green');
    colors[4] = 'blue';
    
    colors = ['blue', 'pink', 'yellow']; //This will not work as this is a reassignment (it's trying to create an entirely new reference - a brand new array)
```
- Think of an array as the shell - it's contents (interior) can be changed, but the shell must stay the same.

----
### Multi-Dimensional Arrays
- Arrays can store primitives AND other data structures
    - We can store arrays inside other arrays! -- Nested Arrays!
```javascript
    const colours = [
        ['red', 'crimson'],
        ['orange', 'burnt orange'],
        ['yellow', 'mustard'],
        ['green', 'olive'],
        ['blue', 'royal blue']
        ['purple', 'orchid']
    ]
```
- We can access values of nested arrays using the index method!
```javascript
    const gameBoard = [['X', 'O', 'X'], ['O', null, 'X'], ['O', 'O', 'X']]
    gameBoard
    (3) [Array(3), Array(3), Array(3)]
        0: (3) ["X", "O", "X"]
        1: (3) ["O", null, "X"]
        2: (3) ["O", "O", "X"]
    // To access 'null':
    gameBoard[1][1] // -> null
```

### Practice:
The array `airplaneSeats` represents the rows of seats on a flight. Hugo is lookin to book a seat - and fortunately, there is one seat available (currently set to null). Update the array by changing the element from null to Hugo!
```javascript
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];
// YOUR CODE GOES BELOW THIS LINE
airplaneSeats[3][1] = 'Hugo' 
```