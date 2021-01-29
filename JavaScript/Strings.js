/**** 
String:
    A string is a sequence of one or more characters that may consist of letters, numbers, or symbols.

Creating and Viewing the Output of Strings
    In JavaScript, there are three ways to write a string — 
        single quotes (' '), 
        double quotes (" "),
        backticks (` `).



*/

// Creating String 
var strSingleQuotes = 'This string uses single quotes.';
var strDoubleQuotes = "This string uses double quotes.";

//The third and newest way to create a string is called a template literal.
var strWithBackTick = `This is a backtick string. Called as Template Literal- ES6`;

//Variables in Strings with Template Literals
//One special feature of the template literal feature is the ability to include expressions and variables within a string. Instead of having to use concatenation, we can use the ${} syntax to insert a variable.

var templatingConcatination = `This Concats ${strSingleQuotes} and ${strDoubleQuotes}`;

//Escaping Quotes and Apostrophes in Strings
/*
    Opposite string syntax
    Escape characters
    Template literals
*/
var OppositeStr = " India's Capital is Delhi";
var OppositeStr = ' "Hyderabad" is my location ';
//The syntax of \' will always be a single quote, and the syntax of \" will always be a double quote, without any fear of breaking the string.
var usingBackslash = " I\'m Srihari Balgam "; 

var usingTemplateLiteral = ` I'm Srihari Balgam from "Hyderabad".`;

//Long Strings and Newlines
const breakLongLineWith_n = "This is a string\nthat spans across\nthree lines.";

//These eliminate the need for concatenation or escaping on long strings containing newlines. The string as well as newlines will be preserved.
const threeLines = `This is a string
that spans across
three lines.`;

// RegEx of String

let strRegEx = 'RegEx methods on Strings';

strRegEx.search(/on/); // 
strRegEx.match(//); //
strRegEx.replace(/sds/, ''); // 
console.log(strRegEx.match(/methods/g));