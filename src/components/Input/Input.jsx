import "./styles.css";

function Input({ inputName, inputType, inputPlaceholder, inputLabel, id }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{inputLabel}</label>
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
