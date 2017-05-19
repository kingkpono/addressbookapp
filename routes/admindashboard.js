var express=require('express');
var mysql=require('mysql');
var app=express();
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(session({secret: 'ssshhhhh'}));

var connection=mysql.createConnection({
host:'162.13.77.157',
user:'root',
password:'ohdaix6quohsohmaaf7aiR',
database:'newdemmo'
}
);
connection.connect(function(error){
if(!!error){
console.log("Error");
}else{
console.log("Connected");
}
});

var admindashboardrouter=express.Router();
var sess;
admindashboardrouter.get('/',function(req,res){
	sess=req.session;

//fetch address data and display


if(sess.adminemail){
	var query = connection.query('select * from user ',  function(err, result) {
	
  var addresses=result;

if(result.length>0)
{
//var rows=[];

	
res.render('admindashboard',{addresses:addresses});

}else{
     res.send("<h1>No data<h1>");
}//end else if no email or mobile


});//end select query


}
else{
  res.redirect('/adminlogin');	
}
});
module.exports=admindashboardrouter;