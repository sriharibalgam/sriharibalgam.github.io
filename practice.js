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



