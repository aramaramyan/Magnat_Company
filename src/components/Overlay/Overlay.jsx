import SignUpForm from "../SignUpForm/SignUpForm";

export default function Overlay({ handleActive, children }) {
  return (
    <div className="sub-container">
      <div className="img">
        <div className="img_text m-up">
          <h2>New here ?</h2>
          <p>Sign up and discover great amount of new opportunities!</p>
        </div>
        <div className="img_text m-in">
          <h2>One of us?</h2>
          <p>If you already has an account, just sign in. We've missed you!</p>
        </div>
        <div className="img_btn" onClick={handleActive}>
          <span className="m-up">Sign Up</span>
          <span className="m-in">Log In</span>
        </div>
      </div>
      {children}
    </div>
  );
}