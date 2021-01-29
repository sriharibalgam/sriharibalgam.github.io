
#### Function composition
 FC is the process of combining two or more functions to produce a new function.
 Composing functions together is like snapping together a series of pipes for our data to flow through.

 ### Object Composition 
    OC Assembling or composing objects to get more complex behavior.

[https://www.toptal.com/javascript#hiring-guide]
[https://www.code-sample.com/2015/04/javascript-interview-questions-answers.html]
[https://stackoverflow.com/questions/27642239/what-is-polymorphism-in-javascript](Polymerphism)
[http://www.zipcon.net/~swhite/docs/computers/languages/object_oriented_JS/methods.html](Constructor & Encaptulation)
[https://mindmajix.com/javascript-interview-questions] Concepts
[http://www.techbeamers.com/javascript-interview-questions-answers/#q30] (30 Questions)

#### Prototype &  Inheritance
* Explain the difference between classical inheritance and prototypal inheritance.
* Describe inheritance and the prototype chain in JavaScript. Give an example.
* Compare and contrast objects and hashtables in JavaScript.
* **Describe the different ways of creating objects and the ramifications of each. Provide examples.
* Give an example of a time that you used Prototypal OO in JavaScript.
* How do you define a class and its constructor?
* What is function overloading in JavaScript?
* What is Prototype and When is it Used?

* What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
* Explain closures in JavaScript. What are they? What are some of their unique features? How and why might you want to use them? Provide an example.



What is Object in JavaScript?
What is the Prototype object in JavaScript and how it is used?
What is "this"? What is its value?	
Explain why "self" is needed instead of "this".
Explain how to write class methods vs. instance methods.

Can you explain the difference between call and apply?
Explain why Asynchronous code is important in JavaScript?
Can you please tell me a story about a JavaScript performance problems?
Tell me your JavaScript Naming Convention?

What is Hoisted in JavaScript?	
What is scope variable in JavaScript?
What is Associative Arrays in JavaScript?
What are two-way data binding and one-way data flow, and how are they different?


 


How To Create the Namespace in JavaScript?
What Is Difference Between Undefined and Object?
How To Convert a string to Lowercase?
How To modify the URL of page without reloading the page?
How To open URL in new tab in JavaScript?

OOPS JS

Difference between Classic Inheritance and Prototypical Inheritance
    What is difference between private variable, public variable and static variable? How we achieve this in JS?
    How to add/remove properties to object in run time?
    How to achieve inheritance ?
    How to extend built-in objects?
    Why extending array is bad idea?
    DOM and JS

Difference between browser detection and feature detection
    DOM Event Propagation
    Event Delegation
    Event bubbling V/s Event Capturing

#OOJS:

* What is the Prototype object in JavaScript and how it is used?

1.Closure
	While you create the JavaScript function within another function and the inner function freely access all the variable of outer function
	EX:
	function showName (firstName, lastName) {
		​var nameIntro = "Your name is ";
			// this inner function has access to the outer function's variables, including the parameter​
		​function makeFullName () {        
			​return nameIntro + firstName + " " + lastName;
		}
		​
		​return makeFullName ();
	}
	showName ("Michael", "Jackson"); // Your name is Michael Jackson

2.use strict
	To identify the wrong syntax and also make the code more secure
	
3.Scope in javascript -> All Global & local variables are act as scope only.
	
3.call() , apply() and bind() in JavaScript
	you can use call()/apply() to invoke the function immediately. bind() returns a bound function that, when executed later, will have the correct context ("this") for calling the original function. So bind() can be used when the function needs to be called later in certain events when it's useful.
	Ex;-call
	var obj = {name:"Niladri"};
	var greeting = function(a,b,c){
		return "welcome "+this.name+" to "+a+" "+b+" in "+c;
	};
	console.log(greeting.call(obj,"Newtown","KOLKATA","WB")); // returns output as welcome Niladri to Newtown KOLKATA in WB
	
	The only difference of apply() with the call() method is that the second parameter of the apply() method accepts the arguments to the actual function as an array.
	EX:-Apply
	var obj = {name:"Niladri"};
	var greeting = function(a,b,c){
		return "welcome "+this.name+" to "+a+" "+b+" in "+c;
	};
	// array of arguments to the actual function
	var args = ["Newtown","KOLKATA","WB"];  
	console.log(greeting.apply(obj,args));
	
4.localStorage,sessionStorage
	window.localStorage - stores data with no expiration date
	window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)
	if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
	} else {
		// Sorry! No Web Storage support..
	}
	EX:-Local
	localStorage.setItem("lastname", "Smith"); //Store
	localStorage.lastname = "Smith"; //Store
	
	localStorage.getItem("lastname");// Retrieve
	localStorage.lastname; //Retrieve
	
	localStorage.removeItem("lastname"); //Destroy 
5.event delegation
	addEventListener
	EX:
	<ul id="parent-list">
		<li id="post-1">Item 1</li>
		<li id="post-2">Item 2</li>
		<li id="post-3">Item 3</li>
		<li id="post-4">Item 4</li>
		<li id="post-5">Item 5</li>
		<li id="post-6">Item 6</li>
	</ul>
	document.getElementById("parent-list").addEventListener("click", function(e) {
		// e.target is the clicked element!
		// If it was a list item
		if(e.target && e.target.nodeName == "LI") {
			// List item found!  Output the ID!
			console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
		}
	});
	$( "#parent-list li" ).on( "click", function( event ) {
		event.preventDefault();
		console.log( $( this ).text() );
	});
6.Synchronous,Asynchronous
	Synchronous way: It waits for each operation to complete, after that only it executes the next operation. For your query: The console.log() command will not be executed until & unless the query has finished executing to get all the result from Database.
	EX:
	var result = database.query("SELECT * FROM hugetable");
	console.log("Query finished");
	console.log("Next line");
	//Query finished
	//Next line
	Asynchronous way: It never waits for each operation to complete, rather it executes all operations in the first GO only. The result of each operation will be handled once the result is available. For your query: The console.log() command will be executed soon after the Database.Query() method. While the Database query runs in the background and loads the result once it is finished retrieving the data.
	EX:
	database.query("SELECT * FROM hugetable", function(result) {
		console.log("Query finished");
	});
	console.log("Next line");
	//Next line
	//Query finished
7.Some of the most important CSS3 modules are
	Selectors
	Rounded Corners
	Text Shadow
	Box Model
	Backgrounds and Borders
	Image Values and Replaced Content
	Text Effects
	2D/3D Transformations
	Animations
	Multiple Column Layout
	User Interface
	
8.block-level element always starts on a new line and takes up the full width available
	<div>
	<h1> - <h6>
	<p>
	<form>
9.An inline element does not start on a new line and only takes up as much width as necessary
	<span>
	<a>
	<img>
10.inline-block elements are like inline elements but they can have a width and a height.
11.position:absolute -> If you want place child DIV element over parent DIV element and it will move with browser screen.
	EX:
	<div class="relative"></div>
	<div class="absolute"></div>
	div.relative {
		position: relative;
		width: 400px;
		height: 200px;
		border: 3px solid #73AD21;
	} 

	div.absolute {
		position: absolute;
		top: 80px;
		right: 0;
		width: 200px;
		height: 100px;
		border: 3px solid #73AD21;
	}
12.@media screen and (min-width: 480px) {
		body {
			background-color: lightgreen;
		}
	}
	@media (min-width: 480px) and (max-width: 768px) {
		body {
			background-color: lightgreen;
		}
	}
13. Boxmodel : Content -> Padding -> Border -> Margin
14. Find boxmodel full width-> box-sizing: content-box;
15. Find boxmodel full width without padding,border,margin-> box-sizing: border-box;
16. css preprocessor -> SASS,LESS
	i).Variables
		Variables were all time wanted feature for CSS. Every developer, wanted to define a base color and use it all over the CSS file.
		SASS:
		$font-size: 16px;
		div {
			font-size: $font-size;
		}
		LESS:
		@font-size: 16px;

		div {
			font-size: @font-size;
		}
	ii).Nesting
		CSS lacks visual hierarchy while working with child selectors. You have to write selectors and their combinations in separate lines. Nesting provides a visual hierarchy as in the HTML and increases the readability. 
		SASS:
		$link-color: #999;
		$link-hover: #229ed3;

		ul {
			margin: 0;

			li {
				float: left;
			}

			a {
				color: $link-color;

				&:hover {
					color: $link-hover;
				}
			}
		}
		LESS:
		@link-color: #999;
		@link-hover: #229ed3;

		ul {
			margin: 0;

			li {
				float: left;
			}

			a {
				color: @link-color;

				&:hover {
					color: @link-hover;
				}
			}
		}
	iii).Mixins
	iv).Extends
		SASS:
		SASS extends every instance of extended selector that includes its child selectors and inherited properties. 
		EX:
		.block { margin: 10px 5px; }

		p {
		  @extend .block;
		  border: 1px solid #eee;
		}
	v).If/Else Statements
		SASS:
		Control directives and expressions help to build similar style definitions according to matched conditions or variables. SASS and Stylus support normal if/else conditionals
		EX:
		@if lightness($color) > 30% {
			background-color: black;
		}

		@else {
			background-color: white;
		}
	vi).Loops , Math
	vii).Imports
		@import "library";
		@import "mixins/mixin.scss";
		@import "reset.css";
