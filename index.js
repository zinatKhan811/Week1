// const http = require('http');
// // let a = ()=> {

// //} 
// http.createServer(function(req,res)=>{
//     res.write('<h1> Web Application Development class 1 </h1>');
//     res.end();
// }).listen(3000);

// imports
const express = require('express');
const morgan = require('morgan');

//App initialization
const app = express();

//first route
app.get('/', (req,res)=>{
    res.json({message: "Web Development Class 1"})
})
app.listen('3000');