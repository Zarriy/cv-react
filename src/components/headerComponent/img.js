import React from "react";

class ImageUp extends React.Component {
  constructor(props) {
    super();
  }
  //     this.state = {
  //       imageLink: imageI,
  //     };
  //     this.setImage = this.setImage.bind(this);
  //   }
  //   setImage(img) {
  //     this.setState({
  //       imageLink: img,
  //     });
  //   }

  render(props) {
    return (
      <div className="img">
        <img src={this.props.imgSrc} alt="CV profile person Imag" />
      </div>
    );
  }
}

export default ImageUp;
