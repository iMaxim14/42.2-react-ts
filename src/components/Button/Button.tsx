import "./styles.css";
import { ButtonProps } from "./types";

function Button({ buttonName, buttonType, onClick, buttonClass  }: ButtonProps) {
  // console.log(props.buttonName);
  return (
    <button onClick={onClick} className="main-button" type={buttonType}>
      {buttonName}
    </button>
  );
}

export default Button;
