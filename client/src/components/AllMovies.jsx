// import { useState } from 'react';
import { Link} from 'react-router-dom';
import Styles from '../CSS/Styles.module.css'

// to do navigation
export default function AllMovies({fontIncrease, colorReversal}) {    
  return (
    <div>
      {/* <Link to='/SelectedMovies'>Selected Movies</Link> <Link to='/InCinemas'>In Cinemas</Link> <Link to='/FamilyMovies'>Family Movies</Link> <Link to='/WatchAtHome'>Watch At Home</Link> <Link to='/MoreMovies'>More Movies</Link> */}
        <h1 style={{fontSize: fontIncrease? '300%':'200%',color: colorReversal? 'white':'black',transition:'1s'}}>All Movies</h1>
       <Link to='/SelectedMovies'> <img className={Styles.allMovies}  src="https://www.dvdplanetstore.pk/wp-content/uploads/2017/12/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg" alt="Lion King" /></Link>
       <Link to='/InCinemas'> <img className={Styles.allMovies} src="https://media.istockphoto.com/photos/pirates-of-the-caribbean-on-stranger-tides-poster-picture-id458587791?k=20&m=458587791&s=612x612&w=0&h=fUnYvj0cF1ATx5BTI2dNyerc-g7KjxDAWUljguJhMKs=" alt="jack sparrow" /></Link>
       <Link to='/FamilyMovies'> <img className={Styles.allMovies} src="http://www.seret.co.il/images/movies/Mulan2020/Mulan20201.jpg" alt="Mulan" /></Link>
       <Link to='/WatchAtHome'> <img className={Styles.allMovies} src="https://upload.wikimedia.org/wikipedia/he/b/b3/Toy_Story_3_Poster_Israel.jpg" alt="Toy Story" /></Link>
       <Link to='/MoreMovies'> <img className={Styles.allMovies} src="https://lumiere-a.akamaihd.net/v1/images/image_edd67929.jpeg?region=0,0,540,810" alt="Aladin" /></Link>
        <div className={Styles.anima}></div>
    </div>
  );
}
