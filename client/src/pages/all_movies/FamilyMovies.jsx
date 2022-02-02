import axios from 'axios';
import {useState, useEffect} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import CreateMovie from '../../components/CreateMovie';
import Styles from '../../CSS/Styles.module.css'

export default function FamilyMovies({setMovieSrc, setMovieTrailer,colorReversal 
  ,fontIncrease, addMovies, auth, productsData, setProductsData}) {
  const [goBack, setGoBack] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();
  useEffect(()=>getProducts(),[])
  if(goBack) {return <Redirect to='/AllMovies'/>}


  const getProducts = ()=>{
    axios 
    .get('http://localhost:8082/Movies')
    .then(res=>{
      setProductsData(res.data);
    })
    .catch(err=>console.log(err.response))
  }

  const handleMovieClick = (movie)=>{
    setMovieTrailer(movie.trailerSrc);
    setMovieSrc(movie.movieSrc);
    history.push('/MoviesSolution')
  }

    let filteredMovies = productsData.filter((movie) => {
      return (
        movie.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    });


    return (
      <div>
        <h1 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "300%" : "150%",transition: "1s"}}>Family Movies</h1>
        <h3 className={Styles.search} style={{color: colorReversal? 'white':'black',transition:'1s'}}>search:</h3>
        <input className={Styles.searchInput} type="text" placeholder='search' onChange={(e)=>{setSearchInput(e.target.value)}} />
        <div className={Styles.movieConteiner}>
        {filteredMovies.map((movie,i)=>{
                if(movie.categories === 'FamilyMovies'){
                  return (
                    <section key={i} className={Styles.cardCointeiner} >
                        <img className={Styles.movieCard} onClick={()=>{handleMovieClick(movie)}} src={movie.img}/>
                        <h3 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>{movie.name}</h3>
                        <h4 style={{color: colorReversal? 'white':'black',fontSize: fontIncrease ? "180%" : "150%",transition: "1s"}}>Movie Length: {movie.time}</h4>
                        {auth?<button onClick={()=>{addMovies(i);console.log(movie.added)}}>add movie</button>:''}
                        <p>{movie.message}</p>
                    </section>
                    )
                }
                })}</div>
                <CreateMovie getProducts={getProducts} defaultCategory='FamilyMovies'/>
      <button onClick={()=>setGoBack(true)}>Go Back</button>
    </div>
  );
}
