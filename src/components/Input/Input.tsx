import "./styles.css";
import { InputProps } from "./types";


function Input({ inputName, inputType, inputPlaceholder, inputLabel, id }: InputProps) {
  return (
    <div className="input-wrapper">
      {inputLabel && <label htmlFor={id}>{inputLabel}</label>}
      <input
        name={inputName}
        type={inputType}
        placeholder={inputPlaceholder}
        className="input-style"
      />
    </div>
  );
}

export default Input;
