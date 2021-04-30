# Mysterious Organism

## Project Goals

Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, *Pila aequor (P. aequor)*, and finds that it is only comprised of **15 DNA bases**. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make *P. aequor* an interesting specimen to study. However, *P. aequor* cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of *P. aequor* for your research team to study.

As you progress through the steps, use the terminal and `console.log()` statements to check the output of your loops and functions.

## Project Requirements

1. Look over the starter code. There are two helper functions: `returnRandBase()` and `mockUpStrand()`.

DNA is comprised of four bases (`A`denine, `T`hymine, `C`ytosine, and `G`uanine). When `returnRandBase()` is called, it will randomly select a base and return the base (`'A'`,`'T'`,`'C'`, or `'G'`).

`mockUpStrand()` is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.

You’ll use these helper functions later to create your objects that represent P. aequor.

2. Since you need to create multiple objects, create a factory function `pAequorFactory()` that has two parameters:

* The first parameter is number (no two organisms should have the same number).

* The second parameter is an array of 15 DNA bases.

`pAequorFactor()` should return an object that contains the properties `specimenNum` and `dna` that correspond to the parameters provided.

You’ll also add more methods to this returned object in the later steps.

**Hint:**

You can test `pAequorFactory()` by calling it with the arguments: `1` and `mockUpStrand()`. Check to see that the returned object contains the requested two properties: `specimenNum` and `dna`. You can also provide a specific strand of DNA rather than providing a randomized strand using `mockUpStrand()`.

3. Your team wants you to simulate *P. aequor*‘s high rate of mutation (change in its DNA).

To simulate a mutation, in `pAequorFactory()`‘s returned object, add the method `.mutate()`.

`.mutate()` is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then `.mutate()` will return the object’s `dna`.

For example, if the randomly selected base is the 1st base and it is `'A'`, the base must be changed to `'T'`, `'C'`, or `'G'`. But it cannot be `'A'` again.

**Hint:**

`returnRandBase()` contains a method for selecting a random element in an array using `Math.floor()` and `Math.random()`.

You can also use `returnRandBase()` to generate a random base, but make sure that the current base and the generated base are not the same.

You can test this method by creating an instance of `pAequor` and checking that its `.dna` changes after calling `.mutate()` on itself.

4. Your research team wants to be able to compare the DNA sequences of different *P. aequor*. You’ll have to add a new method (`.compareDNA()`) to the returned object of the factory function.

`.compareDNA()` has one parameter, another pAequor object.

The behavior of `.compareDNA()` is to compare the current `pAequor`‘s `.dna` with the passed in `pAequor`‘s `.dna` and compute how many bases are identical and in the same locations. `.compareDNA()` does not return anything, but prints a message that states the percentage of DNA the two objects have in common — use the `.specimenNum` to identify which `pAequor` objects are being compared.

For example:

```js
ex1 = ['A', 'C', 'T', 'G']
ex2 = ['C', 'A', 'T', 'T']
```

`ex1` and `ex2` only have the 3rd element in common (`'T'`) and therefore, have 25% (1/4) of their DNA in common. The resulting message would read something along the lines of: `specimen #1 and specimen #2 have 25% DNA in common`.

**Hints:** 

You’re adding this method inside the return object of the factory function like `.newMethod()` below:

```js
const sampleFactory = () => {
  return {
    newMethod() {
    }
  }
}
```

There are many ways to create this method, most involve iterating through both arrays at the same time and comparing the elements with the same indices.

To calculate the percentage, take the number of identical bases, divided by the total number of bases and multiply the result by `100`. You can use a method like `.toFixed()` to limit the number of decimal places seen.

Remember to check your method by creating two instances of `pAequor` and comparing their DNA.

5. *P. aequor* have a likelier chance of survival if their DNA is made up of at least 60% `'C'` or `'G'` bases.

In the returned object of `pAequorFactory()`, add another method `.willLikelySurvive()`.

`.willLikelySurvive()` returns true if the object’s .dna array contains at least 60% `'C'` or `'G'` bases. Otherwise, `.willLikelySurvive()` `returns false`.

6. With the factory function set up, your team requests that you create 30 instances of `pAequor` that can survive in their natural environment. Store these instances in an array for your team to study later.

**Hints:**

Remember, you only want to add the instance to the array if `.willLikelySurvive()` returns true for that instance.

7. If you’d like to challenge yourself further, you could consider the following:

* Create a `.complementStrand()` method to the factory function’s object that returns the complementary DNA strand. The rules are that `'A'`s match with `'T'`s and vice versa. Also, `'C'`s match with `'G'`s and vice versa. (Check the hint for more details)

* Use the `.compareDNA()` to find the two most related instances of pAequor.

