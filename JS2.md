## Why do we use word debugger in JS
The debugger of the browser must be activated to debug the code , Built-in debugger can switched on or off,requiring user to report fault . The remaining section of code must stop execution of next line while debugging


The debugger statement invokes any available debugging functionality , such as setting a break point. if no debugging functionality was there then this statement has no effect

when debugger is invoked , execution is pasued at the debugger statement . it is like a breakpoint


```
function potentiallyBuggyCode() {
  debugger;
  // do potentially buggy stuff to examine, step through, etc.
}
```


## Difference between "==" and "==="
Both are comparison operator, "==" will compare only value while "===" compare value as well as type

```
var x = 2;
var y = "2";
(x == y)  // Returns true since the value of both x and y is the same
(x === y) // Returns false since the typeof x is "number" and typeof y is "string"

```

## Difference between var and let
From the vary beginning var keyword is used in JS but let introduced in 2015

var is function scoped and let is block scoped

var -> we can define the same variable again in the same scope

let -> we cannot define the same variable again in the same scope 

Hoisting is allowed in Var 
let is hosited but inaccesible due to "temporal dead zone"

Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

## Implicit type corecion in JS
It refers to automatic data type conversion from one type to another , it happens when operand of an expression are of different types

When a number is added to string the Number type is always converted to a string

Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.

```
var x = 3;
var y = "3";
x + y // Returns "33"


var x = 3;
Var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type


->Boolean corecion
var x = 0;
var y = 23;
        
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)



->logical corecion
var x = 220;
var y = "Hello";
var z = undefined;
        
x | | y    // Returns 220 since the first value is truthy
        
x | | z   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy
        
y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}



-> Equality corecion
var a = 12;
var b = "12";
a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.

```
Logical  operator in JS does not return true or false, it always returns one of the operand


## JS is dynamically typed or statically typed

JS is dynamically typed because the type of variable is checked at run time unlike in statically typed languages type checking happens at compile time


## NaN in js
Not a number means a value which is not a legal number

To check a value is NaN we use isNaN() function
isNaN() function converts the value to Number than equates to NaN
```
typeOf(NaN)  // it will return number
```

## Explain passed by value and passed by reference

In JS primitive data type are passed by value and non-primitive are passed by reference

In primitive instead of assigning same memory address to another variable copy of value created and stored at completely new memory location

##  IIFE (Immediately invoked function)
It is an function which runs as soon as it is defined 
```
syntax :- 
        (function(){
           //do something
        })();
```
Function will run if we invoke , that is the reason behind using this second paranthesis. 

While executing javascript code, whenever the compiler sees the word “function”, it assumes that we are declaring a function in the code. Therefore, if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function, and by the syntax of declaring a function, a function should always have a name.

## Strict mode in js

In ECMAScript 5 JS strict mode feature is introduced , it allows you to write the code or function in "strict" operational envirnoment

 In most cases, this language is 'not particularly severe' when it comes to throwing errors. In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler.  Thus programmer's chances of making an error are lowered.

 Engineers will not be allow to create global variable in strict mode


 ## Higher order functions

 Functions that operates on other either by taking function as argument or returning function is called as Higher order functions

```
->taking function as an argument
function higherOrder(fn) {
  fn();
}  
higherOrder(function() { console.log("Hello world") });  


->returing function
function higherOrder2() {
  return function() {
    return "Do something";
  }
}      
var x = higherOrder2();
x()   // Returns "Do something"

```

There are several different types of higher order functions like map and reduce

When working with arrays, you can use the map(), reduce(), filter(), and sort() functions to manipulate and transform data in an array.

When working with objects, you can use the Object.entries() function to create a new array from an object.

When working with functions, you can use the compose() function to create complex functions from simpler ones.


## This keyword
This keyword refers to the object that the function is property of

## Self invoking function
Without being requested, a self invoking expression is automatically invoked(initiated).

If a function expression is followed by (),it will execute automatically,function declaration will not invoked by itself.

Anonymous functions may be used to run a function automatically when it is described and will not be called again. And there is no name for this type of function

It is a function that is defined and immediately invoked, this techinque is often used to create a scope and avoid polluting global namespace


## call() , bind() and apply()

call() = this method invokes a function(method) by specifying an owner object

apply() = call and apply both are similar but in apply arguments are passed in array unlike in call

```
function saySomething(message){
  return this.name + " is " + message;
}        
var person4 = {name:  "John"};
saySomething.apply(person4, ["awesome"]);







//bind example

var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
      
// Binds the displayDetails function to the person1 object
        
      
detailsOfPerson1();
//Returns Vivek, bike details: TS0122, Bullet

```

bind() = this returns new function where the value of this refers to the owner object 

