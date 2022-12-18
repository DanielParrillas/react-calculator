import "../styles/ButtonClear.scss";

const ButtonClear = (props) => (
  <div className="button-clear" onClick={() => props.buttonFuction()}>
    {props.children}
  </div>
);

export default ButtonClear;
