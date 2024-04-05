const express = require("express");
const router = express.Router();
const {Registerreq , verify , login} = require( "../controller/auth.controller");
router.post("/registerrequest" , Registerreq);
router.post("/verify" , verify);
router.post("/login" , login);
module.exports = router;