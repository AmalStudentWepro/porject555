/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => item.remove());

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
const genre = document.querySelector('.promo__genre');
genre.textContent = 'ДРАМА';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.Реализовать только при помощи JS
const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.Отсортировать их по алфавиту 
const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = ""; 
movieDB.movies.sort();

// 5) Добавить нумерацию выведенных фильмов
movieDB.movies.forEach((movie, i) => {
    movieList.innerHTML += 
    `<li class="promo__interactive-item">${i + 1}. ${movie}
            <div class="delete"></div>
        </li>`
});
