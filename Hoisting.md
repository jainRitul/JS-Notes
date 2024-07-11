## Hoisting
It refers to declartion of variable , functions, classes, and imports to top of their scope , prior to the execution of code


Default behaviour of JS where all the functions and variable declaration moved on top

variable initalization is not hoisted only variable declaration is hoisted

To avoid hoisting use "use strict" on top of code
```
=> This will work 
addOne(3)
function addOne(num){
    return num+1
}

-> This will not work 
addTwo(4)
function addTwo(num){
    return num+2
}

-> Declaration moved on top
a=1
alert("a ="+a)
var a;


->
hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;


-> Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 



"use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 
```

