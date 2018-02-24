
            var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            
            for(i = 0; i < array.length; i++) {
                setTimeout(function(){
                    array[i] = Math.pow(array[i], 2);
                }, 1000);
                
                //array[i] = Math.pow(array[i], 2); // This will be executed first 
            }

            for(let j=0; j < array.length; j++){
                setTimeout(function(){ 
                    document.write('<p>'+ Math.pow(array[j], 2) +'</p>');
                }, 3000);
                
                /*
                setInterval( function(){
                        array[j] = Math.pow(array[j], 2);
                        console.log("Executed order " + array[j]);
                    } , 5000, 1
                );*/
            }
            console.log("Squares of Array Elements-> "+ array);
            var sortDesc = function (arr) {
                return arr.sort(function (a, b) {
                    return b - a;
                });
            }
            var arr = [1,2,3,4,5,6,7,8,9];
            console.log(sortDesc(arr));  
            //console.log(sortDesc(arr).slice(5));  
            console.log(arr.slice(2).join(" ").replace());  


           console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name:'John'});

function testTruthy(val){
    return val ? console.log('truthy') : console.log('falsy');
}
testTruthy(true); //true
testTruthy(false); //false
testTruthy(new Boolean(false)); //true (object is always true)
testTruthy(''); //false
testTruthy('Packt'); //true
testTruthy(new String('')); //true (object is always true)
testTruthy(1); //true
testTruthy(-1); //true
testTruthy(NaN); //false    

var i=0;
while( i <10){
    console.log(" ", i);
    i++;
}

do {
    console.log("Value is ", i);
    ++i;
} while(i < 10)

//  String and Number sum 
var a = "22";
console.log(a+2); // prints 222

// Function for Console.logs
function log(logMsg){
    return console.log(logMsg);
}

log("2 plus 2 equals " + (2+2) ); // will give 4
log("2 plus 2 equals " + 2 + 2 ); // will give 22 -- JS converts them to Strings

// var spec = prompt("rama", "hanuman");
// if(spec === "hanuman") {
//     alert("Yo man")
// }

var array1 = ['rama', "hanuma", "laxmana", "bharatha"];

array1.pop();  // REmoves Element in the beginning of an array
array1.push("Bharatha", "Shathragna"); // // Inserts Element in the end of an array
array1.shift();  // Removes Element in the beginning of an array
array1.unshift("Sree Rama"); // Inserts Element in the beginning of an array

log(array1); // returns ["Sree Rama", "hanuma", "laxmana", "Bharatha", "Shathragna"]
array1.splice(1, 1, "Sree Hanuman"); // Removes "hanuma" from array1 and inserts Sree Hanuman in the same index
log(array1); //["Sree Rama", "Sree Hanuman", "laxmana", "Bharatha", "Shathragna"]
console.log("Array Removes Here ", array1.slice());
array2 = array1.slice(2, array1.length);
array2 = array1.slice(2);
console.log("After Slice ", array2);