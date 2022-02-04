import React,{useState} from 'react';
import axios from 'axios';
import Styles from '../CSS/Styles.module.css'

export default function CreateNewProduct({
    getProducts, colorReversal, productsData,
     fontIncrease, subtractProducts, addProducts,
     cartTotalQuantity, cartTotalPrice, usersData,productId, setProductsData}) {
         
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [message, setMessage] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [showForm, setShowForm] = useState(false)

      const postProducts = ()=>{
        let temp = [...productsData];
        const newProduct = {id, name, price, quantity, message, img: imageUrl, added:false};
        temp.push(newProduct);
        axios
        .post('http://localhost:8082/products',newProduct)
        .then(res=>{
          console.log(res);
        setProductsData(temp);
      })        
        .catch(err=>console.log(err.response))
      }


      const updateProdact = (updateProduct)=>{
        let temp = [...productsData];
        updateProduct = {id, name, price, quantity, message, img: imageUrl, added:false}
        axios
        .patch(`http://localhost:8082/products/${productId}`,updateProduct)
        .then(res=>{
          console.log(res);
          console.log(productId);
          setProductsData(temp)
        })
        .catch(err=>console.log(err.response))
      }


      const elements = productsData.map((product,i)=>{
        return (
            <div style={{border:'solid 3px black'}} key={i}>
                    <img width='200px' height='200px' src={product.img} />
                    <p style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>{product.name}</p>
                    <p style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>{product.price}</p>
                    <p style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>{product.quantity}</p>
                    <img onClick={()=>{subtractProducts(i)}} width='30px' height='30px' src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1642760171~hmac=d6ea68a3295a3284bd9109cfd455121f'/>
                    <img onClick={()=>addProducts(i)} width='30px' height='30px' src='https://cdn-icons.flaticon.com/png/128/1665/premium/1665629.png?token=exp=1642759890~hmac=433986537e14b06ba269d7c34a59ab12'/>
                    <p>{product.message}</p>

                    {showForm?<form onSubmit={(e)=>{
                    e.preventDefault();
                    console.log(name, price, quantity, message, imageUrl);
                      updateProdact(product);
                    }}>
                    <input onBlur={(e)=>setId(e.target.value)} defaultValue={product._id} type="number" placeholder='enter id' /><br />
                    <input onBlur={(e)=>setName(e.target.value)} defaultValue={product.name} type="text" placeholder='enter name' /><br />
                    <input onBlur={(e)=>setPrice(e.target.value)} defaultValue={product.price} type="number" placeholder='enter price' /><br />
                    <input onBlur={(e)=>setQuantity(e.target.value)} defaultValue={product.quantity} type="number" placeholder='enter quantity' /><br />
                    <input onBlur={(e)=>setImageUrl(e.target.value)} type='text' placeholder='enter image URL' /><br />
                    <input onBlur={(e)=>setMessage(e.target.value)} defaultValue={product.message} type="text" placeholder='enter message' /><br />
                    <input disabled={true} defaultValue={false}/><br />
                    <input type="submit" value="update" /><br /><br />
                    <button onClick={()=>setShowForm(false)}>hide form</button>
                    </form>:<button onClick={()=>setShowForm(true)}>edit</button>}
                </div>)
            })
  return (
    <div>
        <h1>Create New Product</h1>
        <h1 style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>Store</h1>
        <section className={Styles.displayProducts}>
           {elements}
           <h2>total Quantity: {cartTotalQuantity}</h2>
           <h2>total Price: {cartTotalPrice}</h2>
        </section>
        <h2>add product</h2>

        {showForm?<form onSubmit={(e)=>{
          e.preventDefault();
          console.log(name, price, quantity, message, imageUrl);
          postProducts();

        }}>
            <input onBlur={(e)=>setName(e.target.value)} type="text" placeholder='enter name' /><br />
            <input onBlur={(e)=>setPrice(e.target.value)} type="number" placeholder='enter price' /><br />
            <input onBlur={(e)=>setQuantity(e.target.value)} type="number" placeholder='enter quantity' /><br />
            <input onBlur={(e)=>setImageUrl(e.target.value)} type='text' placeholder='enter image URL' /><br />
            <input onBlur={(e)=>setMessage(e.target.value)} type="text" placeholder='enter message' /><br />
            <input disabled={true} defaultValue={false}/><br />
            <input type="submit" value="create" /><br /><br />
            <button onClick={()=>setShowForm(false)}>hide form</button>
        </form>:<button onClick={()=>setShowForm(true)}>add product</button>}

        
    </div>
  );
}
