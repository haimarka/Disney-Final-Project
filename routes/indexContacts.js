const messagesFunctions = require('../functions/ContactUsFunctions');
const express = require("express"),
app = express();
const aaa = ()=>{

    return app.get('/ContactUs',(req,res)=>{ 
        messagesFunctions.getMessages(req,res);
    })
}
const bbb = ()=>{

   return app.post("/ContactUs",(req,res)=>{
        messagesFunctions.postMessages(req,res);
    });
}


app.post("/ContactUs",(req,res)=>{
    messagesFunctions.postMessages(req,res);
});

module.exports = {aaa, bbb};