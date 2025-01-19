const numberOfFilmns = +prompt(" how many movies have you watched ", ' ');

const PersonalMovieDB ={
    count: numberOfFilmns,  //нужно для того чтобы записать 1 ответ на вопрос
    movies: {},
    actors: {},
    genres:[],
    private: false 


};

const a = prompt(" last film ", ' '),
 b = prompt(" what's the score ", " "),
 c = prompt(" last film ", ' '),
 d = prompt(" what's the score ", " ");

 PersonalMovieDB.movies[a] = b;
 PersonalMovieDB.movies[c] = d;

 console.log(PersonalMovieDB);