## Difference between exec() and test() methods in js

They both are RegExp expression methods
We'll use exec () to search a string for a specific pattern, and if it finds it, it'll return the pattern directly; else, it'll return an 'empty' result.

We will use a test () to find a string for a specific pattern. It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false'.


```
-> In this example if we not use regex and directly apply replace method than it will replace only first occurence of very 


const regex = /very/g
const text = "Ritul is very very very hard working and focused person";
console.log(text.replace(regex,"Good"));


const string = "abc"
const pattern = /ab/;
console.log(pattern.test(string));
console.log(pattern.exec(string));
console.log(string.match(pattern));
```

## Currying in JS

```
-> if any of these three argument will not present than it will not execute the function

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(2)(3)(3));


//Modern syntax
const sendEmail = (to) => (subject) => (body) =>
    `Sending email to ${to} which has subject ${subject} : ${body}`
let step1 = sendEmail("rituljain@google.com")
let step2 = step1("Order Confirmation")
console.log(step2("Hey! beauty , there is something awesome for you"))

```

if we have function like f(a,b) then after currying it transformed as f(a)(b)

By using currying we are not changing the functionality of a function we are just changing how function wil be invoked


## What are some advantages of using external JS

External js means , js written in a separate file with extension.js and we can link this file with HTML by adding script tag in the file either in head or body.

* We can reuse the code
* Code redability is simple 
* It allow developer and designer to collobarate in HTML and JS


## Scope and Scope Chain in JS

Scope determines the accessability of functions and variables at various parts of one's code.

It tell us which functions and variables are accesible or not at which part of code.
```
Three types of scope in JS : 1. Global
                             2. Local or function scope
                             3. Block
```

Global :- all the functions and variable declared in global namespace can be accessed anywhere in the code

Function scope :- all the variables declared inside the function accessbile within that not outside

Block :- let and const are block scoped but var is not , any variable declared inside block {} is accessible within block scope

If variable is not found in the code than compiler throws refernceError


Scope Chain -
if the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope.
If the variable is not found in the global space as well, a reference error is thrown.
## Closures in JS
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

Closure gives you access of outer function scope from an inner function. In JS closure is created every time function is created , at function creation time

```

//here not only displayName will be return but with that lexical scope of displayName will also returned


function closure(){
    let name = "ritul"
    function displayName(){
        console.log(name);
    }

    return displayName
}
const myFun = closure()
myFun()
```

Closure is an ability of function to remember the functions and variables declared in it's outer scope

## Advantages of JS

* JS is exectued on client side as well as server side. 

* Simple language to learn.

* Web pages now have more functionality because of JS.

* To the end user, JS is more quick.

## What are object prototypes

All JS objects inherit properties from prototype.Every prototype inherit properties from Object.prototype.

A prototype is an blueprint of an object.

The prototype allows us to use the properties and methods of an object even if the properties and methods not present in the current object.

## What are callbacks

Functions that are used as argument to another function is called as Callback.

 A callback is a function that will be executed after another function gets executed.

 A callback is a function that is passed as an argument to another function that executes the callback based on the result. They are basically functions that are executed only after a result is produced.


 Callback Hell is a nested callback stacked below one another forming a pyramid structure.

Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. 

To solve callback hell concept of promises came

## Promise 
It is an object in JS which have three states fulfilled,rejected,pending

## async-await
async function always returns a promise

await pauses execution of its surrounding aysnc function until the promise is settled.
await can only be used with async keyword.

## Different types of errors in JS
1. Syntax error
2. Logical error

## Memoization

It is used for expensive function calls.

Memoiziation is form of caching where the return value is cached based on its parameter.If the parameter of that function is not changed, then the cached version of the function will be returned.


```
function addTo256(num){
  return num + 256;
}
addTo256(20); // Returns 276
addTo256(40); // Returns 296
addTo256(20); // Returns 276

```

By using it we can store(cache) computed result based on the parameter , if same parameter is used again then the cached value will be returned instead of computing results

Although using memoization saves time, it results in larger consumption of memory since we are storing all the computed results.

## Recursion in programming

Recursion is a technique to iterate over an operation by having a function call itself repeateadly until it arrives at result.

## Use of constructor function in JS

Constructor function are used to create objects in JS.

If we want to create multiple objects having similar properties and methods, constructor functions are used.
It allows us to group similar objects.

In JavaScript, a constructor function is used to create objects. It is a regular function, but by convention, constructor functions are named with an initial capital letter. When a constructor function is called with the new keyword, it creates a new object, sets the this context of the function to the new object, and implicitly returns this if no other object is returned.


## DOM
DOM is an programming interface of HTML and XML documents.

