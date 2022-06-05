import priceIcon from "./../../../icons/price.svg";
import colorIcon from "./../../../icons/color.svg";
import starIcon from "./../../../icons/star.svg";
import "./HoookahItem.css";
import {useNavigate} from "react-router";

export default function HookahItem({hookah}) {
  const navigate = useNavigate();

  function toSingleHookah() {
    navigate(`/hookah/products/hookah/${hookah.id}`);
  }

  return (
    <div className="HookahItem" style={{backgroundImage: `url(${hookah.images[0]})`}} onClick={toSingleHookah}>
      <div className="border">
        <h2>{hookah.title}</h2>
        <div className="icons">
          <i className="fa"><img src={priceIcon} alt="Price Icon" className="icon"/>{`${hookah.price}$`}</i>
          <i className="fa"><img src={colorIcon} alt="Color Icon" className="icon"/>{hookah.color}</i>
          <i className="fa"><img src={starIcon} alt="Star Icon" className="icon"/>{hookah.stars}</i>
          <i className="fa">Click to buy</i>
        </div>
      </div>
    </div>
  );
}