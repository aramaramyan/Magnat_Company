import {useState} from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./RegistrationMobile.css";

export default function RegistrationMobile() {
  const [isSlide, setIsSlide] = useState(false);

  function handleSlide() {
    setIsSlide(!isSlide);
  }

  return (
    <div className="RegistrationMobile">
      <div className="form-wrapper">
        <SignUpForm isSlide={isSlide} handleSlide={handleSlide}/>
        <SignInForm isSlide={isSlide} handleSlide={handleSlide}/>
      </div>
      <div className="footer">
        <p>COPYRIGHT &copy; 2022 BY MAGNAT COMPANY</p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}