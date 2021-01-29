AST: Abstract Syntax Tree ---(ESPrima tool || Acorna || ESTraverse || escodegen)


const :
    const a; // declaration of CONST produce SyntaxError: Missing initializer in const declaration
    const variable must be defined. (declaration of const a; will produce error)
    const doesn’t hoist the variable to the top of the block

    console.log(a);
    const a = 10;

let: 
    let doesn’t hoist the variable to the top of the block
    console.log(a); // will produce Reference Error
    let a = 10; 

Parameters: 
    Parameters (or formal parameters) are what’s given in the function declaration, // function func(a, b){}
Arguments:
    Arguments (or actual parameters) are what’s passed to the function. // func(10, 2);

The Function apply(): 
    The apply() method is a convenient tool for passing an array as arguments to a function. // Math.max.apply(Math, [10, 20,30]);

Spread operator:
    We can easily expand an expression into multiple arguments  
    The Math.max() method doesn’t support arrays; it accepts only numbers. 
    var myArray = [5, 10, 50];
    Math.max(...myArray);    // 50

Rest Parameters:
    The rest parameter has the same syntax as the spread operator, but instead of expanding an array into parameters,
    it collects parameters and turns them into an array.
        function myFunction(...options) {
            return options;
        }
        myFunction('a', 'b', 'c');      // ["a", "b", "c"]


