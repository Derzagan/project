let numberOfFilmns;


function start(){
    numberOfFilmns = +prompt(" how many movies have you watched ", ' ');

    while (numberOfFilmns == '' || numberOfFilmns == null || isNaN(numberOfFilmns) ){
      numberOfFilmns = +prompt(" how many movies have you watched ", ' ');

    }

}

start();

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


function rememberFilms(){
   for (let i = 0; i < 2; i++){
      const a = prompt(" last film ", ' '),
            b = prompt(" what's the score ", " ");
  
      
      if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
          PersonalMovieDB.movies[a] = b;
          console.log('done')
      } else {
  
          console.log("eroor");
          i--;
      }
            
  
   }

}
rememberFilms();

 function detect(){
   if(PersonalMovieDB.count <10 ){
      console.log(" просмотрено мало фильмов")
   } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB < 30){
      console.log("ВЫ классический зритель ")
   } else if (PersonalMovieDB.count >= 30){
      console.log("Вы киноман")
   } else{
      console.log("Error")
   }

 }

 detect();





 function ShowMyDb(hidden){
   if (!hidden){
      console.log(PersonalMovieDB);

   }
 }
 ShowMyDb(PersonalMovieDB.private);

function writeYouGernes(){
   for (let i = 1; i <= 3; i++){
      PersonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

   }
}  

writeYouGernes();