
Module:
    Module is code block
    
### Module Properties:
    is an Object
    Module {
                id: '.',
                exports: {},
                parent: null,
                filename: 'filePath',
                loaded: false,
                children: [],
                paths: [ 'paths' ]
         }

## What Why How When NODE ?

How to deploy Node application

What is an error-first callback?
How can you avoid callback hells?
What are Promises?
What is Event Loop?
What is Event Emmitter?
What tools can be used to assure consistent style? Why is it important?
When should you npm and when yarn?
What's a stub? Name a use case!
What's a test pyramid? Give an example!
What's your favorite HTTP framework and why?
How can you secure your HTTP cookies against XSS attacks?
How can you make sure your dependencies are safe?
Which is your preferred way to write asynchronous code in Node
What is the difference between global installation of dependencies and local installation of dependencies?
What is REPL in context of Node?

--------
##Streams:
--------
What is stream and explain types of streams
Explain child processes in Node
Can we send/receive messages between child processes
What is purpose of Buffer class in Node?
What is Piping in Node?
Name some of the events fired by streams.
Which module is used for buffer based operations?           var buffer = require(“buffer”)
------------
##File System:
------------
Explain file system module of Node
How to scale Node application
Which module is used for file based operations?             var fs = require(“fs”)

##### Files
Which module is used for web based operations?              var http = require(“http”)
How will you read a file using Node?                        fs.read(fd, buffer, offset, length, position, callback)
How will you write a file using Node?                       fs.writeFile(filename, data[, options], callback)
How will you get information about a file using Node?       fs.stat(path, callback)
How will you truncate a file using Node?                    fs.ftruncate(fd, len, callback)
How will you delete a file using Node?                      fs.unlink(path, callback)
What is the purpose of __filename variable?                 

## Directories
How will you create a directory?                            fs.mkdir(path[, mode], callback)
How will you delete a directory?                            fs.rmdir(path, callback)
 How will you read a directory?                             fs.readdir(path, callback)
 What is the purpose of __dirname variable?


##### References
- https://mindmajix.com/node-js-interview-questions
- https://codeforgeek.com/2017/08/node-js-interview-questions-answers-updated/
- https://www.javatpoint.com/node-js-interview-questions