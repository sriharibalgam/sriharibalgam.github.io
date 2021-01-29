
## Promises
*Def:* A Promise is an object may produce a single value sometime in the future. Either a *Resolved* or a Reason that it's not resolved i.e *Rejected*

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

Supported in ES6

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

    ````js
    var promise = new Promise(function(resolve, reject) {
            if(true){
                resolve('Resolved');
            } else {
                console.log('Rejected');
            }
        });
    // Execute Promise
        promise
            .then(function(data){
                console.log(data); // foo
            })
            .catch(function(err){
                console.log(err)
            })
        console.log(promise); // expected output: Resolved
        /*Promise {<resolved>: "Resolved"}
        __proto__: Promise
        [[PromiseStatus]]: "resolved"
        [[PromiseValue]]: "Resolved" */
    ````

    
