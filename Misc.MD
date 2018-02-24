
#### Arguments:

* The `arguments` object is an Array-like object corresponding to the arguments passed to a function.
* arguments Object not available for => arrow functions.
* The arguments object is not an Array. It does not have any Array properties except length.
* console.log(typeof arguments); // 'object'

The array functions can be called on non-array objects as long as you know where to find the function (usually they’re attached to the array, but this isn’t an array remember 

### What is array Like Object
    An object which has a length property is called as ArrayLike object.

````js
    function printArgs(a, b, c) {
        // ES5
        var args = Array.prototype.slice.call(arguments);
        // args = [].slice.call(arguments);
        
        // ES2015 || ES6
        const argsES5 = Array.from(arguments);
        
        // Print Argm
        console.log(arguments["2"], args, argsES5)
    }

    printArgs(1, { a: "ra"}, 3);
````

It doesnt affected with default parameters 

function withDefaults(a = 50){
    console.log(arguments[0]); // prints 20 not 50
}
withDefaults(20); 

######  Convesions 

    Array to 


///////////////////////////////////////////////////////////////////////////