import { useState, useEffect } from "react";

export default function useFetch(URL){
    const [data, setData] = useState([]);
    useEffect(()=>{
        getProducts()
    },[])
    const getProducts = ()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setData(data);
        })
        .catch(err=>console.log(err))
    }
    return [data, setData];
}