17.	Arrays methods in JS
	i).pop()-> The pop() method removes the last element from an array
	EX:
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.pop();              //Banana,Orange,Apple
	ii).push()-> The push() method adds a new element to an array (at the end)
	EX:
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.push("Kiwi");  		//Banana,Orange,Apple,Mango,Kiwi
	iii).shift()-> Shifting is equivalent to popping, removes the first element.
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.shift(); 	//Orange,Apple,Mango
	iv).unshift() -> The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
	EX:
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.unshift("Lemon"); //Lemon,Banana,Orange,Apple,Mango
	v).delete -> Using delete may leave undefined holes in the array. Use pop() or shift() instead.
	EX:
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	delete fruits[0]; 
	vi).splice() -> The splice() method can be used to add new items to an array
	EX:
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(2, 0, "Lemon", "Kiwi"); //Banana,Orange,Lemon,Kiwi,Apple,Mango
	vii).splice() -> you can use splice() to remove elements without leaving "holes" in the array
	EX:
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits.splice(0, 1); //Orange,Apple,Mango
	viii).concat() ->  The concat() method creates a new array by merging (concatenating) existing arrays
	EX-1:
	var myGirls = ["Cecilie", "Lone"];
	var myBoys = ["Emil", "Tobias","Linus"];
	var myChildren = myGirls.concat(myBoys);  // Cecilie,Lone,Emil,Tobias,Linus
	EX-2:
	var arr1 = ["Cecilie", "Lone"];
	var arr2 = ["Emil", "Tobias","Linus"];
	var arr3 = ["Robin", "Morgan"];
	var myChildren = arr1.concat(arr2, arr3); //Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan
