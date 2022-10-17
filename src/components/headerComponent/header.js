import React from "react";
import ImageUp from "./img";
import HeaderForm from "./headerForm";
import imageI from "./zarriyy.jpeg";

class Container1 extends React.Component {
  //convert this into state
  constructor() {
    super();
    this.state = {
      nameArray: ["Zawar", "Mian"],
      email: "zarriy@outlook.com",
      formState: false,
      img: imageI,
    };
    this.onBtnClick = this.onBtnClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  onBtnClick = (e) => {
    e.preventDefault();
    this.setState({
      formState: true,
    });
  };
  handleSave(value) {
    this.setState({
      formState: value,
    });
  }
  handleName(name) {
    const nameArray = name.split(" ");
    this.setState({
      nameArray: nameArray,
    });
  }
  nameSplit() {
    let newNameArray = [];
    for (let x = 1; x < this.state.nameArray.length; x++) {
      newNameArray.push(this.state.nameArray[x]);
    }
    const getResult = newNameArray.join(" ");
    return getResult;
  }
  handleEmail(email) {
    this.setState({
      email: email,
    });
  }
  handleImage(img) {
    this.setState({
      img: img,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="name">
          <h1>
            {this.state.nameArray[0]}
            <br />
            {this.state.nameArray.length === 1
              ? this.state.nameArray[1]
              : this.nameSplit()}
          </h1>

          <a href="mailto:zarriy@outlook.com">{this.state.email}</a>
        </div>
        <ImageUp
          imgSrc={
            localStorage.getItem("Image") === null
              ? this.state.img
              : localStorage.getItem("Image")
          }
        />
        <button className="buttonHeader" onClick={this.onBtnClick}>
          <ion-icon name="create-outline"></ion-icon>
        </button>
        {this.state.formState && (
          <HeaderForm
            handleSave={this.handleSave}
            handleName={this.handleName}
            handleEmail={this.handleEmail}
            handleImage={this.handleImage}
          />
        )}
      </div>
    );
  }
}
export default Container1;
