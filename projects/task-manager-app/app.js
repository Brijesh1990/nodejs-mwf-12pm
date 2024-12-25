const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const Item=require("./models/task");
const app=express();
// middleware ...
app.use(bodyParser.urlencoded({extended:true}));
// Create connection app through mongo DB........
mongoose.connect('mongodb://127.0.0.1:27017/taskApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));mongoose.connect('mongodb://localhost:27017/crudApp', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

app.set('view engine','ejs');
// Routing for Home page
app.get('/',async(req,res)=>{
res.render('index');
});
// create a server 
app.listen(3000,()=>{
console.log('Server running on http://localhost:3000');
});

