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

//fetch address data and display
sess=req.session;

if(sess.email){
	var query = connection.query('select * from user where email = "'+sess.adminemail+'" AND role="Admin" ',  function(err, result) {

if(result.length>0)
{
res.render('admindashboard',
	{

		name:"Admin Admindashboard",
		address_name:result[0].name,
		mobile:result[0].mobile,
		email:result[0].email,
		house_number:result[0].house_number,
street:result[0].street,
city:result[0].city,
state_id:result[0].state_id,
country_id:result[0].country_id

   }

	);

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