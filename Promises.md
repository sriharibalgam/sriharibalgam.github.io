
## Promises

Supported in ES6

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

    ````js
    var promise = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'foo');
        });

        promise.then(function(data){
            console.log(data); // foo
        })
        .catch(function(err){
            console.log(err)
        })
        console.log(promise);// expected output: [object Promise]
    ````

A Promise is in one of these states:

    * pending: initial state, neither fulfilled nor rejected.
    * fulfilled: meaning that the operation completed successfully.
    * rejected: meaning that the operation failed.

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.


#### Properties of Promise
    * Promise.length        - Length property whose value is always 1 (number of constructor arguments).
    * Promise.prototype     - Represents the prototype for the Promise constructor.
    * Promise.prototype.constructor

#### Methods of Promise

    * Promise.resolve(value)
    * Promise.reject(reason)
    * Promise.all(iterable)
    * Promise.race(iterable)
    
    * Promise.prototype.then(onFulfilled, onRejected)
    * Promise.prototype.catch(onRejected)
    * Promise.prototype.finally(onFinally)



    Marks :

    1st year    636     1000

    2-1         498     750
    2-2         435     750     -44     388
                                889
    3-1         482     750
    3-2         488     750
                                970
    4-1         500     750
    4-2         565     700     -43     522
                                1022


    