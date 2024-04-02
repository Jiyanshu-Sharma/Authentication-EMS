const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connectDB = require("./db.js");
const AuthRoutes = require("./routes/auth.routes.js")
require("dotenv").config({path:"./"});
const cors = require('cors');
connectDB();
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/" , (req , res)=>{
    res.send("This is homepage")
})
app.use('/auth' , AuthRoutes);
app.listen(process.env.PORT||4000 , ()=>{
    console.log("Server is running  on port")
})

