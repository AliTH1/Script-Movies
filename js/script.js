"use strict";

let numberOfFilms;

function start(){
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
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


function showMyDB(privat){
	if(privat == false){
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);


function writeYourGenres(){
	let answerFavGenres;
	for (let i = 0; i <= 2; i++) {
		answerFavGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
		personalMovieDB.genres[i] = answerFavGenres;
	}
}
writeYourGenres();


function rememberMyFilms(){
	let count = 1;
	while(count <= 2){
		let lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", ""),
			ratingLastWatchedMovie = +prompt("На сколько оцените его?", "");
			
		if (lastWatchedMovie == null || ratingLastWatchedMovie == null || lastWatchedMovie == ""
			|| ratingLastWatchedMovie == "" || lastWatchedMovie.length < 20) {
			continue;
		}
		personalMovieDB.movies[lastWatchedMovie] = ratingLastWatchedMovie;
		count++;
	}

	// first:
	// for (let i = 1; i <= 2; i++) {
	// 	let lastWatchedMovie = prompt("Один из последних просмотренных фильмов?", ""),
	// 		ratingLastWatchedMovie = +prompt("На сколько оцените его?", "");
	
	// 	if (lastWatchedMovie == null || ratingLastWatchedMovie == null || lastWatchedMovie == ""
	// 	|| ratingLastWatchedMovie == "" || lastWatchedMovie.length < 20) {
	// 		break first;
	// 	}
	// 	personalMovieDB.movies[lastWatchedMovie] = ratingLastWatchedMovie;
	// }
}
rememberMyFilms();


function detectPersonalLevel(){
	if(personalMovieDB.count < 10){
		alert("Просмотрено довольно мало фильмов");
	}
	else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
		alert("Вы классический зритель");
	}
	else if (personalMovieDB.count > 30){
		alert("Вы киноман");
	}
	else{
		alert("Произошла ошибка");
	}
}
detectPersonalLevel();