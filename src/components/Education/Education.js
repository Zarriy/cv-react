import { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div class="education">
        <div class="comp-title">
          <h2>Education</h2>
        </div>
        <div class="Degrees skills">
          <div class="Degree">
            <div class="Deg-about">
              <h3>Msc Defence</h3>
              <p>University of Defence, Islamabad</p>
              <p>Got Degree of Defence with Excellent Number and experience.</p>
            </div>
            <div class="era">
              <p>Sep 2018 - Aug 2020</p>
            </div>
          </div>
          <div class="Degree">
            <div class="Deg-about">
              <h3>Msc Offence</h3>
              <p>University of Offence, Islamabad</p>
              <p>Got Degree of Offence with Excellent Number and experience.</p>
            </div>
            <div class="era">
              <p>Sep 2020 - Aug 2022</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
