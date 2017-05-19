var express=require('express');

var regrouter=express.Router();



regrouter.get('/',function(req,res){

   res.render('register',{name:"Add Address",status:200,
address_name:"",
mobile:"",
email:"",
house_number:"",
street:"",
city:"",
state_id:"",
country_id:""

});
});
module.exports=regrouter;