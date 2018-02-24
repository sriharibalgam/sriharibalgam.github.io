Closures are a poor man’s object || Objects are truly a poor man’s closures.
    Closures Used For:
        in Object Data Privacy
        in Event Handlers 
        in Callbacks
        in Partial Applications, Currying
        In FP

Function composition
-------------------- is the process of combining two or more functions to produce a new function.
 Composing functions together is like snapping together a series of pipes for our data to flow through.
A MUTABLE object is an object whose state can be modified after it is created. 
An IMMUTABLE object is an object whose state cannot be modified after it is created. 

IMMUTABLE JavaScript Values are:
    Numbers and Strings. 
MUTABLE JavaScript Values are:
    Objects, Arrays, functions, classes, sets, and maps.

    Example of MUTABLE: (Object || Array)
    -------------------------------------
    let a = [4, 8, 40];
    let b = a;
    a.pop();
    console.log(a); // 4, 8
    console.log(b); // 4, 8
    console.log(a === b); // TRUE
    //  For Mutable values, updating state applies across all references to that variable 

    let a = {
        foo: 'bar'
    };
    let b = a;
    a.foo = 'test';
    console.log(b.foo); // test
    console.log(a === b) // true

    Example of IMMUTABLE: (String):
    ------------------------------
    let a = 'test';
    let b = a;
    a = a.substring(2);

    console.log(a) //st
    console.log(b) //test
    console.log(a === b) //false
    // For IMMUTABLE values, updating state can be reassigned to a new object ||  we have no way of changing internal state of the data 



console.log("Hanuma"); //1st

setTimeout(function laxman(){
    console.log("Number 3000");
}, 2000); // 5th

setTimeout(function rama(){
    console.log("Number 3000");
}, 3000); // 6th


setTimeout(function hanuma(){
    console.log("Number 0");
}, 0); //3rd

setTimeout(function srihari(){
    console.log("Number 1000");
}, 1000); //4th

console.log("rama") // 2nd


Execution Event Loops setTimeout
--------------------------------
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', value: ' + arr[i]);
    }, 3000);
}

Output is :


We work on arrays all the time and one of the most frequent operations that we perform on arrays is removing duplicates. There are a few ways to do this. 

Loop over an array, and move every item into a new array if it does not already exist in the new array.
Use the filter function to do the same activity.

A newer, concise and simpler way is to use the new Set data strucuture. 

Use the Set data structure, which automatically takes an iterable and removes duplicates. Then, use the from function of the Array object which will then take an iterable and convert it into an array. 

Check out the snippet below :

let fruits = ['apple','banana','orange','apple','mango','banana'];
let fruits_without_duplicates = Array.from(new Set(fruits));

console.log(fruits_without_duplicates); //["apple", "banana", "orange", "mango"]


/****************************************************/
Timers in JavaScript :

Find operating system of Client : navigator.appVersion

//http://bonsaiden.github.io/JavaScript-Garden/#function.closures
for(var i =0; i<10; i++){
    setTimeout(function(){
        console.log(i); // print 10 ten times
    }, 1000);
} // this keeps the reference of i so it would be 10 when executes timeout.

//To Overcome this Use below code

//1 The anonymous outer function gets called immediately with i as its first argument and will receive a copy of the value of i as its parameter e.
for(var i = 0; i < 10; i++) {
    setTimeout((function(e) {
        return function() {
            console.log(e);
        }
    })(i), 1000)
}

//2
for(var i = 0; i < 10; i++) {
    setTimeout((function(e) {
        return function() {
            console.log(e);
        }
    })(i), 1000)
}

//3  We can Pass arguments to setTimeout function
for(var i = 0; i < 10; i++) {
    setTimeout(function(e) {
        console.log(e);  
    }, 1000, i);
}

//4
for(var i = 0; i < 10; i++) {
    setTimeout(console.log.bind(console, i), 1000);
}

//5 ES6 let is a block scope. Everytime loops new blockscope is provided
for(let i=0; i<5; i++){
    setTimeout(()=> { console.log(i); });
}
