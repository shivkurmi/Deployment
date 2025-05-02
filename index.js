require('dotenv').config()
const express = require("express");
const app =express()

const Port=4000;

app.get("/",(req,res)=>{
  res.send("This is a home route")
});

app.get("/about",(req,res)=>{
  res.send("This is a about route")
});

app.get("/contact",(req,res)=>{
  res.send("This is a Contact route")
})
app.listen(process.env.Port,()=>{
  console.log(`Server is  running on port ${Port}`);
  
})

