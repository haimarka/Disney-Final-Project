import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Styles from '../CSS/Styles.module.css'
// import CreateNewProduct from '../components/CreateNewProduct';

export default function Store({
  cartTotalPrice, cartTotalQuantity, colorReversal,
  fontIncrease, subtractProducts,
   productsData, setProductsData,
  usersData, setUsersData, auth, calculatePrice, addProductsToStore}) {
           
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [message, setMessage] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [Disable,setDisable] = useState(false);
    const [showForm, setShowForm] = useState(null);
    const [id, setId] = useState('');

      const isValid = ()=>{
      return (name.length && price.length
          && imageUrl.length )
      }
      const postProducts = ()=>{
        let temp = [...productsData];
        const newProduct = { name, price, img: imageUrl, quantity: quantity, message: message, added:false};
        temp.push(newProduct); 
        axios
        .post('http://localhost:8082/products',newProduct)
        .then(res=>{
          console.log(res);
        setProductsData(temp);
      })        
        .catch(err=>console.log(err.response))
      }
      const updateProdact = (id)=>{
        let temp = [...productsData];
        const updateProduct = { name, price, img: imageUrl, quantity: quantity, message: message, added:false}
        temp.push(updateProduct);

        axios
        .patch(`http://localhost:8082/products/${id}`,updateProduct)
        .then(res=>{
          console.log(res);
          setProductsData(temp);
        })
        .catch(err=>{
          console.log(err.response);
        })
      }
      const addProductToCart = (product) => {
        if(auth){
        axios 
        .patch(`http://localhost:8082/users/cart/patch/push/${auth.email}`,product)
        .then(res=>{
          console.log(res);
            setUsersData( {...usersData,cart:[...usersData.cart,product]});
        })
        .catch(err=>console.log(err.response))
      }
      else{
        alert('sign in or sign up')
      }
      }
      const removeProductFromCart = (i,product) => {
        if(auth){
        let tempCart = [...usersData.cart];
        tempCart.splice(i,1);
        axios 
        .patch(`http://localhost:8082/users/cart/patch/pull/${auth.email}`,product)
        .then(res=>{
            console.log(res);
            setUsersData({...usersData,cart:tempCart});
        })
        .catch(err=>console.log(err.response))
      }
      else{
        alert('sign in or sign up')
      }
      }
      
      console.log(auth);

      const elements = productsData.map((product,i)=>{
        return (
            <div  style={{border:'solid 3px black'}} key={i}>
                    <img width='200px' height='200px' src={product.img} />
                    <p style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>{product.name}</p>
                    <p style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>{product.price}</p>
                    <p style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>{product.quantity}</p>
                    <img onClick={()=>{
                      subtractProducts(i);
                      removeProductFromCart(product,i);
                      }} width='30px' height='30px' src='https://img.icons8.com/ios-filled/344/minus.png'/>
                    <img onClick={()=>{
                      addProductsToStore(i);
                      addProductToCart(product);
                      }} width='30px' height='30px' src='https://img.icons8.com/ios-filled/344/plus.png'/>
                    <p>{product.message}</p>
                    
                    {showForm == product._id?
                    <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(isValid){
                      console.log(product._id);
                      updateProdact(product._id);
                    }
                    }}>
                    <input onChange={(e)=>{setName(e.target.value);setDisable(isValid())}} defaultValue={product.name} type="text" placeholder='enter name' /><br />
                    <input onChange={(e)=>{setPrice(e.target.value);setDisable(isValid())}} defaultValue={product.price} type="number" placeholder='enter price' /><br />
                    <input onChange={(e)=>{setQuantity(e.target.value);setDisable(isValid())}} defaultValue={product.quantity} type='number' placeholder='enter quantity' /><br />
                    <input onChange={(e)=>{setMessage(e.target.value);setDisable(isValid())}} defaultValue={product.message} type='text' placeholder='enter message' /><br />
                    <input onChange={(e)=>{setImageUrl(e.target.value);setDisable(isValid())}} defaultValue={product.img} type='text' placeholder='enter image URL' /><br />
                    <input disabled={true} defaultValue={false}/><br />
                    <input disabled={isValid()?!Disable:Disable} type="submit" value="update" /><br /><br />
                    <button onClick={()=>setShowForm(false)}>hide edit</button>
                    </form>:
                    <button onClick={()=>{
                      setShowForm(product._id);
                      setName(product.name)
                      setPrice(product.price)
                      setImageUrl(product.img)
                      setId(product._id);
                      }}>edit</button>}
                </div>)
            })
  return (
    <div className={Styles.storeContainer}>
        <h1 style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>Store</h1>
        <section className={Styles.displayProducts}>
           {elements}
           {/* <h2>total Quantity: {cartTotalQuantity}</h2>
           <h2>total Price: {cartTotalPrice}</h2> */}
        </section>
        {/* {auth.email == "1@1.1"? */}
          <section style={{marginTop:'400px'}}>
            <h1>Create New Product</h1>
            {/* {auth.email == "1@1.1"?:''} */}
            
            {showForm?
              <form onSubmit={(e)=>{
                e.preventDefault();
                postProducts();
              }}>
                  <input onBlur={(e)=>setName(e.target.value)} type="text" placeholder='enter name' /><br />
                  <input onBlur={(e)=>setPrice(e.target.value)} type="number" placeholder='enter price' /><br />
                  <input onBlur={(e)=>setQuantity(e.target.value)} type="number" placeholder='enter quantity' /><br />
                  <input onBlur={(e)=>setMessage(e.target.value)} type="text" placeholder='enter message' /><br />
                  <input onBlur={(e)=>setImageUrl(e.target.value)} type='text' placeholder='enter image URL' /><br />
                  <input disabled={true} defaultValue={false}/><br />
                  <input type="submit" value="create" /><br /><br />
                  <button onClick={()=>setShowForm(false)}>hide form</button>
              </form>:
            <button onClick={()=>setShowForm(true)}>create product</button>}
        </section>
    </div>
  );
}
