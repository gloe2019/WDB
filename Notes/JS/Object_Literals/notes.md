# Objects - Another Data Structure
### Introducing Object Literals
- Objects are similar to arrays --> both store information, and can be used to combine multiple data types together. 
- Objects are collections of properties. Order does not matter here...
    - properties are 'key-value' pairs. 
    - ex: 
        - age: 27
        - city: Toronto
- Rather than accessing data using an index, use custom keys.
```javascript
    const userComment = {
        userName        : coolCatLady,
        upvotes         : 32,
        text            : 'yerrr!!!'
    };
```
---
### Creating Object Literals
ex: Reddit Comment
```javascript
const firstComment = {
    username    : 'mikkiMinach',
    upVotes     : 42,
    downVotes   : 12,
    netScore    : 30,
    commentText : 'I don\'t think you have the facilities for that big man...',
    isGilded    : false,
    tags        : ['#hellnah', '#welp', '#goteem']
}
```
- Values can be any data type!

#### **Object Literals Exercise #1:**
- Define a new variable called 'product'. It should be an object literal with the following properties:
    - name - set to the string "Gummy Bears"
    - inStock - set to the boolean true
    - price - set to the number 1.99
    - flavors - set to an array of at least three strings

```javascript
const product = {
    name    : 'Gummy Bears',
    inStock : true,
    price   : 1.99,
    flavors : ['apple', 'blue raspberry', 'grape']
}
```

### Retrieving/Accessing Data from Objects
- Recall: with an array, you use the index method to retrieve stored values. (Ex: colors[1] will return the second item in the colors array.)
    ```javascript
    const product = {
        name    : 'Gummy Bears',
        inStock : true,
        price   : 1.99,
        flavors : ['apple', 'blue raspberry', 'grape']
    }
    ```
- With objects, you can access data using ["keyName"]. (ex: product["flavors"] will return the values stored with the "flavors" key ["apple", "blue raspberry", "grape"])
- There is another way to access information stored in an object --> using the 'dot' syntax.
    - ex: product.name --> "Gummy Bears", product.price --> 1.99
- Note: All keys are converted to strings* (**except for symbols*)
    ```javascript
    const years = {
        1999    : "GOOD",
        2020    : "BAD"
    };
    //to access the 1999 value:
        years["1999"] // -> "GOOD"
        //This is because the 1999 key is converted to a string! Keys are stored as strings.
    ```
    ```javascript
    const person ={
        firstName   : 'Mikki',
        lastName    : 'Minach'
    }
    ```
    - For 'person', what is the difference between:
        - person.firstName
        - person.['firstName'] -- the argument in the square brackets can be evaluated first before accessing the object value...
            - ex: person['first'+'Name'] // -> "Mikki"

#### **Object Access Exercise:**
- An object called `restaurant` contains a name, address, city, state, and zipcode. 
    - Create a variable named fullAddress that points to a string using the information from `restaurant`. Note: fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object.
```javascript
//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
//YOUR CODE GOES DOWN HERE:
let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
```

---
### Modifying Objects
```javascript
const midterms = {
    danielle    : 96,
    mitchell    : 78,
};
//Let's change mitchell's score from 78 to 80
midterms.mitchell = 80
midterms // {danielle: 96, mitchell: 80}
//Notice we can modify values for objects created with const, as long as we don't try to reassign objects... same rule as with arrays & const.
//To add new key-value pairs to an object, do the same thing:
midterms.ezekiel = 85
midterms['craig'] = 69
```

---
### Nesting Arrays & Objects
- We can store anything inside of an array or object - this means we can nest arrays inside objects, and vice-versa.
    ```javascript
    const shoppingCart = [
        {
            product     : 'Jenga Classic',
            price       : 5.68,
            quantity    : 1,
        },
        {
            product     : 'Echo Dot',
            price       : 29.99,
            quantity    : 3
        },
        {
            product     : 'Chromecast',
            price       : 39.99,
            quantity    : 5
        }
    ]
    //shoppingCart is an array with nested objects
    const student = {
        firstName   : 'Mike',
        lastName    : 'Jones',
        strengths   : ['Music', 'Math'],
        exams       : {
            midterm : 92,
            final   : 88
        }
    }
    //student is an object containing a nested array and object.
    ```
- It's common to combine arrays and objects...
- Using the shoppingCart declaration above, let's access the 'Echo Dot' price.
    ```javascript
    shoppingCart[1].price // --> 29.99
    ```
    - You use the index to pick which element you want to reference, then chain on the key...
    