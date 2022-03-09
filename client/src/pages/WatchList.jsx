import axios from 'axios';
import React,{} from 'react';
import { useHistory } from 'react-router-dom';
import Styles from "../CSS/Styles.module.css";

export default function WatchList({accessibilty, 
  setMovieSrc, setMovieTrailer, removeMovies, auth, usersData,
    setUsersData, setMovieSummary}) {
  const { colorReversal, fontIncrease } = accessibilty;
  const history = useHistory();

  const handleMovieClick = (movie)=>{
    setMovieTrailer(movie.trailerSrc);
    setMovieSrc(movie.movieSrc);
    setMovieSummary(movie.summary);
    history.push('/MoviesSolution');
  }

  const removeMovieFromWatchList = (i,movie) => {
    let tempWatchList = [...usersData.watchList];
    tempWatchList.splice(i,1);
    axios
    .patch(`http://localhost:8082/users/watchList/patch/pull/${auth.email}`,movie)
    .then(res=>{
        console.log(res);
        setUsersData({...usersData,watchList:tempWatchList});
        console.log(tempWatchList);
    })
    .catch(err=>console.log(err.response))
  }

const elements = usersData.watchList?usersData.watchList.map((movie,i)=>{
    if(movie.added){
    return (
        <section key={i} className={Styles.cardCointeiner} >
            <img className={Styles.movieCard} onClick={()=>{handleMovieClick(movie)}} src={movie.img}/>
            <h3 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>{movie.name}</h3>
            <h4 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>Movie Length: {movie.time}</h4>
            <button onClick={()=>{removeMovies(i);removeMovieFromWatchList(i,movie)}}>remove</button>
        </section>
        )
    }
}):<div><h1>Nothing Added Yet</h1><hr/></div>;

  return (
    <div className={Styles.watchListContainer}>
        <h2>watch List</h2>
        <div className={Styles.movieConteiner}>
        {elements}
        </div>
    </div>
  );
}
