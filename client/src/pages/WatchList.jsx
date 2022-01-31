import React from 'react';
import { Redirect } from 'react-router-dom';
import Styles from "../CSS/Styles.module.css";

export default function WatchList({moviesData, fontIncrease, colorReversal,movieTrailer, movieSrc, setMovieSrc, setMovieTrailer, removeMovies}) {

if(movieTrailer||movieSrc) return <Redirect to='/MoviesSolution'/>

const elements = moviesData.map((movie,i)=>{
    if(movie.added){
    return (
        <section key={i} className={Styles.cardCointeiner} >
            <img className={Styles.movieCard} onClick={()=>{setMovieTrailer(movie.src);setMovieSrc(movie.watchMovie)}} src={movie.img}/>
            <h3 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>{movie.name}</h3>
            <h4 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>Movie Length: {movie.time}</h4>
            <button onClick={()=>removeMovies(i)}>remove</button>
        </section>
        )
    }
})
  return (
    <div>
        <h2>watch List</h2>
        <div className={Styles.movieConteiner}>
        {elements}
        </div>
    </div>
  );
}
