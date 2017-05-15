var React=require('react');
var DefaultLayout=require('./layout/master');

var RegisterComponent =React.createClass({
    

    render: function(){
        return(
        <div>
   <DefaultLayout name={this.props.name}/>
    <div className="container">
             <form name="addressForm" method="post" action="/addaddress">
            <div className="form-group">
              <label for="name"> Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group">
              <label for="mobile">Mobile</label>
              <input type="text" className="form-control" name="mobile" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label for="house_number">House Number</label>
              <input type="text" className="form-control" name="house_number" />
            </div>

            <div className="form-group">
              <label for="street">Street</label>
              <input type="text" className="form-control" name="street" />
            </div>

            <div className="form-group">
              <label for="city">City</label>
              <input type="text" className="form-control" name="city" />
            </div>

            <div className="form-group">
              <label for="state_id">State</label>
              <select name="state_id" id="state_id">
             <option value="" selected="selected">- Select -</option>
                            <option value="Abuja FCT">Abuja FCT</option>
                            <option value="Abia">Abia</option>
                            <option value="Adamawa">Adamawa</option>
                            <option value="Akwa Ibom">Akwa Ibom</option>
                            <option value="Anambra">Anambra</option>
                            <option value="Bauchi">Bauchi</option>
                            <option value="Bayelsa">Bayelsa</option>
                            <option value="Benue">Benue</option>
                            <option value="Borno">Borno</option>
                            <option value="Cross River">Cross River</option>
                            <option value="Delta">Delta</option>
                            <option value="Ebonyi">Ebonyi</option>
                            <option value="Edo">Edo</option>
                            <option value="Ekiti">Ekiti</option>
                            <option value="Enugu">Enugu</option>
                            <option value="Gombe">Gombe</option>
                            <option value="Imo">Imo</option>
                            <option value="Jigawa">Jigawa</option>
                            <option value="Kaduna">Kaduna</option>
                            <option value="Kano">Kano</option>
                            <option value="Katsina">Katsina</option>
                            <option value="Kebbi">Kebbi</option>
                            <option value="Kogi">Kogi</option>
                            <option value="Kwara">Kwara</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Nassarawa">Nassarawa</option>
                            <option value="Niger">Niger</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Osun">Osun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Plateau">Plateau</option>
                            <option value="Rivers">Rivers</option>
                            <option value="Sokoto">Sokoto</option>
                            <option value="Taraba">Taraba</option>
                            <option value="Yobe">Yobe</option>
                            <option value="Zamfara">Zamfara</option>}

            </select>
           </div>
            <div className="form-group">
              <label for="country">Country</label>
              <select name="country_id" id="country">
                <option value="NG" selected>Nigeria</option>

            </select>
            </div>
             <div  className="form-group">
           <button type="button" type="submit" className="btn btn-primary" >Add contact</button>
            </div>
          </form>
         </div>
  </div>
        )
    }
});

module.exports=RegisterComponent;