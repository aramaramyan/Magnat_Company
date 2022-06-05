import {createPortal} from "react-dom";
import {useDispatch} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import {handleBurger} from "../../appState/appSlice";
import "./BurgerItems.css";

export default function BurgerItems() {
  const navigation = useNavigate();
  const {param} = useParams();
  const dispatch = useDispatch();

  function logOut() {
    dispatch(handleBurger());
    navigation("/login");
    localStorage.clear();
  }

  function burgerHandler() {
    dispatch(handleBurger());
  }

  return createPortal(
    <div className="BurgerItems">
      <div className="items_wrapper">
        {param === "hookah" && <NavLink to="/hookah" className="burger_item" onClick={burgerHandler}><p>HOME</p></NavLink>}
        {param === "hookah" && <NavLink to="/hookah/products" className="burger_item" onClick={burgerHandler}><p>PRODUCTS</p></NavLink>}
        <NavLink to="/hookah/basket" className="burger_item" onClick={burgerHandler}><p>BASKET</p></NavLink>
        <NavLink to="/hookah/profile" className="burger_item" onClick={burgerHandler}><p>PROFILE</p></NavLink>
        <NavLink to="/hookah/policy" className="burger_item" onClick={burgerHandler}><p>POLICY</p></NavLink>
        <NavLink to="/login" className="burger_item" onClick={logOut}><p>LOG OUT</p></NavLink>
      </div>
    </div>
    , document.body);
}