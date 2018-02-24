Chapter 1: 

Data is a Sequence of Bits -- are represented in 0 and 1.

There are six basic types of values in JavaScript:
Numbers, Strings, Booleans, Objects, Functions, and Undefined values
---------
Numbers :
---------
JavaScript uses a fixed number of bits, Namely 64Bits
Javascript Numbers are Stored in DOUBLE PRECISION FLOATING NUMBERS 
You can represent 2 power 64 different numbers, which is about 18 quintillion (an 18 with 18 zeros after it)

JavaScript uses the + operator for both addition and concatenation.
Numbers are added. Strings are concatenated.
Javascript Compiler Works from LEFT to RIGHT    
Numbers can be a Objects // y=10; var x= new Number(10); if(x === y ) // Output False.
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x. // var x = 0xFF; // x will be 255

There are three special values in JavaScript are Considered as Numbers
Infinity            ---- console.log(1/0);  typeOf Infinity == is "Number"
-Infinity           ---- typeOf -Infinity is Number
NaN                 ---- typeOf NaN => Number // console.log(0/0); // Output: NaN

→ There is only ONE VALUE in JavaScript that is not equal to itself, and that is NaN, which stands for “not a number”.
console . log ( NaN == NaN ) // → false

→ typeof NULL is an object. ex: console.log(typeof null); // object
→ console.log(null.length); // Will produce an error → TypeError : Cannot read property ' length ' of null

Type of Operators:
    Unary
    Binary
    Ternary

Not all operators are symbols. Some are written as words. ==> typeof
::The "typeof" is a Unary operator

--------
Strings:
--------
Strings can be compared to each other (Camparrision based on UNICODE standard)
  Uppercase letters are < Lowercase letters ( "Z" < "a"  )


------------------
UNDEFINED VALUES :
------------------
    null and undefined are used to denote the absense of meaningful value.
    null and undefined are themselves values but carries no information.

Rules of Converting:
    Converting String and number to Boolean values state that 0,NaN and the "" (Empty String) to false. // console.log( "" == false ); // true



A fragment of code that produces a value is called an expression
------------
Variables:
------------
VAR, CONST:
    Var and Const are function Scoped, hoists to the top its function scope.
    VAR can be redeclared in same scope;
    CONST redeclarations of the same name in the same scope are rejected.
    
LET:
    Block Scoped, hoists to the top of its block
    redeclarations are rejected.


    Variables can be thought of as named containers. You can place data into these containers and then refer to the data simply by naming the container
    Before you use a variable in a JavaScript program, you must declare it. Variables are declared with the var keyword

----------
FUNCTION :
----------
    Function is  a piece of program wrapped in a value;
    Executig a function is Called: invoking, calling, applying
    Values given to the function are called as arguments
Promt and Confirm 
    -- Confirm returns a boolean value OK == ture , Cancel == false
    -- Promt function returns a String 

--------------------------------------------
JavaScript supports different kinds of LOOPS:
---------------------------------------------
for - loops through a block of code a number of times
for/in - loops through the properties of an object
while - loops through a block of code while a specified condition is true
do/while - loops through a block of code once, and then repeats the loop while a specified condition is true

Tip: Use the break statement to break out of a loop, and the continue statement to skip a value in the loop.

---------
FOR LOOP:
---------
for(a=10; ; a++;) {} // Missing 2nd argument in Forloop can cause Infinite Execution;

possible writings of for();
    ---- var a=1; for(; a<10; a++;) // omit 1st statement if var is pre initialized
    ---- for( a=1; ; a++;) // If U omit 2nd statement you have to use BREAK; to stop the execution.
    ---- for(a=1;a<10; ) // You can Emit 3rd statement . You can do increment inside the loop
        for(;;)


Though variable names cannot contain period characters, console.log clearly has one. 
This is because console.log isn’t a simple variable.
It is actually an expression that retrieves the log property from the value held by the console variable.

Parameters to the function are like normal variables but they are given by a caller of the function.

-------------
NESTED SCOPE:
-------------
    Inner function share a out function variable SCOPE.
    Outer Function can not access to the inner function local variable scope.

-----------
Properties:
-----------
    Almost JavaScript values have proporties except "null" and "undefined"
    // null.lenght provides a type error.
    Properties can be accessed with . or [] . // var str = "Hanuma"; str.lenght || str["lenght"]
    When Accessing a Property with . the part after dor must be a VALID VARIABLE NAME.
        ----- value.x // which fetches a value of variable "x"
    When accessing a property with [] the expression between [] is EVALUTED to get the property name.

