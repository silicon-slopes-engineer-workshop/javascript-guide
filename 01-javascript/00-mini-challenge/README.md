# Mini Challenges from Codecademy

## reverseArray()

Write a function, `reverseArray()`, that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a [built-in method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

```js
const sentence = ['sense.','make', 'all', 'will', 'This'];
 
reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.'];
```

## Hints

It might be fun to loop backwards:

```js
for (let i = arr.length-1; i >= 0; i--)
```

or you could use the `.unshift()` method.

---

## greetAliens()

Write a function, `greetAliens()`, that takes in an array of strings and uses a `for` loop to print a greeting with each string in the array.

The greeting should take the following format:
`"Oh powerful [stringElement], we humans offer our unconditional surrender!"`

```js
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
 
greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 
```

**Note**: You may have noticed how convenient it would be to use `.forEach()`, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

### Hints

```js
for (let i = 0; i < arr.length; i++)
```

---

## convertToBaby()

Write a function, `convertToBaby()`, that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with `'baby '`.

```js
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
 
convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
```

**Note:** You may have noticed how convenient it would be to use `.map()`, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

### Hints

```js
for (let i = 0; i < arr.length; i++)
```

---

## squareNums()

Write a function, `squareNums()`, that takes in an array of numbers and, using `.map()`, returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the `numbers` array or by making your own array!

### Hints

If you need a refresher on `.map()`, check out our `.map()` [exercise](https://www.codecademy.com/courses/introduction-to-javascript/lessons/javascript-iterators/exercises/map) and the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Your function should have an array parameter. You’ll invoke `.map()` on the array passed in. What should you pass as an argument to `.map()`?

We wrote a function `toSquare()` that you might find useful…

---

## shoutGreetings()

Write a function `shoutGreetings()` that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: `'heya'` will become `'HEYA!'`

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the `greetings` array or by making your own array!

### Hints

`.map()` could prove handy here, but a `for` loop would work just fine!

You might also be interested in a certain string built-in method:

```js
console.log('ilovecoding'.toUpperCase());
// Prints 'ILOVECODING'
```

---

## sortYears()

Write a function `sortYears()` that takes in an array of years, and, using the [built-in `.sort()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the `years` array or by making your own array of years!

### Hint

The `.sort()` method is pretty useful! Just running `years.sort()` will sort the years in `ascending` order.

You’ll have to pass in your own function to get the functionality you want. If you were to use a named function, it might look something like:

```js
const checkYears = (year1, year2) => year1 < year2
```

---

## justCoolStuff()

Write a function `justCoolStuff()` that takes in two arrays of strings, and, using the [built-in `.filter()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), returns an array with the items that are present in both arrays.

```js
let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];
 
justCoolStuff(arr1, arr2); // Should return ['this']
```

You can test your function when you’re ready by passing in the `myStuff` and `coolStuff` arrays or by making arrays of your own!

```js
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
```

### Hint

The built-in `Array` method, `.includes()`, might be helpful here, but you’re welcome to use a loop! Check out [this Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) for more information on the `.includes()` method.

If you need a refresher on `.filter()`, check out our [JavaScript exercise](https://www.codecademy.com/courses/introduction-to-javascript/lessons/javascript-iterators/exercises/filter?action=resume_content_item) in addition to this [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

--- 

## isTheDinnerVegan()

Write a function `isTheDinnerVegan()` that takes in an array of food objects in the format:

```js
{name: 'cabbage', source: 'plant' }
```

and returns a `boolean` value based on whether or not every item in the array has entirely plant-based origins.

```js
const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
 
isTheDinnerVegan(meal); // Should return true
```

You can test your function when you’re ready by passing in the dinner array or by making your own!

### Hints

You might consider using the built-in `.every()` method.

You may find the following function useful:

```js
const isVegan = (food) => {
    if(food.source === 'plant'){
        return true;
    }
    return false; 
}
```