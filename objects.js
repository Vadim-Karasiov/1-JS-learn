'use strict'

var user = {
    name: 'John',
    age: 54,
    isDrunk: false,
    skills: {
        html: true,
        css: true,
        js: false
    }
}; 

var user2 = {
    name: 'John',
    age: 54,
    isDrunk: false
}; 

//добавление ключей и свойств объекту
// var propName = prompt('Enter the property name', '');
// var propValue = prompt('Enter the property value', '');
// user[propName] = propValue;


//проверка на ключи в объекте
// if ('skills' in user) {
//     console.log('[user.skills.js]', user.skills.js);
// }


// примеры обращения к ключам примитивов как к объектам
// var numb = 23;
// console.log('[numb.name]', numb.name); //undefined
// console.log('[\'abc\'.name]', 'abc'.name); //undefined

// console.log('[null.name]', null.name); //error
// console.log('[undefined.name]', undefined.name); //error


//Цикл для перечисления ключей / for(in)-----------
// for (var key in user) {
//     var value = user[key]

//     if (key !== 'age') continue;

//     console.log('[key]', key);
//     console.log('[value]', value);
// }


//Копирование объекта--------------------------
// var mike = user; //Создается ссылка на объект а не новый
// mike.name = 'Mike'; //имя меняется и в user и в mike
// user.age = 50;

// console.log('[user]', user);
// console.log('[mike]', mike);

//функция клонирования
// function cloneObject(obj) {
//     var clone = {}; //создается чистый объект

//     for (var key in obj) { //чтение ключей входящего объекта
//         var value = obj[key];

//         //value = {html: true, css: true, js: false}
//         if (typeof value === 'object') {
//             //т.к. skills на данном этапе не создан, надо создать
//             clone[key] = {};

//             //key2 = html, css, js
//             for (var key2 in value) { 
//                 //value2 = true, true, false
//                 var value2 = value[key2];
//                 //clone.skills.html = true...
//                 clone[key][key2] = value2;
//             }
//         } else { //помещаем основной код клонирования для того чтобы не перезаписало объект
//             clone[key] = value; //клонирование их в новый
//         }

//     }
//     return clone; //возврат клонированного объекта
// }

// var mike = cloneObject(user);
// mike.name = 'Mike';
// mike.skills.js = true; //вложенный объект все равно останется ссылкой

// console.log('[user]', user);
// console.log('[mike]', mike);


//strings-методы строк------------------------------------------
var text = 'Hello World 2022';

// console.log('[text.length]', text.length);
// console.log('[text.toUpperCase]', text.toUpperCase());
// console.log('[text.toUpperCase]', text.toLowerCase());
// console.log('[text.trim()]', text.trim());
// console.log('[text.trim().length]', text.trim().length);

// console.log('[text.charAt(0)]', text.charAt(0));
// console.log('[text[0]]', text[0]);


//substring - отрезает часть слова, ждет индекс первого и последнего символа
// console.log('[text.substring(1, 7)]', text.substring(1, 7));


//substr - отрезает часть слова, ждет индекс первого и количество символов после него
// console.log('[text.substr (0, 5)]', text.substr (0, 5));


//slice - отрезает часть слова, ждет индекс первого и последнего символа. Но в отличие
//от substring понимает конечное значение с минусом, что позволяет указывать от конца.
// console.log('[text.slice(1, -1)]', text.slice(1, -1));

//indexOf - находит индекс слова
// var index = text.indexOf('World');
// console.log('[index]', index);

//можно сочетать с отрезанием слов.
// console.log('[text.substr(index, 5)]', text.slice(index, index+5));


//numbers-методы чисел------------------------------

//Отрезание чисел после запятой - .toFixed()
// var num = 10 /3;
// var fixedNum = num.toFixed(2);
// console.log('[fixedNum]', fixedNum);

//Извлечение чисел из строки - parseInt()
// var size = '255.35px';
// var value = parseInt(size);
// console.log('[value]', value);

// var value = parseFloat(size);
// console.log('[value]', value);

//isNaN, Infinity, -Infinity------------------------
// isNaN('abc' / 23);
// Number.isNaN(NaN);

// isFinite();
// Number.isFinite();


//Math---------------------------------------------
Math.floor(1.5); //1 - округление вниз
Math.ceil(1.5) //2 - округление вверх
Math.round(1.5) //= 2 - округление по математическим правилам к целому числу
Math.sqrt(9) //= 3 – квадратный корень
Math.pow(2, 3) //= 8 – возведение в степень = [2 ** 3](плохая поддержка)
Math.abs(-23) //= 23 – модуль	
Math.random() // псевдослучайное значение, от 0 до 1. *50 - от 0 до 50
Math.max(1, 2, 3, 4, 5) = 5 //– нахождение наибольшего числа
Math.min(1, 2, 3, 4, 5) = 1 //– нахождение наименьшего числа
