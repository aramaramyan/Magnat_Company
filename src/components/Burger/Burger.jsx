import {useDispatch, useSelector} from "react-redux";
import {handleBurger} from "../../appState/appSlice";
import BurgerItems from "../BurgerItems/BurgerItems";
import "./Burger.css";

export default function Burger() {
  const isBurgerOpen = useSelector(state => state.app.isBurgerOpen);
  const dispatch = useDispatch();

  function handleCheck() {
    dispatch(handleBurger());
  }

  return (
    <>
      <div className="Burger" onClick={handleCheck}>
        <div className="hamburger-lines">
          <span className={`line line1 ${isBurgerOpen ? "checked" : ""}`}/>
          <span className={`line line2 ${isBurgerOpen ? "checked" : ""}`} />
          <span className={`line line3 ${isBurgerOpen ? "checked" : ""}`} />
        </div>
      </div>
      {isBurgerOpen && <BurgerItems /> }
    </>
  );
}