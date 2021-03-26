# Number Guesser

> Create JavaScript functions to power a human vs. computer guessing game.

## Project Goals

In this project, you’ll write JavaScript functions to power a small guessing game. Your code will run in the browser instead of just the terminal, but you have an output section to help you test your functions and show you if you have syntax errors.

## Instruction

In this project, you’ll write four functions in **script.js**. We’ve provided some additional JavaScript code in **game.js** that will call your functions based on user interactions, but you don’t need to look at **game.js** and shouldn’t edit it if you want your project to work as intended. As you complete this project, make sure that all of your functions are named exactly as specified so that they can be called correctly when the game is played.

1. Has a function that will be called at the start of each new round in order to generate the new secret target number. This function should return a random integer between `0` and `9`.

---

2. Has another function that will be called each round to determine which guess is closest to the target number. This function:

* Has three parameters representing the `user` (human) guess, a `computer` guess, and the secret `target` number to be guessed.

* Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.

* Return `true` if the human player wins, and `false` if the computer player wins.

You’ll want to compare the absolute value of the difference between the target and each guess, because each guess could be greater or less than the target, and the only thing that matters is the distance between the two.

The JavaScript `Math.abs()` method can help to find absolute values (or you can write your own absolute value function!).

---

3. Has another function that will be used to correctly increase the winner’s score after each round. This function:

* Has a single parameter. This parameter will be a string value representing the winner.

* Increases the score variable (`humanScore` or `computerScore`) by 1 depending on the winner passed in to the function. The string passed in will be either `'human'` or `'computer'`.

* Does not need to return any value.

---

4. Has another function that will be used to update the round number after each round.

function should increase the value of `currentRoundNumber` by 1.

After completing the function, your Number Guesser game should be fully operational. You should be able to make guesses, see your or the computer score increase correctly, move to the next round, and see the correct round displayed.

---

**Note:** To run the javascript on terminal / bash, use `node filename.js` to test out! Remember to put `console.log()` in the file.

---

You probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.

Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. It’s not possible to set a number outside this range with the + and = buttons, but users can do so by typing directly in the input field.