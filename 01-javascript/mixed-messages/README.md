# Mixed Messages

For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

## Project Objectives:

* Build a message generator program using JavaScript

* Use Git version control

* Use command line

## Project Tasks

Keep track of your progress by dragging each task from "To Do" to "In Progress" to "Done" as you work on them. You can also click on a task to see more information about it.

### Plan your project

Visualize your end result. What is it built with? What can it do? Make sure that it satisfies all of the project objectives.

Make a timeline for yourself and avoid the temptation to build things that aren’t required. Setting firm boundaries and deadlines will keep you on track and prevent [scope creep](https://en.wikipedia.org/wiki/Scope_creep).

The following tasks will help you identify natural break points.

### Come Up with a Topic

Decide on what types of messages you want your program to output.

**Hints:**

Think about what kinds of messages you’d like your program to output. Is it a horoscope generator? A fortune teller? An inspiring phrase? Knock-knock jokes? Here’s an example of what the output of a horoscope generator could look like:

```
Your sign is sun.

You are having good luck. 

You should: "trust no one"
```

Remember, to make your program truly random the message should really be made up of multiple strings that are output together.

### Create script and run it locally

On your computer, create a JavaScript file to write your code in. Make sure you are able to run your script locally in Node.

**Hints:**

Create a `script.js` file and try logging some text to the console.

In your terminal, navigate into your project directory and [run your script in Node](https://www.codecademy.com/articles/what-is-node). You should see the text you wrote being printed to the terminal window. You can run your script at any point throughout this project to test it.

Using `node filename.js` to run the javascript file.

### Set up version control

Set up Git tracking in your directory and add and commit changes as you make them.

**Hints:**

```bash
git init my_message_generator
```

If you want a refresher on the syntax, you can review the [Git lesson](https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-git-and-github-part-i/modules/fecp-introduction-to-git/lessons/git-workflow/exercises/git-generalizations) or look at this [cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf). It is good practice to do your work on a separate branch, then merge to main in the end when you feel your code is ready.

### Store message components

Decide how to store all of the message components for your game.

**Hints:**

Think about what kind of data structures would work best to store the information. An array would be a good choice here because you can randomly access an array’s elements. Remember, there will be at least 3 sets of data that make up your final message so you might consider having multiple arrays. You may want to nest these arrays inside of an object to keep them organized.

### Create the message

Add functionality to randomly select the different message components so they can create a cohesive message.

**Hints:** 

You can use a loop to iterate through the object, with a switch case that can select and format each of the different message components.

### Put the program together

Combine the different parts of your program so the random messages are selected, combined, and then displayed to the user each time they run the program.

**Hints:**

You can use a function to handle the overall formatting and display of the randomized message.

### Next Steps

You’re welcome to expand your program beyond these project tasks and get creative!

**Hints:**

In addition to doing random messages, you could add random [ASCII art](https://en.wikipedia.org/wiki/ASCII_art).

----

## WIKI

> Thought and step process through out the project.

### Getting user input in NodeJS

> Following this article: https://www.codecademy.com/articles/getting-user-input-in-node-js or checkout [user-input-node.md](01-javascript\mixed-messages\user-input-node.md)