import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Styles from '../../CSS/Styles.module.css'

export default function FamilyMovies({moviesData,movieTrailer, setMovieTrailer}) {
  const [goBack, setGoBack] = useState(false);
  const [searchInput, setSearchInput] = useState('');

    if(goBack) return <Redirect to='/AllMovies'/>
    if(movieTrailer) return <Redirect to='/MoviesSolution'/>

    let filteredMovies = moviesData.filter((movie) => {
      return (
        movie.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    });


    return (
      <div>
        <h1>Family Movies</h1>
        <h3 className={Styles.search}>search:</h3>
        <input className={Styles.searchInput} type="text" placeholder='search' onChange={(e)=>{setSearchInput(e.target.value)}} />
        <div className={Styles.movieConteiner11}>
        {filteredMovies.map((movie,i)=>{
                if(movie.categories === 'FamilyMovies'){
                  return (
                    <section key={i} className={Styles.movieConteiner} >
                        <img className={Styles.movieCard} onClick={()=>{setMovieTrailer(movie.src)}} src={movie.img}/>
                        <h3>{movie.name}</h3>
                        <h4>Movie Length: {movie.time}</h4>
                    </section>
                    )
                }
                })}</div>
      <button onClick={()=>setGoBack(true)}>Go Back</button>
    </div>
  );
}
