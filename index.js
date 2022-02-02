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
    productsFunctions.getProducts(req,res);
});

app.get("/products/:id",(req,res)=>{
    productsFunctions.getSingleProduct(req,res)
});
  
app.post("/products",(req,res)=>{
    productsFunctions.createProdacts(req,res);
});

app.delete('/products/:id',(req,res)=>{
    productsFunctions.deleteProduct(req,res);
});

app.patch('/products/:id',(req,res)=>{
    productsFunctions.updateSingleProduct(req,res);
});


// Movies 
app.get('/movies',(req,res)=>{ 
    MoviesFunctions.getMovies(req,res);
});

app.get("/movies/:id",(req,res)=>{
    MoviesFunctions.getSingleMovie(req,res)
});

app.post("/movies",(req,res)=>{
    MoviesFunctions.createMovies(req,res);
});

app.delete('/movies/:id',(req,res)=>{
    MoviesFunctions.deleteMovie(req,res);
});

app.patch('/movies/:id',(req,res)=>{
    MoviesFunctions.updateSingleMovie(req,res);
});


// contact us 
app.get('/contact-us',(req,res)=>{ 
    messagesFunctions.getMessages(req,res);
});

app.post("/contact-us",(req,res)=>{
    messagesFunctions.createMessages(req,res);
});

app.delete('/contact-us/:id',(req,res)=>{
    messagesFunctions.deleteMessages(req,res);
});


app.get('*',(req,res)=>{ 
    res.send('ERROR, page not found');
});

app.listen(PORT ,()=>{
    console.log(`listening on port ${PORT}`);
});