DOM is a programming inteface that allow scripts to interact with and manipulate structure,style and content of HTML and XML documents.
It represents hierachical tree of objects, where each node represents part of the document.

When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document.

The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

## Which method is used to retrieve a character from certain index

charAt() method of the JS finds a char element at supplied index

## BOM
Browser Object Model allows users to interact with browser. A browser's inital object is window.As a result, you can call all of the window's directly or by referencing window.
The document,navigator,location,screen,history etc are attributes available in window object.

## Client side JS and Server side JS

## What are arrow functions
Introduced in ES6 version of JS , it is an new and shorter syntax for declaring funtions.
Arrow functions can only be used as function expression

We can ommitt return statement as well as curly braces if there is only on line of code , if there is only on paramter we can ommit paranthesis also.


## What is rest parameter and spread operator
ES6

Rest => It provides an improved way of handling the parameters of a function.

Using the rest parameter syntax, we can create functions that can take a variable number of arguments.

Any number of arguments will be converted into an array using the rest parameter.

It also helps in extracting all or some parts of the arguments.

Rest parameters can be used by applying three dots (...) before the parameters.


Spread =>  Although the syntax of the spread operator is exactly the same as the rest parameter, the spread operator is used to spreading an array, and object literals. We also use spread operators where one or more arguments are expected in a function call.

```
function addFourNumbers(num1,num2,num3,num4){
  return num1 + num2 + num3 + num4;
}

let fourNumbers = [5, 6, 7, 8];


addFourNumbers(...fourNumbers);
// Spreads [5,6,7,8] as 5,6,7,8
```
Rest parameter is used to take a variable number of arguments and turns them into an array while the spread operator takes an array or an object and spreads it
Rest parameter is used in function declaration whereas the spread operator is used in function calls.


##  In JavaScript, how many different methods can you make an object?
1. Object literals
2. using class 
3. using function
4. Object constructor
5. create method
6. Object

## Use of promises in JS

used to handle asynchronous operations 
four states of promise :- 

Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.

Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.

Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.

Settled - This state represents that the promise has been either rejected or fulfilled

A promise is created using Promise constructor which take in callback function with two parameter , resolve and reject

resolve will call when async operation done successfully and
reject will call when async operation is failed


then() method is used to access the  result when promise is fulfilled and
catch() method is used to access the  result/error when promise is rejected

## Classes 

classes are nothing but the syntactic sugar on constructor function , new way of declaring constructor function in JS are classes.
classes are not hoisted unlike functions. A class cannot be used before it is declared.

A class can inherit properties and methods from other classes by using the extend keyword.
All the syntaxes inside the class must follow the strict mode(‘use strict’) of javascript. An error will be thrown if the strict mode rules are not followed.

## Generator functions
ES6

They can be stopped midway, and then continue from where they had stopped.
Generator functions are declared with the function* keyword instead of the normal function keyword

In the case of generator functions, when called, they do not execute the code, instead, they return a generator object. This generator object handles the execution.
As one can see the next method returns an object consisting of a value and done properties.  Value property represents the yielded value. Done property tells us whether the function code is finished or not. (Returns true if finished).


## Weakset in JS

Set is a collection of unique value and ordered elements

Difference of weakset from set:-

Weakset only contains Objects and no other type. An object inside the weakset is referenced weakly. This means, that if the object inside the weakset does not have a reference, it will be garbage collected.

Unlike Set, WeakSet only has three methods, add() , delete() and has() .


## Why do we use callbacks
Callback are a technique to ensure that particular code will not run until another code will complete it's execution

## WeakMap 
Map is used to store key-value pairs. it can store both primitive and non-primitive types.

In weakmap keys and values should be of object type and 
if there is no refernce of object than that will be garbage collected.


## Object Destructring

It is an new way to extract element from object or an array

```
const arr = [1, 2, 3, 4];
const [first,second,third,fourth] = arr;
console.log(first); // Outputs 1
console.log(second); // Outputs 2
console.log(third); // Outputs 3
console.log(fourth); // Outputs 4





const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard:1
}

const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;

console.log(classStrength); // Outputs 78
console.log(classBenches); // Outputs 39
console.log(classBlackBoard); // Outputs 1
```


##  Temporal Dead Zone
Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. It is a behaviour where we try to access a variable before it is initialized.

```
x = 23; // Gives reference error

let x;

function anotherRandomFunc(){
  message = "Hello"; // Throws a reference error

  let message;
}
anotherRandomFunc();

```
## Is JS pass-by-value or pass-by-reference?
JS is pass-by-value

Primitive Values: Passed by value.
Objects: Reference to the object is passed by value. Changes to the object's properties affect the original object, but reassigning the object itself inside the function does not affect the original reference.

