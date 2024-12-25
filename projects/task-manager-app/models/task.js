const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema({
    
    taskname:{ type: String, required: true },
    assignto:{ type: String, required: true },
    addeddate:{ type: String, required: true }
   
});

module.exports=mongoose.model('Task',taskSchema);