--------
METHODS:
--------
    join("") -- Used to convert Array into String 
    split("") -- Used for Converting string into array 

--------
OBJECT :
--------
    An object is Dynamic collection Properties.
GET:
    obj.name
    obj[name]
SET:
    obj.name = "sri"
    obj[name] = "sri"
DELETE:
    delete obj.name
    delete[name]

    [keys] must be strings -- Automatic type Coercion

    var obj = { "name" : "Srihari Balgam", "age" : 26 };
    
    Type of [1,2,14,13] is an  Object // typeof [1,2,14,13] // object 
======> We can Add a new item to object "obj "
    obj.job = "Developer"; 
    console.log(obj); // { "name" : "Srihari Balgam", "age" : 26, "job" : "Developer" };

=====> We can Remove an item form Object is using delete
    delete obj.job;
    console.log(obj); // { "name" : "Srihari Balgam", "age" : 26, "job" : "Developer" };

=====> We can check an item exist in the Object is using "in" binary Operators
       The binary "in" operator, when applied to a string and an object, returns a Boolean value that indicates whether that object has that property.
    
    console.log("name" in obj); // true
    console.log("job" in obj); // false


Javascript has 5 data types that are PASSED BY VALUE: 
    Boolean, null, undefined, String, and Number. We’ll call these primitive types.

Javascript has 3 data types that are PASSED BY REFERENCE:
    Array, Function, and Object. These are all technically Objects, so we’ll refer to them collectively as Objects.

An object created with new is said to be an instance of its constructor
--------------
::: Arrays :::
--------------
    var arr = [1,2,4,15,14,4,8];
    var stringArr = ["Srihari", "Balgam", "Vikram Billa", "Rudhra"];
    
    var arr = [];
    arr[0] = "cat"; // this adds to the array
    arr[1] = "mouse"; // this adds to the array
    arr.length; // returns 2
    arr["favoriteFood"] = "pizza"; // this DOES NOT add to the array. Setting a string parameter adds to the underlying object
    arr.length; // returns 2, not 3

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

    var concatArr = arr.concat(stringArr);
    console.log("Merges arr with stringArr: ", concatArr);
    var multipleConcat = arr.concat(stringArr, ["rama", "hanuma", "Srihari"]]);
    console.log(multipleConcat);

    var spliceArr = arr.splice(1,2, 10,15); // Insert after Index(1), insert number of item (2), 10, 15.. items 
    console.log("Array After Splice ", arr); //[1, 10, 15, 15, 14, 4, 8]

    var spliceArr = arr.splice(2); // 
    console.log(arr)


=> Both indexOf and lastIndexOf take an optional second argument that indicates where to start searching from.
=> Another fundamental method is slice, which takes a start index and an end index and returns an array that has only the elements between those indices. 
    The start index is inclusive, the end index exclusive. // For example arr.slice(2,5) --> it starts form arr[2] and stops by arr[4] it wont print arr[5]
=> The arr.splice(str) method is a swiss army knife for arrays. It can do everything: add, remove and insert elements.
    
    arr.indexOf(item, from) looks for item starting from index from, and returns the index where it was found, otherwise -1.
    arr.lastIndexOf(item, from) – same, but looks from right to left.
    arr.includes(item, from) – looks for item starting from index from, returns true if found.
    
    A cheatsheet of array methods:

    ::To add/remove elements::

        push(...items) – adds items to the end,
        pop() – extracts an item from the end,
        shift() – extracts an item from the beginning,
        unshift(...items) – adds items to the beginning.
        splice(pos, deleteCount, ...items) – at index pos delete deleteCount elements and insert items.
        slice(start, end) – creates a new array, copies elements from position start till end (not inclusive) into it.
        concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
    
    ::To search among elements::

        indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
        includes(value) – returns true if the array has value, otherwise false.
        find/filter(func) – filter elements through the function, return first/all values that make it return true.
        findIndex is like find, but returns the index instead of a value.
    
    ::To transform the array::

        map(func) – creates a new array from results of calling func for every element.
        sort(func) – sorts the array in-place, then returns it.
        reverse() – reverses the array in-place, then returns it.
        split/join – convert a string to array and back.
        reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
    
    ::To iterate over elements::

        forEach(func) – calls func for every element, does not return anything.
    
    Additionally:

        Array.isArray(arr) checks arr for being an array.
        Please note that methods sort, reverse and splice modify the array itself.

    These methods are the most used ones, they cover 99% of use cases. But there are few others:

        arr.some(fn)/arr.every(fn) checks the array.

    The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

        arr.fill(value, start, end) – fills the array with repeating value from index start to end.

    arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

