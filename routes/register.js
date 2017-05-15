var express=require('express');

var regrouter=express.Router();



regrouter.get('/',function(req,res){


   res.render('register',{name:"Awesome"});
});
module.exports=regrouter;