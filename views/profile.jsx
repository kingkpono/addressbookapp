var React=require('react');
var DefaultLayout=require('./layout/master');

var ProfileComponent =React.createClass({
   

    render: function(){
        return(
        <div>
   <DefaultLayout name={this.props.name}/>
    <div className="container"> {this.props.status==200 ? (
        <div className="alert alert-success">Updated succesfully</div>
      ) : (
        ''
      )}
    
           {this.props.status==300 ? (
         <div className="alert alert-error">Could not update</div>
      ) : (
        ''
      )}
             <form name="addressForm" method="post" action="/editaddress">
            <div className="form-group">
              <label for="name"> Name</label>
              <input type="text" className="form-control" value={this.props.address_name} name="name" />
            </div>
            <div className="form-group">
              <label for="mobile">Mobile</label>
              <input type="text" className="form-control" name="mobile" value={this.props.mobile} />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" name="email" value={this.props.email} />
            </div>
            <div className="form-group">
              <label for="house_number">House Number</label>
              <input type="text" className="form-control" name="house_number" value={this.props.house_number} />
            </div>

            <div className="form-group">
              <label for="street">Street</label>
              <input type="text" className="form-control" name="street" value={this.props.street} />
            </div>

            <div className="form-group">
              <label for="city">City</label>
              <input type="text" className="form-control" name="city" value={this.props.city} />
            </div>

            <div className="form-group">
              <label for="state_id">State</label>
              <select name="state_id" id="state_id">
              <option  value="" selected>- Select -</option>
              
              if(this.props.state_id=="Abuja")
              <option value="Abuja" selected="selected">Abuja</option>
                if(this.props.state_id=="Abia")
              <option value="Abia" selected>Abia</option>
              

               if(this.props.state_id=="Adamawa")
              <option value="Adamawa" selected="selected">Adamawa</option>

               if(this.props.state_id=="Akwa Ibom")
              <option value="Akwa Ibom" selected="selected">Akwa Ibom</option>
               
               if(this.props.state_id=="Anambra")
               <option value="Anambra" selected="selected">Anambra</option>

              if(this.props.state_id=="Bauchi")
              <option value="Bauchi" selected>Bauchi</option>
             
              
              if(this.props.state_id=="Bayelsa")
              <option value="Bayelsa" selected>Bayelsa</option>
               if(this.props.state_id=="Benue")
              <option value="Benue" selected>Benue</option>

                if(this.props.state_id=="Borno")
              <option value="Borno" selected>Borno</option>

               if(this.props.state_id=="Cross River")
              <option value="Cross River" selected>Cross River</option>

              if(this.props.state_id=="Delta")
              <option value="Delta" selected>Delta</option>
               
                if(this.props.state_id=="Ebonyi")
              <option value="Ebonyi" selected>Ebonyi</option>
                
                if(this.props.state_id=="Edo")
              <option value="Edo" selected>Edo</option>



              if(this.props.state_id=="Ekiti")
              <option value="Ekiti" selected>Ekiti</option>

              if(this.props.state_id=="Enugu")
              <option value="Enugu" selected>Enugu</option>

              if(this.props.state_id=="Gombe")
              <option value="Gombe" selected>Gombe</option>
              
              if(this.props.state_id=="Imo")
              <option value="Imo" selected>Imo</option>

              if(this.props.state_id=="Jigawa")
              <option value="Jigawa" selected>Jigawa</option>

               if(this.props.state_id=="Ebonyi")
                 <option value="Ebonyi" selected>Ebonyi</option>
              if(this.props.state_id=="Kaduna")
              <option value="Kaduna" selected>Kaduna</option>


                   if(this.props.state_id=="Kano")
              <option value="Kano" selected>Kano</option>

              if(this.props.state_id=="Katsina")
              <option value="Katsina" selected>Katsina</option>

              if(this.props.state_id=="Kebbi")
              <option value="Kebbi" selected>Kebbi</option>

              if(this.props.state_id=="Kogi")
              <option value="Kogi" selected>Kogi</option>

              if(this.props.state_id=="Kwara")
              <option value="Kwara" selected>Kwara</option>

              if(this.props.state_id=="Lagos")
              <option value="Lagos" selected>Lagos</option>

               if(this.props.state_id=="Nassarawa")
              <option value="Nassarawa" selected>Nassarawa</option>

              if(this.props.state_id=="Niger")
              <option value="Niger" selected>Niger</option>

              if(this.props.state_id=="Ogun")
              <option value="Ogun">Ogun</option>

              if(this.props.state_id=="Ondo")
              <option value="Ondo" selected>Ondo</option>

              if(this.props.state_id=="Osun")
              <option value="Osun" selected>Osun</option>

              if(this.props.state_id=="Oyo")
              <option value="Oyo" selected>Oyo</option>

              if(this.props.state_id=="Plateau")
              <option value="Plateau" selected>Plateau</option>

              if(this.props.state_id=="Rivers")
              <option value="Rivers" selected>Rivers</option>

                 if(this.props.state_id=="Sokoto")
              <option value="Sokoto" selected>Sokoto</option>

              if(this.props.state_id=="Taraba")
              <option value="Taraba" selected>Taraba</option>

              if(this.props.state_id=="Yobe")
              <option value="Yobe" selected>Yobe</option>

              if(this.props.state_id=="Zamfara")
              <option value="Zamfara" selected>Zamfara</option>

            </select>
           </div>
            <div className="form-group">
              <label for="country">Country</label>
              <select name="country_id" id="country">
                <option value="NG">Nigeria</option>

            </select>
            </div>
             <div  className="form-group">
           <button type="button" type="submit" className="btn btn-primary" >Save</button>
            </div>
          </form>
         </div>
  </div>
        )
    }
});

module.exports=ProfileComponent;