const express = require("express");
const app = express();

const path = require("path");
const method_override = require("method-override");

app.use(express.static(path.join(__dirname,"public")));
app.use(method_override("_method"));

app.get("/",(req,res) =>{
    //res.send("this is my main page");
    res.render("home.ejs");
})

app.get("/home",(req,res)=>{
    res.render("dashboard.ejs");
})

app.listen("8080",()=>{
    console.log("server is working");
})