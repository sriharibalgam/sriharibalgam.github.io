### Understanding Closures

@@@ Referrence Links:
https://medium.com/code-monkey/understanding-closures-in-javascript-f20821df492d
http://javascriptissexy.com/understand-javascript-closures-with-ease/

### What is Closure:

    A Closure is a inner function which has the access to the outer function variables scope chain.
    Closure has access to 3 scopes
        Its own scope
        Outer Function Scope  | Outer function Parameters
        Global variable Scope

    Closures are used extensively in Node.js; they are workhorses in Node.js’ asynchronous, non-blocking architecture.

## Closures Rules

1.  Closures Have access to the outer function variables even after the outer function returned.

    ```js
    function getFullName(fname) {
      var salutation = "Your Full Name is: ";

      return function lastName(lname) {
        return salutation + fname + " " + lname;
      };
    }
    var name = getFullName("Srihari");
    name("Balgam");
    ```

2.  Closures Store References to the Outer Function's Variables. They do not store actual values they store referrences.

```js
        for(var i=0; i<5; i++){
                setTimeout(function(){
                    console.log(i); // which prints 55555. i is taking ref value
                }, 1000);
        }
```
    - This feature leads to bug when using with closure loops
    - To Overcome this we have IIFE function
```js
      for (var i = 0; i < 5; i++) {
        setTimeout(
          (function(j) {
            console.log(j); // which prints 12345.
          })(i),
          1000
        );
      }
```

### How Closures Works :

```js
    function creature(name){
        var myName = name; // private Variable
        function getName(){ // creating Closure here
            return myName;
        }
        return getName();
    }

    var rat = creature('Srihari Balgam');
    console.log(rat)
    // the closure provides references to the actual variables and not just static values.
```

### Why Closures:

#### 1. Private Variables and Methods

        Our creature() is an example of a common use case for closures: to create private variables and/or functions. The only outside access to the myName variable is through the getName() and setName() methods. This helps to avoid variable name clashes and encourages good object-oriented design.

#### 2. Event Handlers and Callbacks

```js
        var time = 1000;
        var message = 'Time is up!';

        function handleTimeout() { // a closure here allows this function
            console.log(message);    // to access global variable message
        }
        setTimeout(handleTimeout,time);
        ///////////////////////////////////////////////////////////
        var multiplier = 5;
        [0,1,2,3,4,5,6].map(element => (element * multiplier));
        ///////////////////////////////////////////////////////////
        var submitted = false;
        var handleSubmit = event => {
            submitted = true;
            // handle form submission here
        }
        ////////////////////////////////////
        var arr = [1,2,3,4,5,6,7,8,9,10];
        function multipleTable(arr){
            return function(tableEle){
                arr.map(function(i){
                console.log(tableEle, 'X', i, ' = ', tableEle * i);
                })
            }
        }
        var mulTable = multipleTable(arr);
        mulTable(8);
        mulTable(9);
```

#### 3. Stateful functions

- Stateful functions are functions that store state and return a function that depends on the internal state.

```js
// this is my preferred syntax, but some people get confused
const multiplier = multiple => value => value * multiple;

// it can also be written this way:
function multiplier(multiple) {
  return value => multiple * value;
}
const doubler = multiplier(2);
doubler(2); // returns 4
doubler(10); // returns 20;
```

#### 4. Currying

    Currying is often used to transform a function that takes multiple parameters into one that takes fewer parameters.
    As an example, suppose we have a function to add two variables.

```js
        function add(a, b) { return a + b; }
        add(2,3) // returns 5

        Using a closure lets us write this as

        function add(a){
            return function(){
                return a+b;
            }
        }

        const add = a => b => a + b;
        // or alternatively
        function add(a) {
            return (b) => a + b;
        }
        add(2)(3) // returns 5
        }
```
