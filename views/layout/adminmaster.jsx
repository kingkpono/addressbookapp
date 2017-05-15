var React = require('react');

var AdminmasterLayout=React.createClass({
  
 
  render:function(){

  return(
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="http://bootswatch.com/lumen/bootstrap.min.css" />
  <link rel="stylesheet" href=" https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css" />
   <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.3.1/css/buttons.dataTables.min.css" />
   <script src="code.jquery.com/jquery-1.12.4.js"></script>

 <script src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.3.1/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.flash.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>

<script src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/vfs_fonts.js"></script>

<script src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.27/build/pdfmake.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.3.1/js/buttons.print.min.js"></script>
  

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
       
            <li><a href="/adminlogin">Login</a></li>
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

module.exports=AdminmasterLayout;