var express=require('express');
var app=express();
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(session({secret: 'ssshhhhh'}));

var adminloginrouter=express.Router();
var sess;
adminloginrouter.get('/',function(req,res){
	sess=req.session;

if(sess.adminemail)
{
res.render('admindashboard',{name:"Admin Dashboard"});
}else
{
res.render('adminlogin',{name:"Admin Login"});
}
   
});
module.exports=adminloginrouter;