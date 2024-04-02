const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema(
    {
        name : {
            type:String,
            require:[true,"Name is required"]
        },
        email : {
            type: String,
            required:[true,'Email is required'],
            unique:true
        },
        role: {
            type: String,
            enum: ['Student', 'faculty'],
            required: true
        },
        verified: {
            type: Boolean,
            default:false,
        },
        createdAt :{
            type:Date,
            default:new Date()
        },
    }
);
const Registerrequest = mongoose.model("Registerrequest" , RegisterSchema);
module.exports=Registerrequest;