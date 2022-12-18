import "./App.css";
import logo from "./images/logo.png";
import Button from "./components/Button.jsx";
import Screen from "./components/Screen.jsx";
import ButtonClear from "./components/ButtonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const showResult = () => {
    setInput(evaluate(input));
  };

  return (
    <div className="App">
      <div className="container-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="container-calculator">
        <Screen input={input} />
        <div className="row">
          <Button buttonFuction={addInput}>1</Button>
          <Button buttonFuction={addInput}>2</Button>
          <Button buttonFuction={addInput}>3</Button>
          <Button buttonFuction={addInput}>+</Button>
        </div>
        <div className="row">
          <Button buttonFuction={addInput}>4</Button>
          <Button buttonFuction={addInput}>5</Button>
          <Button buttonFuction={addInput}>6</Button>
          <Button buttonFuction={addInput}>-</Button>
        </div>
        <div className="row">
          <Button buttonFuction={addInput}>7</Button>
          <Button buttonFuction={addInput}>8</Button>
          <Button buttonFuction={addInput}>9</Button>
          <Button buttonFuction={addInput}>*</Button>
        </div>
        <div className="row">
          <Button buttonFuction={showResult}>=</Button>
          <Button buttonFuction={addInput}>0</Button>
          <Button buttonFuction={addInput}>.</Button>
          <Button buttonFuction={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear buttonFuction={() => setInput("")}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
