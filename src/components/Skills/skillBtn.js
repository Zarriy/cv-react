import React from "react";

class BtnSkills extends React.Component {
  state = {
    click: false,
  };
  saveProps = this.props;
  handleClick = () => {
    this.setState({
      click: true,
    });
    this.saveProps.stateMange(true);
  };
  render(props) {
    return (
      <div>
        <button onClick={this.handleClick} className="btn-skill">
          <ion-icon name="create-outline"></ion-icon>
        </button>
      </div>
    );
  }
}
export default BtnSkills;
