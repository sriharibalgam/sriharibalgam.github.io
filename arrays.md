# Arrays in JavaScript


### Useful Links
```js
/*
https://egghead.io/lessons/javascript-transform-an-array-into-a-single-value-using-reduce?pl=learn-javascript-arrays-in-depth-dbe40331


*/

// How to Empty an Array 

//WE have 3 methods to Empty an array

var arrayList = [4,8,12,16,20,24,28,32,36,40];

// Method 1
using []

arrayList = []; console.log(arr); // []


//
Object.prototype.toString.call(arrayList); // prints '[object Array]'
if(Object.prototype.toString.call(arrayList) === '[object Array]') {
  console.log('Array!');
}

// splice() is the good way for delete element from array
// Delete with Array Works 
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3]; // sets undefined in trees[3] || 
console.log(trees); // (5) ["redwood", "bay", empty × 1, "maple"] || (5) ["redwood", "bay", undefined × 1, "maple"]
delete trees[2]; // sets undefined in trees[3]
console.log(trees); // (5) ["redwood", "bay", empty × 2, "maple"] || (5) ["redwood", "bay", undefined × 2, "maple"]

//When Using delete with array will not remove the element of an array it set element with undefined placeholder
