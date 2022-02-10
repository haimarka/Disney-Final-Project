import { useEffect } from "react";
import axios from "axios";

export default function Cart({
  productsData, subtractProducts, cartTotalPrice,
   cartTotalQuantity,usersData, setUsersData, auth}) {
     
    // useEffect(()=>{
    //   getCart();
    // },[])

    // const getCart = () => {
    //   axios 
    //   .get('http://localhost:8082/users/cart')
    //   .then(res=>{
    //       for (let i = 0; i < res.data.length; i++) {
    //         if(auth.email == res.data[i].email) {
    //           console.log(res);
    //           setUsersData(res.data[i].cart)
    //         }
    //       }
    //   })
    //   .catch(err=>console.log(err.response))
    // }
    console.log(usersData);
    const removeProductFromCart = (product) => { 
      console.log('works');
      // console.log(usersData.cart);
      // debugger
      let tempCart = [...usersData.cart]; 
      const removedProduct = product;
      tempCart.pop(removedProduct);
      axios 
      .patch(`http://localhost:8082/users/cart/patch/pull/${auth.email}`,removedProduct)
      .then(res=>{
          console.log(res);
          setUsersData(tempCart);
          console.log(tempCart);
      })
      .catch(err=>console.log(err.response))
    }
 
    
    const elements = usersData.cart.map((product,i)=>{
    if(product.added){
    return (<tr key={i}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><img width='150px' height='150px' src={product.img}/></td>
                <td><img onClick={()=>{subtractProducts(i);removeProductFromCart(product)}} width='30px' height='30px' src='https://cdn-icons-png.flaticon.com/512/1828/1828899.png'/></td>
        </tr>)}})
 

  return (
    <div>
        <h1>Cart</h1>
        <table style={{border:'solid 2px black',marginLeft:'25%'}}>
    <tbody>
    <tr>
    <th><label>Name:</label></th>
    <th><label>Price:</label></th>
    <th> Quantity:</th>
    <th> image:</th>


    </tr>
        {elements}
        </tbody>
    </table>
        <h2>total Quantity: {cartTotalQuantity}</h2>
           <h2>total Price: {cartTotalPrice}</h2>
    </div>
  );
}
