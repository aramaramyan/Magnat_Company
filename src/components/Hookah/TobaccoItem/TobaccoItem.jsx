import "./TobaccoItem.css";
import priceIcon from "./../../../icons/price.svg";
import flavorIcon from "./../../../icons/leaf.png";
import starIcon from "./../../../icons/star.svg";
import {useNavigate} from "react-router";

export default function TobaccoItem({tobacco}) {
  const navigate = useNavigate();

  function toSingleTobacco() {
    navigate(`/hookah/products/tobacco/${tobacco.id}`);
  }

  return (
    <div className="TobaccoItem" style={{backgroundImage: `url(${tobacco.image})`}} onClick={toSingleTobacco}>
      <div className="border">
        <h2>{tobacco.title}</h2>
        <div className="icons">
          <i className="fa"><img src={priceIcon} alt="Price Icon" className="icon"/>{`${tobacco.price}$`}</i>
          <i className="fa"><img src={flavorIcon} alt="Color Icon" className="icon"/>{tobacco.flavor}</i>
          <i className="fa"><img src={starIcon} alt="Star Icon" className="icon"/>{tobacco.stars}</i>
          <i className="fa">Click for buy</i>
        </div>
      </div>
    </div>
  );
}