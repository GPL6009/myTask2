const express = require('express');
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


const adminControllerEmail = require('../controller/adminEmailVerify');
const adminController = require('../controller/adminController');


const router = express.Router();


router.get('/',(req,res,next)=>{
  //console.log("destination:",upload);
  //res.sendFile(path.join(__dirname,'..','views','register.html'))
  res.sendFile(path.join(__dirname,'..','views','register.html'));
});



//following to insert
router.post('/', adminController.add_user);



module.exports =  router;
 
