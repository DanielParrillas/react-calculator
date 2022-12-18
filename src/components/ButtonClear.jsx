import "../styles/ButtonClear.scss";

const ButtonClear = (props) => (
  <button className="button-clear" onClick={() => props.buttonFuction()}>
    {props.children}
  </button>
);

export default ButtonClear;
