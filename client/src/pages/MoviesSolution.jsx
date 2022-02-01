import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import {VideoFrame} from '../components';

 const MoviesSolution = ({ movieTrailer, setMovieTrailer, auth, name, movieSrc, setMovieSrc}) => {
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
              {/* {movieSrc?<iframe src={movieSrc} width="540" height="450"></iframe>:null} */}
              {/* https://s1.sratim.video/movie/SD/480/2041.mp4?token=Ly_4L7A4ABOH2BgrWm0hpg&time=1643243598&uid= */}
         <button onClick={()=>{
           setMovieTrailer(null);
           setMovieSrc(null);
           history.goBack()}} style={{marginLeft:'1%'}}>Go Back</button>

         <button style={{marginLeft:'10%'}}><a style={{textDecoration:'none',color: 'black'}} href={movieSrc}>Watch Movie</a></button>

        </div>
  );
}

export default MoviesSolution;
