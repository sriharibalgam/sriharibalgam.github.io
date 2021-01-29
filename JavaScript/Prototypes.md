### ProtoTypes

#### What is Prototype



Object properties and methods can be shared through generalized objects that have the ability to be cloned and extended.

* **Diff b/w Classical Inheritance and Prototypal Inheritance:**

    **Classical Inheritance:**  An Instance inherit form the BluePrint(class) and creates
        In class inheritance, instances inherit from a blueprint (the class), and create sub-class relationships. In other words, you can’t use the class like you would use an instance. You can’t invoke instance methods on a class definition itself. You must first create an instance and then invoke methods on that instance.

    **Prototypal Inheritance:** An Instance inherit from other instance. |  It's literally Objects Linking to Other Objects, or OLOO,
        - is simply copying properties of one object into another object.


*    Adding :
    `FunctionName.prototype.propertyName = "Something";`
    `FunctionName.prototype.methodName = function(){};`

*    View Prototype:
    `Object.isPrototypeOf(methodName);`

*    Delete Prototype:
        `delete Object.prototype.propertyName;`


*    Constructor Functions:
        Constructor functions are functions that are used to construct new objects.
        The new operator is used to create new instances based off a constructor function.

There are three primary methods for inheritance in Javascript.

1. prototype delegation, is the method we used to mimic class inheritance.
2. concatenative inheritance
3. functional inheritance.

#### Why Prototype



##### References:@@Useful Links

- https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript
- https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a
