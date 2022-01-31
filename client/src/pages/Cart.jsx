
export default function Cart({data, subtractProducts, cartTotalPrice, cartTotalQuantity}) {

   
    const elements = data.map((product,i)=>{
    if(product.added){
    return (<tr key={i}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><img width='150px' height='150px' src={product.img}/></td>
                <td><img onClick={()=>{subtractProducts(i)}} width='30px' height='30px' src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1642760171~hmac=d6ea68a3295a3284bd9109cfd455121f'/></td>
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