18.hoisted in javascript
	In the JavaScript, the variables can be used before declared, this kinds of mechanism is called Hoisted. It's a default behavior of JavaScript.
	EX:
	//The variable declaration look like.
	var emp;
	//The variable initialization look like.
	emp = "Anil Singh";
	var emp; //The declaration of emp is hoisted but the value of emp is  undefined.
	emp = 10; //The Assignment still occurs where we intended (The value of emp is 10)
	function getEmp() {
		var emp; //The declaration of a different variable name emp is hoisted but the value of emp is  undefined.

		console.log(emp); //The output is undefined
		emp = 20; //The assignment values is 20.
		console.log(emp); //The output is 20.
	}
	getEmp();
	console.log(emp); //The variable named emp in the outer scope still contains 10.
GIT:
	1.git init	//Create a new local repository
	2.git clone /path/to/repository	//Check out a repository
	3.git add *	//Add files
	4.git commit -m "Commit message"	//Commit
	5.git push origin master	//Push
	6.git status // Status
	7.git checkout -b <branchname>	//Create a new branch and switch to it
	8.git checkout <branchname>	//Switch from one branch to another
	9.git branch	//List all the branches in your repo
	10.git branch -d <branchname>	// Delete the feature branch
	11.git merge <branchname>	//To merge a different branch into your active branch:
	
1.AngularJS Directives -> ng-app,ng-init,ng-model
2.document.getElementById(“myText”).style.fontSize = "20px";
3.Void(0) is used to call another method without refreshing the page.
4.What are the different types of errors in JavaScript
	Load time errors: Errors which come up when loading a web page like improper syntax errors are known as Load time errors and it generates the errors dynamically.
	Run time errors: Errors that come due to misuse of the command inside the HTML language.
	Logical Errors: These are the errors that occur due to the bad logic performed on a function which is having different operation.
5.The navigator.appVersion string can be used to detect the operating system on the client machine.
6.AngularJS Form Validation
	$untouched //The field has not been touched yet
	$touched //The field has been touched
	$pristine //The field has not been modified yet
	$dirty //The field has been modified
	$invalid //The field content is not valid
	$valid //The field content is valid

