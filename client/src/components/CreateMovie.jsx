import React,{useState} from 'react';
import axios from 'axios'

export default function CreateMovie() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [trailerSrc, setTrailerSrc] = useState('')
    const [time, setTime] = useState('')
    const [message, setMessage] = useState('')
    const [movieSrc, setMovieSrc] = useState('')
    const [categories, setCategories] = useState('')
    const [showForm, setShowForm] = useState(false)

    const getProducts = ()=>{
        axios
        .post('http://localhost:8082/Movies',{
          id, name, imageUrl, trailerSrc, time, message, movieSrc, categories
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err.response))
      }
  return (
    <div>
        {showForm?<form onSubmit={(e)=>{
            e.preventDefault();
            console.log(id, name, imageUrl, trailerSrc, time, message, movieSrc, categories);
            getProducts();}}>
            <input onChange={(e)=>setId(e.target.value)} type="text" placeholder='enter id' /><br />
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter name' /><br />
            <input onChange={(e)=>setImageUrl(e.target.value)} type='text' placeholder='enter image URL' /><br />
            <input onChange={(e)=>setTrailerSrc(e.target.value)} type="text" placeholder='enter trailer source' /><br />
            <input onChange={(e)=>setTime(e.target.value)} type="text" placeholder='enter time' /><br />
            <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='enter message' /><br />
            <input onChange={(e)=>setMovieSrc(e.target.value)} type="text" placeholder='enter movie source' /><br />
            <input onChange={(e)=>setCategories(e.target.value)} type="text" placeholder='enter categorey' /><br />
            <input type="submit" value="upload" /><br /><br />
            <button onClick={()=>setShowForm(false)}>hide form</button>
        </form>:<button onClick={()=>setShowForm(true)}>add movie</button>}
    </div>
  );
}

// {
//     "id": 0,
//     "name": "Lion king 1 (1994)",
//     "img": "https://www.dvdplanetstore.pk/wp-content/uploads/2017/12/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg",
//     "src": "https://www.youtube.com/embed/7pTs8v-fFw0",
//     "time": "1:05",
//     "added": false,
//     "message": "",
//     "watchMovie": "https://s2.sratim.video/movie/SD/480/5317.mp4?token=vVEaigUyvkepbVcIOvgZPQ&time=1643744587&uid=",
//     "categories": "SelectedMovies"
// },
