import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import useFirestore from "../../../hooks/useFirestore";
import getBasketCount from "../../../helpers/getBasketCount";
import Navbar from "../../../components/Navbar/Navbar";
import ProfileAside from "../../../components/ProfileAside/ProfileAside";
import ProfileContent from "../../../components/ProfileContent/ProfileContent";
import HookahFooter from "../../../components/Hookah/HookahFooter/HookahFooter";
import ProfileLoader from "../../../components/ProfileLoader/ProfileLoader";
import "./HookahProfile.css";

export default function HookahProfile() {
  const isCardModalOpen = useSelector(state => state.app.isCardModalOpen);
  const isBurgerOpen = useSelector(state => state.app.isBurgerOpen);
  const basketCount = getBasketCount();
  const [user, setUser] = useState({});
  const { subscribeToUser } = useFirestore();

  useEffect(() => {
    const unsub = subscribeToUser(setUser);

    return () => {
      unsub();
    };
  }, []);

  return (
    <div className={`HookahProfile ${isCardModalOpen? "card_modal_open" : "" || isBurgerOpen? "burger_open" : ""}`}>
      <Navbar count={basketCount}/>
      <div className="profile_wrapper">
        <div className="content">
          {user.fullName ? (
            <>
              <ProfileAside user={user}/>
              <ProfileContent user={user}/>
            </>
          ) : (
            <ProfileLoader />
          )}
        </div>
        <HookahFooter />
      </div>
    </div>
  );
}