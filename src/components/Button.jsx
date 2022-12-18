import "../styles/Button.scss";

function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  let classes = "";

  if (isOperator(props.children)) {
    classes = "container-button operator";
  } else {
    classes = "container-button";
  }

  return (
    <button
      className={classes}
      onClick={() => props.buttonFuction(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Button;
