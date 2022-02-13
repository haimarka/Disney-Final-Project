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
const usersFunctions = require('./functions/usersFunctions');

// Products
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


// Contact us 
app.get('/contact-us',(req,res)=>{ 
    messagesFunctions.getMessages(req,res);
});

app.post("/contact-us",(req,res)=>{
    messagesFunctions.createMessages(req,res);
});

app.delete('/contact-us/:id',(req,res)=>{
    messagesFunctions.deleteMessages(req,res);
});


// Users
app.get("/users",(req,res)=>{
    usersFunctions.getUsers(req,res);
});

app.post("/users",(req,res)=>{
    usersFunctions.createUser(req,res);
});

app.delete('/users/:id',(req,res)=>{
    usersFunctions.deleteUser(req,res);
}); 

app.patch('/users/:id',(req,res)=>{
    usersFunctions.updateSingleUser(req,res);
});


//users Cart
app.patch("/users/cart/patch/push/:id",(req,res)=>{
    usersFunctions.addProductToCart(req,res);
});

app.patch("/users/cart/patch/pull/:id",(req,res)=>{
    usersFunctions.removeProductFromCart(req,res);
});

app.delete('/users/cart/delete/:id',(req,res)=>{
    usersFunctions.deleteProductFromCart(req,res);
});


//users WatchList
app.get("/users/watchList",(req,res)=>{
    usersFunctions.getUserCart(req,res);
});

app.get("/users/watchList/:id",(req,res)=>{
    usersFunctions.getSingleUser(req,res);
});

app.patch("/users/watchList/patch/push/:id",(req,res)=>{
    usersFunctions.addMovieToCart(req,res);
});

app.patch("/users/watchList/patch/pull/:id",(req,res)=>{
    usersFunctions.removeMovieFromCart(req,res);
});

app.delete('/users/watchList/delete/:id',(req,res)=>{
    usersFunctions.deleteProductFromCart(req,res);
});





app.get('*',(req,res)=>{ 
    res.send('ERROR, page not found');
});

app.listen(PORT ,()=>{
    console.log(`listening on port ${PORT}`);
});