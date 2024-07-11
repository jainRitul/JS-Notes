JS was created by Brendan Eich in 1995 
It was designed to build dynamic web pages
A script is JS program that may be added to HTML web page whenever page loads script automatically executes
It can also now used for server side development
JS is object oriented programming language
It was created with intention of being use in browser you can use node.js

Datatypes :- Primitive - string
                         Number (int ,float)
                         Symbol (unique and hidden)
                         Boolean
                         Null (type is object)(invalid  || non-existent)
                         undefined (type is undefined)
                         Bigint (at the end n will added)
            Non Primitive - In Primitive you can only store one value one var but in non primitive you can store multiple value in one var


Hoisting :- if a variable,fun or any object in js is accessible even when you are declaring the var before it's initialization
To avoid Hoisting you can use 'use strict' on top of the code

Difference between "==" and "===" :- Both used for comparsion "==" is used to compare values "===" used for value and type


let vs var :- let is introduced in 2015 and var is from the vary beginning
              var is scope problems that it is accessible outside the function also and let is accessible inside function or block scope only
              if you access let out of scope it will give ReferenceError

              
ECMA :- european computers manufactures association

Implicit type coercion :- automatically converison of data type from one to other and it happens when operand of expression is of different Datatypes
3+"3" = 33 (here 3 is converted to string and than operation happen)
IMP -: 3-"3" (here 3 is converted to int )

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

unlike other language js is not returing the false and true with logical operator it will return one of the operand

JS is dynamically types language where type checking happens at run time not at compile time

typeOf NaN = Number and NaN means not a legal Number


isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true

Passed by value and pass by reference :- primitive type is passed by value and non primitive type is pass by refernce
                                         passByVal :- new loaction is allocated if one variable assigned to another 
                                         passByRef :- same address get modified



IIFE :- immediately invoked function execution
        that runs as soon as it is defined

//syntax of IIFE 
(function(){
   //do something
},())        


* DOM
there is property in js that childNodes which gives us the view how browser build the DOM inside it'same
not like we think even a line break and comment also added in DOM tree


