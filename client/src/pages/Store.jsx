import CreateNewProduct from '../components/CreateNewProduct';

export default function Store({cartTotalPrice, cartTotalQuantity, colorReversal,
  fontIncrease, addProducts, subtractProducts, productsData, setProductsData,
  usersData, getProducts, updateProdact, setUsersData, auth}) {
  return (
    <div>
        <CreateNewProduct 
               addProducts={addProducts}
               subtractProducts={subtractProducts}
               fontIncrease={fontIncrease}
               colorReversal={colorReversal}
               cartTotalPrice={cartTotalPrice}
               cartTotalQuantity={cartTotalQuantity} 
               productsData={productsData} 
               setProductsData={setProductsData}
               usersData={usersData}
               setUsersData={setUsersData}
               getProducts={getProducts}
               updateProdact={updateProdact}
               auth={auth}
               />
    </div>
  );
}
