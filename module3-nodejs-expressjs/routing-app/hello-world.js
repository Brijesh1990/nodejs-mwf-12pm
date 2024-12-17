var express=require('express')
var app=express();
// retrive data in url using app.method(path,handeler)
// app.get('/',function(eq,res){
//     res.send("Hello i am just testing routing");
// });

// app.get('/hello',function(eq,res){
//     res.send("Hello i am just testing routing");
// });



// create a server 
app.listen(5000);
console.log('The server is running on http://localhost:5000')