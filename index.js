const express = require("express"),
app = express(),
PORT = 8082;

const productsFunctions = require('./Utiles/ProductsFunctions');
const messagesFunctions = require('./Utiles/ContactUsFunctions');
const MoviesFunctions = require('./Utiles/MoviesFunctions');

// products
app.get('/products',(req,res)=>{ 
    productsFunctions.getProductsArray(req,res);
});
  
app.post("/products",(req,res)=>{
    productsFunctions.createProdactToArray(req,res);
});
 




// contact us 
app.get('/ContactUs',(req,res)=>{ 
    messagesFunctions.getMessages(req,res);
});


app.post("/ContactUs",(req,res)=>{
    messagesFunctions.postMessages(req,res);
});






// Movies 
app.get('/Movies',(req,res)=>{ 
    MoviesFunctions.getMovies(req,res);
});


app.post("/Movies",(req,res)=>{
    MoviesFunctions.postMovies(req,res);
});


app.listen(PORT ,()=>{
    console.log(`listening on port ${PORT}`);
});