7.Promise in angularjs
	Using promises and $q to handle asynchronous calls.A number of Angular services return promises: $http, $interval, $timeout, for example. All promise returns are single objects
	EX:
	// this
	$http.get('/api/v1/movies/avengers')
	  .success(function(data, status, headers, config) {
		 $scope.movieContent = data;
	});

	// is the same as
	var promise = $http.get('/api/v1/movies/avengers');

	promise.then(
	  function(payload) {
		$scope.movieContent = payload.data;
	});
8. $scope-> It can be used for communication between view and controller.
9.$rootscope->Using rootscope we can set the value in one controller and read it from the other controller.Rootscope is the top-level data container in AngularJs
10.Routing -> The$routeProvider definition contained by the module is called "ngRoute". In app.js file, I have defined an angular app using “angular. Module” method. After creating module, we need to configure the routes. The "config" method is used to configure $routeProvider. Using "when" and "otherwise" method of $routeProvider, we can define the route for our AngularJS application.
	EX:
	var app = angular.module("AngularApp", ['ngRoute']);  
	app.config(['$routeProvider',  
		function($routeProvider)  
		{  
			$routeProvider.  
			when('/page1',   
				 {  
					templateUrl: 'Modules/Page1/page1.html',  
					controller: 'Page1Controller'  
				})  
				.  
			when('/page2',   
				 {  
					templateUrl: 'Modules/Page2/page2.html',  
					controller: 'Page2Controller'  
				})  
				.  
			otherwise  
			({  
				redirectTo: '/page1'  
			});  
		}  
	]); 
11. What Are The Security Features Provided By AngularJS
	It prevents cross-site scripting attacks: Cross-site scripting is a technique where anyone can send a request from client side and can get the confidential information easily.
	It prevents HTML injection attacks.
	It prevents XSRF protection for server-side communication: It can be handled by “Auth token” mechanism. When the user logins for the first time a user id and password is sent to the server and it will, in turn, return an auth token. Now, this token does the authentication in the future transactions.
12.Following are the most critical web application development flaws that a developer should take care of	
	Injection attack.
	Broken Authentication and Session Management.
	Cross-Site Scripting (XSS)
	Insecure direct object references.
	Security Misconfiguration.
	Sensitive Data Exposure.
	Missing Function Level Access Control.
	Cross-Site Request Forgery (CSRF).
	Using components that possess vulnerabilities.
	In-validated redirects and forwards.
13.Compile in custon directives  –> It looks into the entire DOM and collects all of the directives. The result is a linking function
14.Explain AngularJS Application Life-Cycle ->Apps life cycle consists of following three phases- bootstrap, compilation, and runtime.
	The Bootstrap Phase – In this phase, the browser downloads the AngularJS javascript library. After this, AngularJS initializes its necessary components and the modules to which the ng-app directive points. Now that the module has loaded, required dependencies are injected into it and become available to the code within that module.
	The Compilation Phase – The second phase of the AngularJS life cycle is the HTML compilation stage. Initially, when a web page loads in the browser, a static form of the DOM gets loaded. During the compilation phase, this static DOM gets replaced with a dynamic DOM which represents the app view. There are two main steps – first, is traversing the static DOM and collecting all the directives. These directives are now linked to the appropriate JavaScript functionality which lies either in the AngularJS built-in library or custom directive code. The combination of directives and the scope, produce the dynamic or live view.
	The Runtime Data Binding Phase – This is the final phase of the AngularJS application. It remains until the user reloads or navigates to a different web page. At this point, any changes in the scope get reflected in the view, and any changes in the view are directly updated in the scope, making the scope the single source of data for the view.
15.	manual bootstrap process 
    EX: angular.element(document).ready(function () { angular.bootstrap(document, ['myApp']); });
	
16.Singletons -> AngularJS Services are Always Singletons
	It's important to note that AngularJS services are always singletons. 
	This means that, once AngularJS constructs a service object, the same instance is reused throughout your app. 
	There are never ever two service instances. This makes them great candidates to share application data across multiple components. For example, after a successful login, you'll need to store the login status where the status can be retrieved in all other components. In this scenario, you can store the status in a service and then, whenever you need to read the value, you can just inject it into your controller/service and check it.



Well, Im Srihari Balgam    
Making websites then I have to work on various technologies e-comerece, 

In angular we have developed 

So far this is 
So far my carrier is satisfactory.
Last 4 years I have worked for Startups. Now I want 
I got chances to explore all ares of technologies. 

I want to work with the company 
