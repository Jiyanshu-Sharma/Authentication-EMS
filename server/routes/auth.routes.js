const express = require("express");
const router = express.Router();
const {Registerreq , verify} = require( "../controller/auth.controller");
router.post("/registerrequest" , Registerreq);
router.post("/verify" , verify);
module.exports = router;