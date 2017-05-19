var React = require('react');

var AdminmasterLayout=React.createClass({
  
 
  render:function(){

  return(
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="http://bootswatch.com/lumen/bootstrap.min.css" />
   <link rel="stylesheet" href="/public/css/style.css" />
      <link rel="stylesheet" href="/public/css/main.css" />
  <link rel="stylesheet" href="/public/css/react-bootstrap-table-all.min.css" />
   <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.3.1/css/buttons.dataTables.min.css" />
   <script src="https://code.jquery.com/jquery-1.12.4.js"></script>

 <title>{this.props.name}</title>
</head>
<body>
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
            <li><a href="/adminlogin">Admin</a></li>
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

module.exports=AdminmasterLayout;