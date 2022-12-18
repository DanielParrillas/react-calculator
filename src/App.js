import "./App.css";
import logo from "./images/logo.png";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="container-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="container-calculator">
        <div className="row">
          <Button>1</Button>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
