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
	privat: false,
	showMyDB: function(privat){
		if(privat == false){
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function(){
		let answerFavGenres;
		first:
		for (let i = 0; i <= 2; i++) {
			answerFavGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
			if (answerFavGenres == null) {
				break first;
			}
			personalMovieDB.genres[i] = answerFavGenres;
		}

		personalMovieDB.genres.forEach(function(item, i){
			console.log(`Любимый жанр #${i + 1} - это ${item}`);
		});
	},
	rememberMyFilms: function(){
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
	},
	detectPersonalLevel: function(){
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
	},
	toggleVisibleMyDB: function(privat){
		if (!privat){
			personalMovieDB.privat = true;
		}
		else{
			personalMovieDB.privat = false;
		}
	}
};

personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);

personalMovieDB.showMyDB(personalMovieDB.privat);


personalMovieDB.writeYourGenres();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();