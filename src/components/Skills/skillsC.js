import React from "react";
import BtnSkills from "./skillBtn";

class ChangeSkills extends React.Component {
  state = {
    className: "hideSkillsBtn",
    btnClick: false,
  };
  handleHover = () => {
    this.setState({
      className: "showChangeBtn",
    });
  };
  handleHoverOut = (state) => {
    this.setState({
      className: "hideSkillsBtn",
    });
  };

  clickState = (state) => {
    this.setState({
      btnClick: true,
    });
  };
  manageTextAreaState = () => {
    this.setState({
      btnClick: false,
    });
  };
  skillsChange = (e) => {
    this.props.manageSkills(e.target.value);
  };
  render(props) {
    return (
      <div
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHoverOut}
        className="changeBox"
      >
        &nbsp;
        <div className={this.state.className}>
          <BtnSkills
            stateMange={this.clickState}
            manageHoverOut={this.handleHoverOut}
          />
        </div>
        {this.state.btnClick && (
          <div>
            <textarea
              onChange={this.skillsChange}
              className="inputSkills"
              rows="4"
              cols="50"
            >
              {this.props.addValue}
            </textarea>
            <button className="textAreaBtn" onClick={this.manageTextAreaState}>
              Save
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default ChangeSkills;
