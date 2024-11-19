"use strict";

// const str = "test";
// const arr = [1, 3];

// console.log(arr.length);
// console.log(str[2]);
// console.log(str);


// let fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));
// const logg = "Hello world";

// console.log(logg.slice());

// const harry = 'как мне быть в среде ночью';
// // console.log(harry.slice(15, 20));
// // console.log(harry.substring(21, 26));
// console.log(harry.substr(4, 3));
// // основные свойства к строкам
// const num = 15.4;
// console.log(Math.round(num));
// // округление числа. math-математическое свойство
// const test =  "1555454645.3px";
// console.log(parseInt(test));
// // вытасивает целое число
// console.log(parseFloat(test));
// // вытасивает целое число

let numberOfFilms;

function start() {
    numberOfFilms = +promot('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +promot('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
};

showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
    alert(value);
  });