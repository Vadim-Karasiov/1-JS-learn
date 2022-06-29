'use strict';

var john = {
    name: 'John',
    age: 23,
    sayHello: sayHi
};

var mike = {
    name: 'Mike',
    age: 53,
    sayHello: sayHi
};

function sayHi(age) {
    console.log('Hello, my name is ' + this.name + ' and my age is: ' + (age || 23));
}

// john.sayHello();
// mike.sayHello();

var bob = {
    name: 'Bob',
    age: 40,
    skills: ['html', 'css', 'js'],
    printSkills: function(){
        this.skills.forEach(function(skill) {
            console.log(this.name + ': ' + skill);
        });
    }
};

// bob.printSkills();

//call, apply
var michael = {name: 'Michael'};

// sayHi.call(michael, 23);
// sayHi.apply(michael, [23]);

function showMaxValue() {
    var numbers = [];

    

    while (true) {
        var number = +prompt('Enter your next number', '')

        numbers.push(number);

        if(confirm ('Enough?')) {
            break;
        }
    }

    var max = Math.max.apply(null, numbers);

    console.log('[max]', max);
}

// showMaxValue();

function sayHello() {
    // var myMap = [].map;

    // var updatedArgs = arguments.map();

    // var updatedArgs = [].map.call(arguments, function(arg) {
    //     return arg + '!!!';
    // })

    var clonedArray = [].slice.call(arguments);

    var updatedArgs = clonedArray.map(function(arg) {
        return arg + '!!!';
    })


    console.log('[updatedArgs]', updatedArgs);
}

// sayHello('Mike', 'John');

//bind

var boundSayHi = sayHi.bind({name: 'George'}, 777);
boundSayHi('Smith');

var jack = {
    name: 'Jack',
    age: 37,
    toString: function() {
        return this.name + ', ' + this.age;
    },
    valueOf: function() {
        return this.age;
    }
};

// alert(jack);
// console.log('[jack + 23]', jack + 23);

function User (name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log('[Hello]', 'Hello');
    };

    // return 'Sergio'; //игнорирует примитив
    // return {name: 'Sergio'};  //не игнорирует
}

var user1 = new User('Jack', 33);
var user2 = new User('Bob', 23);

console.log('[user1]', user1); 
console.log('[user2]', user2);