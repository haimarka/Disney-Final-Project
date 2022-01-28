import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Styles from '../../CSS/Styles.module.css'

export default function SelectedMovies({moviesData,movieTrailer, setMovieTrailer, movieSrc, setMovieSrc}) {
  const [goBack, setGoBack] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  

  if(goBack) return <Redirect to='/AllMovies'/>
  if(movieTrailer||movieSrc) return <Redirect to='/MoviesSolution'/>

  let filteredMovies = moviesData.filter((movie) => {
    return (
      movie.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });
  // filteredMovies = searchInput ? filteredMovies : filteredMovies.slice(0, 5); 
  return(
    <div>
        <h1>Selected Movies</h1>
        <h3 className={Styles.search}>search:</h3>
        <input className={Styles.searchInput} type="text" placeholder='search' onChange={(e)=>{setSearchInput(e.target.value)}} />
        <div className={Styles.movieConteiner11}>
        {filteredMovies.map((movie,i)=>{
          if(movie.categories === 'SelectedMovies'){
          return (
                  <section key={i} className={Styles.movieConteiner} >
                      <img className={Styles.movieCard} onClick={()=>{setMovieTrailer(movie.src);setMovieSrc(movie.watchMovie)}} src={movie.img}/>
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

{/* <p>&#10094; , &#10095;</p> */}
