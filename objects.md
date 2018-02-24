/*************************************
 * Objects and Operations on Objects *
 * https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/#problems-with-switch
 * 
 * 
 * Patterns for object creation in JS
 * 1 Constructor 
 * 2 Factory
 * 3 Prototype
 * 4 Dynamic Prototype
 
 ************************************/

####Creating an Object
    
   ````js
    //#1 Creating Object Using Constructor Object Constructor
    var constructorObject =  new Object();
    constructorObject.name = "Srihari Balgam";
    console.log(typeof constructorObject, constructorObject); // object | {name: "Srihari Balgam"}

    //#2 Using Object Literal  || Factory Pattern
    var objectLiteral =  {};
    objectLiteral.name = "Srihari Balgam";
    console.log(typeof objectLiteral, objectLiteral); // object | {name: "Srihari Balgam"}

    //#3 Create a new instance using Object prototype. || Prototype Pattern
    var newInstance = Object.create({});
    newInstance.name = "Srihari Balgam";

    console.log(typeof newInstance, newInstance); // object | {name: "Srihari Balgam"}

    //#4 Creating Object Using Class
    class ClassObject  {
        constructor(name) {
            this.name = name;
        }
    }

    var classObj = new ClassObject("Srihari Balgam");
    console.log( typeof classObj, classObj); // object | {name: "hello"}

    //#5 Using Singletop Pattern
    var singletonObj = new function(){
        this.name = "Srihari Balgam";
    }
    console.log(typeof singletonObj, singletonObj); // object | {name: "hello"}

    //#6 Using Factory Functions 
    function factoryObject (name, occ) {
        return {
            name: name,
            age: 26,
            occupation: occ || 'JavaScript Developer'
        };
    }
    var factoryFunctionObject = factoryObject('Srihari Balgam');
    var factoryFunctionObject = factoryObject('Vikram Billa', 'Project Manager');
    console.log(typeof factoryFunctionObject, factoryFunctionObject) // Object | {name: "Srihari Balgam", age: 26, …}
/* Assigning properties to Object */

//Type 1 :: DOT NOTATION
    obj.name = "Object";
    obj.base = "Javascript";

//type 2 ::  ARRAY NOTATION
    obj["name"] = "Object";
    obj["base"] = "Javascript";

/*** Accessing Object Properties ***/
    let obj = { name: "Srihari Balgam", age: 26 };
    console.log(obj.name) // Srihari Balgam
    // When accessing with Array notation You should provide key as String
    console.log(obj["age"]) // 26

/*** Deleting Properties ***/
    delete obj.name;
    delete obj["name"];
    // Delete Will not delete variables of local, global, parameters 
    // Delete only deletes object properties
    // Delete is not able to delete the prototyped Object property

    var Emp = { name: "Srihari" };
    var emp = Object.create(Emp); // this creates prototype and name will be in prototype
    console.log(emp); // prints empty obj with prototype:  {}__proto__: name: "Srihari"__proto__: Object
    delete emp.name;
    console.log(emp.name);

/** Length of Objecct */
    var obj = { name: "Javascript", version: "ES6/2015" };
    Object.keys(obj).length; // print 2

    // How it works
    var objToArray = Object.keys(obj); // This function return array of Keys prints ["name", "version"]
    var objLength = objToArray.length; // ["name", "version"].length
    console.log( objToArray ); // ["name", "version"]
    console.log(objLength);

/*** Merging  Two Objects  ***/
    let obj1 = { name: "Javascript", version: "ES6/2015" };
    let obj2 = { operation: "Merging Objects", using : "Object.assign() method" };

    Object.assign(obj, obj2); // New Method Introduced in ES6

/***  Check Property availability in Object ***/
    /*    
    Object has 2 types of properties 
    1. Own Properties 
    2. Inherited Properties || Every object inherits prototype of Object() constructor
    */
    let jsObject = { name: "Javascript", version: "ES6/2015" };
    // We have 2 methods to Check KEY exist in Object "in" operator and "hasOwnProperty()""
    
    // Check in Object's Own Properties and Inherited Properties
    console.log("name" in jsObject); // Prints true. jsObject has name property
    console.log("toString" in jsObject); // Prints true | jsObject inherites toString() method from Object.prototype.toString()​

    // Check in Object's Own Properties 
    console.log(jsObject.hasOwnProperty("name")); // Prints true | "name" is jsObject's Own property
    console.log(jsObject.hasOwnProperty("toString")); // Prints true | "toString" is not jsObject's Own property.  
    


    let jsObject = { name: "Javascript", version: "ES6/2015" };
    ​
    ​delete jsObject.toString; // returns true, but toString not deleted because it is an inherited method​
    ​
    ​// Here we call the toString method and it works just fine—wasn’t deleted ​
    jsObject.toString(); //"[object Object]"​
    ​
    ​// You can delete a property of an instance if the property is an own property of that instance. For example, we can delete the educationLevel property from the school's object we created above because the educationLevel property is defined on the instance: we used the "this" keyword to define the property when we declare the HigherLearning function. We did not define the educationLevel property on the HigherLearning function's prototype.​
    ​
    console.log(school.hasOwnProperty("educationLevel")); true​
    ​// educationLevel is an own property on school, so we can delete it​
    ​delete school.educationLevel; true 
    ​
    ​// The educationLevel property was deleted from the school instance​
    console.log(school.educationLevel); undefined
    ​
    ​// But the educationLevel property is still on the HigherLearning function​
    ​var newSchool = new HigherLearning ();
    console.log(newSchool.educationLevel); // University​
    ​
    ​// If we had defined a property on the HigherLearning function's prototype, such as this educationLevel2 property:​
    HigherLearning.prototype.educationLevel2 = "University 2";
    ​
    ​// Then the educationLevel2 property on the instances of HigherLearning would not be own property. ​
    ​
    ​// The educationLevel2 property is not an own property on the school instance​
    console.log(school.hasOwnProperty("educationLevel2")); false​
    console.log(school.educationLevel2); // University 2​
    ​
    ​// Let's try to delete the inherited educationLevel2 property​
    ​delete school.educationLevel2; //true (always returns true, as noted earlier)
    ​
    ​// The inherited educationLevel2 property was not deleted​
    console.log(school.educationLevel2);// University 2​    

//Object


var obj = {
    name:	"srihari",
    age:	26,
    arr:	[1, 2, 5, 8],
    junior:	"Akhil",
    senior:	"Rudhra",
  	sayHi: function(){
    	console.log("Hi Im Method");
    },
  	addition: function(a,b){
      	return a+b;
    }
}

// Adding Properties to obj
obj.junior = "Akhil"; // dot notation
obj["senior"] = "Rudhra"; // [] notation

// adding Methods to obj
obj.addingNewMethod =  function(){
  	return this.name +" "+ this.junior +" "+this.senior;
}
console.log("addition:", obj.addition(2,2));

// length of obj
var objToArr = Object.keys(obj).length; // Object converted into Array
console.log("Length of Obj", objToArr)

for( index in obj){
  console.log(index, obj[index]);
}
// Check the property Existance in obj
//1 in operator --- Loops over all properties of object and inherited properties
// 2 hasOwnProperty() method 


console.log(obj.hasOwnProperty("name"));


var obj = Object.create(null); // 1
var obj1 = new Object(); // 2
var obj2 = {}; //3

console.log(obj == obj1, obj === obj1); 
console.log(obj == obj2, obj === obj2);
console.log(obj1 == obj2, obj1 === obj2);
