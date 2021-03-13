# JavaScript Guide

## TypeScript & Angular Installation Guides
These are the guides from [Luv2Code](https://github.com/darbyluv2code/fullstack-angular-and-springboot). I don't claim any of these guides.

* Installation for [Windows](00-installation/windows.md)

* Installation for [Mac](00-installation/mac.md)

* Installation for [Mac](00-installation/linux.md)


## Angular Development

For Angular development, we can develop using various languages:

**JavaScript** : extemely popular programming language

**ECMAScript** : standardized version of JavaScript (ES6, ES9,...)

**TypeScript** : adds optional types to JavaScript

Other langues such as **Dart**, etc...


## TypeScript Basic

> Check out [TypeScript document](typscriptlang.org)

### What is TypeScript

**TypeScript** is the most popular language for Angular development.

TypeScript is the language that developed by Microsoft in 2012. It is **free and open-source**. Provides static typing support to JavaScript, which helps with IDE support: code completion and debuging. It add support for **object-oriented programming**: classes, objects, inheritance, interfaces, etc...

### Relationship

TypeScript is a superset of JavaScript and ECMAScript.

```
TypeScript > ECMAScript > JavaScript
```

### Why most Angular developers use TypeScript?

Because it is **strongly-typed** language with compile time checking and IDE support. It increase developer productivity and efficiency. The 

Angular framework is internally developed by using TypeScript. The Angular developers actually used TypeScript to build the Angular framework. There are also many docs, online blogs and tutorials use TypeScript for coding examples.

It is good idea to learn TypeScript start learning Angular development.

### How to work with TypeScript

**Development Process**:

1. Create TypeScript code. TypeScriot files have `.ts` extension.

2. Compile the Code. Because Web brswers do not undestand TypeScript natively. It have to be convert TypeScript code to JavaScript code. This is known as "transpiling". Compile code using `tsc` command. This will translate/compile any `.tsc` file to `.js` file.

```bash
tsc file.ts
```

3. Run the code, which is to run the JavaScript code, we use the `node` command to run any generated `.js` file.

```bash
node file.js
```

> Only edit the TypeScript file `.ts`, do not edit the JavaScript file `.js`. Remember that `.js` is generated every time by the TypeScript compiler.



