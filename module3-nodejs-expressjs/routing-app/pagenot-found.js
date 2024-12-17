var express=require('express');
var app=express();
// regex via restrict data get in url
app.get('/about-us',function(req,res){

    res.send('The page of about us are loaded');
});
app.get('*',function(req,res){

    res.send('The page you requested does not found');
});



app.listen(5000);
console.log('The url is : http://localhost:5000')