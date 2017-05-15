var React=require('react');
var DefaultLayout=require('./layout/master');

var IndexComponent =React.createClass({
    

    render: function(){
        return(
        <div>
   <DefaultLayout name={this.props.name}/>
    

  </div>
        )
    }
});

module.exports=IndexComponent;