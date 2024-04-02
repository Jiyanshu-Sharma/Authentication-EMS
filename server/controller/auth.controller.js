const Registerrequest = require("../models/Registerrequest");
const otpGenerator = require('otp-generator')
const nodemailer = require("nodemailer");


let OTP;
let Uemail;
let OTPcount=0;
async function GenerateOTP(){
    OTP = otpGenerator.generate(6, { upperCaseAlphabets: false,lowerCaseAlphabets: false, specialChars: false });
    console.log("OTP is" , OTP);
}



const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "kbhmusicians@gmail.com",
      pass: "ygry xiaj ntht xbqa",
    },
  });
  async function sendOTP(mail , OTP){
    const info = await transporter.sendMail({
        from: '"Examination System " <kbhmusicians@gmail.com>', 
        to: mail, 
        subject: "Examination System - Verification", // Subject line
        text:"OTP For verification is "+ OTP,  // plain text body
      });
      console.log("Email Sent Successfully");
  }
  async function updateuser(email) {
    const user = await Registerrequest.findOne({ email });
    if (!user) {
        return false;
    }
    try {
        await Registerrequest.findByIdAndUpdate(user._id, {
            $set: { verified: true },
        });
        return true; 
    } catch (error) {
        console.error("Error updating user:", error);
        return false; 
    }
}

/*
async function verify(req , res){
  console.log("Request Body is " , req.body);
    const { otp} = req.body;
    console.log(otp , OTP);
    if(otp === OTP){
        console.log("Correct OTP");
        await updateuser(Uemail);
        res.redirect("/Login")
    }
    else{
        OTPcount++;
        if(OTPcount >=3){
            console.log("Deleting the entry");
            await  Registerrequest.deleteOne({email : Uemail});
            console.log("Deleted Successfully");
        }
        res.send("Wrong OTP");
    }
    
}*/
async function verify(req, res) {
  console.log("Request Body is ", req.body);
  const { otp } = req.body;
  console.log(otp, OTP);
  try {
      if (otp === OTP) {
          console.log("Correct OTP");
          const userUpdated = await updateuser(Uemail);
          if (userUpdated) {
            console.log("Updated user  successfully!");
              res.status(200).send("OTP Verification Successfull");
          } else {
              res.status(404).send("User not found");
          }
      } else {
          OTPcount++;
          if (OTPcount >= 3) {
              console.log("Deleting the entry");
              await Registerrequest.deleteOne({ email: Uemail });
              console.log("Deleted Successfully");
          }
          res.send("Wrong OTP");
      }
  } catch (error) {
      console.error("Error in verify function:", error);
      res.status(500).send("An error occurred while verifying OTP.");
  }
}

async function  Registerreq(req , res){
    const {name , email , role , createdAt} = req.body;
    console.log(req.body);
    Uemail = email;
    const existingUser = await Registerrequest.findOne({email});
    if (existingUser) return res.status(400).send("Email already in use.");
    await GenerateOTP();
    sendOTP(email,OTP); 
    const Regreq = await Registerrequest.create({name , email , role , createdAt});
    res.send("User Registered , Verification Pending");
}
module.exports = {
    Registerreq, verify
}




