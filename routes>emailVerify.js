const express = require('express');
const path = require('path');

const adminControllerEmail = require('../controller/adminEmailVerify');
const router = express.Router();

//following email exists
router.post('/', adminControllerEmail.email_exists);


module.exports =  router;
 
