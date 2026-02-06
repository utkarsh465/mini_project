const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.send("this is my main page");
})

app.get("/home",(req,res)=>{
    res.send("hello world");
})

app.listen("8080",()=>{
    console.log("server is working");
})