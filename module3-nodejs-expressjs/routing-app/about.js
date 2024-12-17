var express=require('express');
var router=express.Router();
router.get('/',function(req,res){
    res.send('Get all data of about us page')
});
router.post('/',function(req,res){
    res.send('POST all data of about us page')
})
// export a about us module in index.js module 
module.exports=router;
