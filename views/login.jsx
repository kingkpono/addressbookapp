var React=require('react');
var DefaultLayout=require('./layout/master');

var LoginComponent =React.createClass({
    

    render: function(){
        return(
        <div>
   <DefaultLayout name={this.props.name}/>
    <div className="container">
          <div className="wrapper">
          {this.props.status==300 ? (
         <div className="alert alert-dismissible alert-danger">Invalid username or mobile phone</div>
      ) : (
        ''
      )}

      {this.props.status==200 ? (
        <div className="alert alert-dismissible alert-success">Address succesfully registered.Kindly login</div>
      ) : (
        ''
      )}
    
          

      {this.props.status==400 ? (
         <div className="alert alert-dismissible alert-danger">Could not register address. Retry later</div>
      ) : (
        ''
      )}
    <form className="form-signin" method="post" action="/login">       
      <h2 className="form-signin-heading">Please login</h2>
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

module.exports=LoginComponent;