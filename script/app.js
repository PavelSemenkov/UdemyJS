'use strict';

// let number = 5;
// const leftBorderWidth = 1;
//
//
// for (let i = 0; i <= number; i++) {
//     console.log(i)
// };
//
// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
// console.log(numberOfFilms);
//
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };
// console.log(personalMovieDB);
//
// let question1 = prompt('Один из последних просмотренных фильмов?');
// let question2 = prompt('На сколько оцените его?');
//
// personalMovieDB.movies = {
//     [question1]: question2
// };
// console.log(personalMovieDB.movies);


// const str = "abc"

const answers = [];
answers[0] = prompt("Как ваше имя?");
answers[1] = prompt("Как ваша фамилия?");
answers[2] = +prompt("Сколько вам лет?");
document.write(answers[0],' ',answers[1], ' ',answers[2]);
