import { useEffect } from "react";
import axios from "axios";
import Styles from '../CSS/Styles.module.css'


export default function Cart({
  productsData, subtractProducts, cartTotalPrice,
   cartTotalQuantity,usersData, setUsersData,
    auth}) {
      
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
    
    const elements = usersData.cart.map((product,i)=>{
    if(product.added){
    return (<tr key={i}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><img width='150px' height='150px' src={product.img}/></td>
                <td><img onClick={()=>{subtractProducts(i);removeProductFromCart(i,product)}} width='30px' height='30px' src='https://cdn-icons-png.flaticon.com/512/1828/1828899.png'/></td>
        </tr>)}})
 

  return (
    <div className={Styles.cartConteiner}>
        <h1>Cart</h1>
        <table style={{border:'solid 2px black',marginLeft:'35%'}}>
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
