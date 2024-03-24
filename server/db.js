const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect('mongodb://0.0.0.0:27017/ExamManagementSystem');
        console.log("MongoDB Connected");
    }catch(error){
        console.log(`Error : ${error.message}`);
        process.exit();

    }
};
module.exports = connectDB;
