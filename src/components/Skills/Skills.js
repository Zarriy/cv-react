import React from "react";
import ChangeSkills from "./skillsC";

class Skills extends React.Component {
  state = {
    para: "HTML, JS, CSS, Wordpress, Shopify, Google, Adobe Photoshop, Adobe Illustrator, UI/UX Design, Figma, Canva",
  };
  editSkills = (value) => {
    this.setState({
      para: value,
    });
  };
  render() {
    return (
      <div className="computer-skills">
        <div className="comp-title">
          <h2>Computer Skills</h2>
        </div>
        <div className="skills">
          <p>{this.state.para}</p>
        </div>
        <ChangeSkills
          addValue={this.state.para}
          manageSkills={this.editSkills}
        />
      </div>
    );
  }
}
export default Skills;
