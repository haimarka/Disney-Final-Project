
import {useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import CreateNewMovie from '../../components/CreateNewMovie';
import Styles from '../../CSS/Styles.module.css'
import axios from 'axios';



export default function MoreMovies({setMovieSrc, setMovieTrailer
    ,colorReversal ,fontIncrease, addMovies,
     auth, moviesData, setMoviesData, usersData, 
     setUsersData, setMovieSummary}) {
    const [goBack, setGoBack] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();
    if(goBack) { return <Redirect to='/AllMovies'/>}

    const handleMovieClick = (movie)=>{
      setMovieTrailer(movie.trailerSrc);
      setMovieSrc(movie.movieSrc);
      setMovieSummary(movie.summary);
      history.push('/MoviesSolution')
    }

    const addProductToCart = (movie) => {
      axios 
      .patch(`http://localhost:8082/users/watchList/patch/push/${auth.email}`,movie)
      .then(res=>{
          setUsersData( {...usersData,watchList:[...usersData.watchList,movie]});
      })
      .catch(err=>console.log(err.response))
    }

    let filteredMovies = moviesData.filter((movie) => {
        return (
          movie.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      });

    return(
        <div className={Styles.categoryContainer}>
            <h1 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "300%" : "150%",transition: "1s"}}>More Movies</h1>
            <h3 className={Styles.search} style={{color: colorReversal? 'white':'black',transition:'1s'}}>search:</h3>
            <input className={Styles.searchInput} type="text" placeholder='search' onChange={(e)=>{setSearchInput(e.target.value)}} />
            <div className={Styles.movieConteiner}>
            {filteredMovies.map((movie,i)=>{
                if(movie.categories === 'MoreMovies'){
                    return (
                        <section key={i} className={Styles.cardCointeiner} >
                            <img className={Styles.movieCard} onClick={()=>{handleMovieClick(movie)}} src={movie.img}/>
                            <h3 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>{movie.name}</h3>
                            <h4 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>Movie Length: {movie.time}</h4>
                            {auth?<button onClick={()=>{addMovies(i);addProductToCart(movie);console.log(movie.added)}}>add movie</button>:''}
                            <p>{movie.message}</p>
                        </section>
                        )
                }
                })}</div>
                {auth.email == '1@1.1'?
                <CreateNewMovie
                moviesData={moviesData} 
                setMoviesData={setMoviesData}
                defaultCategory='MoreMovies'/>:''}
            <button onClick={()=>setGoBack(true)}>Go Back</button>
        </div>
        );
}
