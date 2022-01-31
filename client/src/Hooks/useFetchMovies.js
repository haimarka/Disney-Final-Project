import { useState, useEffect } from "react";

export default function useFetchMovies(URL){
    const [moviesData, setMoviesData] = useState([]);

    useEffect(()=>{
        getProducts()
    },[])
    
    const getProducts = ()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMoviesData(data)
        })
        .catch(err=>console.log(err))
    }
    return [moviesData];
}