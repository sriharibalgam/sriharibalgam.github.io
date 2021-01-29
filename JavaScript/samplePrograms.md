```js
for(var line = "#"; line.length < 8 ; line += " #") {
    console.log(line);
}
//------------------Other Way--------------
var str = "";
for( var i =0; i < 8; i++){
	str += "#";
  console.log(str);
}

/*
#
##
###
####
#####
######
#######
*/
//============================================================================
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n); //
}
//==============================|| Printing Chess board Pattern ||======================================//
var size = 8;
var chessBoard = "";

	for( var whites =1; whites <= size; whites++ ){
    	for( var blacks=1; blacks <= size; blacks++){
            // Method 1
            if( (whites + blacks) % 2 == 0)
                chessBoard += "[]";
            else
                chessBoard += "::";

            // Method 2
            chessBoard += (whites % 2 == 0) ? (blacks % 2 == 0) ? "::" : "[]" : (blacks % 2 != 0) ? "::": "[]";
        }
        chessBoard +="\n";
    }
	console.log(chessBoard);

//===============================|| Finding Min of Numbers ||=====================================

function min(a,b){
	return a < b; // For finding min
}
console.log(min(0, 10)); // → 0
console.log(min(0, -10)); // → -10

//==================================|| Inserting an item to array if not exist in array ||==================================
var arr = [1, 2, 4, 5 ,6, 8];
function pushItem(input){
  	for( var i=0; i < arr.length; i++) {
    	if(arr[i] == input) return "'"+input+"' value already exists"; // if value exist return
    }
  	arr.push(input);
  	console.log(arr);
  	return "'"+input+"' value added succesfully";
}

console.log(pushItem(2));
console.log(pushItem(9));
console.log(pushItem(21));
console.log(pushItem(21));
console.log(pushItem(9));
console.log(pushItem(6));
console.log(pushItem(2));
console.log(pushItem(3));
console.log(pushItem(4));

/***************************************|| Pushing to Object ||********************************* */
var arr2 = [{name:"akhil", lang: "telugu"},{name:"Srihari Balgam", lang: "tamil"}];

function pushObj(input){
  var result = arr2.filter(function(obj){
            return obj.name == input.name; // Checking only name
            //return obj.name == input.name || obj.lang === input.lang; // checking either name or lang
            //return obj.name == input.name && obj.lang === input.lang; // Checking botha name and Lang
        });
  if(result.length) return "'"+input.name+"' value exists";
  arr2.push(input);
  return "'"+input.name+"' value added";
}

console.log(pushObj({name:"akhil", lang: "telugu"})); // 'akhil' value exists
console.log(arr2);
console.log(pushObj({name:"Rudy", lang: "english"})); // 'Rudy' value added
console.log(arr2); // [{name: "akhil", lang: "telugu"}, {name:	"Srihari Balgam", lang:	"tamil"}, {name:"Rudy",lang:"english"}]




// Recursive Function

function isEven(nbr){
  // it should be a boolean
  if(nbr == 0) return true;
  else if(nbr == 1) return false;
  else if(nbr < 0) return isEven(-nbr);
  else return isEven(nbr - 2);
}

console.log(isEven(50)); // give a Number input
console.log(isEven(75)); // give a Number input
console.log(isEven(1)); // give a Number input
console.log(isEven(0)); // give a Number input
console.log(isEven(-12)); // give a Number input


//===============================================================

function countBs(str){ // takes string Parameter
	// returns number
  	var len = str.length;
  	var temp = 0;
  	for( var a=0; a < len; a++){
    	if( str.charAt(a) == "B") temp++
    }
  return temp;
}

console.log(countBs("Balgam Brand"));

//===================================================================

function countChar(str, findChar){
	var len = str.length;
  	var temp = 0;
  	var obj = {};
    for ( var a=0; a< len; a++){
      if(str.charAt(a) === findChar) temp++
	}
  return temp;
}


console.log("Number of Chars: ", countChar("SriahriBalgmaSreeShree", 'S'));


//=========================|| Finding Number of Occurance in a String  ||=================//


function gvco1(str)
{
	var str = str.split(""); // convert string into array
  	var obj ={};
  	iterations = 0;
  	for(var i=0;i<str.length;i++){
      for(var j=0,count=0;j<str.length;j++){
        if(str[i] == str[j])
          count++;
        iterations++
      }
      obj[str[i]] = count;
    }
  console.log(obj);
  console.log("gvco1 number of iterations => ",iterations);
}

function gvco2(str)
{
	//var str = str.split("");
  	var obj ={};
  	iterations = 0;

  	while(str.length){
      for(var j=0,count=0;j<str.length;j++){
		//console.log(str.charAt(i),str.charAt(j));
        //console.log(str.charAt(i) == str.charAt(j));
        if(str.charAt(0) == str.charAt(j))
          count++;
        iterations++
      }
      obj[str[0]] = count;
      var regx =new RegExp(str[0], 'g');
      str = str.replace(regx, "");
      //console.log(str);
    }
  console.log(obj);
  console.log("gvco2 number of iterations => ",iterations);
}


var newStr = "this is aswesome text, am gonna test number of iterations of two functions . this is a looong text this is aswesome text, am gonna test number of iterations of two functions . this is a looong textthis is aswesome text, am gonna test number of iterations of two functions . this is a looong textthis is aswesome text, am gonna test number of iterations of two functions . this is a looong textthis is aswesome text, am gonna test number of iterations of two functions . this is a looong textthis is aswesome text, am gonna test number of iterations of two functions . this is a looong textthis is aswesome text, am gonna test number of iterations of two functions . this is a looong textthis is aswesome text, am gonna test number of iterations of two functions . this is a looong textthis is aswesome text, am gonna test number of iterations of two functions . this is a looong textthis is aswesome text, am gonna test number of iterations of two functions . this is a looong textthis is aswesome text, am gonna test number of iterations of two functions . this is a looong textthis is aswesome text, am gonna test number of iterations of two functions . this is a looong text"
gvco1(newStr);
gvco2(newStr);



//==============================|| OBJECTS ||======================================/
var obj = {
  	readBook: true,
	squirrel : false,
  	event : ["Wokeup", "brsuhed", "bathed", "went Temple", "Spoke to anna", "Upma had", "Lunch", "Dinner", "sleep"]
}; //

console.log(obj); // {}
console.log("turned as squirrel on Day 1: ", obj.squirrel);
console.log("turned as wolf on Day 1: ", obj.wolf);
obj.wolf = true; // Adding an Element to object
console.log("After Adding an Wold Elemt to Obj ", obj.wolf);

delete obj.wolf; // Deletes an element property
console.log("after Removing an Element form Obj ", obj);
console.log(readBook in obj); // Returns true ...---- in --- Checks the existance of an item in object


/**************************************|| Mutability ||********************************* */

var obj1 = { age : 26 };
var obj2 = obj1;
var obj3 = { age : 26 };  // having same property but lives a seperate life

console.log(obj2 === obj1); // true
console.log(obj2 === obj3); // false

obj2.age = 25; // change in reference change value of actual obj
console.log(obj2 === obj1); // true
console.log(obj1); // { age: 25 }


/***************************************************** */
 //φ =   n11n00 − n10n01 / √n1•n0•n•1n•0
   // converting this formula into Javascript

   // Computing Correlation

    function pie(table){

       return  (table[3] * table[0]) - (table[2] * table[1]) /
        Math.sqrt(
                ( table [2] + table [3]) *
                ( table [0] + table [1]) *
                ( table [1] + table [3]) *
                ( table [0] + table [2])
            );
    }

    console . log ( phi ([76 , 9 , 4 , 1]) ) ;
// → 0.06859943405700354


/*************************************************************. */
var arr = [1,2,4,15,14,4,8];
var stringArr = ["Srihari", "Balgam", "Vikram Billa", "Rudhra"];

arr.push(10); // Adds a new element in the End of an Array
console.log(arr); // [1, 2, 4, 15, 14, 4, 8, 10]

arr.pop(); // Accepts no arguments --  Removes the LAST element from arr
console.log(arr); // [1, 2, 4, 15, 14, 4, 8]

arr.shift(); // Removes the first element from arr -- And Returns removed item
console.log(arr); // [2, 4, 15, 14, 4, 8]   -- 1 is removed

arr.unshift(40); // Adds a new element in the Beginning of an Array  -- RETURNS size of new array
console.log("After Unshift ", arr); // [40, 2, 4, 15, 14, 4, 8]

var index = arr.indexOf(15); // Returns position of an item
console.log("Index of 15 Fount at Position: ", index); // 3

var lastIndex = arr.lastIndexOf(4); // returns the last occurance position of repeated item.
console.log("Last Index Found at: ", lastIndex); // 5

var indexWith2Params = arr.indexOf(4, 3); // indexOf and lastIndexOf methods accepts second parameter as optional which indicates where to start seach
console.log(indexWith2Params);// in this case find 4 starting [40, 2, 4, 15, 14, 4, 8] which starts from 15 returns position 5


// Loop over array
stringArr.forEach(function(item, index, array){
	console.log(item, index); // print all items
})

var sliceArr = arr.slice(2,4); // [40, 2, 4, 15, 14, 4, 8].slice(2,4)
console.log(sliceArr); // [4, 15] prints inbetween arr[2] and arr[4] but not arr[4]

var sliceArr = arr.slice(2); //
console.log(sliceArr); // Print [4, 15, 14, 4, 8]


/***************************************************** */
    function argumentCounter() {
        console.log("Length of Args: ", arguments.length);  // prints 4
    }
    argumentCounter("rama", "krishna", "srihari", "hari");

    function passOneArgAndReadOtherFromArgumentObj(passedFirstArg) {
        console.log("Length of Args: ", arguments.length) // Length of Args:  8 || Even I have passed one
        console.log(passedFirstArg); // print true
        var entry = { namesFromArguments: [], isReading: passedFirstArg};

        for( var i=1; i < arguments.length; i++) // Skip [0] bcz we passed 1st arg
            entry.namesFromArguments.push(arguments[i]);
        console.log(entry); //
    }

    passOneArgAndReadOtherFromArgumentObj(true, "rama", "krishna", "srihari", "hari", "Balgam", "Vikram", "Rudra");


    /****************************************** */
    function range(start, end) {
        if( end < start) return "Not Possible";
        var rangeArr = [];
        for( var i = start; i <= end; i++)
            rangeArr.push(i);
        return rangeArr;
    }

    // Take arr as input return sum of array
    function sum(arr){
        var sum = 0;
            for(var s=0; s < arr.length; s++)
            sum += arr[s];
        return "Sum of array ["+arr+"] is: "+sum;
    }

    /* range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].*/

    function range(start, end, step) {
        var rangeArr = [];

        step = step ? step : 1; // If no Step provided Will take 1 as default

        if(start < end) {
            for( var i = start; i <= end; i += step)
            rangeArr.push(i);
        } else {
            for( var j = start; j >= end; j += step) // j=10; 10 >= 2; j = j + (-2)
            rangeArr.push(j);
        }
        return rangeArr;
    }

    console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(1, 10, 2)); // [1, 3, 5, 7, 9]
    console.log(range(5, 2, -1)); // [5, 4, 3, 2]
    console.log(range(10, 2, -2)); // [10, 8, 6, 4, 2]

    /*** 2nd way of Doing **********************/
    function printRange(start,end,step)
    {
        var newarr = [];

        var reverseProcedure = (start < end);
        var _start = reverseProcedure ? start : end;
        var _end =  reverseProcedure ? end : start;
        step = (step) ? Math.abs(step) : 1; // Math.abs() converts -1 to 1

        for(var i=_start;i<=_end;i += step)
            newarr.push(i);

        newarr = reverseProcedure ? newarr.reverse() : newarr;
        console.log(newarr);
    };

    printRange(1,10,2);
    printRange(5,2,-1);


/***************************************** || custom REVERSE functionality||****************************************** */
// Method one returning array in Reverse Order using FOR
function reverseArray(arr){
  var reverseArr = [];
  for(var i= arr.length - 1; i >=0; i--)
    reverseArr.push(arr[i]);
  return reverseArr;
}

// Method one returning array in Reverse Order Using WHILTE
function reverseArray(arr){
  var reverseArr = [];
  while(arr.length){
  	reverseArr.push(arr[arr.length - 1]);
    arr.pop();
  }
  return reverseArr;
}

// Method one returning String in Reverse Order
function reverseString(str) {
  var o = '';
  for (var i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;
}
console.log(reverseArray(["Srihari", "Balgam", "Vikram", "Billa", "Rudhra"])); // // Method one returning array in Reverse Order
console.log(reverseArray([ "Vikram", "Billa", "Srihari", "Balgam", "Rudhra"])); // ["Rudhra", "Balgam", "Srihari", "Billa", "Vikram"]

console.log(reverseString("srihariBalgam")); // maglaBirahirs

console.log("return s".split(' ').reverse().join('')); //snruten

/*******************************************|| Checking is Polindrome ||**************************************** */
function isPolindrome(str, len){
    // way 1
	var polyStr = str.split('').reverse().join('');
    console.log( (polyStr === str) );

	// way 2
	for( var i =0; i < len; i++){
		if(str[i] !== str[len - 1 -i]) return false;
	}
	return true;
}
console.log(isPolindrome("hari", 4));
console.log(isPolindrome("eye", 3));

/**************************************************************************************************************** */
////////////////////////////      Higer ORDER FUNCTIONS
/**************************************************************************************************************** */

// For example, you can have functions that create new functions.
function greaterThan ( n ) {
    return function ( m ) { return m > n ; };
}
var greaterThan10 = greaterThan (10) ;
console.log( greaterThan10 (11) ) ; // true

// you can have functions that change other functions

function noisy ( f ) {
return function ( arg ) {
console . log (" calling with " , arg ) ;
var val = f ( arg ) ;
console . log (" called with " , arg , " - got " , val ) ;
return val ;
};
}
noisy ( Boolean ) (0) ;
// → calling with 0
// → called with 0 - got false

function gtCheck(n){
	return function(m,o) {
      console.log(o, m, n);
      return o+m > n;
    }
}
// Closure - a higher order Function that
/*********************************|| JSON ||********************************** */
var stringEach = [2,4,20,45,78,99, "srihari","Balgam"];

stringEach.forEach(function(element){
	console.log(element);
})

var normalJsObj = { name: "Srihari", age: 26};
var normalObjTojsonObj = JSON.stringify(normalJsObj); // {"name":"Srihari","age":26} // Every KEY is enclosed with "" (double Quotes)
var jsonObjToNormalObj = JSON.parse(normalObjTojsonObj); // removes Quotes and converts back to normal js obj

console.log(normalJsObj,"\n", normalObjTojsonObj,"\n", jsonObjToNormalObj)

/***********************|| FILTER AND MAP() || **********************************/
var ancestors = [
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
 ];

ancestors.forEach(function(person){
	console.log(person.name);
}); // each name

var filtered = ancestors.filter(function(person){
	return person.sex == "f" ? person : '';
}); // returns object

console.log(filtered.map(function(person){
	return person.name
})); // reruns array ["Emma de Milliano", "Maria de Rycke"]

/******************************************************************************* */
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

function sayHi(){
    console.log("Hi");
}

setTimeout(sayHi, 1000); // Correct procedure to passs function as a reference
setTimeout(sayHi(), 1000) // You cannnt pass a function to setTimeout // ot will execute the function before timer


let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log(timerId); // timer identifier

clearTimeout(timerId);
console.log(timerId); // same identifier (doesn't become null after canceling)
// repeat with the interval of 2 seconds

let timerId1 = setInterval(() => console.log('tick'), 4000);

// Running regular interval without setInterval function
let timeoutRecursive = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
//clearTimeout(timeoutRecursive)

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId1); console.log('stop'); }, 5000);

const devide= function(a,b){
  return a/b;
};

var reverse = function (){
	return function(a,b){
    	return b/a;
    }
}
var output = (devide)(10,0); // Note the extra grouping operators
console.log("Normal OutPut: ", output);  // Normal OutPut:  Infinity
console.log("Reverse of Function: ", reverse(devide)(10,0)); // Reverse of Function:  0


// second

function isPolindrome(input, length){
    for(var i=0; i < Math.floor(length/2); i++){
        if(input[i] !== input[ length - 1 - i])
            return false;
    }
    return true;
}

console.log(isPolindrome('hari', 4) === false); // true
console.log(isPolindrome('eye', 3) === true); // true

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}
```
