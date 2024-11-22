import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  return (
    <div className="login-form-wrapper">
      <form className="form-wrapper" action="">
        <h3>Login form</h3>
        <div className="input-container">
          <Input
            inputName="email"
            inputType="email"
            id="user_email"
            inputPlaceholder="Enter your email"
            inputLabel="Email"
          />
          <Input
            inputName="Password"
            inputType="password"
            id="user_password"
            inputPlaceholder="Enter your password"
            inputLabel="Password"
          />
        </div>
        <Button className="button-style" />
      </form>
    </div>
  );
}

export default LoginForm;
