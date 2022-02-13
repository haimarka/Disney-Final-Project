import React,{useState} from 'react';
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
    const [Disable,setDisable] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [id, setId] = useState('');

      const isValid = ()=>{
      return (name.length && price.length
          && imageUrl.length )
      }
      const postProducts = ()=>{
        let temp = [...productsData];
        const newProduct = { name, price, img: imageUrl, added:false};
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
        const updateProduct = { name, price, img: imageUrl, added:false}
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
        axios 
        .patch(`http://localhost:8082/users/cart/patch/push/${auth.email}`,product)
        .then(res=>{
            setUsersData( {...usersData,cart:[...usersData.cart,product]});
        })
        .catch(err=>console.log(err.response))
      }

      // const removeProductFromCart = (product,i) => { 
      //   let tempCart = [...usersData.cart];
      //   tempCart.splice(i,1);
      //   axios 
      //   .patch(`http://localhost:8082/users/cart/patch/pull/${auth.email}`,product)
      //   .then(res=>{
      //       console.log(res);
      //       setUsersData(tempCart);
      //   })
      //   .catch(err=>console.log(err.response))
      // }

      const removeProductFromCart = (i,product) => {
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
                      }} width='30px' height='30px' src='https://cdn-icons-png.flaticon.com/512/1828/1828899.png'/>
                    <img onClick={()=>{
                      addProductsToStore(i);
                      addProductToCart(product);
                      }} width='30px' height='30px' src='https://cdn-icons.flaticon.com/png/512/1008/premium/1008978.png?token=exp=1644335628~hmac=e0e6ddd7be4532076af0125b94e393d1'/>
                    <p>{product.message}</p>
                    
                    {showForm?
                    <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(isValid){
                      console.log(product._id);
                      updateProdact(product._id);
                    }
                    }}>
                    <input onChange={(e)=>{setName(e.target.value);setDisable(isValid())}} defaultValue={product.name} type="text" placeholder='enter name' /><br />
                    <input onChange={(e)=>{setPrice(e.target.value);setDisable(isValid())}} defaultValue={product.price} type="number" placeholder='enter price' /><br />
                    <input onChange={(e)=>{setImageUrl(e.target.value);setDisable(isValid())}} defaultValue={product.img} type='text' placeholder='enter image URL' /><br />
                    <input disabled={true} defaultValue={false}/><br />
                    <input disabled={isValid()?!Disable:Disable} type="submit" value="update" /><br /><br />
                    <button onClick={()=>setShowForm(false)}>hide edit</button>
                    </form>:
                    <button onClick={()=>{
                      setShowForm(true);
                      setId(product._id);
                      }}>edit</button>}
                </div>)
            })
  return (
    <div className={Styles.storeContainer}>
        <h1 style={{color: colorReversal ? "white" : "black",fontSize: fontIncrease? '300%':'150%'}}>Store</h1>
        <section className={Styles.displayProducts}>
           {elements}
           <h2>total Quantity: {cartTotalQuantity}</h2>
           <h2>total Price: {cartTotalPrice}</h2>
        </section>
          <section>
            <h1>Create New Product</h1>
            {showForm?
              <form onSubmit={(e)=>{
                e.preventDefault();
                postProducts();
              }}>
                  <input onBlur={(e)=>setName(e.target.value)} type="text" placeholder='enter name' /><br />
                  <input onBlur={(e)=>setPrice(e.target.value)} type="number" placeholder='enter price' /><br />
                  <input onBlur={(e)=>setImageUrl(e.target.value)} type='text' placeholder='enter image URL' /><br />
                  <input disabled={true} defaultValue={false}/><br />
                  <input type="submit" value="create" /><br /><br />
                  <button onClick={()=>setShowForm(false)}>hide form</button>
              </form>:
            <button onClick={()=>setShowForm(true)}>add product</button>}
        </section>
    </div>
  );

  // return (
  //   <div>
  //       <CreateNewProduct 
  //              addProducts={addProducts}
  //              subtractProducts={subtractProducts}
  //              fontIncrease={fontIncrease}
  //              colorReversal={colorReversal}
  //              cartTotalPrice={cartTotalPrice}
  //              cartTotalQuantity={cartTotalQuantity} 
  //              productsData={productsData} 
  //              setProductsData={setProductsData}
  //              usersData={usersData}
  //              setUsersData={setUsersData}
  //              getProducts={getProducts}
  //              updateProdact={updateProdact}
  //              auth={auth}
  //              />
  //   </div>
  // );
}
