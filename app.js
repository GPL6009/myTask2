var express     = require('express');
var bodyParser  = require('body-parser');
//const fileUpload = require('express-fileupload');

const path = require('path');
const router = express.Router();

var app = express();

//const emailVerify = require('./routes/emailVerify');
//const adminRoutes = require('./routes/demo');
const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/login');



//app.set('view engine','ejs');
app.set('view engine', 'html');
app.use('/image',express.static(__dirname+'/image/'));


//app.use(fileUpload());
app.use(bodyParser.urlencoded({extended:true,limit:'50mb',parameterLimit:50000}));
app.use(bodyParser.json());
app.use('/jquery',express.static(__dirname+'/node_modules/jquery/dist/'));


//app.use("/register",emailVerify);
app.use("/register",userRoutes);
app.use("/login",loginRoutes);



app.use(userRoutes);



var port  = process.env.port || 8080;
app.listen(port,()=>console.log('server run at port '+port));

