import removeProductFromBasket from "../../helpers/removeProductFromBasket";
import incrementDecrement from "../../helpers/incrementDecrement";
import useWindowSize from "../../hooks/useWindowSize";
import plusIcon from "./../../icons/plus.svg";
import minusIcon from "./../../icons/minus.svg";
import trashIcon from "./../../icons/trash.svg";
import "./BasketItem.css";

export default function BasketItem({ item, setBasket}) {
  const [windowWidth] = useWindowSize();


  function increment() {
    setBasket(incrementDecrement(item.id, 1));
  }

  function decrement() {
    if(item.count === 1) {
      deleteProduct();
    }
    setBasket(incrementDecrement(item.id, -1));
  }

  function deleteProduct() {
    setBasket(removeProductFromBasket(item.id));
  }

  return (
    <div className="BasketItem">
      <div className="basket_item_img" style={{background: `url(${item.image}) 50% 50%/cover no-repeat`}}/>
      <div className="basket_title_wrapper">
        <p>{item.title}</p>
        {item.color? <p>{item.color}</p> : <p>{item.flavor}</p>}
      </div>
      {windowWidth > 700 && <p className="basket_item_price">{item.price}$</p>}
      <div className="count_wrapper">
        <img src={minusIcon} alt="Minus Icon" className="icon24" onClick={decrement}/>
        <p className="count">{item.count}</p>
        <img src={plusIcon} alt="Plus Icon" className="icon24" onClick={increment}/>
      </div>
      <p className="basket_item_total">{item.count * item.price}$</p>
      <div className="basket_item_delete">
        <img src={trashIcon} alt="Trash Icon" className="icon24" onClick={deleteProduct}/>
      </div>
    </div>
  );
}