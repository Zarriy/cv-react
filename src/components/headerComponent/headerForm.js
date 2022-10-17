import React from "react";

class HeaderForm extends React.Component {
  constructor(props) {
    super();
    this.saveProps = props;
    this.saveClick = this.saveClick.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  saveClick(e) {
    e.preventDefault();
    this.saveProps.handleSave(false);
  }
  handleName(e) {
    this.saveProps.handleName(e.target.value);
  }
  handleEmail(e) {
    this.saveProps.handleEmail(e.target.value);
  }
  handleImage(e) {
    const fileRead = new FileReader();
    fileRead.addEventListener("load", () => {
      this.saveProps.handleImage(fileRead.result);
      localStorage.setItem("Image", fileRead.result);
    });
    fileRead.readAsDataURL(e.target.files[0]);
  }

  render() {
    return (
      <div className="header-form">
        <form>
          <div>
            <input
              type="text"
              className="inputHeader name"
              placeholder="your name"
              onChange={this.handleName}
            />
          </div>
          <div>
            <input
              type="text"
              className="inputHeader name"
              placeholder="email address"
              onChange={this.handleEmail}
            />
          </div>
          <div className="image-div">
            <input type="file" accept="image/*" onChange={this.handleImage} />
            {/* <input
              className="fileSubmit"
              type="submit"
              onClick={this.handleSubmit}
            /> */}
          </div>
          <button className="submitBtn" onClick={this.saveClick}>
            Save
          </button>
        </form>
      </div>
    );
  }
}
export default HeaderForm;
