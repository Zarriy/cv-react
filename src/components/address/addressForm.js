import React from "react";

class AddressForm extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.saveP = props;
  }
  handleSave = (e, props) => {
    e.preventDefault();
    this.saveP.handleSave(false);
  };
  handleAddressChange = (e) => {
    this.saveP.handleAddress(e.target.value);
  };
  changeMob = (e) => {
    this.saveP.handleMob(e.target.value);
  };
  changeWebsite = (e) => {
    this.saveP.handleWebsite(e.target.value);
  };
  render(props) {
    return (
      <div className="addressForm">
        <form className="formAddress">
          <div>
            <input
              className="inputHeader address"
              type="text"
              placeholder="address (use , for line separation)"
              onChange={this.handleAddressChange}
            />
          </div>
          <div>
            <input
              type="number"
              className="inputHeader tel"
              placeholder="phone number"
              onChange={this.changeMob}
            />
          </div>
          <div>
            <input
              type="text"
              className="inputHeader website"
              placeholder="xyz.com"
              onChange={this.changeWebsite}
            />
          </div>
          <button
            onClick={this.handleSave}
            className="submitBtn"
            style={{ backgroundColor: "#4daeae" }}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default AddressForm;
