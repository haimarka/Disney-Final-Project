import {useState} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import CreateNewMovie from '../../components/CreateNewMovie';
import Styles from '../../CSS/Styles.module.css'
import axios from 'axios';


export default function WatchAtHome({setMovieSrc, setMovieTrailer
    ,accessibilty, addMovies, 
    auth, moviesData, setMoviesData,
    usersData, setUsersData, setMovieSummary}) {
    const { colorReversal, fontIncrease } = accessibilty;
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

    // useMemo
    let filteredMovies = moviesData.filter((movie) => {
        return (
          movie.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    });

    return(
        <div className={Styles.categoryContainer}>
            <h1 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "300%" : "150%",transition: "1s"}}>Watch At Home</h1>
            <h3 className={Styles.search} style={{color: colorReversal? 'white':'black',transition:'1s'}}>search:</h3>
            <input className={Styles.searchInput} type="text" placeholder='search' onChange={(e)=>{setSearchInput(e.target.value)}} />
            <div className={Styles.movieConteiner}>
            {filteredMovies.map((movie,i)=>{
                if(movie.categories === 'WatchAtHome'){
                    return ( // index as key
                        <section key={i} className={Styles.cardCointeiner} >
                            <img className={Styles.movieCard} onClick={()=>{handleMovieClick(movie)}} src={movie.img}/>
                            <h3 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>{movie.name}</h3>
                            <h4 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>Movie Length: {movie.time}</h4>
                            {auth?<button onClick={()=>{
                                // race-condition!
                                // both addMovies(i) and addProductToCart(movie) are happening at once
                                // in this case it doesnt cause problems but its an anti-pattern
                                //
                                // Suggestion: 
                                // use id/name/some unique field in movie object - try to avoid using index
                                // call addMovies inside addProductToCart then scope - before/after setUsersData
                                addMovies(i);
                                addProductToCart(movie);
                                console.log(movie.added)
                            }}>add movie</button>:''}
                            <p>{movie.message}</p>
                        </section>
                        )
                }
                })}</div>
                {auth && auth.email == '1@1.1'?
                <CreateNewMovie
                moviesData={moviesData} 
                setMoviesData={setMoviesData}
                defaultCategory='WatchAtHome'/>:''}
            <button onClick={()=>setGoBack(true)}>Go Back</button>
        </div>
        );
}
