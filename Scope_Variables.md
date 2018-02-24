## SCOPE AND HOISTING

https://en.wikipedia.org/wiki/JavaScript_syntax#Function

The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated.

So, to answer your question, yes,  `let` and `const` hoist but you cannot access them before the actual declaration is evaluated at runtime.


`let` creates a new lexical environment and also binds fresh value rather than keeping an old reference.

An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:


console.log(isVarHoisted); // undefined
var isVarHoisted = "Yes Hoisted";

isFunctionHoisted(); // Yes, Declared Function Hoisted
function isFunctionHoisted(){
  console.log("Yes, Declared Function Hoisted");
}

var isConstructorHoisted = new IsConstructorHoisted(); // Yes Function Constructor Hoisted
console.log(isConstructorHoisted.isValueAccessed); // Yes, Accessed

function IsConstructorHoisted(){
  this.isValueAccessed = "Yes, Accessed";
  console.log("Yes Function Constructor Hoisted");
}

var isClassHoisted = new IsClassHoisted();
class IsClassHoisted {
  constructor(){
    this.name = "Srihari Balgam";
    console.log("Class is Not Hoisted");
  }
  
}

console.log(isConstHoisted); // ReferenceError: isConstHoisted is not defined
let isConstHoisted = "No";

console.log(isLetHoisted); // ReferenceError: isLetHoisted is not defined
let isLetHoisted = "No";

