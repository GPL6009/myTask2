const database = require('./database');

exports.email_exists = function(req, res){
    var email = req.body.email;
    console.log("verify :",email)
    
    //email verification starts
    var query = 'SELECT * FROM users_sample WHERE email ="' + email + '"';
    database.query(query, function (err, result) {
        if (err) throw err;

        

        if(result.length > 0){
            console.log("email exists");
            var demail = result[0].email
            console.log("database email:",demail);
                if(email == demail){
                console.log('user exists ')
               var message="success";
            }
            
        }
        
        else{
            console.log("no email exists");
                //var message="bad";
        }
    
        res.json({
            msg:message,
            //data:base64data,
            //fname:fname
         });
        
    });// verification ends
}
