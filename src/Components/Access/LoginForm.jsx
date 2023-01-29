import { useState } from "preact/hooks";
import "./LoginForm.css"

export default function LoginComponent(props) {
  const [isTypingForm, setIsTyping] = useState(false);
  const [inputValues, setInputValues] = useState({
    typedLogin: "",
    typedPassword: "",
  });

  function giveAdminAccess() {
    props.onAuthorisation("admin");
    resetInput();
  }

  function submitHandler(event) {
    event.preventDefault();
    if (
      event.target.login.value !== "admin" ||
      event.target.password.value !== "admin"
    ) {
      resetInput();
      alert("Wrong login or password");
    } else {
      giveAdminAccess();
    }
  }

  function resetInput() {
    setInputValues({ typedLogin: "", typedPassword: "" });
  }

  return (
    <div>
      {isTypingForm || (
        <button onClick={() => setIsTyping(true)}> Login as admin </button>
      )}
      {isTypingForm && (
        <form onSubmit={submitHandler} id="login-form-container">
          <label>Login</label>
            
          <input type="text" name="login"  placeholder="add your username" value={inputValues.typedLogin} />
          <input
            type="password"
            name="password"
            placeholder="add your password"
            value={inputValues.typedPassword}
          />
          <input type="submit" />
          <button type="reset" onClick={() => setIsTyping(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}
