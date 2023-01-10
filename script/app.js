'use strict';
let numberOfFilms;

function start() {
    for (let i = 0; i < 1; i++) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == null || numberOfFilms === '' || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let question1,
            question2;
        do {
            question1 = prompt('Один из последних просмотренных фильмов?');
        } while (question1 == null || question1 === '' || question1.length >= 50);
        do {
            question2 = prompt('На сколько оцените его?');
        } while (question2 == null || question2 === '' || question1.length >= 50);
        personalMovieDB.movies[question1] = question2;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    !hidden ? console.log(personalMovieDB) : false
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();
console.log(personalMovieDB.genres);