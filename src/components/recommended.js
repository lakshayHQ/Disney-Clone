import React from "react"
import { Link } from "react-router-dom"

export default function Recommended (props ) {
    const [recommendMovies  , setRecommenedMovies] = React.useState(props.movies)  

    
  React.useEffect (() => {
    setRecommenedMovies((recommendMovies) => {
     return recommendMovies = [...props.movies]
    })
    function makeid(length) {
      let result           = '';
      let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }
         setRecommenedMovies((movies) => {
          if(movies.length === 12) {
            return movies.map((movie) => {
              return  <img src = {movie.cardImg} alt="movie-poster" className="movie" key={makeid(5)}/>
             })
          }
     
         })
      
  } , [props.movies] )
 


   
return (
    <>
    <h1 className="movies-header"> Recommended For You </h1>
    <div className="movies-div">
     { [recommendMovies]} 
    </div>
    </>
)
}