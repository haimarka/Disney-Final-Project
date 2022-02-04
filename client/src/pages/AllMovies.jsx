import { useState } from 'react';
import { Link} from 'react-router-dom';
import Styles from '../CSS/Styles.module.css'
import CreateNewUser from '../components/CreateNewUser';

export default function AllMovies({fontIncrease, colorReversal, usersData, auth, setUsersData}) {   
  const [hoverState, setHoverState] = useState({
    selectedMovies: false,
    inCinemas: false,
    familyMovies: false,
    watchAtHome: false,
    moreMovies: false
  });
  

  const allMoviesData = {
    selectedMovies: {
      link:'/SelectedMovies',
      text:'selected movies',
      src: 'https://www.dvdplanetstore.pk/wp-content/uploads/2017/12/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg',
      alt:'lion king'
    },
    inCinemas: {
      link:'/InCinemas',
      text:'In Cinemas',
      src:'https://media.istockphoto.com/photos/pirates-of-the-caribbean-on-stranger-tides-poster-picture-id458587791?k=20&m=458587791&s=612x612&w=0&h=fUnYvj0cF1ATx5BTI2dNyerc-g7KjxDAWUljguJhMKs=',
      alt:'jeck saprow'
    },
    familyMovies: {
      link:'/FamilyMovies',
      text:'Family Movies',
      src:'http://www.seret.co.il/images/movies/Mulan2020/Mulan20201.jpg',
      alt:'Mulan'
    },
    watchAtHome: {
      link:'/WatchAtHome',
      text:'Watch At Home',
      src:'https://upload.wikimedia.org/wikipedia/he/b/b3/Toy_Story_3_Poster_Israel.jpg',
      alt:'Toy story'
    },
    moreMovies: {
      link:'/MoreMovies',
      text:'More Movies',
      src:'https://lumiere-a.akamaihd.net/v1/images/image_edd67929.jpeg?region=0,0,540,810',
      alt:'Aladin'
    }
  };


  const changeHoverState=(key,state)=>{
    const stateClone = {...hoverState, [key]:state};
    setHoverState(stateClone);
  };

  return (
    <div className={Styles.allMoviesContainer}>
        <h1 style={{fontSize: fontIncrease? '300%':'200%',color: colorReversal? 'white':'black',transition:'1s'}}>All Movies</h1>
        
        {Object.keys(allMoviesData).map((key)=>
           <Link key={key} to={allMoviesData[key].link}>
              <img
                  onMouseLeave={()=>changeHoverState(key,false)}
                  onMouseEnter={()=>changeHoverState(key,true)}
                  className={Styles.allMovies} 
                  src={allMoviesData[key].src}
                  alt={allMoviesData[key].alt} 
                  />
              <h3 className={hoverState[key]?Styles.afterHover:Styles.beforeHover}>{allMoviesData[key].text}</h3>
          </Link>
        )}
        <CreateNewUser 
          auth={auth}
          usersData={usersData} 
          setUsersData={setUsersData}
           />
    </div>
  );
}
