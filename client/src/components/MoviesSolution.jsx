import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {VideoFrame} from '.';

 const MoviesSolution = ({ movieTrailer, setMovieTrailer, auth, name, movieSrc, setMovieSrc}) => {
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
              {/* https://s1.sratim.video/movie/SD/480/2041.mp4?token=Ly_4L7A4ABOH2BgrWm0hpg&time=1643243598&uid= */}
         <Link to='/AllMovies'><button style={{marginLeft:'1%'}} onClick={()=>{setMovieTrailer(null);setMovieSrc(null)}}>Go Back</button></Link>
         <button style={{marginLeft:'10%'}}><a style={{textDecoration:'none',color: 'black'}} href={movieSrc}>Watch Movie</a></button>

        </div>
  );
}

export default MoviesSolution;
