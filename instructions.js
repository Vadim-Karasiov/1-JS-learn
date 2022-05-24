'use strict';

//if, else if, else
var myName = 'Bob';
var myAge = 18;

//false, null, undefined, 0, ''
// if (myName === 'John') {
//     console.log('[myName]', myName);
// } else if (myName === 'Mike') {
//     console.log('[myName]', myName);
// } else {
//     console.log('[myName]', myName);
// }

// console.log('afrter if block');

//switch
myName = 'John1';

// switch (myName) {
//     case 'John': console.log('case JOHN'); break;
//     case 'Mike':
//     case 'Bob': 
//         console.log('case BOB'); 
//         break;
//     default: console.log('Other cases');
// }

// ?:
myName = 'Kevin';

// myName === 'Kevin' 
//     ? console.log('KEVIN') 
//     : console.log('OMG...');

// if (myName === 'Kevin') {
//     console.log('KEVIN');
// } else {
//     console.log('OMG...');
// }

var surname = myName === 'Kevin' ? 'Love' : 'Smith';
// console.log('[surname]', surname);

//&&, ||, !
var myName = 'John';
var surname = null;
var myAge = surname || '18';

// var myAge = myName === null || 'John' || null || console.log('Wjld hello')
console.log('[myAge]', myAge);

if (!myName) {
    console.log('Please enter your name');
}

if (myName === 'Bob' || (myAge === 18 && myAge < 50)) {
    console.log('Hello');
}

if (myName === 'Mike' || myAge >=18) {
    console.log('Hello2');
}
