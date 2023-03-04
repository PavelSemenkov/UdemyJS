'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        for (let i = 0; i < 1; i++) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
            while (personalMovieDB.count == null || personalMovieDB.count === '' || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
            }
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено слишком мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Ошибка');
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            do {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            } while (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] === '');
        }
        personalMovieDB.genres.forEach((value, i) => {
            console.log(`Любимый жанр ${[i + 1]} - это ${value}`);
        });
    },
    toggleVisibleMyDB: function () {
        !personalMovieDB.privat ? personalMovieDB.privat = true : personalMovieDB.privat = false;
    },
    showMyDB: function () {
        !personalMovieDB.privat ? console.log(personalMovieDB) : false;
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();