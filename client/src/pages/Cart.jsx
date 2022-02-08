import { useEffect } from "react";
import axios from "axios";

export default function Cart({
  productsData, subtractProducts, cartTotalPrice,
   cartTotalQuantity,usersData, setUsersData}) {
    // useEffect(()=>{
    //   getCart();
    // },[])

    // const getCart = () => {
    //   axios 
    //   .get('http://localhost:8082/users/cart')
    //   .then(res=>{
    //       setUsersData(res.data);
    //       console.log(usersData);
    //       console.log(usersData[0].cart);
    //   })
    //   .catch(err=>console.log(err.response))
    // }
    const array = usersData[0].cart;

    const elements = array.map((product,i)=>{
    if(product.added){
    return (<tr key={i}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><img width='150px' height='150px' src={product.img}/></td>
                <td><img onClick={()=>{subtractProducts(i)}} width='30px' height='30px' src='https://cdn-icons-png.flaticon.com/512/1828/1828899.png'/></td>
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