-----------------------------
String and their Properties :
-----------------------------
    You can not add new property to the string. If you do it dont give an error but not apply
        var myString = "Srihari";
        myString.surname = "Balgam"; // trying to set new Property but wont stick it 
        console.log(myString.surname); // Gives undefined
        
    
    var strProp = "SrihariBalgam";

    var sliceStr = strProp.slice(3,6); // print 3 to 5 : har
    var findPos = strProp.indexOf("B"); // Print Where the letter found : 7
    var findLastPos = strProp.lastIndexOf("a"); // 11  -- reads right to left
    var letterAtPos = strProp.charAt(4); // returns letter at 4th pos : a
    var likeArr = strProp[5]; // r 

    console . log (" okay \ n ". trim () ) ; // okay -- trims removes whitespaces newlines tabs
    console.log(sliceStr, findPos, findLastPos, letterAtPos, likeArr); // har, 7, 11, a, r

---------------------
The argument Object :
---------------------
=> Whenever Function called -- argument variable is added to the function context . this argument refers to an OBJECT and holds the passed arguments.
=> argument.length -- is used to count arguments
  
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
        console.log(entry);
    }

    passOneArgAndReadOtherFromArgumentObj(true, "rama", "krishna", "srihari", "hari", "Balgam", "Vikram", "Rudra");

\\ ******************************************************************************************************************/

------------------------
Higher Order Functions :
------------------------
    Functions which operates on other functions either by talking them as argument or by returning them are called Higher order functions
    Higher order allow us to ABSTRACT over ACTIONS not on VALUES
    This Comes in 3 forms 

    1=> You can Have functions that create new functions
        function greaterThan(n){ // 
            return function(m){ // here new function greaterThan10(11) can be created
                return m>n;
            }
        }
        var greaterThan10 = greaterThan (10); // when call this 
        console.log ( greaterThan10 (11) );

    2=> You can have functions that change other functions 
        function noisy ( f ) {
            return function ( arg ) {
                console . log (" calling with " , arg ) ;
                var val = f ( arg ) ;
                    console . log (" called with " , arg , " - got " , val ) ;
                return val ;
            };
        }

    3=> you can have functions that provide new types of control flow.

        function unless(test, than) if(!test) then();
        function repeat(times, body){
            for(var i=0, i< times; i++) body(i)
        }

        repeat(3, function(n){ // 3=times, function(n) = body(i)
            unless(n%2, function(){ // n%2 =test, function() = then()
                console.log(n, " is even");
            })
        })
    

    forEach();
        passing a function to forEach and letting that method handle the array iteration for us is convenient and easy to read.
        But function calls in JavaScript are costly compared to simple loop bodies.

    filter()

    map();

    REDUCE();
        Reduce has 3 parameters 
            ----> Array
            ----> combine function whih take 2 arguments // 
            ----> start  // Index where to start counting 
            
    >    function reduce(array, combine, start){} // declaration
        
    >    reduce(array, function(a,b), 0); // calling reduce 1
    >    array.reduce(function(a,b), 0); // calling reduce 2 || You can give any number in place of 0 . counter starts from that number assigned to current value inside reduce function
    >    array.reduce(function(a,b)); // calling reduce 2


        The parameters to the reduce function are, apart from the array, a combining function and a start value. This function is a little less straightforward 
        than filter and map, so pay careful attention.

        function reduce ( array , combine , start ) {
            var current = start ;
            for ( var i = 0; i < array . length ; i ++)
                current = combine ( current , array [ i ]) ; // here is the function
                return current ;
            }
            console . log ( reduce ([1 , 2 , 3 , 4] , function (a , b ) {
            return a + b ;
        }, 0) ) ; 


    Higher-Order Functions Methods:
    -------------------------------
    forEach() to do something with each element in an array,
    filter() to build a new array with some elements filtered out,
    map() to build a new array where each element has been put through a function
    reduce() to combine all an array’s elements into a single value.

------------
Prototypes:
------------
console.log( Object.getPrototypeOf ({}) == Object.prototype ) ;
// → true
console.log( Object.getPrototypeOf ( Object.prototype ) ) ;
// → null
Many objects don’t directly have Object.prototype as their prototype, but instead have another object, which provides its own default properties.

-------------
Constructor: 
-------------
Calling a function with new keyword is called Constructor 
Constructor will have its "this" variable bound to a fresh object and unless it explicitly returns another object value,  this will returned from the call
An object created with new is said to be an instance of its constructor.

