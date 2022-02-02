import React,{useState} from 'react';
import axios from 'axios'

export default function CreateMovie({getProducts,defaultCategory, added}) {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [trailerSrc, setTrailerSrc] = useState('')
    const [time, setTime] = useState('')
    const [message, setMessage] = useState('')
    const [movieSrc, setMovieSrc] = useState('')
    // const [categories, setCategories] = useState(defaultCategory)
    const [showForm, setShowForm] = useState(false)

    const postProducts = ()=>{
        axios
        .post('http://localhost:8082/Movies',{
          id, name, imageUrl, trailerSrc, time, message, movieSrc, categories:defaultCategory, added:added
        })
        .then(res=>{
          console.log(res);
          getProducts()
        })
        .catch(err=>console.log(err.response))
      }
      
  return (
    <div>
        <h2>add movie</h2>
        {showForm?<form onSubmit={(e)=>{
            e.preventDefault();
            console.log(id, name, imageUrl, trailerSrc, time, message, movieSrc);
            postProducts();}}>
            <input onChange={(e)=>setId(e.target.value)} type="text" placeholder='enter id' /><br />
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter name' /><br />
            <input onChange={(e)=>setImageUrl(e.target.value)} type='text' placeholder='enter image URL' /><br />
            <input onChange={(e)=>setTrailerSrc(e.target.value)} type="text" placeholder='enter trailer source' /><br />
            <input onChange={(e)=>setTime(e.target.value)} type="text" placeholder='enter time' /><br />
            <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='enter message' /><br />
            <input onChange={(e)=>setMovieSrc(e.target.value)} type="text" placeholder='enter movie source' /><br />
            <input disabled={true} defaultValue={added} type="text" placeholder='enter false' /><br />
            <input disabled={true} defaultValue={defaultCategory} type="text" /><br />
            <input type="submit" value="upload" /><br /><br />
            <button onClick={()=>setShowForm(false)}>hide form</button>
        </form>:<button onClick={()=>setShowForm(true)}>add movie</button>}
    </div>
  );
}

