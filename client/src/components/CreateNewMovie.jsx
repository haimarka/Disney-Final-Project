import React,{useState} from 'react';
import axios from 'axios'

export default function CreateNewMovie({defaultCategory, added, moviesData, setMoviesData}) {
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [trailerSrc, setTrailerSrc] = useState('')
    const [time, setTime] = useState('')
    const [message, setMessage] = useState('')
    const [movieSrc, setMovieSrc] = useState('')
    const [summary, setSummary] = useState('')
    const [showForm, setShowForm] = useState(false)

    const postNewMovie = ()=>{
      let temp = [...moviesData];
      const newMovie = { name, img:imageUrl, trailerSrc:trailerSrc, time,added:false, message:'', movieSrc:movieSrc, categories:defaultCategory ,summary:summary};
      temp.push(newMovie);
        axios
        .post('http://localhost:8082/Movies',newMovie)
        .then(res=>{
          console.log(res);
          setMoviesData(temp)
        })
        .catch(err=>console.log(err.response))
      }
      
  return (
    <div>
        <h2>add movie</h2>
        {showForm?<form onSubmit={(e)=>{
            e.preventDefault();
            console.log( name, imageUrl, trailerSrc, time, message, movieSrc, summary);
            postNewMovie();}}>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter name' /><br />
            <input onChange={(e)=>setImageUrl(e.target.value)} type='text' placeholder='enter image URL' /><br />
            <input onChange={(e)=>setTrailerSrc(e.target.value)} type="text" placeholder='enter trailer source' /><br />
            <input onChange={(e)=>setMovieSrc(e.target.value)} type="text" placeholder='enter movie source' /><br />
            <input onChange={(e)=>setSummary(e.target.value)} type="text" placeholder='enter movie summary' /><br />
            <input onChange={(e)=>setTime(e.target.value)} type="number" placeholder='enter time' /><br />
            <input onChange={(e)=>setMessage(e.target.value)} disabled={true} type="text" placeholder='enter message' /><br />
            <input disabled={true} defaultValue={added} type="text" placeholder='added movie false' /><br />
            <input disabled={true} defaultValue={defaultCategory} type="text" /><br />
            <input type="submit" value="upload" /><br /><br />
            <button onClick={()=>setShowForm(false)}>hide form</button>
        </form>:<button onClick={()=>setShowForm(true)}>add movie</button>}
    </div>
  );
}

