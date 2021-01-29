### EVENTS

Events are actions that happen in the system 
System Fire a signal of some kind of action 

#### Event Handler
    Event handler is a block of code that will be run when event fires.


<button>Change color</button>
````js
var btn = document.querySelector('button');
    btn.onclick =  function(){
        alert("You Clicked me");
    }
````

## Ways of using web events

Event handler properties
addEventListener('eventName', function(event){}, true||false) and removeEventListener()
Event Object

preventDefault();

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}

### Event bubbling and capture
Event bubbling and capture are two mechanisms that describe what happens when two handlers of the same event type are activated on one element.

Clicking Video clicks video and its contained div

### In the capturing phase:

The browser checks to see if the element's outer-most ancestor (<html>) has an onclick event handler registered on it in the capturing phase, and runs it if so.
Then it moves on to the next element inside <html> and does the same thing, then the next one, and so on until it reaches the element that was actually clicked on.

### In the bubbling phase, the exact opposite occurs:

The browser checks to see if the element that was actually clicked on has an onclick event handler registered on it in the bubbling phase, and runs it if so.
Then it moves on to the next immediate ancestor element and does the same thing, then the next one, and so on until it reaches the <html> element.

###### By default, all event handlers are registered in the BUBBLING PHASE.
If you really want to register an event in the capturing phase instead, you can do so by registering your handler using addEventListener(), and setting the optional third property to `true`.

###### to make event handler to capturing phase
    addEventListener('eventName', function(e){}, true); // setting 3rd arg to true will make it capture bydefault its false

### Event delegation

Bubbling also allows us to take advantage of `event delegation` — this concept relies on the fact that if you want some code to run when you click on any one of a large number of child elements, you can set the event listener on their parent and have the effect of the event listener bubble to each child, rather than having to set the event listener on every child individually.



stopPropagation()  --- Used to Stop event bubbling 