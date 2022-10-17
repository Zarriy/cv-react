import React from "react";

class Objective extends React.Component {
  state = {
    para: "Highly inspiring to learn new technologies and create challenging projects. Believe in process of evolution",
    hoverState: false,
    textArea: false,
  };
  manageHover = () => {
    this.setState({ hoverState: true });
  };
  manageMouseOut = () => {
    this.setState({ hoverState: false });
  };
  manageTextArea = () => {
    this.setState({ textArea: true });
  };
  hideTextArea = () => {
    this.setState({ textArea: false });
  };
  handlingEdit = (e) => {
    this.setState({ para: e.target.value });
  };
  render() {
    const { para, hoverState, textArea } = this.state;
    return (
      <div className="Objective">
        <div className="comp-title">
          <h2>Objective</h2>
        </div>
        <div className="skills">
          <p>{para}</p>
        </div>
        <div
          className="changeBox"
          onMouseOver={this.manageHover}
          onMouseOut={this.manageMouseOut}
        >
          {hoverState && (
            <button onClick={this.manageTextArea}>
              <ion-icon name="create-outline"></ion-icon>
            </button>
          )}
        </div>
        {textArea && (
          <div className="Objective-textArea">
            <textarea
              cols="50"
              rows="2"
              className="objTextArea"
              onChange={this.handlingEdit}
            >
              {para}
            </textarea>
            <button className="textAreaBtn" onClick={this.hideTextArea}>
              Save
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Objective;
