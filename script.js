const PersonalMovieDB ={
    count: 0,  
    movies: {},
    actors: {},
    genres:[],
    private: false,
    start:  function(){
      PersonalMovieDB.count = +prompt(" how many movies have you watched ", ' ');
     
         while (PersonalMovieDB.count == '' || PersonalMovieDB.count == null || isNaN(PersonalMovieDB.count) ){
            PersonalMovieDB.count = +prompt(" how many movies have you watched ", ' ');
     
         }
     
     },
     rememberFilms: function(){
      for (let i = 0; i < 2; i++){
         const a = prompt(" last film ", ' ').trim(),
               b = prompt(" what's the score ", " ");
     
         
         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
             PersonalMovieDB.movies[a] = b;
             console.log('done')
         } else {
     
             console.log("eroor");
             i--;
         }
      }
   },
   detect: function(){
      if(PersonalMovieDB.count <10 ){
         console.log(" просмотрено мало фильмов")
      } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB < 30){
         console.log("ВЫ классический зритель ")
      } else if (PersonalMovieDB.count >= 30){
         console.log("Вы киноман")
      } else{
         console.log("Error")
      }
   
    },
    ShowMyDb: function(hidden){
      if (!hidden){
         console.log(PersonalMovieDB);
   
      }
    },

    toggleVisibleMyDB: function(){
      if(PersonalMovieDB.private){
         PersonalMovieDB.private = false;

      } else {
         PersonalMovieDB.private = true;
      }
    },

    writeYouGernes: function(){
      for (let i = 1; i < 2; i++){
         // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
         

         // if (genre == '' || genre == null){
         //    console.log(' вы ввели некрректные  данные ');
         //    i--;
         // } else {
         //    PersonalMovieDB.genres[i - 1] = genre;

         // }

         let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase();
         if (genre == '' || genre == null){
               console.log(' вы ввели некрректные  данные ');
               i--;
            } else {
               PersonalMovieDB.genres = genre.split(', ');
               PersonalMovieDB.genres.sort();
   
            }

         
   
      }

      PersonalMovieDB.genres.forEach((item, i) =>{
         console.log( `Любимый жанр ${i + 1} - это ${item}`)

      }); 
   }              
     
      
};

const a = prompt(" last film ", ' '),
 b = prompt(" what's the score ", " "),
 c = prompt(" last film ", ' '),
 d = prompt(" what's the score ", " ");