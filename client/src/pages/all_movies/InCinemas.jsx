import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Styles from '../../CSS/Styles.module.css'


export default function InCinemas({moviesData,movieTrailer, setMovieTrailer,colorReversal ,fontIncrease}) {
    const [goBack, setGoBack] = useState(false)
    const [searchInput, setSearchInput] = useState('');

    if(goBack) return <Redirect to='/AllMovies'/>
    if(movieTrailer) return <Redirect to='/MoviesSolution'/>

    let filteredMovies = moviesData.filter((movie) => {
        return (
          movie.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
    
    //   filteredMovies = searchInput ? filteredMovies : filteredMovies.slice(5, 10);

    return(
        <div>
            <h1 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "300%" : "150%",transition: "1s"}}>In Cinemas</h1>
            <h3 className={Styles.search} style={{color: colorReversal? 'white':'black',transition:'1s'}}>search:</h3>
        <input className={Styles.searchInput} type="text" placeholder='search' onChange={(e)=>{setSearchInput(e.target.value)}} />
            <div className={Styles.movieConteiner}>
            {filteredMovies.map((movie,i)=>{
                if(movie.categories === 'InCinemas'){
                    return (
                        <section key={i} className={Styles.cardCointeiner} >
                            <img className={Styles.movieCard} onClick={()=>{setMovieTrailer(movie.src)}} src={movie.img}/>
                            <h3 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>{movie.name}</h3>
                            <h4 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>Movie Length: {movie.time}</h4>
                        </section>
                        )
                }
                })}
                </div>
            <button onClick={()=>setGoBack(true)}>Go Back</button>
        </div>
        );
}
