'use strict'

//while, for, do while

// var x = 1;

// while (x < 10) {
//     x++;
//     if (x % 2 === 0) continue; 
//     console.log(x);
// }

// console.log('After while');

for (var i = 0; i<10; i++) {
    if (i % 2 === 0) continue;
    console.log('[i]', i);
}

// var j = 0;
// do {
//     j++;
//     console.log('[j]', j);
// } while (j < 5);