const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const Item=require("./models/item");
const app=express();
// middleware ...
app.use(bodyParser.urlencoded({extended:true}));
// Create connection app through mongo DB........
mongoose.connect('mongodb://localhost:27017/crudApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

app.set('view engine','ejs');
// Routing for Home page
app.get('/additems',async(req,res)=>{
    res.render('new');
});
app.get('/',async(req,res)=>{
    res.render('index');
});
// Routing for new add data page
app.post('/additems',async(req,res)=>{
    // add data in mongoDb database 
    const{name,email,phone,pin,age,address}=req.body;
    const newItem=new Item({name,email,phone,pin,age,address});
    // insert a newItem data in database 
    await newItem.save();
    res.redirect('/');
});

// Routing for edit page
// Routing for update data page
// Routing delete data page

// create a server 
app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000');
});

