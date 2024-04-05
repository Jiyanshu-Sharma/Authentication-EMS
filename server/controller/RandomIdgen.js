const crypto = require('crypto');
const bcrypt = require("bcrypt")
const Logincred = require("../models/Logincred");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "kbhmusicians@gmail.com",
      pass: "ygry xiaj ntht xbqa",
    },
  });
  async function sendMail(mail , username , password){
    const info = await transporter.sendMail({
        from: '"Examination System " <kbhmusicians@gmail.com>', 
        to: mail, 
        subject: "Your ID and password ", 
        text:"Your Id and password is "+ username + password,  
    })
    console.log("Email Sent Successfully");
  }
async function RandomIdgen(email){
    const username = email.split('@')[0];
    const password = crypto.randomBytes(3).toString('hex');
    console.log("username: ",username);
    console.log("password" , password);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Logincred.create({username , password:hashedPassword})
    await sendMail(email , username , password);
}

module.exports = RandomIdgen

