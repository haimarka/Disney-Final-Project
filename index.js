const cors = require('cors'); // know how exept every url you send
const bodyParser = require('body-parser'); // parsing json body to object
const express = require("express");
const app = express();
const PORT = 8082;


app.use(cors({origin: '*'}));
app.use(bodyParser.json());

const productsFunctions = require('./functions/ProductsFunctions');
const messagesFunctions = require('./functions/ContactUsFunctions');
const MoviesFunctions = require('./functions/MoviesFunctions');

// products
app.get('/products',(req,res)=>{ 
    productsFunctions.getProductsArray(req,res);
});
  
app.post("/products",(req,res)=>{
    productsFunctions.createProdactToArray(req,res);
});

app.delete('/products/:id',(req,res)=>{
    productsFunctions.deleteProduct(req,res);
});



// contact us 
app.get('/contact-us',(req,res)=>{ 
    messagesFunctions.getMessages(req,res);
});

app.post("/contact-us",(req,res)=>{
    messagesFunctions.postMessages(req,res);
});

app.delete('/contact-us/:id',(req,res)=>{
    messagesFunctions.deleteMessages(req,res);
});






// Movies 
app.get('/movies',(req,res)=>{ 
    MoviesFunctions.getMovies(req,res);
});


app.post("/movies",(req,res)=>{
    MoviesFunctions.postMovies(req,res);
});

app.delete('/movies/:id',(req,res)=>{
    MoviesFunctions.deleteMovie(req,res);
});

app.get('*',(req,res)=>{ 
    res.send('error');
});


app.listen(PORT ,()=>{
    console.log(`listening on port ${PORT}`);
});