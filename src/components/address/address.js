import React from "react";
import AddressForm from "./addressForm";

class Container2 extends React.Component {
  constructor() {
    super();
    this.state = {
      address: ["Gujrat District", "Province Punjab", "Pakistan"],
      website: "https://zarriy.com/",
      phoneNo: "+34-602-07-20-05",
      formStatus: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleMob = this.handleMob.bind(this);
    this.handleWebsite = this.handleWebsite.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({
      formStatus: true,
    });
  }
  handleSave(value) {
    this.setState({
      formStatus: value,
    });
  }
  handleWebsite(value) {
    this.setState({
      website: value,
    });
  }
  handleMob(value) {
    this.setState({
      phoneNo: "+" + value,
    });
  }
  handleAddress(value) {
    const addAddress = value.split(",");
    this.setState({
      address: addAddress,
    });
  }
  render() {
    const { address, website, phoneNo, formStatus } = this.state;
    return (
      <div className="container-2">
        <div className="address">
          <address>
            {address.map((address) => {
              return (
                <div>
                  {address}
                  <br />
                </div>
              );
            })}
          </address>
        </div>
        <div className="connect">
          <a href={website} target="_blank" rel="noopener noreferrer">
            <span class="value">Website:</span>
            {website}
          </a>

          <a href="tel:+9230000000000" target="self">
            <span className="value">Phone:</span>
            {phoneNo}
          </a>
        </div>
        <button className="addressBtn" onClick={this.handleClick}>
          <ion-icon name="create-outline"></ion-icon>
        </button>
        {formStatus && (
          <AddressForm
            handleAddress={this.handleAddress}
            handleWebsite={this.handleWebsite}
            handleMob={this.handleMob}
            handleSave={this.handleSave}
          />
        )}
      </div>
    );
  }
}

export default Container2;
