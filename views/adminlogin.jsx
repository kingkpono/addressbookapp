var React=require('react');
var DefaultLayout=require('./layout/adminmaster');

var AdminloginComponent =React.createClass({
    

    render: function(){
        return(
        <div>
   <DefaultLayout name={this.props.name}/>
    <div className="container">
          <div className="wrapper">
    <form className="form-signin" method="post" action="/adminlogin">       
      <h2 className="form-signin-heading">Admin login</h2>
      <input type="text" className="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
      <input type="password" className="form-control" name="mobile" placeholder="Mobile" required=""/>      
      
      <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
    </form>
  </div>
         </div>
  </div>
        )
    }
});

module.exports=AdminloginComponent;