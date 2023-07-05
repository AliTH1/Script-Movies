"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

let lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", ""),
	ratingLastWatchedMovie = +prompt("На сколько оцените его?", "");


personalMovieDB.movies[lastWatchedMovie] = ratingLastWatchedMovie;

console.log(personalMovieDB);