var express=require('express');
var app=express();
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(session({secret: 'ssshhhhh'}));

var loginrouter=express.Router();
var sess;
loginrouter.get('/',function(req,res){
	sess=req.session;
if(sess.email)
{
	
res.render('profile',{name:"Profile"});
}else
{
		res.render('login',{name:"Login"});

}
   
});
module.exports=loginrouter;