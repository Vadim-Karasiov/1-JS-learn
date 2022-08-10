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


//Потеря контекста
// var bob = {
//     name: 'Bob',
//     age: 40,
//     skills: ['html', 'css', 'js'],
//     printSkills: function(){
//         var self = this; //негибкий вариант для решения потери контекста.

//         this.skills.forEach(function(skill) {
//             console.log(self.name + ': ' + skill); //ПРи this - Потеря контекста. Это уже другая функция, и ее никто не вызывает
//         });
//     }
// };

var bob = {
    name: 'Bob',
    age: 40,
    skills: ['html', 'css', 'js'],
    printSkills: function(){
        // function fn(skill) {
        //     console.log(this.name + ': ' + skill); 
        // }

        // var boundFn = fn.bind(this); //привязываем функции this
        // this.skills.forEach(boundFn);

        // this.skills.forEach(fn.bind(this)); //сокращенно

        //еще сокращеннее, просто вконце функции приписываем .bind(this) или просто пишем вторым аргументом, который и является контекстом вызова.
        this.skills.forEach(function (skill) {
            console.log(this.name + ': ' + skill); 
        }, this);
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

    // var updatedArgs = arguments.map(); //подставляем метод массива

    // var updatedArgs = [].map.call(arguments, function(arg) { 
    //     return arg + '!!!';
    // })

    var clonedArray = [].slice.call(arguments); //делаем из псевдомассива - массив

    var updatedArgs = clonedArray.map(function(arg) {
        return arg + '!!!';
    })


    console.log('[updatedArgs]', updatedArgs);
}

// sayHello('Mike', 'John');

//bind

var boundSayHi = sayHi.bind({name: 'George'}, 777);
// boundSayHi('Smith');


//Функции toString, valueOf - поведение объектов при обращении к ним как к строке или числу
var jack = {
    name: 'Jack',
    age: 37,
    toString: function() { //записывается в скрытую функцию, которая определяет поведение. Для строки
        return this.name + ', ' + this.age;
    },
    valueOf: function() { //для обращения как к числу
        return this.age;
    }
};

// alert(jack);
// console.log('[jack + 23]', jack + 23);


//Функция-конструктор объектов. New
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

// console.log('[user1]', user1); 
// console.log('[user2]', user2);


//ДЕСКРИПТОРЫ
function Users (name, age) {
    Users.amount++;

    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log('[Hello]', 'Hello');
    };

    this.toString = function() {
        console.log('Hello');
    };
}

Users.amount = 0; //Создание статического свойства функции
Users.showAmount = function() { //Создание статического метода функции
    console.log('[this]', this.amount);
}

var users1 = new Users('Jack', 33);
var users2 = new Users('Jack', 33);

// console.log('[users1]', users1); 
// console.log('[users2]', users2); 
// console.log('[Users.amount]', Users.amount);
// Users.showAmount();


//Статические функции Глобальных конструкторов.
//defineProperty(); defineProperties() - управление свойствами объекта
//возвращает новый объект

var newObj = Object.defineProperty({}, 'fullName', {
    // value: 'Bob', //добавляет значение ключу
    // writable: false, //запрещает менять значение, 
    set: function(value){   //определяет поведение приема значения
        var result = value.split(' ');
        this.firstName = result[0];
        this.lastName = result[1];
    }, 
    get: function() {
        return this.firstName + ', ' + this.lastName;
    },  //определяет поведение выдачи значения
    configurable: false, // запрещает удалять ключ
    enumerable: false // запрещает перечислять ключ
});

newObj.fullName = 'Bob Smith';

// console.log('[newObj.fullName]', newObj.fullName);

// console.log('[newObj]', newObj);

// newObj.firstName = 'Ted'; - проверка writable
// delete newObj.firstName; - проверка configurable
// console.log('[newObj]', newObj);

for (var key in newObj) {
    // console.log(key);
}

//Keys - метод конструктора Object, который возвращает массив ключей объекта
var keys = Object.keys(newObj); // требует объект, возращает массив из ключей
// console.log('[keys]', keys);

if(keys.length) { //проверка объекта на заполение
    // console.log('Объект не пуст!');
}


//Values - метод конструктора Object, который возвращает массив значений объекта
var values = Object.values(newObj);
// console.log('[values]', values);


//Entries - возвращает многомерный массив
var entries = Object.entries(newObj);
// console.log('[entries]', entries);

//defineProperties
var anotherObject = Object.defineProperties({}, {
    name: {
        value: 'John',
        writable: false
    },
    age: {
        value: 23,
        enumerable: false
    }
});

console.log('[anotherObject]', anotherObject);