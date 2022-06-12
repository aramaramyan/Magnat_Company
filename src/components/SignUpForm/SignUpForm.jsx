import {useState} from "react";
import {useNavigate} from "react-router-dom";
import useFirestore from "../../hooks/useFirestore";
import signUp from "../../services/signUp";
import setStorage from "../../helpers/setStorage";
import eye from "./../../icons/eye.svg";
import eyeSlash from "./../../icons/eyeSlash.svg";
import warningIcon from "./../../icons/warning.svg";
import useWindowSize from "../../hooks/useWindowSize";
import nameValidation from "../../helpers/nameValidation/nameValidation";

export default function SignUpForm({isSlide, handleSlide}) {
  const [fullName, setFullName] = useState({input: "", error: ""});
  const [email, setEmail] = useState({input: "", error: ""});
  const [password, setPassword] = useState({input: "", error: ""});
  const [isAge21, setIsAge21] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const {addUserData} = useFirestore();
  const [windowWidth] = useWindowSize();

  function toggleVisibility() {
    setVisible(!visible);
  }

  function toggleAge() {
    setIsAge21(!isAge21);
  }

  function handleFullName(evt) {
    setFullName(prev => {
      return {
        ...prev,
        input: evt.target.value
      }
    });
  }

  function handleEmail(evt) {
    setEmail(prev => {
      return {
        ...prev,
        input: evt.target.value
      }
    });
  }

  function handlePassword(evt) {
    setPassword(prev => {
      return {
        ...prev,
        input: evt.target.value
      }
    });
  }

  function userIDHandler(value) {
    setStorage("userID", value);
  }

  function formSubmit() {
    if (fullName.input && email.input && password.input && isAge21) {
      setFullName(prev => {
        return {
          ...prev,
          error: ""
        };
      });
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
        }
      });
      setAgeError(false);

      if (nameValidation(fullName.input)) {
        signUp(email.input, password.input, setFullName, setEmail, setPassword).then(res => {
          const dateArr = res.user.auth.currentUser.metadata.creationTime.split(" ");
          const signUpDate = [dateArr[1], dateArr[2], dateArr[3]].join(" ");

          addUserData(res.user.uid, fullName.input, email.input, signUpDate).catch(err => alert(err.message));
          userIDHandler(res.user.uid);
          navigate("/");
        });
      } else {
        setFullName(prev => {
          return {
            ...prev,
            error: "Full name must contain 3-20 LETTERS"
          };
        });
      }
    } else {
      !fullName.input && setFullName(prev => {
        return {
          ...prev,
          error: "Please fill input"
        };
      });
      !fullName.input && setEmail(prev => {
        return {
          ...prev,
          error: "Please fill input"
        };
      });
      !password.input && setPassword(prev => {
        return {
          ...prev,
          error: "Please fill input"
        }
      });
      (!isAge21 && fullName.input && fullName.input && password.input) && setAgeError(true);
    }
  }

  return windowWidth > 1024 ? (
    <div className="form sign-up">
      <h2>Time to feel like home</h2>
      <label>
        <span>Full Name</span>
        <input
          type="text"
          onChange={handleFullName}
          placeholder={fullName.error === "Please fill input" ? fullName.error : ""}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          onChange={handleEmail}
          placeholder={email.error === "Please fill input" ? email.error : ""}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type={visible ? "text" : "password"}
          onChange={handlePassword}
          placeholder={password.error === "Please fill input" ? password.error : ""}
        />
        <img src={visible ? eyeSlash : eye} alt="Eye Icon" className="eye_icon" onClick={toggleVisibility}/>
      </label>
      <label className="submit_age">
        <div className="signUp_checkbox">
          <input type="checkbox" className="signUp_checkbox_input" onClick={toggleAge}/>
          <span className="signUp_checkbox_span"/>
        </div>
        <p>I'm over 21</p>
      </label>
      <button type="button" className="submit" onClick={formSubmit}>Sign Up</button>
      {ageError && (
        <div className="error_wrapper">
          <img src={warningIcon} alt="Warning Icon"/>
          <p>Please submit age</p>
        </div>)}
      {fullName.error && fullName.error !== "Please fill input" && (
        <div className="error_wrapper">
          <img src={warningIcon} alt="Warning Icon"/>
          <p>{fullName.error}</p>
      </div>)}
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
    <div className={isSlide ? "signup slide-up" : "signup"}>
      <h2 className="form-title" id="signup" onClick={handleSlide}><span>or</span>Sign up</h2>
      <div className="form-holder">
        <input
          type="text"
          className="input"
          placeholder={fullName.error === "Please fill input" ? fullName.error : "Full name"}
          onChange={handleFullName}/>
        <input
          type="email"
          className="input"
          placeholder={email.error === "Please fill input" ? fullName.error : "Email"}
          onChange={handleEmail}/>
        <input
          type={visible ? "text" : "password"}
          className="input"
          placeholder={password.error === "Please fill input" ? fullName.error : "Password"}
          onChange={handlePassword}/>
        <img src={visible ? eyeSlash : eye} alt="Eye Icon" className="eye_icon" onClick={toggleVisibility}/>
      </div>
      <label className="submit_age">
        <div className="signUp_checkbox">
          <input type="checkbox" className="signUp_checkbox_input" onClick={toggleAge}/>
          <span className="signUp_checkbox_span"/>
        </div>
        <p>I'm over 21</p>
      </label>
      <button className="submit-btn" onClick={formSubmit}>Sign up</button>
      <div className="error_wrapper">
        {ageError && (
          <>
            <img src={warningIcon} alt="Warning Icon"/>
            <p>Please submit age</p>
          </>
        )}
        {fullName.error && fullName.error !== "Please fill input" && (
          <>
            <img src={warningIcon} alt="Warning Icon"/>
            <p>{fullName.error}</p>
          </>
        )}
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
  );
}