It is a convention to capitalize the names of constructors so that they are easily distinguished from other functions.

    function Rabbit ( type ) {
        this . type = type ;
    }
    var killerRabbit = new Rabbit (" killer ") ;
    var blackRabbit = new Rabbit (" black ") ;
    console . log ( blackRabbit . type ) ; // → black 
    console.log(killerRabbit); // {type: " Killer "}

    Constructors automatically get a Property named prototype -- holds Pain and Empty Object derived from Object.prototype.

    Create Proptotype ::
        Rabbit.prototype.speak = function(sound){
            console.log("The "+ this.type +" Rabbit speaks", sound);
        }
        killerRabbit.speak("Ayyayyo how"); // The Killer Rabbit Speaks Ayyayyo how


Using a variable name starting with an underscore (_) or consisting entirely of a single underscore is a way to indicate (to human readers) that this argument is not going to be used.

Ex: 
function colWidths ( rows ) {
    return rows [0]. map ( function (_ , i ) { // argument is not in Use
        return rows . reduce ( function ( max , row ) {
            return Math . max ( max , row [ i ]. minWidth () ) ;
        }, 0) ;
    }) ;
}

=============================================================================================================================================
// Function Statement Allocates Memory but not executes 
function greet(name){
	console.log("Hello "+ name);
}
greet("Function Statement"); // Hello Function Statement

// variables are initially assigned "undefined" in CREATION PHASE of EXECUTION CONTEXT

console.log( greetFunc ); // undefined ... This is Hoisting

// Not Put into Memory but Executes while Execution Context
var greetFunc = function(name){
	console.log("Hello ", name);
}
greetFunc("Function Expression"); // Hello  Function Expression

// Immediatly Invoked Function Expression --- Executes function in CRAETION PHASE
var greeting = function(name) {
	return name;
}("IIFE"); // Assigning ("IIFE") for Execution context 

console.log(greeting); // IIFE
console.log(greeting()); // TypeError: greeting is not a function 
/***********************************/
function buildFunctions(){
	var arr = [];
  
    for( var i=0; i<3; i++){
        arr.push( (function(im){
                    return function() { console.log(im); }
                }(i))
        );
        /*arr.push( (function(im){
                     console.log(im); 
                }(i)) // automatically Invoked
        );*/
    }
  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();


*****************************************   
 new is an Operator (Precedence order 18)  ||  new creates an empty object
 Putting a new operator Infront of a function sets "this" to brand new Empty Object  //
    var person = new Person(); // 
Function Constructor:
    a Normal function i.e., used to construct objects.
    The this varible set to {} and that object is returned  from the function automatically.

    Setting Prototype:
    Prototype is used only by the "new" operator. When Function constructor is created .
    Better to use functions on prototype. it can be available to all objects created later.
-------------------------------
Danger Using NEW  & functions :
-------------------------------
    If You forgot to put "new" keyword It executes the function but undefined objects.

You should not use for..in for arrays .. it can look into prototype. use for loop only.

PURE PROTOTYPEAL INHERITANCE:

    Object.create(object);  
You can Override the peroperties and functions of the object by using this 

You can mutate object along the way
This supports only new Browesers.
To make this support older Browesers WE use POLYFILL:

POLYFILL: Code that adds a feature which the engine may lack.
---------

if(!Object.create){ // Check Brower supports Object.create
    Object.create = function(o){
        
        if(arguments.lenght > 1)
            throw new Error('Object.create implementation only accepts the first parameter');
        
        // Create new Constructor Function and set prototype
        function F() {} // creating empty 
        F.prototype = o; // assing object to prototype
        return new F(); // new creates empty object and calls the F() and returns empty object with prototype.
    }
} 
Function Constructor and Object.create do the same thing 

Syntactic Sugar: 
 a Different way to type something that doesnt change how it works under the hood.

----------
FUNCTIONS:
----------
    function an instance of a fun. Object
    Inherit from Function.prototype

    function statement are hoisted
        var foo = function(){}
    will be 
        var foo = undefined;
        foo = function(){};

    if there is no expression for return it will return undefined;
        return; // undefined
    
    When a function is called in the function form, THIS isset to the global Object.
        An inner function does nt get access to the outer this by making that = this
        var that = this;
    Function called in 4 forms:

    Function Form:
        sumFun();
    Methods Form:
        obj.sumFun();
    Constructor Form:
        new SumFun();
    Apply Form: 
        .apply()
        .call()
    
===> Lexical Scoping/Static Scoping/ Closure/ nested Functions / firstClassFunctions
