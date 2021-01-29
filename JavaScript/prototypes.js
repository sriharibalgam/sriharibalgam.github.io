/****
 ProtoType:@@Useful Links
 || https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript ||
 //https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a
 [https://www.thatjsdude.com/interview/js2.html]
 ----------
        Object properties and methods can be shared through generalized objects that have the ability to be cloned and extended.
    
    Diff b/w Classical Inheritance and Prototypal Inheritance:

    Classical Inheritance:  An Instance inherit form the BluePrint(class) and creates 
        In class inheritance, instances inherit from a blueprint (the class), and create sub-class relationships. In other words, you can’t use the class like you would use an instance. You can’t invoke instance methods on a class definition itself. You must first create an instance and then invoke methods on that instance.

    Prototypal Inheritance: An Instance inherit from other instance. |  It's literally Objects Linking to Other Objects, or OLOO, 
        - is simply copying properties of one object into another object.
        - 


    Adding :
    -------
    FunctionName.prototype.propertyName = "Something";
    FunctionName.prototype.methodName = function(){};

    View Prototype:
    ---------------
    Object.isPrototypeOf(methodName);

    Delete Prototype:
    -----------------
      delete Object.prototype.propertyName ;


    Constructor Functions:
    ----------------------
        Constructor functions are functions that are used to construct new objects. 
        The new operator is used to create new instances based off a constructor function.


        Closure: Conseqence of functions that can nest functions that has first clss value.
          Inner function includes the scope of the outer function, even after outer function has returned. 
          
          
**********/
/***********************************************
There are three primary methods for inheritance in Javascript. 
    1. prototype delegation, is the method we used to mimic class inheritance.
    2. concatenative inheritance
    3. functional inheritance.
**************************************************************/


//This is a parent class.
var parent = {
    sayHi: function () {
        alert('Hi, I am parent!');
    },
    sayHiToWalk: function () {
        alert('Hi, I am parent! and going to walk!');
    }
};

//This is child class and the parent class is inherited in the child class.
var child = Object.create(parent);

child.sayHi = function () { // override
    alert('Hi, I am a child!');
};

var Person = function(name) {
    this.name = name;
    this.canTalk = true;
  };
  
  Person.prototype.greet = function() {
    if (this.canTalk) {
      console.log('Hi, I am ' + this.name);
    }
  };
  
  var Employee = function(name, title) {
    Person.call(this, name);
    this.title = title;
  };
  
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  Employee.prototype.greet = function() {
    if (this.canTalk) {
      console.log('Hi, I am ' + this.name + ', the ' + this.title);
    }
  };
  
  var Customer = function(name) {
    Person.call(this, name);
  };
  
  Customer.prototype = Object.create(Person.prototype);
  Customer.prototype.constructor = Customer;
  
  var Mime = function(name) {
    Person.call(this, name);
    this.canTalk = false;
  };
  
  Mime.prototype = Object.create(Person.prototype);
  Mime.prototype.constructor = Mime;
  
  var bob = new Employee('Bob', 'Builder');
  var joe = new Customer('Joe');
  var rg = new Employee('Red Green', 'Handyman');
  var mike = new Customer('Mike');
  var mime = new Mime('Mime');
  
  bob.greet();
  // Hi, I am Bob, the Builder
  
  joe.greet();
  // Hi, I am Joe
  
  rg.greet();
  // Hi, I am Red Green, the Handyman
  
  mike.greet();
  // Hi, I am Mike
  
  mime.greet();
