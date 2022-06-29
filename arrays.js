'use strict'

//создание массива
// var skills = ['html', 'css', false, 23, { name: 'John'}];
// console.log('[skills]', skills);

//добавление в массив - !не использовать!
var skills = ['html', 'css'];
// skills[1] = 'js';
// console.log('[skills]', skills);

// for (var key in skills) { //не использовать в массивах!
//     console.log('[key]', key);
//     console.log('[skills[key]]', skills[key]);
// }
//равносильно выражению:
// for (var i = 0; i < skills.length; i++) {
    // console.log('[skills[i]]', skills[i]);
// }

//многомерный массив
// var matrix = [  
//     [1, 2, 3],
//     ['a', 'b', 'c']
// ];

// console.log('[matrix[1][2]]', matrix[1][2]);



//methods
//push, pop
skills.push('react', 'redux');

skills.pop();

// console.log('[skills]', skills);

//shift, unshift
skills.unshift('scss', 'webpack');
skills.shift();

// console.log('[skills]', skills);


//modern methods-----------------------------
//split
var fullName = 'John Doe Williams';
var elements = fullName.split(' ');
// console.log('[elements]', elements); //['John', 'Doe', 'Williams']

//join------------------------------------
var aray = elements.join(" ");
// console.log('[aray]', aray);  //John Doe Williams

var students = [
    {name: 'John'},
    {name: 'Mike'},
    {name: 'Bob'}
];

//indexOf, lastIndexOf----------------------
var jsIndex = elements.indexOf('Williams');
// console.log('[jsIndex]', jsIndex);  //2

// var jsLastIndex = elements.lastIndexOf('Williams');
// console.log('[jsLastIndex]', jsLastIndex);  //2

var mikeIndex =  students.indexOf('Mike');
// console.log('[mikeIndex]', mikeIndex);

//slice----------------------------------------------
var updatedStudents = students.slice(-2);
// updatedStudents.push({name: 'George'});

// console.log('[students]', students);
// console.log('[updatedStudents]', updatedStudents);

//splice--------------------------
var bill = [
    'margo',
    '123',
    'abc'
];
var indexToDelete = bill.indexOf('123');
var deletedElements = bill.splice(indexToDelete, 2, 456, 'Aloha');
// console.log('[bill]', bill);
// console.log('[deletedElements]', deletedElements);

//sort----------------------------------------------------------
var chars = ['z', 'a', 'w', 'o', 'f'];	
var nums = [12, 1, 121, 21, 35, -2];

chars.sort();
nums.sort();

// console.log('[chars]', chars);
// console.log('[nums]', nums);

//reverse---------------------------------------------------------
chars.reverse()
// console.log('[chars]', chars);

//concat
var concattedArray = chars.concat('y', ['m', 'n']);
// console.log('[concattedArray]', concattedArray);


//sort------------------------------------------------------------
// function compareAsNumeric (x, y) {
//     return x - y;
// }

nums.sort(function (x, y) {
    return x - y;
});
// console.log('[nums]', nums);

var users = [
    {
        name: 'John',
        age: 23
    },
    {
        name: 'Mike',
        age: 11
    },
    {
        name: 'Bob',
        age: 80
    }
];

users.sort(function (user1, user2){
    return user1.age - user2.age;
});

// console.log('[users]', users);


//forEach------------------------------------------------
users.slice(-2).forEach(function(myUser, idx, arr) {
    // console.log('[users]', users);
    // console.log('[arr]', arr);
});

// for (var i = 0; i <users.length; i++) {
//     var user = users[i];
//     console.log('[user.age]', user.age);
// }


//map-------------------------------------------------
var transformedUsers = users.map(function(user) {
    return '<li>' + user.name + '</li>';
});

// console.log('[transformedUsers]', transformedUsers);


//filter-------------------------------------
var nums = [1, 2, 3, 4, 5];

var filteredNumbers = nums.filter(function(number){
    return number < 3;
});

var filteredUsers = users.filter(function(user) {
    return user.name !== 'Mike';
});
// console.log('[filteredUsers]', filteredUsers);
// console.log('[filteredNumbers]', filteredNumbers);


//some, every----------------------------------
var allAdultUsers = users.every(function(user){
    return user.age >= 18;
});

var age80 = users.some(function(user){
    return user.age === 80;
});

// console.log('[allAdultUsers]', allAdultUsers);
// console.log('[age80]', age80);


//find findIndex-------------------------------
var mike = users.find(function(user) {
    return user.name === 'Mike'
});
// console.log('[mike]', mike);

var mikeIndex = users.findIndex(function(user) {
    return user.name === 'Mike'
});
users.splice(mikeIndex, 1);


// console.log('[mikeIndex]', mikeIndex);
// console.log('[users]', users);


//reduce, reduceRight
var numbers = [10, 20, 30, 40];

var totalSum = numbers.reduce(function(result, number, idx, arr){
    result += number; //0+10; 10+20...30+30...

    return result;
}, 0)

// console.log('[totalSum]', totalSum);

//Пример с чеками
var bills = [
    {
        name: 'ATB',
        price: 300
    },
    {
        name: 'ATB',
        price: 800
    },
    {
        name: 'Varus',
        price: 1500
    },
    {
        name: 'Silpo',
        price: 900
    }
];
var initialValue = {
    shops: [],
    totalSum: 0,
    maxPrice: 0
};

var sumOfBills = bills.reduce(function(result, shop){
    if (!result.shops.includes(shop.name)){
        result.shops.push(shop.name);
    }
    result.totalSum += shop.price;

    if (result.maxPrice < shop.price){
        result.maxPrice = shop.price;
    }

    return result;
}, initialValue);
// console.log('[sumOfBills]', sumOfBills);

function sayHello(firstName, myAge, lastName) {
    
    var name = arguments[0];
    var age = arguments[1];
    var surname = arguments[2];

    console.log('[name]', name);
    console.log('[age]', age);
    console.log('[surname]', surname);

    // var myAge = age || 100;
    // console.log('Hello, my name is ' + name + ' and my age is ' + (age || 100));
}

sayHello('John' , '53');
sayHello('John', 0, 'Smith');