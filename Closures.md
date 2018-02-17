### Closures
@@@ Referrence Links:
    https://medium.com/code-monkey/understanding-closures-in-javascript-f20821df492d



### What is Closure:
    Closure is the function defined inside another function which has the access to the outer functions variables.
=>  A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.


### How Closures Works :
    ```js
    
    function creature(name){

        var myName = name; // private Variable

        function getName(){ // creating Closure here
            return myName;
        }

        return getName();
    }

    var rat = creature('Rat');
    console.log(rat)

    // the closure provides references to the actual variables and not just static values.
    ```
### Why Closures:
    ```js
    ### 1. Private Variables and Methods
        Our creature() is an example of a common use case for closures: to create private variables and/or functions. The only outside access to the myName variable is through the getName() and setName() methods. This helps to avoid variable name clashes and encourages good object-oriented design.

    ### 2. Event Handlers and Callbacks
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
    ### 3. Stateful functions
        Stateful functions are functions that store state and return a function that depends on the internal state. 
        
        Consider this example.
        // this is my preferred syntax, but some people get confused
        const multiplier = multiple => value => value * multiple
        
        // it can also be written this way:
        function multiplier(multiple) {
            return value => multiple * value;
        }
        const doubler = multiplier(2);
        doubler(2); // returns 4
        doubler(10); // returns 20;

    ### 4. Currying
        Currying is often used to transform a function that takes multiple parameters into one that takes fewer parameters.

        As an example, suppose we have a function to add two variables.

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



