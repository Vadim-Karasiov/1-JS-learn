'use strict';

//main operators +, -, *, /, %


var a = 12;
var b = 3;

//+
// console.log('[a + b]', a + b);
 
//-
// console.log('[a - b]', a - b);

//*
// console.log('[a * b]', a * b);

// %
// console.log('[a % 3]', a % 3);

//+=, -=, /=, *-, %=
// console.log('[a +=5]', a +=5);

//unary operators
// console.log('[+a]', +a);

//++, --
var c = 5;
var cc = 5
var d = 0 + c++;
var e = 0 + ++c;

c++ //+1

// console.log('[c]', c);
// console.log('[d]', d);
// console.log('[e]', e);

//equality == != >= <= < >
var f = 5;
var g = 10;

console.log('[f > g]', f > g);
console.log('[f >= g]', f >= g);
console.log('[f < g]', f < g);
console.log('[f <= g]', f <= g);
console.log('[f == g]', f == g);
console.log('[f != g]', f != g);
console.log('---------------');
console.log('[true == 1]', true == 1);
console.log('[false == 0]', false == 0);
console.log('---------------');
console.log('["a" > "b"]', "a" > "b");
console.log('["a" > "B"]', "a" > "B");
console.log('["javas" > "java"]', "javas" > "java");
console.log('---------------');
console.log('[+null == false]', +null == false);
console.log('[null == undefined]', null == undefined);
console.log('[null == 0]', null == 0);
console.log('[null > 0]', null > 0);
console.log('[null >= 0]', null >= 0);
console.log('---------------');
console.log('[undefined == 0]', undefined == 0);
console.log('[undefined > 0]', undefined > 0);
console.log('[undefined >= 0]', undefined >= 0);

//===, !==
