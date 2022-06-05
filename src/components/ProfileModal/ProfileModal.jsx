import { useRef } from "react";
import { NavLink } from "react-router-dom";
import userIcon from "./../../icons/user.svg";
import infoIcon from "./../../icons/info.svg";
import logOutIcon from  "./../../icons/logOut.svg";
import "./ProfileModal.css";
import useClickOutside from "../../hooks/useClickOutside";

export default function ProfileModal({ closeProfileModal, elemRef }) {
  const ref = useRef();
  useClickOutside(ref, closeProfileModal, elemRef);

  function logOut() {
    closeProfileModal()
    localStorage.clear();
  }

  return (
    <div ref={ref} className="ProfileModal">
      <NavLink to="/hookah/profile" className="profileModal_item">
        <img src={userIcon} alt="Bag Icon" className="icon24"/>
        <p>PROFILE</p>
      </NavLink>
      <NavLink to="/hookah/policy" className="profileModal_item">
        <img src={infoIcon} alt="Bag Icon" className="icon24"/>
        <p>TERMS & POLICY</p>
      </NavLink>
      <NavLink to="/login" className="profileModal_item">
        <img src={logOutIcon} alt="Bag Icon" className="icon24"/>
        <p onClick={logOut}>LOG OUT</p>
      </NavLink>
    </div>
  );
}