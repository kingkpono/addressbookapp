var React = require('react');

var MasterLayout=React.createClass({
	

	render:function(){

	return(
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="http://bootswatch.com/lumen/bootstrap.min.css" />
    <link rel="stylesheet" href="public/css/main.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 <title>{this.props.name}</title>
</head>
<body>
<script src="https://fb.me/react-15.1.0.js"></script>
<script src="https://fb.me/react-dom-15.1.0.js"></script>
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
     
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
     
     
      <ul className="nav navbar-nav navbar-right">
       <li><a href="/login">User Login</a></li>
           
            <li><a href="/register">Add Address</a></li>
             <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
<center><h2>Addressbook App with NodeJs,React & Mysql</h2></center>
{this.props.children}
</body>
</html>


	)
	}
});

module.exports=MasterLayout;