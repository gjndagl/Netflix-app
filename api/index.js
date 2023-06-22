const express = require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config();

mongoose.connect("mongodb://127.0.0.1:27017/OttDB",{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true
});

mongoose.connection.on('connecting', () => { 
  console.log('DB connecting')
 // console.log(mongoose.connection.readyState); //logs 2
});
mongoose.connection.on('connected', () => {
  console.log('DB connected');
 // console.log(mongoose.connection.readyState); //logs 1
});
mongoose.connection.on('disconnecting', () => {
  console.log('DB disconnecting');
  //console.log(mongoose.connection.readyState); // logs 3
});
mongoose.connection.on('disconnected', () => {
  console.log('DB disconnected');
  //console.log(mongoose.connection.readyState); //logs 0
});

app.listen(3000,()=>{
    console.log("Backend server is running");
});