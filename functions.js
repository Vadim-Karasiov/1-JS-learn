'use strict'

//alert, prompt, confirm

// alert('Hello world');

// var age = prompt('How old are you?', '');

// if (age === null) {
//     console.log('enter number');
// }
// console.log('[age]', age);

// var result = confirm('Do you wanna quit?');
// console.log('[result]', result);

//custom functions

// function createString(msg, year) {

//     if (year === 2022) return;
    
//     return msg + ', ' + year + '!!!!';
// }

// var message = 'Happy New Year' 

// var string = createString(message, 2022);
// console.log('[string]', string);


// var firstName = 'John';

// function sayHello() {
//     console.log('Hello, my name is ' + firstName);
    
//     var firstName = 'Bob'; 
// }

// sayHello()
// console.log('[firstName]', firstName);

//-----------------------------
// function add(a, b) {
//     return a + b;
// }
// function multiply(a, b) {
//     return a * b;
// }

// function getResultAndPrint(callback) {
//     var result = callback(2, 3);

//     console.log('[result]', result);
// }

// getResultAndPrint(add)
// getResultAndPrint(multiply)

//----------------------------------------

// var divide = function abc(a, b) {
//     return a / b;
// };

// var result = divide(10, 5);
// console.log('[result]', result);


//----------------------------- Recursion
var a = 5;
function abc() {
    a++;
    console.log(a);
    debugger;
    if(a > 10) return;
    abc();
}

abc();
