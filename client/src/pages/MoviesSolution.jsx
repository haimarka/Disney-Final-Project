import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import {VideoFrame} from '../components';

 const MoviesSolution = ({ movieTrailer, setMovieTrailer, auth,
   name, movieSrc, setMovieSrc, movieSummary,
    setMovieSummary}) => {
  const history = useHistory();  
  if(!auth){
     return <Redirect to='/LogIn'/>
    }

      const videoSrc = movieTrailer;
// 'https://www.renderhub.com/squir/disney-cinderella-castle/disney-cinderella-castle-01.jpg';

  return (
        <div>
             <div style={{marginTop:'1%'}}>
             <VideoFrame
                  src={videoSrc}
                  title={name}
                  width='720'
                  height='420'
              /></div> <br />
              <h3>תקציר</h3>
              <p style={{width:'50%', marginLeft:'25%'}}>{movieSummary}</p>
         <button onClick={()=>{
           setMovieTrailer(null);
           setMovieSrc(null);
           setMovieSummary(null);
           history.goBack()}} style={{marginLeft:'1%'}}>Go Back</button>

         <button style={{marginLeft:'10%'}}><a style={{textDecoration:'none',color: 'black'}} href={movieSrc}>Watch Movie</a></button>

        </div>
  );
}

export default MoviesSolution;
