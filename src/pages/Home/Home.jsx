import {useSelector} from "react-redux";
import {useParams} from "react-router";
import DesignHome from "../Design/DesignHome/DesignHome";
import getBasketCount from "../../helpers/getBasketCount";
import Navbar from "../../components/Navbar/Navbar";
import HookahHome from "../Hookah/HookahHome/HookahHome";

export default function Home() {
  const isBurgerOpen = useSelector(state => state.app.isBurgerOpen);
  const basketCount = getBasketCount();
  const {param} = useParams();

  return (
    <div className={`Home ${isBurgerOpen? "burger_open" : ""}`}>
      <Navbar count={basketCount}/>
      {param === "hookah"? <HookahHome /> : <DesignHome />}
    </div>
  );
}