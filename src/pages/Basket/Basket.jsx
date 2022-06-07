import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import ScrollStart from "../../components/ScrollStart/ScrollStart";
import Navbar from "../../components/Navbar/Navbar";
import useFirestore from "../../hooks/useFirestore";
import useWindowSize from "../../hooks/useWindowSize";
import HookahFooter from "../../components/Hookah/HookahFooter/HookahFooter";
import OrderButton from "../../components/OrderButton/OrderButton";
import BasketItem from "../../components/BasketItem/BasketItem";
import getStorage from "../../helpers/getStorage";
import getBasketCount from "../../helpers/getBasketCount";
import getTotalPrice from "../../helpers/getTotalPrice";
import arrowIcon from "./../../icons/arrow.svg";
import basketPNG from "./../../icons/bag.png";
import emptyBasket from "./../../icons/emptyBag.png";
import visaIcon from "./../../icons/visa.svg";
import "./Basket.css";

export default function Basket() {
  const isBurgerOpen = useSelector(state => state.app.isBurgerOpen);
  const [user, setUser] = useState({});
  const [selectCardAnimation, setSelectCardAnimation] = useState(false);
  const [basket, setBasket] = useState(JSON.parse(getStorage("basket")) || []);
  const [isLoading, setIsLoading] = useState(false);
  const basketCount = getBasketCount();
  const navigate = useNavigate();
  const [windowWidth] = useWindowSize();
  const {subscribeToUser} = useFirestore();

  useEffect(() => {
    const unsub = subscribeToUser(setUser);

    return () => {
      unsub();
    }
  }, []);

  function toProducts() {
    navigate("/hookah/products");
  }

  function toProfile() {
    navigate("/hookah/profile");
  }

  return (
    <div className={`Basket ${isBurgerOpen ? "burger_open" : ""}`}>
      <ScrollStart />
      <Navbar count={basketCount}/>
      <div className="container">
        <div className="basket_title">
          <img src={basketPNG} alt="Basket Icon" className="icon32"/>
          <h2>Basket</h2>
        </div>

        {basket.length ? (
          isLoading ? (
            <div className="basket_loading">
              <p>Loading...</p>
            </div>
          ) : (
            <>
              {windowWidth > 700 && (
                <div className="basket_content_head">
                  <p className="basket_content_head_item">Product</p>
                  <p className="basket_content_head_item">Price</p>
                  <p className="basket_content_head_item">Quantity</p>
                  <p className="basket_content_head_item">Total</p>
                  <p className="basket_content_head_item">Delete</p>
                </div>
              )}
              <div className="basket_content">
                {user.fullName ? (
                  <div className="basket_items">
                    {basket.map(item => <BasketItem key={item.id} item={item} setBasket={setBasket}/>)}
                  </div>
                ) : <div className="BasketLoader"/>}

              </div>
            </>
          )) : (
          <div className="empty_basket">
            <img src={emptyBasket} alt="Empty Basket"/>
            <p>There are no products in your basket</p>
          </div>
        )}
        <div className="basket_footer">
          <div className="current_card">
            <div className="back_to_shopping" onClick={toProducts}>
              <img src={arrowIcon} alt="Arrow Icon"/>
              <h3>BACK TO SHOPPING</h3>
            </div>
            {user?.currentCard?.id ? (
              <div className="current_card_item">
                <img src={visaIcon} alt="VisaLogo" className="icon32"/>
                <div className="current_card_item_title">
                  <p style={{color: "white"}}>{`**** **** **** ${user.currentCard.numbers}`}</p>
                  <p>{user.currentCard.name}</p>
                </div>
              </div>
            ) : (
              <div className={`select_current_card ${selectCardAnimation ? "heartbeat" : ""}`} onClick={toProfile}>
                <p>Please select credit card</p>
              </div>
            )}
          </div>
          {!!basket.length && (
            <div className="basket_order">
              <div className="subtotal">
                <p>Subtotal:</p>
                <p>{getTotalPrice()}$</p>
              </div>
              <OrderButton
                currentCard={user.currentCard}
                setBasket={setBasket}
                setIsLoading={setIsLoading}
                setSelectCardAnimation={setSelectCardAnimation}
              />
            </div>
          )}
        </div>
      </div>
      <HookahFooter/>
    </div>
  );
}