var express=require('express');
var app=express();
// regex via restrict data get in url
app.get('/:id([0-9]{10})',function(req,res){

    res.send('The id should be only 10 digit we specified is :' + req.params.id);
});

app.listen(5000);
console.log('The url is : http://localhost:5000')