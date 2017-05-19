var React=require('react');
var DefaultLayout=require('./layout/adminmaster');
var JsonTable =require('./layout/jsontable');



var AdmindashboardComponent =React.createClass({
    

    render: function(){
    var items = this.props.addresses;
        return(
        <div>
   <DefaultLayout name={this.props.name}/>
    <div className="container">
           <JsonTable rows={ this.props.addresses } />
         </div>
  </div>
        )
    }
});

module.exports=AdmindashboardComponent;