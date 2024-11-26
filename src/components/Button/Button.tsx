import "./styles.css";
import { ButtonProps } from "./types";

function Button({ buttonName, buttonType, onClick, buttonClass="main-button"  }: ButtonProps) {
  // console.log(props.buttonName);
  return (
    <button onClick={onClick} className={buttonClass} type={buttonType}>
      {buttonName}
    </button>
  );
}

export default Button;
