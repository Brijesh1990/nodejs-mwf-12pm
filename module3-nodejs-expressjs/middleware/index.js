var express=require("express");
var app=express();
// simple request time logger 
// app.use(function(req,res, next){

//     console.log('A new request received at :'+Date.now());

//     // this function call is very important. it tells that more processing is there

//     // required for the current request and is in next middleware
//     next();

// });

// app.listen(5000);
// console.log('The server successfully running on http://localhost:5000');

// first middleware before response is sent
app.use(function(req,res,next){
    console.log("start middleware");
    next();});
    // route handeler 
   app.get('/',function(req,res,next){

    res.send("Middleware request send");
    next();
   });
   
app.use('/',function(req,res){
    console.log('Request is ended');
}) 

app.listen(5000);
console.log('Server is running on : http://localhost:5000')
