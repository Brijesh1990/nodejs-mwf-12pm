var express=require("express");
var app=express();
//app.get(route,callback);
// app.get('/about',function(req,res){
//     res.send("hey i am just load about us");
// })
// app.get('/',function(req,res){
//    res.send("Hello world");
// })

// app.get('/contactus',function(req,res){
//     res.send("hey i am just load contact us");
// })

app.get('/services',function(req,res){
    res.send("best service");
})
// create an server
// app.listen(4000);
app.listen(4000,console.log('server created successfully on http://localhost:4000/'));

