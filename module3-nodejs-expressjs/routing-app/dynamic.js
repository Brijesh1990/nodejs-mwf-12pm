var express=require('express');
var app=express();
app.get('/:id',function(req,res){

    res.send('The id we specified is :' + req.params.id);
});

app.listen(5000);
console.log('The url is : http://localhost:5000')