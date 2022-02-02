import { useState } from 'react'
import axios from 'axios';
import Styles from '../CSS/Styles.module.css'


export default function Store({ data,  cartTotalPrice, cartTotalQuantity, colorReversal,
  fontIncrease, addProducts, subtractProducts}) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [message, setMessage] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const getProducts = ()=>{
      axios
      .post('http://localhost:8082/products',{
        name, price, quantity, message, imageUrl
      })
      .then(res=>console.log(res))
      .catch(err=>console.log(err.response))
    }
    const elements =  data.map((product,i)=>{
    return (
        <div style={{border:'solid 3px black'}} key={product.id}>
                <img width='200px' height='200px' src={product.img} />
                <p style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>{product.name}</p>
                <p style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>{product.price}</p>
                <p style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>{product.quantity}</p>
                <img onClick={()=>{subtractProducts(i)}} width='30px' height='30px' src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1642760171~hmac=d6ea68a3295a3284bd9109cfd455121f'/>
                <img onClick={()=>addProducts(i)} width='30px' height='30px' src='https://cdn-icons.flaticon.com/png/128/1665/premium/1665629.png?token=exp=1642759890~hmac=433986537e14b06ba269d7c34a59ab12'/>
                <p>{product.message}</p>
            </div>)
        })
  return (
    <div>
        <h1 style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>Store</h1>
        <section className={Styles.displayProducts}>
           {elements}
           <h2>total Quantity: {cartTotalQuantity}</h2>
           <h2>total Price: {cartTotalPrice}</h2>
        </section>
        <form onSubmit={(e)=>{
          e.preventDefault();
          console.log(name, price, quantity, message, imageUrl);
          getProducts();
        }}>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter name' /><br />
            <input onChange={(e)=>setPrice(e.target.value)} type="text" placeholder='enter price' /><br />
            <input onChange={(e)=>setQuantity(e.target.value)} type="text" placeholder='enter quantity' /><br />
            <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='enter message' /><br />
            <input onChange={(e)=>setImageUrl(e.target.value)} type='text' placeholder='enter image URL' /><br />
            <input type="submit" value="upload" />
        </form>
    </div>
  );
}
