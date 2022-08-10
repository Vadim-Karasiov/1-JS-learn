'use strict';

var now = new Date();
var newDate = new Date(+now + 60 * 1000 * 15); //пересчет 15 минут
var anotherDate = new Date ('1990-12-30');
var date = new Date (2020, 11, 31, 15)
// console.log('[date]', date);

// console.log('[+now]', now);
// console.log('[newDate]', newDate);
// console.log('[anotherDate]', anotherDate);
date.setFullYear(2100);

// console.log(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());

// console.log('[now>newDate]', now>newDate);

console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());

//console.log('10.08.2022, 15:11:50'); //такое - не парсит

//Вариант 1 передать для распарсировки
var parseDate = `${now.getFullYear()}-${(now.getMonth()+1)}-${now.getDate()}`;

//Вариант 2 передать для распарсировки
var parseDate2 = now.toLocaleDateString().split('.');

// console.log(new Date(parseDate));
// console.log(new Date(parseDate2[2]+'-'+parseDate2[1]+'-'+parseDate2[0]));

//.now() - метод выдающий сразу милисекунды, не создает объект
var time = Date.now();
// console.log('[time]', time);

//Метод .time у console
console.time('MARK');

for (var i = 0; i < 1000000; i++) {}

console.timeEnd('MARK');

//методы .warn .error .info
function cloneObject(obj) {
    //..

    if (typeof obj === 'string') {
        console.warn('Тут должен передаваться объект!!!')
    } else {
        console.error('ACHTUNG!');
    }
}
// cloneObject(false);

//Развернутый список объекта в консоли - .dir (вместо log)
console.dir({name: 'John', surname: 'Dou'});