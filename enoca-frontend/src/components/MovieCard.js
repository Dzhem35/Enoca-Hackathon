import React from "react";


const MovieCard = ({movie}) => {
    const IMG_API = "https://image.tmdb.org/t/p/w500/"
   
     return (
        <div className={"movie-card"}>
            {movie.poster_path ? <img className={"movie-cover"} src={`${IMG_API}${movie.poster_path}`}  alt=""/>
            : null}
           <h5 className={"movie-title"}>{movie.title}</h5> 
        </div>
    );
}

export default MovieCard;