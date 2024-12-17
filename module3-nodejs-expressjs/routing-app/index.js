var express=require('express');
var app=express();
//import about us module here
var about=require('./about.js');
app.use('/about-us',about);
app.listen(5000);
console.log('server successfully running on http://localhost:5000')
