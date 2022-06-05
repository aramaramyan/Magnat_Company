import {useState} from "react";
import {useNavigate} from "react-router";
import signIn from "../../services/signIn";
import setStorage from "../../helpers/setStorage";
import eyeSlash from "../../icons/eyeSlash.svg";
import eye from "../../icons/eye.svg";
import useWindowSize from "../../hooks/useWindowSize";
import warningIcon from "../../icons/warning.svg";

export default function SignInForm({isSlide, handleSlide}) {
  const [email, setEmail] = useState({input: "", error: ""});
  const [password, setPassword] = useState({input: "", error: ""});
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [windowWidth] = useWindowSize();

  function toggleVisibility() {
    setVisible(!visible);
  }

  function handleEmail(evt) {
    setEmail(prev => {
      return {
        ...prev,
        input: evt.target.value
      };
    });
  }

  function handlePassword(evt) {
    setPassword(prev => {
      return {
        ...prev,
        input: evt.target.value
      };
    });
  }

  function formSubmit() {
    if (email.input && password.input) {
      setEmail(prev => {
        return {
          ...prev,
          error: ""
        };
      });
      setPassword(prev => {
        return {
          ...prev,
          error: ""
        };
      });

      signIn(email.input, password.input, setEmail, setPassword, navigate);
    }
    !email.input && setEmail(prev => {
      return {
        ...prev,
        error: "Please fill input"
      };
    });
    !password.input && setPassword(prev => {
      return {
        ...prev,
        error: "Please fill input"
      };
    });
  }

  return windowWidth > 1024 ? (
    <div className="form sign-in">
      <h2>Welcome back,</h2>
      <label>
        <span>Email</span>
        <input
          type="email"
          placeholder={email.error === "Please fill input" ? email.error : ""}
          onChange={handleEmail}/>
      </label>
      <label>
        <span>Password</span>
        <input
          type={visible ? "text" : "password"}
          placeholder={password.error === "Please fill input" ? password.error : ""}
          onChange={handlePassword}/>
        <img src={visible ? eyeSlash : eye} alt="Eye Icon" className="eye_icon" onClick={toggleVisibility}/>
      </label>
      <p className="forgot-pass">Forgot password?</p>
      <button type="button" className="submit" onClick={formSubmit}>Log In</button>
      {email.error && email.error !== "Please fill input" && (
        <div className="error_wrapper">
          <img src={warningIcon} alt="Warning Icon"/>
          <p>{email.error}</p>
        </div>)}
      {password.error && password.error !== "Please fill input" && (
        <div className="error_wrapper">
          <img src={warningIcon} alt="Warning Icon"/>
          <p>{password.error}</p>
        </div>)}
    </div>
  ) : (
    <div className={isSlide ? "login" : "login slide-up"}>
      <div className="center">
        <h2 className="form-title" id="login" onClick={handleSlide}><span>or</span>Log in</h2>
        <div className="form-holder">
          <input
            type="email"
            className="input"
            placeholder={email.error === "Please fill input" ? email.error : "Email"}
            onChange={handleEmail}/>
          <input
            type={visible ? "text" : "password"}
            className="input"
            placeholder={password.error === "Please fill input" ? password.error : "Password"}
            onChange={handlePassword}/>
          <img src={visible ? eyeSlash : eye} alt="Eye Icon" className="eye_icon" onClick={toggleVisibility}/>
        </div>
        <p className="forgot-pass">Forgot password?</p>
        <button className="submit-btn" onClick={formSubmit}>Log In</button>
        <div className="error_wrapper">
          {email.error && email.error !== "Please fill input" && (
            <>
              <img src={warningIcon} alt="Warning Icon"/>
              <p>{email.error}</p>
            </>
          )}
          {password.error && password.error !== "Please fill input" && (
            <>
              <img src={warningIcon} alt="Warning Icon"/>
              <p>{password.error}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}