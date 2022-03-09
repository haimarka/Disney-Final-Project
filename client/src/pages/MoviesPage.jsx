import React, { useMemo, useState } from 'react';
import { useHistory} from 'react-router-dom';
import CreateNewMovie from '../components/CreateNewMovie';
import Styles from '../CSS/Styles.module.css'
import axios from 'axios';

const CATEGORIES = {
    'cinemas': { value: 'InCinemas', title: 'In Cinemas' },
    'family': { value: 'FamilyMovies', title: 'Family Movies' },
    'more': { value: 'MoreMovies', title: 'More Movies' },
    'selected': { value: 'SelectedMovies', title: 'Selected Movies' },
    'athome': { value: 'WatchAtHome', title: 'Watch At Home' }
};

const MoviesPage = ({
    setMovieSrc, 
    setMovieTrailer,
    accessibilty, 
    addMovies,
    auth, 
    moviesData, 
    setMoviesData, 
    usersData,
    setUsersData, 
    setMovieSummary,
    match
}) => {
    const { colorReversal, fontIncrease } = accessibilty;
    const category = match.params.category ? CATEGORIES[match.params.category] : undefined;
    const history = useHistory();
    const [searchInput, setSearchInput] = useState('');

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

    const filteredMovies = useMemo(() => {
        const searched = moviesData.filter(({name}) => name.toLowerCase().includes(searchInput.toLowerCase()));

        if (category) return searched.filter(({categories}) => categories === category.value);
        else return searched;
    }, [searchInput, category, moviesData]);

    return <div className={Styles.categoryContainer}>
            <h1 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "300%" : "150%",transition: "1s"}}>
                {category?.title}
            </h1>
            <h3 className={Styles.search} style={{color: colorReversal? 'white':'black',transition:'1s'}}>
                search:
            </h3>
            <input className={Styles.searchInput} type="text" placeholder='search' onChange={(e)=>setSearchInput(e.target.value)} />
            <div className={Styles.movieConteiner}>
            {
                filteredMovies.map((movie,i)=> ( // avoid using index!
                <section key={i} className={Styles.cardCointeiner} >
                    <img className={Styles.movieCard} onClick={()=>{handleMovieClick(movie)}} src={movie.img}/>
                    <h3 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>{movie.name}</h3>
                    <h4 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>Movie Length: {movie.time}</h4>
                    {auth?<button onClick={()=>{addMovies(i);addProductToCart(movie);console.log(movie.added)}}>add movie</button>:''}
                    <p>{movie.message}</p>
                </section>))
            }
            </div>
            { auth && auth.email == '1@1.1' ?
                <CreateNewMovie moviesData={moviesData} setMoviesData={setMoviesData} defaultCategory={category.value}/> : null
            }
            <button onClick={history.goBack}>Go Back</button>
        </div>
}

export default MoviesPage;