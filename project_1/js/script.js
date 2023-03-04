'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Фган",
            "Аига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const rightSide = document.querySelectorAll('.promo__adv img'),
        promoGenre = document.querySelector('.promo__genre'),
        backgroundPromo = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    const deleteAdv = (advList) => {
        advList.forEach(item => {
            item.remove();
        });
    }

    const makeChanges = () => {
        promoGenre.textContent = 'Драма';
        backgroundPromo.style.backgroundImage = `url('img/bg.jpg')`;
    }

    const sortArray = (arr) => {
        arr.sort();
    }

    const createFilmsList = (films, parent) => {
        sortArray(films);
        parent.innerHTML = '';
        films.forEach((item, i) => {
            if (item.length > 21) {
                item = item.slice(0, 21) + '...'
            }
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1}. ${item}
                                <div class="delete"></div>
                            </li>`;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                movieDB.movies.sort().splice(i, 1);
                btn.parentElement.remove();
                createFilmsList(films, parent);
            });
        });
    }

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            movieDB.movies.push(newFilm.toUpperCase());
            sortArray(movieDB.movies);
            createFilmsList(movieDB.movies, movieList);
            if (favorite) {
                console.log('Добавляем любимый фильм!');
            }
        }
        event.target.reset();
    });

    deleteAdv(rightSide);
    makeChanges();
    createFilmsList(movieDB.movies, movieList);
});