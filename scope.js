'use strict'

// function createCounter() {
//     /*
//     Lexicalenviroment = {
//         currentCount: 0,
//         increaseCount
//     }
//     */

//     var currentCount = 0;

//     return function() {
//         /*
//         Lexicalenviroment = {
        
//         }
//         */
   
//         currentCount ++;

//         return currentCount;
//     }
// }

// var counter1 = createCounter();
// console.log('[counter1()]', counter1());
// console.log('[counter1()]', counter1());

// var counter2 = createCounter();
// console.log('[counter2()]', counter2());
// console.log('[counter2()]', counter2());

function createCounter(initialCount) {
    var currentCount = initialCount;

    return {
        increaseCountByOne: function() {
            currentCount++;
            console.log('[currentCount]', currentCount);
        },
        setCount: function(value) {
            currentCount = value;
            console.log('[currentCount]', currentCount);
        },
        resetCount: function() {
            currentCount = initialCount;
            console.log('[currentCount]', currentCount);
        }
    };
}

// var counter = createCounter(23);
// counter.increaseCountByOne();
// counter.setCount(55);
// counter.increaseCountByOne();
// counter.increaseCountByOne();
// counter.resetCount();

function createFactory(template) {
    return function(propName, propValue) {
        var clone = {};

        for (var key in template) {
            clone[key] = template[key];
        }

        clone[propName] = propValue;

        return clone;
    };
}

var animalFactory = createFactory({tail:true, legs: 4});

var cat = animalFactory('color', 'black');
var dog = animalFactory('bugs', true);

// console.log('[cat]', cat);
// console.log('[dog]', dog);

var carFactory = createFactory({wheels: 4, color: 'red'});

var bmw = carFactory('label', 'BMW');
var toyota = carFactory('wheels', 3);

console.log('[bmw]', bmw);
console.log('[toyota]', toyota);