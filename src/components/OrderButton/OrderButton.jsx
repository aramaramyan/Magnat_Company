import {useState} from "react";
import getStorage from "../../helpers/getStorage";
import getDate from "../../helpers/getDate";
import getID from "../../helpers/getID";
import useFirestore from "../../hooks/useFirestore";
import "./OrderButton.css";

export default function OrderButton({ currentCard, setBasket, setIsLoading, setSelectCardAnimation }) {
  const [isAnimate, setIsAnimate] = useState(false);
  const { addToHistory } = useFirestore();

  function buy() {
    if(currentCard.id) {
      if(!isAnimate) {
        setIsAnimate(true);
        setIsLoading(true);

        setTimeout(() => {
          setIsAnimate(false);
          localStorage.removeItem("basket");
          setBasket([]);
          setIsLoading(false);
        }, 8000);
      }

      const products = {
        products: JSON.parse(getStorage("basket")),
        id: getID(),
        date: getDate(),
        card: currentCard.numbers
      };

      addToHistory(products);
    }

    setSelectCardAnimation(true);
    const timeoutID = setTimeout(() => {
      setSelectCardAnimation(false);

      clearTimeout(timeoutID);
    }, 1500);
  }

  return (
    <div className={`OrderButton ${isAnimate? "animate" : ""}`} onClick={buy}>
      <span className="default">Complete Order</span><span className="success">Order Placed<svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1" />
        </svg></span>
      <div className="box" />
      <div className="truck">
        <div className="back" />
        <div className="front">
          <div className="window" />
        </div>
        <div className="light top" />
        <div className="light bottom" />
      </div>
      <div className="lines" />
    </div>
  );
}