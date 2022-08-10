'use strict'

var objtype = typeof {}; //Object
var arrtype = typeof []; //Array
var DateType = typeof new Date(); //Date

//[[Class]]

// console.log('[objtype]', objtype); //object
// console.log('[arrtype]', arrtype); //object
// console.log('[DateType]', DateType); //object

function getObjectClass(obj) {
    var myMethod = {}.toString;

    return myMethod.call(obj).slice(8, -1);
}

function cloneObject(obj) {
    if (Array.isArray(obj)) { //вариант копирования массива
        return obj.slice();
    }

    if (getObjectClass(obj) === 'Array') { //второй вариант клонирования массива
        return obj.slice();
    }

    var clone = {};

    for (var key in obj) {
        clone[key] = obj[key];
    }

    return clone;
}

var arrClass = getObjectClass([]);
var objClass = getObjectClass({});
var dateClass = getObjectClass(new Date());

// console.log('[arrClass]', arrClass);
// console.log('[objClass]', objClass);
// console.log('[dateClass]', dateClass);

//JSON - JS object notation - строка в которой хранятся объекты и массивы
//SQL

var data = {
    name: 'John',
    age: 23,
    isDrunk: true,
    money: null,
    education: undefined,
    birthday: new Date(),
    skills: ['html', 'css'],
    pocket: {
        phone: true
    },
    sayHello: function() {
        console.log('Hello!');
    },
    toJSON: function() {
        return {
            money: this.money,
            skills: this.skills
        }
    }
};

var jsonStr = JSON.stringify(data, null, 2);
// console.log('[jsonStr]', jsonStr);

var parsedObj = JSON.parse(jsonStr, function(key, value){
    if (key === 'birthday') {
        return new Date(value);
    }

    return value;
});
console.log('[parsedObj]', parsedObj);