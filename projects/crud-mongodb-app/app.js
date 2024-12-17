const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const Item=require("./models/item");
const app=express();

// middleware ...
app.use(bodyParser.urlencoded({extended:true}));
// set a Routing or ejs template engine Routing

// Create connection app through mongo DB........


app.set('view engine','ejs');
// Routing for Home page
app.get('/',async(req,res)=>{
    res.render('index');
});
// Routing for new add data page
app.get('/additems',async(req,res)=>{
    res.render('new');
});

// Routing for edit page
// Routing for update data page
// Routing delete data page

// create a server 
app.listen(21021,()=>{
    console.log('Server running on http://localhost:21021');
});

