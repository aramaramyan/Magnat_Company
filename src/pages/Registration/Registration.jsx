import {useState} from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Overlay from "../../components/Overlay/Overlay";
import useWindowSize from "../../hooks/useWindowSize";
import RegistrationMobile from "../RegistrationMobile/RegistrationMobile";
import "./Registration.css";

export default function Registration() {
  const [active, setActive] = useState(false);
  const [windowWidth] = useWindowSize();

  function handleActive() {
    setActive(!active);
  }

  return windowWidth > 1024? (
      <div className="Registration">
        <div className={active ? "container s-signup" : "container"}>
          <SignInForm/>
          <Overlay handleActive={handleActive}>
            <SignUpForm/>
          </Overlay>
          <div className="registration_footer">
            <p>COPYRIGHT &copy; 2022 MAGNAT</p>
          </div>
        </div>
        <div className="footer">
          <p>COPYRIGHT &copy; 2022 BY MAGNAT COMPANY</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
      </div>
    ) : <RegistrationMobile />
}