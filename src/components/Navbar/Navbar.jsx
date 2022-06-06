import {useEffect, useRef, useState} from "react";
import {NavLink} from "react-router-dom";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, handleProfileModal} from "../../appState/appSlice";
import useWindowSize from "../../hooks/useWindowSize";
import useFirestore from "../../hooks/useFirestore";
import getUserNameFirstLetter from "../../helpers/getUserNameFirstLetter/getUserNameFirstLetter";
import Burger from "../Burger/Burger";
import ProfileModal from "../ProfileModal/ProfileModal";
import M_Logo from "./../../icons/M.png";
import M_LogoBlack from "./../../icons/M_black.png";
import homeIcon from "./../../icons/home.png";
import bagIcon from "./../../icons/bag.png";
import bagBlackIcon from "./../../icons/bag_black.png";
import hookahIcon from "./../../icons/hookah.svg";
import "./Navbar.css";

export default function Navbar({count}) {
  const isProfileModalOpen = useSelector(state => state.app.isProfileModalOpen);
  const [user, setUser] = useState({});
  const {param} = useParams();
  const [windowWidth] = useWindowSize();
  const dispatch = useDispatch();
  const elemRef = useRef();
  const {subscribeToUser} = useFirestore();

  useEffect(() => {
    const unsub = subscribeToUser(setUser);

    return () => {
      unsub();
    }
  }, []);

  function toggleProfileModal() {
    dispatch(handleProfileModal());
  }

  function closeProfileModal() {
    dispatch(closeModal());
  }

  return (
    <div className="Navbar">
      <NavLink to="/">
        <img src={param === "hookah"? M_Logo : windowWidth > 700 ? M_LogoBlack : M_Logo} alt="Home Icon" className="navbar_icon"/>
      </NavLink>
      {
        windowWidth > 700 ? (
          <>
            <div className="nav_items">
              {param === "hookah" &&
                <NavLink to="/hookah"><img src={homeIcon} alt="Home Icon" className="navbar_icon"/></NavLink>}
              {param === "hookah" && <NavLink to="/hookah/products">
                <img src={hookahIcon} alt="Hookah Icon" className="navbar_icon"/>
              </NavLink>}
              <NavLink to="/hookah/basket">
                <div className="basketIcon_wrapper">
                  <img src={param === "design"? bagBlackIcon : bagIcon} alt="Bag Icon" className="navbar_icon"/>
                  {count ? <div className="basketIcon_count"><p>{count}</p></div> : null}
                </div>
              </NavLink>
              <div ref={elemRef} className={`profile_circle ${param === "design"? "black_circle" : ""}`} onClick={toggleProfileModal}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {user.image ? <img src={user.image} alt="User Image"/>
                  : <p style={{color: `${param === "design"? "#000000" : "var(--white)"}`}}>{getUserNameFirstLetter(user.fullName)}</p>}
              </div>
            </div>
            {isProfileModalOpen && <ProfileModal closeProfileModal={closeProfileModal} elemRef={elemRef}/>}
          </>
        ) : <Burger/>
      }
    </div>
  );
}