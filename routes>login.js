const express = require('express');
const path = require('path');
const userController = require('../controller/userController');

const router = express.Router();


router.get("/login",(req,res,next)=>{
    //console.log("login page...");
    //res.sendFile(path.join(__dirname,'..','views','register.html'))
    res.sendFile(path.join(__dirname,'..','views','login.html'));
  });

router.post('/',userController.user_login);


module.exports =  router;
