var express=require('express');
var mysql=require('mysql');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(session({secret: 'ssshhhhh'}));
var connection=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'user'
}
);
connection.connect(function(error){
if(!!error){
console.log("Error");
}else{
console.log("Connected");
}
});
//session

var index_route=require('./routes/index');
app.use('/',index_route);
var loginroute=require('./routes/login');
app.use('/login',loginroute);
var regroute=require('./routes/register');
app.use('/register',regroute);
var profileroute=require('./routes/profile');
app.use('/profile',profileroute);

var adminloginroute=require('./routes/adminlogin');
app.use('/adminlogin',adminloginroute);

var admindashboardroute=require('./routes/admindashboard');
app.use('/admindashboard',admindashboardroute);


app.get('/logout',function(req,res){
          req.session.destroy(function(err){  
        if(err){  
            console.log(err);  
        }  
        else  
        {  
            res.redirect('/');  
        }  
    });  

});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//process address registration
var sess;
app.post('/addaddress',function(req,res){
sess=req.session;	
var name=req.body.name;
var mobile=req.body.mobile;
var email=req.body.email;
var house_number=req.body.house_number;
var street=req.body.street;
var city=req.body.city;
var state_id=req.body.state_id;
var country_id=req.body.country_id;

var address  = {
name:name,
mobile:mobile,
email:email,
house_number:house_number,
street:street,
city:city,
state_id:state_id,
country_id:country_id
};
//insert record if email and mobile donot exists
var exists = connection.query('select id from user where email = "'+email+'" OR mobile="'+mobile+'"',  function(err, result) {

if(result.length>0)
{
res.render('login',{name:"Login"});

}else{
var query = connection.query('INSERT INTO user SET ?', address, function(err, result) {
if(!!err)
{
res.render('login',{name:"Login"});
}else{
sess.email=email;
res.redirect('profile');
}
});//end insert query
}//end else if no email or mobile


});//end select query
});//end post



//process login

app.post('/login',function(req,res){
 sess=req.session;
var mobile=req.body.mobile;
var email=req.body.email;

//insert record if email and mobile donot exists
var exists = connection.query('select name from user where email = "'+email+'" OR mobile="'+mobile+'"',  function(err, result) {

if(result.length>0)
{
sess.email=email;
res.redirect('/profile');
}else{
  res.render('login',{name:"Login"});
}
});//end insert query

});//end login post


//process login

app.post('/adminlogin',function(req,res){
 sess=req.session;
var mobile=req.body.mobile;
var adminemail=req.body.email;

//insert record if email and mobile donot exists
var exists = connection.query('select name from user where email = "'+adminemail+'" OR mobile="'+mobile+'" AND role="Admin"',  function(err, result) {

if(result.length>0)
{
sess.adminemail=adminemail;
res.redirect('/admindashboard');

}else{
  res.render('adminlogin',{name:" Admin  Login"});
 
}


});//end insert query

});//end login post



//process edit action
app.post('/editaddress',function(req,res){
sess=req.session; 
var name=req.body.name;
var mobile=req.body.mobile;
var email=req.body.email;
var house_number=req.body.house_number;
var street=req.body.street;
var city=req.body.city;
var state_id=req.body.state_id;
var country_id=req.body.country_id;

var address  = {
name:name,
mobile:mobile,
email:email,
house_number:house_number,
street:street,
city:city,
state_id:state_id,
country_id:country_id
};
//insert record if email and mobile donot exists

var query = connection.query('UPDATE  user SET ? WHERE email = ?', [address,email], function(err, result) {


if(!!err)
{
res.render('profile',{name:"Profile",status:300,

address_name:name,
mobile:mobile,
email:email,
house_number:house_number,
street:street,
city:city,
state_id:state_id,
country_id:country_id


});
}else{

res.render('profile',{name:"Profile",status:200,

address_name:name,
mobile:mobile,
email:email,
house_number:house_number,
street:street,
city:city,
state_id:state_id,
country_id:country_id

});
}
});//end insert query

});//end post



//view engine setup
app.set('views',__dirname+'/views');
app.set('view engine','jsx');
app.engine('jsx',require('express-react-views').createEngine());
if(process.argv[2]="dev")
{
app.use(express.static(path.join(__dirname)));
}
app.listen(2400, function () {
console.log('Example app listening on port 200!')
});