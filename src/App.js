import "./App.css";
import Container1 from "./components/headerComponent/header";
import Container2 from "./components/address/address";
import Skills from "./components/Skills/Skills";
import Objective from "./components/objectives/objective";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="App">
      <Container1 />
      <Container2 />
      <Skills />
      <Objective />
      <Education />
    </div>
  );
}

export default App;
