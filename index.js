const express = require("express"),
app = express(),
PORT = 8080;

const MongoFunctions = require('./Functions');

app.get('/Products',(req,res)=>{
    res.send({res:"hgyg"})
    // MongoFunctions.getProductsArray(req,res);
})

app.listen(PORT ,()=>{
    console.log(`listening on port ${PORT}`);
})