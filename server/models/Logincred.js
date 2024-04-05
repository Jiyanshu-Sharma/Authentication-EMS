const mongoose = require("mongoose");
const LogincredSchema = new mongoose.Schema({
    username :{
        type:String,
    },
    password :{
        type:String,
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
});
const Logincred = mongoose.model("Logincred" , LogincredSchema);
module.exports=Logincred; 